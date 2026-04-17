# Windsor Estates — Careers Portal

A branded careers portal for Windsor Estates Inc. with application tracking.

## Quick Start (Local)

```bash
npm install
node server.js
# → http://localhost:3000
```

## Deploy to Render (Free Tier — Recommended)

1. Push this repo to GitHub
2. Go to [render.com](https://render.com) → New → Web Service
3. Connect your GitHub repo
4. Render auto-detects `render.yaml` — click **Deploy**
5. Your site will be live at `https://windsor-careers.onrender.com`

### Custom Domain (Optional)
- In Render dashboard → Settings → Custom Domains
- Add `careers.windsorestatesgy.com`
- Update your DNS CNAME to point to Render

## Deploy to Railway (Alternative)

```bash
npm install -g @railway/cli
railway login
railway init
railway up
```

## Admin API

All admin endpoints require the `x-admin-key` header.
Default key: `windsor2026` (change via `ADMIN_KEY` env variable in production).

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/admin/stats` | GET | Dashboard stats |
| `/api/admin/applications` | GET | All applications |
| `/api/admin/interest` | GET | All interest registrations |
| `/api/admin/applications/:id` | PATCH | Update status (new/reviewed/interview/offered/hired/rejected) |
| `/api/admin/export` | GET | Download CSV of all applications |

### Example: View all applications
```bash
curl -H "x-admin-key: windsor2026" http://localhost:3000/api/admin/applications
```

### Example: Update application status
```bash
curl -X PATCH -H "x-admin-key: windsor2026" -H "Content-Type: application/json" \
  -d '{"status":"interview"}' http://localhost:3000/api/admin/applications/1
```

### Example: Export CSV
```bash
curl -H "x-admin-key: windsor2026" http://localhost:3000/api/admin/export > applications.csv
```

## Tech Stack

- **Frontend**: Vanilla HTML/CSS/JS (Windsor brand system: Darker Grotesque + Montserrat)
- **Backend**: Node.js / Express
- **Database**: SQLite (via better-sqlite3) — zero external dependencies
- **Deployment**: Render, Railway, or any Node.js host

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | `3000` | Server port |
| `ADMIN_KEY` | `windsor2026` | Admin API authentication key |
