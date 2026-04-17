// =============================================================================
// Windsor Estates Careers Portal — Server
// Express + SQLite for lightweight, self-contained deployment
// =============================================================================

const express = require('express');
const Database = require('better-sqlite3');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// ---------------------------------------------------------------------------
// Middleware
// ---------------------------------------------------------------------------
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// ---------------------------------------------------------------------------
// Database Setup
// ---------------------------------------------------------------------------
const db = new Database(path.join(__dirname, 'careers.db'));
db.pragma('journal_mode = WAL');      // Better concurrent-read performance
db.pragma('foreign_keys = ON');

// Create tables
db.exec(`
  CREATE TABLE IF NOT EXISTS applications (
    id            INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name    TEXT NOT NULL,
    last_name     TEXT NOT NULL,
    email         TEXT NOT NULL,
    phone         TEXT NOT NULL,
    position      TEXT NOT NULL,
    education     TEXT DEFAULT '',
    institution   TEXT DEFAULT '',
    field_of_study TEXT DEFAULT '',
    experience    TEXT DEFAULT '',
    skills        TEXT DEFAULT '',
    cover_note    TEXT DEFAULT '',
    resume_link   TEXT DEFAULT '',
    status        TEXT DEFAULT 'new',
    source        TEXT DEFAULT 'website',
    created_at    DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at    DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS interest_log (
    id            INTEGER PRIMARY KEY AUTOINCREMENT,
    name          TEXT NOT NULL,
    email         TEXT NOT NULL,
    phone         TEXT DEFAULT '',
    position      TEXT DEFAULT 'General Interest',
    message       TEXT DEFAULT '',
    source        TEXT DEFAULT 'website',
    created_at    DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

// ---------------------------------------------------------------------------
// API Routes
// ---------------------------------------------------------------------------

// Submit a full application
app.post('/api/applications', (req, res) => {
  try {
    const { first_name, last_name, email, phone, position,
            education, institution, field_of_study,
            experience, skills, cover_note, resume_link, source } = req.body;

    // Basic validation
    if (!first_name || !last_name || !email || !phone || !position) {
      return res.status(400).json({
        success: false,
        error: 'Required fields: first_name, last_name, email, phone, position'
      });
    }

    const stmt = db.prepare(`
      INSERT INTO applications
        (first_name, last_name, email, phone, position, education, institution,
         field_of_study, experience, skills, cover_note, resume_link, source)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const result = stmt.run(
      first_name, last_name, email, phone, position,
      education || '', institution || '', field_of_study || '',
      experience || '', skills || '', cover_note || '',
      resume_link || '', source || 'website'
    );

    // Forward to Google Sheets (non-blocking — don't let sheet failure block the response)
    const GOOGLE_SHEET_URL = process.env.GOOGLE_SHEET_URL || '';
    if (GOOGLE_SHEET_URL) {
      fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          first_name, last_name, email, phone, position,
          education: education || '', institution: institution || '',
          field_of_study: field_of_study || '',
          experience: experience || '', skills: skills || '',
          cover_note: cover_note || '', resume_link: resume_link || '',
          source: source || 'website'
        })
      }).catch(err => console.error('Google Sheets sync error (non-fatal):', err.message));
    }

    res.json({
      success: true,
      id: result.lastInsertRowid,
      message: 'Application submitted successfully. We will be in touch shortly.'
    });
  } catch (err) {
    console.error('Application submission error:', err);
    res.status(500).json({ success: false, error: 'Server error. Please try again.' });
  }
});

// Register interest (lighter form — name, email, position)
app.post('/api/interest', (req, res) => {
  try {
    const { name, email, phone, position, message, source } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        success: false,
        error: 'Required fields: name, email'
      });
    }

    const stmt = db.prepare(`
      INSERT INTO interest_log (name, email, phone, position, message, source)
      VALUES (?, ?, ?, ?, ?, ?)
    `);

    stmt.run(name, email, phone || '', position || 'General Interest',
             message || '', source || 'website');

    res.json({ success: true, message: 'Interest registered. Thank you!' });
  } catch (err) {
    console.error('Interest registration error:', err);
    res.status(500).json({ success: false, error: 'Server error. Please try again.' });
  }
});

// ---------------------------------------------------------------------------
// Admin Routes (basic — password-protect in production)
// ---------------------------------------------------------------------------

// List all applications
app.get('/api/admin/applications', (req, res) => {
  const apiKey = req.headers['x-admin-key'];
  if (apiKey !== (process.env.ADMIN_KEY || 'windsor2026')) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const rows = db.prepare(`
    SELECT * FROM applications ORDER BY created_at DESC
  `).all();

  res.json({ total: rows.length, applications: rows });
});

// List all interest registrations
app.get('/api/admin/interest', (req, res) => {
  const apiKey = req.headers['x-admin-key'];
  if (apiKey !== (process.env.ADMIN_KEY || 'windsor2026')) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const rows = db.prepare(`
    SELECT * FROM interest_log ORDER BY created_at DESC
  `).all();

  res.json({ total: rows.length, interests: rows });
});

// Update application status
app.patch('/api/admin/applications/:id', (req, res) => {
  const apiKey = req.headers['x-admin-key'];
  if (apiKey !== (process.env.ADMIN_KEY || 'windsor2026')) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const { status } = req.body;
  const validStatuses = ['new', 'reviewed', 'interview', 'offered', 'hired', 'rejected'];
  if (!validStatuses.includes(status)) {
    return res.status(400).json({ error: `Status must be one of: ${validStatuses.join(', ')}` });
  }

  db.prepare(`UPDATE applications SET status = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?`)
    .run(status, req.params.id);

  res.json({ success: true });
});

// Export applications as CSV
app.get('/api/admin/export', (req, res) => {
  const apiKey = req.headers['x-admin-key'];
  if (apiKey !== (process.env.ADMIN_KEY || 'windsor2026')) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const rows = db.prepare(`SELECT * FROM applications ORDER BY created_at DESC`).all();
  const headers = Object.keys(rows[0] || {});
  const csv = [
    headers.join(','),
    ...rows.map(r => headers.map(h => `"${String(r[h] || '').replace(/"/g, '""')}"`).join(','))
  ].join('\n');

  res.setHeader('Content-Type', 'text/csv');
  res.setHeader('Content-Disposition', 'attachment; filename=windsor_applications.csv');
  res.send(csv);
});

// Dashboard stats
app.get('/api/admin/stats', (req, res) => {
  const apiKey = req.headers['x-admin-key'];
  if (apiKey !== (process.env.ADMIN_KEY || 'windsor2026')) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const totalApps = db.prepare('SELECT COUNT(*) as count FROM applications').get().count;
  const totalInterest = db.prepare('SELECT COUNT(*) as count FROM interest_log').get().count;
  const byPosition = db.prepare(`
    SELECT position, COUNT(*) as count FROM applications GROUP BY position ORDER BY count DESC
  `).all();
  const byStatus = db.prepare(`
    SELECT status, COUNT(*) as count FROM applications GROUP BY status ORDER BY count DESC
  `).all();
  const todayApps = db.prepare(`
    SELECT COUNT(*) as count FROM applications WHERE date(created_at) = date('now')
  `).get().count;

  res.json({ totalApps, totalInterest, todayApps, byPosition, byStatus });
});

// ---------------------------------------------------------------------------
// Catch-all — serve the SPA
// ---------------------------------------------------------------------------
app.get('/{*splat}', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ---------------------------------------------------------------------------
// Start
// ---------------------------------------------------------------------------
app.listen(PORT, () => {
  console.log(`\n  ╔══════════════════════════════════════════╗`);
  console.log(`  ║  Windsor Estates Careers Portal          ║`);
  console.log(`  ║  Running on http://localhost:${PORT}        ║`);
  console.log(`  ╚══════════════════════════════════════════╝\n`);
});
