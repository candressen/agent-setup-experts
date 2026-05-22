export type AgentRole =
  | 'Marketing'
  | 'Operations'
  | 'Sales'
  | 'Support'
  | 'Finance'
  | 'Recruiting'
  | 'Executive'

export type AgentIndustry =
  | 'Accounting'
  | 'Law'
  | 'Real Estate'
  | 'Med Spa'
  | 'Restaurant'
  | 'Home Services'
  | 'Consulting'
  | 'General'

export type AgentLibraryItem = {
  slug: string
  name: string
  description: string
  role: AgentRole
  industries: AgentIndustry[]
  image: string
}

export const AGENT_ROLE_FILTERS: AgentRole[] = [
  'Marketing',
  'Operations',
  'Sales',
  'Support',
  'Finance',
  'Recruiting',
  'Executive',
]

export const AGENT_INDUSTRY_FILTERS: AgentIndustry[] = [
  'Accounting',
  'Law',
  'Real Estate',
  'Med Spa',
  'Restaurant',
  'Home Services',
  'Consulting',
  'General',
]

export const AGENT_LIBRARY: AgentLibraryItem[] = [
  {
    slug: 'email-organizer',
    name: 'Email Organizer',
    description: 'Sorts inbound email into action buckets so owners stop living in their inbox.',
    role: 'Operations',
    industries: ['General', 'Consulting'],
    image: '/agent-library-icons/email-organizer.png',
  },
  {
    slug: 'meeting-notes-agent',
    name: 'Meeting Notes Agent',
    description: 'Turns calls into tidy summaries, next steps, and follow-up reminders.',
    role: 'Executive',
    industries: ['General', 'Consulting'],
    image: '/agent-library-icons/meeting-notes-agent.png',
  },
  {
    slug: 'inbox-triage-assistant',
    name: 'Inbox Triage Assistant',
    description: 'Flags urgent messages, routes routine ones, and keeps the queue under control.',
    role: 'Support',
    industries: ['General', 'Law'],
    image: '/agent-library-icons/inbox-triage-assistant.png',
  },
  {
    slug: 'lead-follow-up-agent',
    name: 'Lead Follow-Up Agent',
    description: 'Sends timely outreach so new leads do not go cold after first contact.',
    role: 'Sales',
    industries: ['General', 'Consulting'],
    image: '/agent-library-icons/lead-follow-up-agent.png',
  },
  {
    slug: 'crm-update-agent',
    name: 'CRM Update Agent',
    description: 'Pushes call notes and contact updates into your CRM without manual data entry.',
    role: 'Sales',
    industries: ['General', 'Real Estate'],
    image: '/agent-library-icons/crm-update-agent.png',
  },
  {
    slug: 'appointment-reminder-agent',
    name: 'Appointment Reminder Agent',
    description: 'Sends reminders and confirmations to reduce no-shows before the calendar slips.',
    role: 'Operations',
    industries: ['Med Spa', 'Law', 'General'],
    image: '/agent-library-icons/appointment-reminder-agent.png',
  },
  {
    slug: 'review-request-agent',
    name: 'Review Request Agent',
    description: 'Requests fresh reviews after completed service while the experience is still warm.',
    role: 'Marketing',
    industries: ['Home Services', 'Restaurant', 'Med Spa'],
    image: '/agent-library-icons/review-request-agent.png',
  },
  {
    slug: 'proposal-drafting-agent',
    name: 'Proposal Drafting Agent',
    description: 'Builds a clean first draft proposal from call notes, pricing, and scope.',
    role: 'Sales',
    industries: ['Consulting', 'Home Services'],
    image: '/agent-library-icons/proposal-drafting-agent.png',
  },
  {
    slug: 'call-summary-agent',
    name: 'Call Summary Agent',
    description: 'Packages every sales or client call into a short recap your team can actually use.',
    role: 'Executive',
    industries: ['General', 'Consulting'],
    image: '/agent-library-icons/call-summary-agent.png',
  },
  {
    slug: 'sales-pipeline-agent',
    name: 'Sales Pipeline Agent',
    description: 'Watches stalled deals and prompts the next move so pipeline reviews stay honest.',
    role: 'Sales',
    industries: ['General', 'Consulting'],
    image: '/agent-library-icons/sales-pipeline-agent.png',
  },
  {
    slug: 'missed-call-text-back-agent',
    name: 'Missed Call Text-Back Agent',
    description: 'Texts back after missed calls to capture leads when the front desk is busy.',
    role: 'Support',
    industries: ['Home Services', 'Med Spa', 'Law'],
    image: '/agent-library-icons/missed-call-text-back-agent.png',
  },
  {
    slug: 'faq-support-agent',
    name: 'FAQ Support Agent',
    description: 'Answers common customer questions with approved business information and guardrails.',
    role: 'Support',
    industries: ['General', 'Restaurant'],
    image: '/agent-library-icons/faq-support-agent.png',
  },
  {
    slug: 'estimate-follow-up-agent',
    name: 'Estimate Follow-Up Agent',
    description: 'Checks in on open estimates so quoted jobs have a better chance of closing.',
    role: 'Sales',
    industries: ['Home Services'],
    image: '/agent-library-icons/estimate-follow-up-agent.png',
  },
  {
    slug: 'document-chaser-agent',
    name: 'Document Chaser Agent',
    description: 'Reminds clients to send forms, IDs, and paperwork before work gets delayed.',
    role: 'Operations',
    industries: ['Accounting', 'Law', 'Real Estate'],
    image: '/agent-library-icons/document-chaser-agent.png',
  },
  {
    slug: 'billing-reminder-agent',
    name: 'Billing Reminder Agent',
    description: 'Sends polite payment reminders so balances do not age quietly in the background.',
    role: 'Finance',
    industries: ['Accounting', 'Consulting', 'General'],
    image: '/agent-library-icons/billing-reminder-agent.png',
  },
  {
    slug: 'expense-categorizer',
    name: 'Expense Categorizer',
    description: 'Sorts transactions into bookkeeping buckets for faster month-end cleanup.',
    role: 'Finance',
    industries: ['Accounting', 'General'],
    image: '/agent-library-icons/expense-categorizer.png',
  },
  {
    slug: 'invoice-prep-agent',
    name: 'Invoice Prep Agent',
    description: 'Builds draft invoices from completed work so finance can review and send faster.',
    role: 'Finance',
    industries: ['Consulting', 'Home Services'],
    image: '/agent-library-icons/invoice-prep-agent.png',
  },
  {
    slug: 'accounts-receivable-agent',
    name: 'Accounts Receivable Agent',
    description: 'Tracks overdue invoices and schedules steady follow-up without sounding robotic.',
    role: 'Finance',
    industries: ['Accounting', 'Consulting', 'General'],
    image: '/agent-library-icons/accounts-receivable-agent.png',
  },
  {
    slug: 'tenant-inquiry-agent',
    name: 'Tenant Inquiry Agent',
    description: 'Screens rental inquiries and routes serious tenants to the right next step.',
    role: 'Support',
    industries: ['Real Estate'],
    image: '/agent-library-icons/tenant-inquiry-agent.png',
  },
  {
    slug: 'listing-inquiry-agent',
    name: 'Listing Inquiry Agent',
    description: 'Replies to property inquiries fast so brokers do not lose momentum with new buyers.',
    role: 'Sales',
    industries: ['Real Estate'],
    image: '/agent-library-icons/listing-inquiry-agent.png',
  },
  {
    slug: 'intake-screener-agent',
    name: 'Intake Screener Agent',
    description: 'Collects intake details and qualifies new matters before staff spend billable time.',
    role: 'Operations',
    industries: ['Law'],
    image: '/agent-library-icons/intake-screener-agent.png',
  },
  {
    slug: 'consultation-booking-agent',
    name: 'Consultation Booking Agent',
    description: 'Moves interested prospects from inquiry to booked consultation with fewer handoffs.',
    role: 'Sales',
    industries: ['Law', 'Consulting', 'Med Spa'],
    image: '/agent-library-icons/consultation-booking-agent.png',
  },
  {
    slug: 'case-update-assistant',
    name: 'Case Update Assistant',
    description: 'Prepares client-ready case updates from internal notes so staff answer fewer status calls.',
    role: 'Support',
    industries: ['Law'],
    image: '/agent-library-icons/case-update-assistant.png',
  },
  {
    slug: 'med-spa-rebooking-agent',
    name: 'Med Spa Rebooking Agent',
    description: 'Prompts guests to book their next visit before retention slips between treatments.',
    role: 'Marketing',
    industries: ['Med Spa'],
    image: '/agent-library-icons/med-spa-rebooking-agent.png',
  },
  {
    slug: 'no-show-rescue-agent',
    name: 'No-Show Rescue Agent',
    description: 'Follows up after missed appointments and offers an easy path back onto the calendar.',
    role: 'Operations',
    industries: ['Med Spa', 'Law', 'Restaurant'],
    image: '/agent-library-icons/no-show-rescue-agent.png',
  },
  {
    slug: 'menu-reservation-assistant',
    name: 'Menu & Reservation Assistant',
    description: 'Handles menu questions and reservation nudges so service teams can stay focused on guests.',
    role: 'Support',
    industries: ['Restaurant'],
    image: '/agent-library-icons/menu-reservation-assistant.png',
  },
  {
    slug: 'social-caption-agent',
    name: 'Social Caption Agent',
    description: 'Turns promos, photos, and events into usable social captions for the week ahead.',
    role: 'Marketing',
    industries: ['Restaurant', 'Med Spa', 'Real Estate'],
    image: '/agent-library-icons/social-caption-agent.png',
  },
  {
    slug: 'content-repurposing-agent',
    name: 'Content Repurposing Agent',
    description: 'Reworks one long asset into posts, emails, and short snippets your team can publish.',
    role: 'Marketing',
    industries: ['Consulting', 'General'],
    image: '/agent-library-icons/content-repurposing-agent.png',
  },
  {
    slug: 'sop-builder-agent',
    name: 'SOP Builder Agent',
    description: 'Turns voice notes and team process docs into cleaner SOP drafts for review.',
    role: 'Operations',
    industries: ['General', 'Home Services'],
    image: '/agent-library-icons/sop-builder-agent.png',
  },
  {
    slug: 'recruiting-coordinator-agent',
    name: 'Recruiting Coordinator Agent',
    description: 'Keeps interviews, candidate follow-ups, and scheduling from falling through the cracks.',
    role: 'Recruiting',
    industries: ['General', 'Restaurant', 'Home Services'],
    image: '/agent-library-icons/recruiting-coordinator-agent.png',
  },
  {
    slug: 'job-posting-agent',
    name: 'Job Posting Agent',
    description: 'Drafts role posts and adapts them for multiple hiring channels in one pass.',
    role: 'Recruiting',
    industries: ['General', 'Restaurant'],
    image: '/agent-library-icons/job-posting-agent.png',
  },
  {
    slug: 'candidate-screening-agent',
    name: 'Candidate Screening Agent',
    description: 'Summarizes applicant fit against your hiring criteria before interviews begin.',
    role: 'Recruiting',
    industries: ['General', 'Home Services'],
    image: '/agent-library-icons/candidate-screening-agent.png',
  },
  {
    slug: 'weekly-kpi-brief-agent',
    name: 'Weekly KPI Brief Agent',
    description: 'Packages core numbers into a short owner update instead of another messy spreadsheet.',
    role: 'Executive',
    industries: ['General', 'Consulting'],
    image: '/agent-library-icons/weekly-kpi-brief-agent.png',
  },
  {
    slug: 'owner-daily-brief-agent',
    name: 'Owner Daily Brief Agent',
    description: 'Delivers a plain-English digest of priorities, bookings, leads, and follow-ups each morning.',
    role: 'Executive',
    industries: ['General', 'Home Services'],
    image: '/agent-library-icons/owner-daily-brief-agent.png',
  },
  {
    slug: 'website-lead-capture-agent',
    name: 'Website Lead Capture Agent',
    description: 'Qualifies inbound website leads and captures the details your team needs to respond fast.',
    role: 'Sales',
    industries: ['General', 'Law', 'Home Services'],
    image: '/agent-library-icons/website-lead-capture-agent.png',
  },
  {
    slug: 'renewal-reminder-agent',
    name: 'Renewal Reminder Agent',
    description: 'Sends renewal and check-in prompts before contracts or subscriptions quietly lapse.',
    role: 'Support',
    industries: ['Consulting', 'Accounting', 'General'],
    image: '/agent-library-icons/renewal-reminder-agent.png',
  },
]
