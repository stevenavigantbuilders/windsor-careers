// =============================================================================
// Windsor Estates — All Job Positions (from JD Package)
// =============================================================================
const ROLES = [
  // ── Customer Service / Post-Sale Warranty ──
  {
    id: "customer-service-representative",
    title: "Customer Service Representative",
    tagline: "Frontline homeowner advocate — the face of Windsor Estates after the sale.",
    department: "Customer Service / Post-Sale Warranty",
    reportsTo: "Customer Service Manager",
    type: "Full-Time, Permanent",
    location: "Windsor Estates, Georgetown, Guyana",
    priority: "high",
    brief: "First point of contact for homeowners from contract signing through warranty. You'll manage inquiries, coordinate service requests with trades, and ensure every interaction reflects the Windsor brand standard.",
    summary: "The Customer Service Representative is the first point of contact for Windsor Estates homeowners from contract signing through the end of the statutory warranty period. This role manages homeowner inquiries, logs warranty and service requests, coordinates with internal trades and subcontractors for resolution, and ensures every homeowner interaction reflects the Windsor Estates brand standard. The CSR is critical to protecting the community's reputation as one of Guyana's most prestigious places to live.",
    responsibilities: [
      {label:"Homeowner Intake", text:"Receive and log all incoming calls, WhatsApp messages, emails, and walk-in inquiries from homeowners, prospects, and visitors using the company CRM or service ticketing system."},
      {label:"Warranty Coordination", text:"Open, track, and close warranty service tickets for defects raised during the 30-day, 6-month, and 12-month walk-through milestones, and route them to the correct trade (plumbing, electrical, masonry, HVAC, etc.)."},
      {label:"Scheduling", text:"Coordinate service appointments between homeowners, in-house maintenance staff, and subcontractors, confirming timing at least 24 hours in advance."},
      {label:"Homeowner Orientation", text:"Assist with new homeowner orientation sessions at closing, including walk-through binders, appliance manuals, utility connection forms, and HOA introduction."},
      {label:"Escalation", text:"Identify complaints that require escalation to the Customer Service Manager, Project Manager, or Legal, and document the escalation trail."},
      {label:"HOA Liaison", text:"Support Windsor Estates HOA and Windsor Laguna HOA administration by triaging homeowner concerns related to common areas, security, and estate rules."},
      {label:"Reporting", text:"Maintain daily and weekly logs of ticket volume, resolution times, repeat issues, and homeowner satisfaction scores; submit to the Customer Service Manager every Friday."},
      {label:"Brand Standard", text:"Ensure every written and verbal interaction uses Windsor Estates tone, templates, and signature block, representing the company professionally at all times."}
    ],
    requiredQualifications: [
      "Diploma or Associate Degree in Business, Communications, Hospitality, or a related field.",
      "Minimum 2 years of customer service, call-centre, or hospitality experience — banking, telecoms, airline, or hotel backgrounds preferred.",
      "Excellent written and spoken English; clear phone and email etiquette.",
      "Proficient in Microsoft Office (Word, Excel, Outlook) and comfortable learning a CRM/ticketing system.",
      "Strong organizational skills with the ability to manage 30+ open tickets simultaneously without losing track.",
      "Valid Guyanese ID and Police Clearance certificate."
    ],
    preferredQualifications: [
      "Prior experience in real estate, property management, construction warranty, or homebuilder customer care.",
      "Familiarity with HubSpot, Zoho, Acumatica, or Odoo service modules.",
      "Working knowledge of Guyana's Consumer Affairs Act and dispute-resolution practices."
    ],
    successMetrics: [
      "Average first-response time to homeowner inquiries under 4 business hours.",
      "Warranty ticket resolution rate above 90% within the service-level target (typically 14 days for non-structural items).",
      "Homeowner satisfaction (CSAT) score of 4.5 / 5 or higher on post-resolution surveys.",
      "Zero unescalated complaints that later reach senior management or legal."
    ]
  },
  {
    id: "customer-service-manager",
    title: "Customer Service Manager",
    tagline: "Owner of the post-sale homeowner experience and warranty operation.",
    department: "Customer Service / Post-Sale Warranty",
    reportsTo: "General Manager / CFO",
    type: "Full-Time, Permanent",
    location: "Windsor Estates, Georgetown, Guyana",
    priority: "high",
    brief: "Lead the homeowner care function across Windsor communities. Design the warranty workflow, manage CSRs, own trade subcontractor SLAs for callbacks, and serve as the senior escalation point.",
    summary: "The Customer Service Manager leads the homeowner care function for Windsor Estates and Windsor Laguna. This role designs the warranty and service-ticket workflow, manages the Customer Service Representatives, owns the relationship with trade subcontractors for post-sale callbacks, and serves as the senior escalation point for homeowner issues.",
    responsibilities: [
      {label:"Team Leadership", text:"Hire, train, schedule, and performance-manage the Customer Service Representative team; hold weekly team huddles and monthly 1:1 reviews."},
      {label:"Warranty Program", text:"Own the end-to-end warranty program structure — 30-day, 6-month, 12-month walk-throughs; structural warranty tracking; builder callback protocols."},
      {label:"Subcontractor Accountability", text:"Maintain SLAs with trade subcontractors for post-sale callbacks, charge back faulty workmanship to original trades, and report repeat defects to the Project Manager."},
      {label:"Systems & Workflow", text:"Design and continuously improve the service-ticket workflow inside the CRM/ERP (currently Acumatica, migrating to Odoo), including automations, templates, and reporting dashboards."},
      {label:"Escalation Handling", text:"Personally manage high-sensitivity cases, legal-threat letters, and diaspora homeowner complaints requiring coordinated response."},
      {label:"Cross-Functional Feedback", text:"Aggregate warranty data into a monthly 'Voice of the Homeowner' report for Construction, Design, and Purchasing teams to drive quality improvements upstream."},
      {label:"HOA Coordination", text:"Interface with Windsor Estates HOA and Windsor Laguna HOA boards on matters affecting homeowner experience."},
      {label:"Budget Ownership", text:"Manage the warranty and callback budget, forecast reserves needed per community, and report variance to the CFO monthly."}
    ],
    requiredQualifications: [
      "Bachelor's Degree in Business, Construction Management, Engineering, or a related field.",
      "Minimum 5 years of customer service or operations experience, with at least 2 years in a supervisory role.",
      "Demonstrated experience building or running a ticketing/CRM workflow.",
      "Strong written communication skills — able to draft homeowner letters, SLAs, and policy documents.",
      "Proficient in Microsoft Excel (pivot tables, basic formulas) and comfortable with ERP/CRM reporting.",
      "Valid Guyanese ID, driver's licence, and clean Police Clearance certificate."
    ],
    preferredQualifications: [
      "Prior experience in homebuilder warranty, property management, or hospitality operations management.",
      "Exposure to Acumatica, Odoo, Salesforce, or HubSpot Service Hub.",
      "Working knowledge of Guyana's consumer protection legislation and small-claims procedures.",
      "Experience managing offshore or diaspora client relationships (U.S., Canada, UK)."
    ],
    successMetrics: [
      "Reduction of average ticket resolution time by 25% within the first year.",
      "Homeowner CSAT score of 4.6 / 5 or higher across the community.",
      "Warranty cost per home delivered held within budgeted reserve (typically 1.0–1.5% of sale price).",
      "Zero escalations to the CFO or GM that were not first flagged internally with a proposed resolution."
    ]
  },
  // ── Sales & Marketing ──
  {
    id: "marketing-social-media-coordinator",
    title: "Marketing / Social Media Coordinator",
    tagline: "Day-to-day driver of Windsor Estates' digital presence and lead pipeline.",
    department: "Sales & Marketing",
    reportsTo: "Sales Manager (dotted line to CFO / Brand Owner)",
    type: "Full-Time, Permanent",
    location: "Windsor Estates, Georgetown, Guyana",
    priority: "high",
    brief: "Execute the marketing calendar across Facebook, Instagram, TikTok, YouTube, LinkedIn, email, and web. Feed the sales funnel with qualified leads from both the local market and the diaspora. You are the steward of the Windsor Group brand system.",
    summary: "The Marketing / Social Media Coordinator executes Windsor Estates' and Windsor Laguna's marketing calendar across Facebook, Instagram, TikTok, YouTube, LinkedIn, email, and the company website. This role is responsible for feeding the top of the sales funnel with qualified leads from both the local Guyanese market and the diaspora.",
    responsibilities: [
      {label:"Content Calendar", text:"Plan, produce, and publish a weekly content calendar across Facebook, Instagram, TikTok, LinkedIn, and YouTube; minimum 4 posts and 3 stories per channel per week."},
      {label:"Production", text:"Shoot and edit short-form video on-site at Windsor Estates and Windsor Laguna using a smartphone, DSLR, or drone; coordinate photographers and videographers as needed."},
      {label:"Paid Advertising", text:"Build, launch, and optimize Meta Ads and Google Ads campaigns targeting local Guyanese buyers and diaspora investors; manage the monthly ad budget."},
      {label:"Email Marketing", text:"Own the Mailchimp instance for Windsor Laguna waitlist and Windsor Estates newsletters — list hygiene, segmentation, drip sequences, and monthly broadcast emails."},
      {label:"Website Updates", text:"Maintain listings, floor plans, gallery images, and news updates on the Windsor Estates and Windsor Laguna websites."},
      {label:"Lead Capture & Handoff", text:"Route every inbound lead from social, ads, email, and web forms into the CRM within 24 hours with source tagging."},
      {label:"Brand Enforcement", text:"Apply and protect the Windsor Group design system — white background, #B0ADA8 cement accent, Darker Grotesque headings, Montserrat body — on every asset produced."},
      {label:"Reporting", text:"Publish a monthly marketing dashboard: reach, engagement, cost-per-lead, cost-per-qualified-lead, and attribution to closed sales."},
      {label:"PR & Events", text:"Support ground-breaking ceremonies, show-home openings, homeowner appreciation events, and diaspora roadshows with branded collateral and social coverage."}
    ],
    requiredQualifications: [
      "Bachelor's Degree or Diploma in Marketing, Communications, Digital Media, or a related field.",
      "Minimum 2 years of hands-on experience running social media for a brand or agency — portfolio or handles required.",
      "Demonstrated ability to shoot and edit short-form video (CapCut, Premiere Rush, or similar).",
      "Working knowledge of Meta Business Suite, Google Ads, and Google Analytics.",
      "Strong writing skills for captions, ad copy, and email.",
      "Proficient in Canva and at least one of Adobe Photoshop, Illustrator, or Figma.",
      "Valid Guyanese ID and driver's licence."
    ],
    preferredQualifications: [
      "Real estate, hospitality, luxury goods, or lifestyle-brand marketing experience.",
      "Experience with Mailchimp automation, HubSpot, or Zoho Campaigns.",
      "Basic knowledge of SEO and WordPress or similar CMS.",
      "Drone pilot experience (DJI Mini/Air/Mavic) for site aerials.",
      "Prior success marketing to the Caribbean diaspora in North America."
    ],
    successMetrics: [
      "Monthly qualified lead volume grows month-over-month for at least 9 of the first 12 months.",
      "Cost-per-qualified-lead reduced by 20% by end of year one.",
      "Combined social following (Facebook + Instagram + TikTok) doubled in 12 months.",
      "100% brand-standard compliance on published assets (audited quarterly)."
    ]
  },
  {
    id: "sales-manager",
    title: "Sales Manager",
    tagline: "Owner of the sales funnel, the sales team, and the absorption rate.",
    department: "Sales & Marketing",
    reportsTo: "CFO / General Manager",
    type: "Full-Time, Permanent",
    location: "Windsor Estates, Georgetown, Guyana",
    priority: "high",
    brief: "Lead the New Home Sales team and hit annual absorption targets. Own lead qualification, pricing guardrails, and contract flow from reservation to closing. Work with CFO on pricing, Marketing on lead flow, and Construction on inventory readiness.",
    summary: "The Sales Manager leads the New Home Sales team for Windsor Estates and Windsor Laguna and is accountable for hitting the community's annual sales absorption targets. This role owns lead qualification standards, pricing guardrails, contract flow from reservation to closing, and the training and performance of Sales Representatives.",
    responsibilities: [
      {label:"Team Leadership", text:"Recruit, train, and manage the New Home Sales Representative team; run daily stand-ups, weekly pipeline reviews, and monthly performance 1:1s."},
      {label:"Sales Targets", text:"Own monthly and annual sales volume, absorption rate, and revenue targets across Windsor Estates and Windsor Laguna phases."},
      {label:"Pricing & Incentives", text:"Partner with the CFO to set base pricing, lot premiums, option pricing, and limited-time incentives; authorize discounts within approved guardrails."},
      {label:"CRM Discipline", text:"Enforce daily CRM hygiene across the team — every lead logged, every touch recorded, every deal stage accurate."},
      {label:"Contract Flow", text:"Shepherd every deal from reservation through Agreement of Sale, down-payment, financing approval, and closing."},
      {label:"Showroom & Model Homes", text:"Ensure show-homes, sales centres, and digital walkthroughs are always presentation-ready."},
      {label:"Financing Partnerships", text:"Maintain active relationships with Republic Bank, Demerara Bank, Scotiabank, GBTI, NBIC, and relevant mortgage institutions."},
      {label:"Diaspora Sales", text:"Run scheduled diaspora sales tours and virtual-closing processes for U.S., Canadian, UK, and Caribbean buyers."},
      {label:"Market Intelligence", text:"Track competitor communities, pricing, inventory, and absorption; brief the executive team monthly."}
    ],
    requiredQualifications: [
      "Bachelor's Degree in Business, Marketing, Real Estate, or a related field.",
      "Minimum 5 years of sales experience, with at least 2 years in a sales leadership or team-lead role.",
      "Proven track record of hitting or exceeding annual revenue targets.",
      "Strong command of a CRM (HubSpot, Salesforce, Zoho, or similar).",
      "Proficient in Microsoft Excel and comfortable reviewing pro-forma cash-flow and absorption models.",
      "Valid Guyanese ID, driver's licence, and ownership of a reliable vehicle."
    ],
    preferredQualifications: [
      "Direct experience in new-home sales, real estate development, or high-ticket consumer sales.",
      "Existing network of mortgage officers, attorneys, and closing agents in Guyana.",
      "Experience selling to the Guyanese diaspora in North America.",
      "Familiarity with Guyanese property law basics — Transport, Title, and Agreement of Sale practice."
    ],
    successMetrics: [
      "Achievement of 100% of the annual sales absorption target.",
      "Lead-to-reservation conversion rate above 8%.",
      "Reservation-to-closing conversion rate above 75%.",
      "Sales team retention of 80% or better year-over-year."
    ]
  },
  {
    id: "new-home-sales-representative",
    title: "New Home Sales Representative",
    tagline: "Trusted guide who walks buyers from first visit to closing day.",
    department: "Sales & Marketing",
    reportsTo: "Sales Manager",
    type: "Full-Time, Permanent",
    location: "Windsor Estates, Georgetown, Guyana",
    priority: "high",
    brief: "The face of Windsor for prospective buyers. Conduct community tours, present floor plans and lot options, educate buyers on the purchase process, and guide each deal from first inquiry through closing.",
    summary: "The New Home Sales Representative is the face of Windsor Estates and Windsor Laguna for prospective homebuyers. This role conducts community tours, presents floor plans and lot options, educates buyers on the purchase process, and guides each deal from first inquiry through reservation, Agreement of Sale, financing, and closing.",
    responsibilities: [
      {label:"Lead Conversion", text:"Respond to every assigned lead within 4 business hours; run discovery conversations to qualify budget, timeline, financing, and family needs."},
      {label:"Community Tours", text:"Conduct in-person tours of the sales centre, show-homes, and live construction; deliver virtual tours via Zoom or WhatsApp video for diaspora buyers."},
      {label:"Product Knowledge", text:"Master every floor plan, elevation, lot premium, standard spec, and available upgrade across Windsor Estates and Windsor Laguna."},
      {label:"Reservation & Contract", text:"Walk buyers through reservation agreements, down-payments, Agreement of Sale, and standard terms."},
      {label:"Financing Support", text:"Connect buyers to partner banks, track mortgage applications, and keep the Sales Manager informed of any financing risk."},
      {label:"CRM Discipline", text:"Log every call, meeting, email, WhatsApp thread, and next-step in the CRM the same day."},
      {label:"Construction Liaison", text:"Coordinate buyer site visits with the Assistant Project Manager; manage buyer expectations on timing."},
      {label:"Closing Handoff", text:"Support the Customer Service team with a clean buyer handoff at closing."}
    ],
    requiredQualifications: [
      "Diploma or Bachelor's Degree in Business, Marketing, Real Estate, or a related field — or 3+ years of strong sales experience in lieu.",
      "Minimum 2 years of sales experience in real estate, automotive, insurance, banking, or another high-ticket consumer category.",
      "Polished personal presentation and confident public-speaking skills.",
      "Proficient with a CRM and with Microsoft Outlook, Word, and Excel.",
      "Valid Guyanese ID, driver's licence, and ownership of a reliable vehicle.",
      "Available to work weekends (Saturday is the peak sales day)."
    ],
    preferredQualifications: [
      "Prior experience in residential real estate sales or new-home sales.",
      "Existing book of diaspora contacts in the U.S., Canada, UK, or Caribbean.",
      "Familiarity with Guyanese mortgage products and Transport-based conveyancing.",
      "Fluency in a second language relevant to the diaspora market."
    ],
    successMetrics: [
      "Personal sales quota achievement of 100% for the year.",
      "Lead response time under 4 business hours, tracked in the CRM.",
      "Pipeline coverage of 3x open quota at any time.",
      "Zero documented misrepresentations to buyers."
    ]
  },
  // ── Construction / Project Management ──
  {
    id: "assistant-project-manager",
    title: "Assistant Project Manager",
    tagline: "The Project Manager's right hand — keeps homes on schedule, on budget, on spec.",
    department: "Construction / Project Management",
    reportsTo: "Project Manager",
    type: "Full-Time, Permanent",
    location: "Windsor Estates, Georgetown, Guyana",
    priority: "high",
    brief: "Support the PM in delivering homes on schedule, within budget, and to quality standard. Run day-to-day coordination with site supervisors, trade subcontractors, and suppliers. This is a pipeline role into full PM responsibility within 2–3 years.",
    summary: "The Assistant Project Manager supports the Project Manager in delivering Windsor Estates and Windsor Laguna homes on schedule, within budget, and to the specified quality standard. The APM runs day-to-day coordination with site supervisors, trade subcontractors, the Civil Works Coordinator, and suppliers.",
    responsibilities: [
      {label:"Schedule Management", text:"Maintain the master production schedule across all active homes; track critical-path activities and flag slippage to the Project Manager within 24 hours."},
      {label:"Subcontractor Coordination", text:"Dispatch and sequence trades (foundation, framing, masonry, roofing, electrical, plumbing, finishes) to avoid idle days and trade conflicts."},
      {label:"Quality Inspections", text:"Conduct stage inspections — foundation pour, slab, framing, rough-in, finishes, pre-closing — using the Windsor QA checklist."},
      {label:"Material Take-Offs", text:"Prepare and verify material take-offs from drawings; issue purchase requisitions through the ERP."},
      {label:"Cost Tracking", text:"Maintain per-home cost-to-complete tracking; flag any home trending over budget by more than 5%."},
      {label:"RFI & Submittals", text:"Manage Requests for Information with architects and engineers; log submittals, shop drawings, and approvals."},
      {label:"Safety Compliance", text:"Enforce site PPE, scaffolding, and excavation safety rules; run weekly toolbox talks with supervisors."},
      {label:"Documentation", text:"Keep all daily site reports, weather logs, inspection records, and photographs organized in the shared project drive."}
    ],
    requiredQualifications: [
      "Bachelor's Degree in Civil Engineering, Construction Management, Architecture, or a closely related field.",
      "Minimum 3 years of site experience on residential or commercial construction projects.",
      "Ability to read and interpret architectural, structural, electrical, and plumbing drawings.",
      "Proficient in Microsoft Excel, Microsoft Project or equivalent scheduling tool, and PDF mark-up software.",
      "Strong written English for daily reports, RFIs, and emails.",
      "Valid Guyanese ID, driver's licence, and ownership of a reliable vehicle."
    ],
    preferredQualifications: [
      "Prior experience with a production homebuilder or large-scale residential developer.",
      "Familiarity with AutoCAD, Revit, Bluebeam, or Procore.",
      "Working knowledge of Guyana's CH&PA and Georgetown building approval process.",
      "OSHA or equivalent site safety certification."
    ],
    successMetrics: [
      "Home cycle time (foundation to closing) hit within 5% of target.",
      "Per-home cost variance held within 3% of budget.",
      "Punch-list items at pre-closing walk-through reduced by 30% over the year.",
      "Zero recordable safety incidents on sites under direct coordination."
    ]
  },
  {
    id: "civil-works-coordinator",
    title: "Civil Works Coordinator",
    tagline: "Drives the site from raw land to build-ready lots.",
    department: "Construction / Civil Works",
    reportsTo: "Project Manager",
    type: "Full-Time, Permanent",
    location: "Windsor Estates, Georgetown, Guyana",
    priority: "high",
    brief: "Responsible for horizontal construction — land clearing, earthworks, drainage, roads, curbs, sidewalks, utility trenching, and lot preparation. You coordinate heavy equipment, earthworks subs, surveyors, and utility providers to deliver build-ready lots on schedule.",
    summary: "The Civil Works Coordinator is responsible for the horizontal construction of Windsor Estates and Windsor Laguna — land clearing, earthworks, drainage, roads, curbs, sidewalks, utility trenching, and lot preparation. This role coordinates heavy equipment, earthworks subcontractors, surveyors, and utility providers to deliver build-ready lots to the vertical construction team on schedule.",
    responsibilities: [
      {label:"Site Preparation", text:"Plan and supervise land clearing, grubbing, cut-and-fill, compaction, and subgrade preparation across active phases."},
      {label:"Drainage", text:"Coordinate storm-water drainage design implementation — trench drains, culverts, outfalls — critical for Guyana's coastal hydrology and tropical rainfall."},
      {label:"Road Construction", text:"Execute pavement stack build-up per engineer specification — subgrade, sub-base, base course, binder, and wearing course."},
      {label:"Utility Trenching", text:"Coordinate trenching and conduit installation for GPL power, GWI water, GTT and Digicel fibre; schedule utility inspections and energizations."},
      {label:"Survey Coordination", text:"Work with licensed surveyors for lot pegging, benchmarks, as-builts, and setting-out before vertical construction begins."},
      {label:"Heavy Equipment", text:"Liaise with the Equipment Manager to schedule excavators, dozers, rollers, graders, dump trucks, and water bowsers; minimize idle equipment hours."},
      {label:"Permits", text:"Support permitting with CH&PA, the Environmental Protection Agency, and the relevant NDC/Municipality."},
      {label:"Reporting", text:"Submit weekly civil-works progress reports with photos, quantities installed, and schedule impact."}
    ],
    requiredQualifications: [
      "Bachelor's Degree or Diploma in Civil Engineering, Construction Technology, or a related field.",
      "Minimum 4 years of hands-on experience in earthworks, roadworks, or subdivision civil works.",
      "Strong understanding of tropical drainage design, coastal soil conditions, and high-plasticity (CH) clay behaviour.",
      "Ability to read civil engineering drawings and compute quantities from plans.",
      "Comfortable working outdoors in heat, mud, and rain.",
      "Valid Guyanese ID and driver's licence (4x4 preferred)."
    ],
    preferredQualifications: [
      "Prior experience on subdivision developments, highway projects, or industrial estate civil works.",
      "Familiarity with AutoCAD Civil 3D, AGTEK, or similar takeoff software.",
      "Working relationships with GPL, GWI, GTT, Digicel utility-coordination desks.",
      "Knowledge of Guyana's EPA permitting requirements for land development."
    ],
    successMetrics: [
      "Build-ready lots delivered on or ahead of schedule for 90% of phases.",
      "Civil works cost variance held within 5% of approved budget.",
      "Zero drainage-related warranty callbacks in homes handed over from lots you prepared.",
      "Utility energization achieved on first inspection for 80% of submissions."
    ]
  },
  // ── Finance & Accounting ──
  {
    id: "bookkeeper",
    title: "Bookkeeper",
    tagline: "Keeper of clean books — every invoice, receipt, and entry in its right place.",
    department: "Finance & Accounting",
    reportsTo: "Controller",
    type: "Full-Time, Permanent",
    location: "Windsor Estates, Georgetown, Guyana",
    priority: "high",
    brief: "Manage the accurate, timely recording of all financial transactions across Windsor Group entities. Handle AP, AR, bank reconciliations, petty cash, and routine journal entries in the company ERP. You are the first line of defence on financial data quality.",
    summary: "The Bookkeeper is responsible for the accurate, timely recording of all financial transactions for Windsor Estates Inc., Navigant Builders Inc., and related Windsor Group entities. This role manages accounts payable, accounts receivable, bank reconciliations, petty cash, and routine journal entries in the company's ERP.",
    responsibilities: [
      {label:"Accounts Payable", text:"Enter vendor invoices against purchase orders and goods-received notes; prepare payment batches (cheques, wire, ACH) for Controller review."},
      {label:"Accounts Receivable", text:"Invoice homebuyers for deposits, progress payments, and closing balances; apply receipts; follow up on past-due balances weekly."},
      {label:"Bank Reconciliation", text:"Reconcile all corporate bank accounts (Republic Bank, Demerara Bank, Scotiabank, GBTI, etc.) by the 5th working day of each month."},
      {label:"Petty Cash & Site Advances", text:"Administer petty cash and site-supervisor cash advances; enforce receipt-return and reconciliation policy within 48 hours."},
      {label:"Payroll Support", text:"Prepare bi-monthly or monthly payroll input files for Controller review; post payroll journals and NIS/PAYE accruals."},
      {label:"GL Entries", text:"Post routine journal entries — prepaid amortization, accruals, intercompany transfers — with supporting documentation."},
      {label:"Filing & Audit Trail", text:"Maintain a clean digital and physical filing system so any transaction can be traced from the GL back to source in under 5 minutes."},
      {label:"ERP Discipline", text:"Use the ERP as the single source of truth — no side spreadsheets, no off-system memos."}
    ],
    requiredQualifications: [
      "Diploma in Accounting, ACCA Level 1, CAT, or equivalent; Bachelor's Degree preferred.",
      "Minimum 3 years of bookkeeping experience, ideally in construction, real estate, or a multi-entity business.",
      "Strong proficiency in Microsoft Excel (formulas, pivot tables, VLOOKUP/XLOOKUP).",
      "Hands-on experience with an ERP or accounting system — QuickBooks, Sage, Peachtree, Acumatica, Odoo, or similar.",
      "Working knowledge of Guyanese VAT, PAYE, NIS, and corporation tax compliance basics.",
      "High attention to detail and ability to meet monthly close deadlines."
    ],
    preferredQualifications: [
      "Prior experience in real estate development, construction, or a property management firm.",
      "Exposure to multi-entity accounting and intercompany transactions.",
      "ACCA Level 2 or higher in progress.",
      "Experience with Acumatica, Odoo, or another Tier-2 cloud ERP."
    ],
    successMetrics: [
      "Monthly bank reconciliations completed by the 5th working day, 12 months in a row.",
      "AP aging over 60 days reduced and held below 5% of open payables.",
      "AR collection cycle for homebuyer progress payments under 10 days.",
      "Zero post-close audit adjustments greater than GYD 250,000 attributable to bookkeeping error."
    ]
  },
  {
    id: "controller",
    title: "Controller",
    tagline: "The financial control tower — owns the close, the controls, and the clean audit.",
    department: "Finance & Accounting",
    reportsTo: "Chief Financial Officer",
    type: "Full-Time, Permanent",
    location: "Windsor Estates, Georgetown, Guyana",
    priority: "high",
    brief: "Own the accounting function across all Windsor Group entities. Deliver accurate monthly financials, maintain internal controls, run the external audit, and partner with the CFO on cash management, pricing, and project cost reporting.",
    summary: "The Controller owns the accounting function across the Windsor Group — Navigant Builders Inc. (US and GY), Windsor Estates Inc. (US and GY), Windsor Building Products GY, Navigant Security Service, and HOA entities. The Controller delivers accurate monthly financials, maintains the chart of accounts, enforces internal controls, and runs the external audit.",
    responsibilities: [
      {label:"Monthly Close", text:"Run a disciplined 10-working-day close across all legal entities; deliver consolidated financials and variance commentary to the CFO."},
      {label:"Internal Controls", text:"Design and enforce segregation of duties, approval matrices, bank signatory rules, and vendor onboarding controls."},
      {label:"Project Cost Accounting", text:"Own per-home and per-project cost accounting — budget vs. actual, committed costs, change orders, and gross-margin reporting."},
      {label:"Cash Management", text:"Prepare the weekly 13-week cash flow forecast; manage bank relationships for operating and project accounts."},
      {label:"Tax & Compliance", text:"Ensure accurate and timely filing of VAT, PAYE, NIS, corporation tax, property tax, and statutory returns across GY and US entities."},
      {label:"Audit", text:"Lead the annual external audit — prepare schedules, respond to auditor requests, and drive resolution of adjustments."},
      {label:"ERP Ownership", text:"Act as functional owner of the accounting ERP (currently Acumatica, migrating to Odoo); partner with the CFO/CTO on the migration."},
      {label:"Team Management", text:"Supervise the Bookkeeper and any Accounts staff; recruit, train, and develop the team."},
      {label:"Financial Reporting", text:"Prepare monthly management reports, quarterly board packs, and ad-hoc analyses for the CFO and ownership."}
    ],
    requiredQualifications: [
      "Bachelor's Degree in Accounting or Finance; ACCA fully qualified or CPA.",
      "Minimum 7 years of accounting experience, with at least 3 years in a supervisory or Controller role.",
      "Strong project / construction / real estate accounting experience — WIP, percentage-of-completion, retention, change orders.",
      "Demonstrated experience running a monthly close and managing an external audit.",
      "Expert-level Microsoft Excel; strong command of at least one ERP.",
      "Thorough knowledge of Guyanese tax law and IFRS for SMEs.",
      "Valid Guyanese ID, driver's licence, and clean Police Clearance certificate."
    ],
    preferredQualifications: [
      "Prior experience in a homebuilder, real estate developer, or general contractor.",
      "Experience with multi-jurisdiction (Guyana + US) consolidations.",
      "Prior hands-on ERP implementation or migration experience.",
      "Exposure to debt financing, project finance, or investor reporting."
    ],
    successMetrics: [
      "Monthly close delivered by working-day 10 for 12 consecutive months.",
      "Clean external audit opinion with fewer than 3 management-letter points.",
      "13-week cash forecast accuracy within ±5% at the 4-week horizon.",
      "ERP data quality improved to the point that management reports require zero manual reclassification."
    ]
  },
  // ── Administration ──
  {
    id: "administrative-assistant",
    title: "Administrative Assistant",
    tagline: "The operational glue — keeps the office, the calendars, and the paperwork moving.",
    department: "Administration",
    reportsTo: "General Manager / CFO",
    type: "Full-Time, Permanent",
    location: "Windsor Estates, Georgetown, Guyana",
    priority: "medium",
    brief: "Provide high-level admin support to the executive team. Manage calendars, travel, meeting logistics, office supplies, correspondence, and filing. A force-multiplier for the CFO and the senior team.",
    summary: "The Administrative Assistant provides high-level administrative support to the executive team and runs the day-to-day operations of the Windsor Estates head office. This role manages calendars, travel, meeting logistics, office supplies, correspondence, and filing.",
    responsibilities: [
      {label:"Executive Support", text:"Manage calendars, schedule meetings, and coordinate travel (domestic and international) for the CFO, GM, and other executives."},
      {label:"Correspondence", text:"Draft routine letters, memos, and emails on behalf of the executive team using Windsor Group letterhead and brand standards."},
      {label:"Document Control", text:"Maintain a clean filing system (physical and digital) for contracts, Agreements of Sale, title documents, permits, and HR files."},
      {label:"Meeting Logistics", text:"Coordinate internal meetings, board meetings, HOA meetings — agendas, minutes, action-item tracking."},
      {label:"Office Management", text:"Manage office supplies, vendor relationships (stationery, water, cleaning, IT), and maintenance of the head office."},
      {label:"Visitor & Front Desk", text:"Greet visitors, answer the main switchboard, and route inquiries to the correct department."},
      {label:"HR Admin Support", text:"Assist with onboarding paperwork, NIS registration, employment letters, and confidential personnel files."},
      {label:"Expense Reports", text:"Prepare and submit executive expense reports and corporate credit card reconciliations to the Bookkeeper."}
    ],
    requiredQualifications: [
      "Diploma or Associate Degree in Business Administration, Office Management, or a related field.",
      "Minimum 3 years of administrative or executive-assistant experience.",
      "Excellent written and spoken English; professional phone and email manner.",
      "Strong proficiency in Microsoft Office (Word, Excel, PowerPoint, Outlook).",
      "Demonstrated discretion with confidential information.",
      "High organization skills — ability to juggle 5+ executives' competing demands."
    ],
    preferredQualifications: [
      "Prior experience in a real estate, construction, legal, or banking environment.",
      "Familiarity with Google Workspace, Zoom, and a CRM or ERP system.",
      "Working knowledge of Windsor Group's legal structures and entity names.",
      "Notary Public commission or willingness to obtain one."
    ],
    successMetrics: [
      "Executive calendars maintained with zero double-bookings.",
      "Document retrieval time under 3 minutes for any requested file.",
      "100% on-time delivery of board and HOA meeting packs.",
      "Positive feedback from at least 80% of internal stakeholders in a 6-month review."
    ]
  },
  // ── Equipment & Fleet ──
  {
    id: "equipment-manager",
    title: "Equipment Manager",
    tagline: "Owner of the iron — every machine running when and where it's needed.",
    department: "Equipment & Fleet",
    reportsTo: "Project Manager / COO",
    type: "Full-Time, Permanent",
    location: "Windsor Estates, Georgetown, Guyana",
    priority: "medium",
    brief: "Accountable for the entire fleet of heavy equipment, light vehicles, and small tools. Plan utilization, enforce preventive maintenance, manage the mechanic team, control fuel and parts costs, and keep an accurate asset register.",
    summary: "The Equipment Manager is accountable for the entire Windsor Group fleet of heavy equipment, light vehicles, and small tools — excavators, dozers, rollers, graders, dump trucks, concrete mixers, pickups, generators, compactors, and power tools.",
    responsibilities: [
      {label:"Asset Register", text:"Maintain an accurate asset register with make, model, serial number, purchase date, book value, hour meter, and current location for every piece of equipment."},
      {label:"Utilization Planning", text:"Schedule equipment across active projects in partnership with the Civil Works Coordinator and APM; minimize idle days."},
      {label:"Preventive Maintenance", text:"Own an hour-based and calendar-based PM schedule; ensure services happen on time."},
      {label:"Mechanic Team", text:"Supervise the Diesel Mechanic team; set daily work orders, review quality of repairs, and develop technical skills."},
      {label:"Parts Inventory", text:"Maintain a controlled parts inventory; prevent parts theft and over-ordering."},
      {label:"Fuel Control", text:"Enforce fuel log discipline — every litre dispensed tied to an asset and operator; investigate variance weekly."},
      {label:"Operator Accountability", text:"Train operators on pre-shift inspections; hold them accountable for operator-caused damage."},
      {label:"Rental & Disposal", text:"Advise the CFO on rent-vs-buy decisions, equipment disposal timing, and replacement capex."},
      {label:"Compliance", text:"Ensure licensing, insurance, and inspection certificates are current for all plant and road vehicles."}
    ],
    requiredQualifications: [
      "Diploma or Trade Certificate in Heavy Equipment, Mechanical Engineering, Automotive Technology, or a related field.",
      "Minimum 5 years of experience managing a heavy equipment or construction fleet.",
      "Strong technical understanding of diesel engines, hydraulics, and undercarriages.",
      "Demonstrated ability to run a preventive maintenance program and manage mechanics.",
      "Proficient with Microsoft Excel and comfortable with a CMMS or ERP maintenance module.",
      "Valid Guyanese ID and driver's licence (heavy-vehicle licence preferred)."
    ],
    preferredQualifications: [
      "Prior experience managing a fleet in civil works, mining, or heavy construction.",
      "Manufacturer training from Caterpillar, Komatsu, John Deere, or Hitachi.",
      "Experience with GPS/telematics systems.",
      "Working knowledge of GRA rules for equipment imports and duty concessions."
    ],
    successMetrics: [
      "Fleet availability (uptime) of 90% or better.",
      "Preventive maintenance compliance of 95% or better against scheduled intervals.",
      "Fuel-per-operating-hour variance held within 10% of the per-asset benchmark.",
      "Equipment-driven project delays reduced to fewer than 5 days per quarter."
    ]
  },
  {
    id: "diesel-mechanic",
    title: "Diesel Mechanic",
    tagline: "Hands on the iron — keeps the heavy fleet turning and earning.",
    department: "Equipment & Fleet",
    reportsTo: "Equipment Manager",
    type: "Full-Time, Permanent",
    location: "Windsor Estates, Georgetown, Guyana",
    priority: "medium",
    brief: "Hands-on, tools-on-the-bench role that services, diagnoses, and repairs heavy equipment, dump trucks, pickups, and generators. Keep projects moving by minimizing equipment downtime.",
    summary: "The Diesel Mechanic services, diagnoses, and repairs the Windsor Group fleet of heavy equipment, dump trucks, pickups, and generators. This is a hands-on role that keeps projects moving by minimizing equipment downtime.",
    responsibilities: [
      {label:"Preventive Maintenance", text:"Perform scheduled oil changes, filter changes, greasing, hydraulic service, and major service events per the PM schedule."},
      {label:"Diagnostics", text:"Diagnose mechanical, electrical, hydraulic, and fuel-system faults on excavators, dozers, rollers, graders, dump trucks, and light vehicles."},
      {label:"Repairs", text:"Execute repairs at the yard shop and at site, including engine, transmission, hydraulic pump, final drive, and undercarriage work."},
      {label:"Work Orders", text:"Open, update, and close work orders on every job; record hours, parts used, and root cause."},
      {label:"Parts Discipline", text:"Draw parts only against open work orders; return unused parts; never take parts off-site without authorization."},
      {label:"Shop Housekeeping", text:"Keep the shop clean, tools accounted for, and hazardous fluids disposed of per environmental rules."},
      {label:"Site Response", text:"Respond to breakdown calls on site within agreed SLA; carry a basic field-repair kit."},
      {label:"Safety", text:"Work safely with PPE, lock-out/tag-out, and lifting equipment; refuse unsafe work and report hazards."}
    ],
    requiredQualifications: [
      "Trade Certificate or Diploma in Diesel Mechanics, Heavy Equipment Repair, or Automotive Technology.",
      "Minimum 3 years of hands-on experience as a diesel mechanic on heavy equipment or commercial vehicles.",
      "Own a basic set of hand tools.",
      "Ability to read hydraulic and electrical schematics and manufacturer service manuals.",
      "Physically able to work in hot, dirty, and confined conditions and to lift 25 kg routinely.",
      "Valid Guyanese ID; driver's licence strongly preferred."
    ],
    preferredQualifications: [
      "Manufacturer training or certification from Caterpillar, Komatsu, John Deere, Hitachi, or similar.",
      "Welding and fabrication skills (MIG / stick).",
      "Experience with diesel electronic engine controls and scan tools.",
      "Prior experience in mining, civil works, or a large-fleet environment."
    ],
    successMetrics: [
      "Mean-time-to-repair (MTTR) for unplanned breakdowns trending downward quarter-over-quarter.",
      "Rework rate (repairs that come back within 30 days) below 5%.",
      "Work orders closed with complete parts and labour records 100% of the time.",
      "Zero lost-time safety incidents."
    ]
  },
  // ── Security ──
  {
    id: "security-officer",
    title: "Security Officer",
    tagline: "First set of eyes, first line of deterrence — protects residents, property, and the brand.",
    department: "Security (Navigant Security Service)",
    reportsTo: "Security Manager / Shift Supervisor",
    type: "Full-Time, Permanent",
    location: "Windsor Estates, Georgetown, Guyana",
    priority: "medium",
    brief: "Deployed at gatehouses, perimeter posts, and construction sites. Control access, monitor the AI-enabled thermal camera system, conduct patrols, respond to incidents, and document events. Directly accountable for community safety.",
    summary: "The Security Officer is deployed at Windsor Estates and Windsor Laguna gatehouses, perimeter posts, and active construction sites. This role controls access, monitors the AI-enabled thermal camera system, conducts foot patrols, responds to alarms and incidents, and documents every event.",
    responsibilities: [
      {label:"Access Control", text:"Verify and record every vehicle and visitor entering or leaving the community or construction site."},
      {label:"Camera Monitoring", text:"Monitor the Hikvision thermal AI camera system and Ubiquiti mesh network feeds; respond to AI-generated alerts."},
      {label:"Patrols", text:"Conduct foot and mobile patrols on a random-interval schedule; record patrol check-ins at designated posts."},
      {label:"Incident Response", text:"Respond to alarms, suspicious activity, medical incidents, and fire events; contact appropriate authorities immediately."},
      {label:"Occurrence Book", text:"Record every material event — arrivals, departures, incidents, patrol findings — with time, date, and officer signature."},
      {label:"Contractor Control", text:"Enforce tools-in / tools-out logging at construction sites; prevent material theft."},
      {label:"Courtesy & Brand", text:"Greet residents and visitors with a professional, courteous tone at all times."},
      {label:"Uniform & PPE", text:"Maintain a clean, complete uniform and required equipment at all times on duty."}
    ],
    requiredQualifications: [
      "Completed Secondary Education (CXC / CSEC) with passes in English A.",
      "Minimum 2 years of security experience — private security, defence force, or police service.",
      "Clean Police Clearance certificate and valid Guyanese ID.",
      "Physically fit; able to stand for long shifts and perform foot patrols.",
      "Basic English literacy for writing occurrence book entries.",
      "Ability to work rotating 12-hour shifts including nights, weekends, and public holidays."
    ],
    preferredQualifications: [
      "Prior service with Guyana Defence Force, Guyana Police Force, or a reputable private security company.",
      "First Aid / CPR certification.",
      "Experience using CCTV/VMS systems.",
      "Licensed firearm holder (for assigned armed posts only)."
    ],
    successMetrics: [
      "Zero unauthorized entries on post during shift.",
      "100% compliance with patrol check-in schedule.",
      "Occurrence book entries complete and legible on quarterly audit.",
      "Zero 'courtesy complaints' from residents in a rolling 90-day window."
    ]
  },
  {
    id: "security-manager",
    title: "Security Manager",
    tagline: "Commands the entire Navigant Security deployment at Windsor communities.",
    department: "Security (Navigant Security Service)",
    reportsTo: "General Manager / CFO",
    type: "Full-Time, Permanent",
    location: "Windsor Estates, Georgetown, Guyana",
    priority: "high",
    brief: "Lead Navigant Security Service's deployment across all Windsor communities. Own the security operating model — manpower, the 14-camera Hikvision thermal AI system, Ubiquiti wireless mesh, guard accountability, alert workflows, and incident response.",
    summary: "The Security Manager leads Navigant Security Service's deployment across Windsor Estates, Windsor Laguna, active construction sites, and the Windsor Group head office. This role owns the security operating model — manpower deployment, technology systems, guard accountability, and incident response.",
    responsibilities: [
      {label:"Team Leadership", text:"Manage Shift Supervisors and Security Officers across all posts; approve rosters, enforce discipline, and conduct monthly performance reviews."},
      {label:"Deployment Design", text:"Design and continuously improve the post structure across gatehouses, perimeter posts, and construction sites."},
      {label:"Technology Ownership", text:"Own the Hikvision thermal AI camera system, Ubiquiti mesh network, VMS, and alert workflow; partner with the CTO on upgrades."},
      {label:"SOPs & Training", text:"Maintain written Standard Operating Procedures and run structured onboarding and refresher training."},
      {label:"Night Shift Accountability", text:"Close night shift coverage gaps through guard-tour technology, supervisor spot-checks, and incentive/discipline frameworks."},
      {label:"Incident Management", text:"Lead investigations into all Priority 1 and Priority 2 incidents; prepare incident reports for executive and HOA review."},
      {label:"GPF Liaison", text:"Maintain a professional working relationship with the Guyana Police Force divisional command."},
      {label:"Reporting", text:"Deliver a monthly security dashboard — incident counts, response times, camera uptime, guard KPIs."},
      {label:"Budget Ownership", text:"Manage the security budget — manpower, uniforms, equipment, technology maintenance, and vehicle costs."}
    ],
    requiredQualifications: [
      "Bachelor's Degree, or completion of Secondary Education with substantial relevant experience.",
      "Minimum 8 years of security experience, with at least 3 years in a management role.",
      "Prior service with Guyana Defence Force, Guyana Police Force, or a large private security operation.",
      "Strong written English for SOPs, incident reports, and executive briefings.",
      "Working knowledge of CCTV/VMS systems and network-based security technology.",
      "Clean Police Clearance certificate, valid Guyanese ID, and driver's licence."
    ],
    preferredQualifications: [
      "Formal security management qualifications (ASIS PSP / CPP, or equivalent).",
      "Hands-on familiarity with Hikvision VMS, Ubiquiti UniFi, and guard-tour systems.",
      "Experience securing residential communities, hotels, or industrial estates.",
      "Experience working with HOAs or property-management clients."
    ],
    successMetrics: [
      "Reduction of Priority 1 incidents by 30% in the first year.",
      "Camera system uptime of 98% or better.",
      "Night shift guard-tour compliance of 95% or better.",
      "HOA satisfaction with security service of 4.5 / 5 or higher in an annual survey."
    ]
  },
  // ── Design & Technical ──
  {
    id: "draftsman",
    title: "Draftsman",
    tagline: "Converts architectural vision into precise, build-ready drawings.",
    department: "Design & Technical",
    reportsTo: "Project Manager / Lead Architect",
    type: "Full-Time, Permanent",
    location: "Windsor Estates, Georgetown, Guyana",
    priority: "medium",
    brief: "Produce the technical drawings that carry a Windsor home from concept through permitting to the field. Develop and maintain architectural, structural, and site drawing sets — floor plans, elevations, sections, details, lot plans, and as-builts.",
    summary: "The Draftsman produces the technical drawings that carry a Windsor home from concept through permitting to the field. This role develops and maintains architectural, structural, and site drawing sets for Windsor Estates, Windsor Laguna, and future communities.",
    responsibilities: [
      {label:"Drawing Production", text:"Prepare architectural drawing sets — floor plans, elevations, sections, roof plans, door/window schedules, and construction details."},
      {label:"Siting & Lot Plans", text:"Produce individual lot siting plans showing building footprint, setbacks, driveway, utilities tie-ins, and drainage."},
      {label:"Revisions & Versioning", text:"Manage drawing revisions with a disciplined version-control system."},
      {label:"Permit Packages", text:"Prepare permit submission packages for CH&PA, the relevant NDC/Municipality, and utility approvals."},
      {label:"Coordination", text:"Coordinate architectural drawings with structural, electrical, and plumbing drawings from consulting engineers."},
      {label:"As-Builts", text:"Incorporate site-captured changes into as-built drawings; maintain the archive for warranty and future reference."},
      {label:"Marketing Support", text:"Produce clean marketing versions of floor plans and elevations for the Sales and Marketing teams."},
      {label:"Sales Options & Upgrades", text:"Document approved floor-plan options, elevation variations, and structural upgrades."},
      {label:"Digital Standards", text:"Maintain the company CAD/BIM template library — title blocks, layers, line weights, text styles."}
    ],
    requiredQualifications: [
      "Diploma or Bachelor's Degree in Architecture, Architectural Technology, Civil Engineering, or Construction Technology.",
      "Minimum 3 years of drafting experience in architecture or residential construction.",
      "Expert proficiency in AutoCAD; working proficiency in at least one of Revit, ArchiCAD, SketchUp, or Chief Architect.",
      "Strong understanding of residential construction — foundations, framing, roof systems, finishes.",
      "Ability to read and coordinate structural, electrical, and plumbing drawings.",
      "Proficient in Microsoft Office and PDF mark-up tools.",
      "Valid Guyanese ID."
    ],
    preferredQualifications: [
      "Prior experience with a production homebuilder or architectural firm doing volume housing.",
      "Working knowledge of Guyana's CH&PA submission standards.",
      "BIM experience with Revit, including creation of families and parametric components.",
      "Rendering skills (Enscape, Lumion, V-Ray, or similar) for marketing visualizations.",
      "Experience with a drawing management system or common-data-environment (CDE)."
    ],
    successMetrics: [
      "100% of drawing packages issued to site are the current approved revision — zero 'built to wrong drawing' incidents.",
      "Permit packages accepted on first submission for 80% of applications.",
      "Drawing-coordination conflicts identified at the drawing stage for 90% of issues.",
      "Standard-model drawing sets reused without rework across phases, reducing per-home design time by 30%."
    ]
  },
  // ── Technology ──
  {
    id: "it-manager",
    title: "IT Manager / Technology Manager",
    tagline: "Runs the technology stack that runs the business.",
    department: "Technology",
    reportsTo: "CFO / CTO",
    type: "Full-Time, Permanent",
    location: "Windsor Estates, Georgetown, Guyana",
    priority: "high",
    brief: "Responsible for every piece of technology Windsor Group depends on — devices, networks, ERP, CRM, security cameras, Ubiquiti infrastructure, backups, cybersecurity, and SaaS subscriptions. Part infrastructure owner, part business-systems admin, part internal support desk.",
    summary: "The IT Manager is responsible for every piece of technology that Windsor Group depends on to operate — end-user devices, networks, email, cloud systems, the ERP, the CRM, the Hikvision security camera infrastructure, the Ubiquiti network, backups, cybersecurity, and SaaS subscriptions.",
    responsibilities: [
      {label:"Endpoint & User Support", text:"Manage all laptops, desktops, printers, and mobile devices; operate a helpdesk ticketing system; resolve user issues within SLAs."},
      {label:"Network Infrastructure", text:"Own the Ubiquiti UniFi wireless and wired networks at all Windsor locations; ensure uptime, segmentation, and secure remote access."},
      {label:"Business Systems", text:"Administer the ERP (Acumatica now, Odoo next), CRM, email, Mailchimp, and other SaaS platforms."},
      {label:"Security Technology", text:"Co-own the Hikvision thermal AI camera system and VMS with the Security Manager."},
      {label:"Cybersecurity", text:"Enforce baseline cybersecurity — MFA, endpoint protection, patching, email security, backup, phishing training."},
      {label:"Backup & Continuity", text:"Maintain tested backups for all critical systems and a written disaster recovery plan."},
      {label:"Automation & Low-Code", text:"Partner with the CFO to identify and build automations and internal apps that reduce manual work."},
      {label:"Vendor Management", text:"Manage technology vendors — ISP, Microsoft, Google, Hikvision integrator, Ubiquiti, SaaS providers."},
      {label:"Policy & Governance", text:"Maintain IT policies — acceptable use, password, data retention, mobile device, BYOD, and offboarding."},
      {label:"ERP Migration Support", text:"Serve as technical lead on the Acumatica-to-Odoo migration — data mapping, integrations, testing, cutover, and training."},
      {label:"Roadmap & Reporting", text:"Publish a quarterly technology roadmap and a monthly operations report to the CFO."}
    ],
    requiredQualifications: [
      "Bachelor's Degree in Computer Science, Information Technology, Information Systems, or a closely related field.",
      "Minimum 5 years of IT experience, with at least 2 years in a management or lead-engineer role.",
      "Hands-on experience administering Microsoft 365 or Google Workspace, a business ERP, and a cloud CRM.",
      "Working knowledge of networking — VLANs, routing, firewalls, VPN, wireless design — ideally on Ubiquiti UniFi.",
      "Strong cybersecurity fundamentals — identity, endpoint protection, backup, patching, phishing defence.",
      "Clear written English for policies, documentation, and user-facing communication.",
      "Valid Guyanese ID, driver's licence, and clean Police Clearance certificate."
    ],
    preferredQualifications: [
      "Prior experience in a real estate, construction, property management, or multi-site SMB environment.",
      "Experience administering Acumatica, Odoo, NetSuite, or another Tier-2 ERP.",
      "Hands-on experience with Hikvision or equivalent IP camera / VMS systems.",
      "Low-code / automation experience (Zapier, Make, Power Automate, Odoo Studio, Retool).",
      "Scripting ability in Python, PowerShell, or JavaScript.",
      "Relevant certifications — CompTIA Network+/Security+, UBWA/UBWS, Microsoft 365, AWS Cloud Practitioner."
    ],
    successMetrics: [
      "Critical-system uptime (ERP, email, camera VMS, site networks) of 99% or better.",
      "Helpdesk average resolution time under published SLA, 12 months running.",
      "Successful Acumatica-to-Odoo migration delivered on scope and on time.",
      "At least 3 automations per quarter delivered and documented.",
      "Zero material security incidents during tenure."
    ]
  },
  // ── Property Management ──
  {
    id: "property-manager",
    title: "Property Manager",
    tagline: "Day-to-day steward of the community after the last house closes.",
    department: "Property Management / HOA Services",
    reportsTo: "General Manager / HOA Board",
    type: "Full-Time, Permanent",
    location: "Windsor Estates, Georgetown, Guyana",
    priority: "high",
    brief: "Responsible for day-to-day operation of Windsor communities once homes are occupied. Manage common-area maintenance, vendor contracts, HOA dues collection, resident communications, rule enforcement, and the overall resident experience.",
    summary: "The Property Manager is responsible for the day-to-day operation of Windsor Estates, Windsor Laguna, and future Windsor communities once homes are occupied. This role serves as the operating arm of the Windsor Estates HOA and Windsor Laguna HOA.",
    responsibilities: [
      {label:"Common-Area Operations", text:"Manage landscaping, street cleaning, drainage, lighting, signage, gatehouse, and amenity upkeep; maintain a rolling maintenance schedule."},
      {label:"Vendor Management", text:"Contract, supervise, and evaluate vendors — landscaping, pest control, janitorial, pool/pond service, generator service, road maintenance."},
      {label:"HOA Dues & Collections", text:"Administer HOA dues billing; follow up on delinquencies per HOA policy; escalate to Legal where required."},
      {label:"Resident Communications", text:"Serve as the primary point of contact for resident inquiries, complaints, and requests."},
      {label:"Rule Enforcement", text:"Enforce HOA by-laws and community guidelines — parking, pets, noise, short-term rentals, architectural modifications — consistently."},
      {label:"Architectural Review", text:"Receive and process ARC applications for additions, fences, paint colours, and exterior modifications."},
      {label:"Security Liaison", text:"Work daily with the Security Manager on post structure, visitor access, and incident response."},
      {label:"Budget & Reporting", text:"Prepare the annual HOA operating budget; present monthly operations report and quarterly financials to the HOA Board."},
      {label:"Reserve Study", text:"Partner with the CFO on reserve studies and capital-replacement planning for roads, drainage, pump stations, gates, and amenities."},
      {label:"Handoff from Development", text:"Coordinate formal handoff of common areas from the Developer to the HOA."},
      {label:"Events & Community", text:"Organize resident events that reinforce Windsor's reputation as the most prestigious place to live."}
    ],
    requiredQualifications: [
      "Bachelor's Degree in Business, Real Estate, Hospitality, Facilities Management, or a related field.",
      "Minimum 5 years of property management, facilities management, or hospitality operations experience, with at least 2 years in a leadership role.",
      "Strong written English for resident letters, notices, board packs, and policy drafting.",
      "Proficient in Microsoft Excel, Word, and Outlook; comfortable with a PM or ERP system.",
      "High-integrity, resident-facing disposition — calm under pressure, diplomatic, and consistent.",
      "Valid Guyanese ID, driver's licence, and ownership of a reliable vehicle."
    ],
    preferredQualifications: [
      "Prior experience managing a master-planned community, gated community, condominium, or resort.",
      "Familiarity with HOA governance principles and Guyana's relevant community association practice.",
      "Exposure to Buildium, AppFolio, Condo Control, or an Odoo/Acumatica property module.",
      "Background in hospitality operations at a 4- or 5-star property.",
      "Experience running architectural review processes."
    ],
    successMetrics: [
      "HOA dues collection rate of 95% or better within 60 days of billing.",
      "Operating expense management held within 3% of approved annual HOA budget.",
      "Resident satisfaction score of 4.5 / 5 or higher on an annual survey.",
      "100% of common-area PM activities completed on schedule.",
      "Zero material governance failures — all HOA meetings held, minutes issued, board packs delivered on time."
    ]
  }
];

// Department groupings for display
const DEPARTMENTS = [
  { name: "Sales & Marketing", roles: ["marketing-social-media-coordinator", "sales-manager", "new-home-sales-representative"] },
  { name: "Construction & Civil Works", roles: ["assistant-project-manager", "civil-works-coordinator"] },
  { name: "Finance & Accounting", roles: ["bookkeeper", "controller"] },
  { name: "Customer Service", roles: ["customer-service-representative", "customer-service-manager"] },
  { name: "Technology", roles: ["it-manager"] },
  { name: "Security", roles: ["security-officer", "security-manager"] },
  { name: "Design & Technical", roles: ["draftsman"] },
  { name: "Equipment & Fleet", roles: ["equipment-manager", "diesel-mechanic"] },
  { name: "Administration", roles: ["administrative-assistant"] },
  { name: "Property Management", roles: ["property-manager"] },
];

if (typeof module !== 'undefined') module.exports = { ROLES, DEPARTMENTS };
