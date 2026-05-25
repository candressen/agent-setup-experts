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

export type AgentFilterOption<T extends string> = {
  value: T
  label: string
  description: string
}

export type AgentLibraryItem = {
  slug: string
  name: string
  description: string
  summary: string
  role: AgentRole
  industries: AgentIndustry[]
  bestFor: string[]
  delivers: string[]
  connectsTo: string[]
  iconSlug: string
  visualId: string
  image: string
}

export const AGENT_ROLE_OPTIONS: AgentFilterOption<AgentRole>[] = [
  {
    value: 'Marketing',
    label: 'Marketing',
    description: 'Growth, promotions, retention, reviews, and content workflows.',
  },
  {
    value: 'Operations',
    label: 'Operations',
    description: 'Scheduling, intake, routing, documentation, and process execution.',
  },
  {
    value: 'Sales',
    label: 'Sales',
    description: 'Lead capture, follow-up, qualification, proposals, and CRM handoff.',
  },
  {
    value: 'Support',
    label: 'Support',
    description: 'Customer communication, FAQs, status updates, and service coordination.',
  },
  {
    value: 'Finance',
    label: 'Finance',
    description: 'Invoices, collections, expense coding, billing, and reporting support.',
  },
  {
    value: 'Recruiting',
    label: 'Recruiting',
    description: 'Hiring workflows, candidate screening, interview scheduling, and follow-up.',
  },
  {
    value: 'Executive',
    label: 'Executive',
    description: 'Owner briefings, KPI summaries, meeting recaps, and leadership visibility.',
  },
]

export const AGENT_INDUSTRY_OPTIONS: AgentFilterOption<AgentIndustry>[] = [
  {
    value: 'Accounting',
    label: 'Accounting',
    description: 'Client service, bookkeeping, tax prep, and recurring compliance workflows.',
  },
  {
    value: 'Law',
    label: 'Law',
    description: 'Intake, document collection, consultation booking, and matter communication.',
  },
  {
    value: 'Real Estate',
    label: 'Real Estate',
    description: 'Property inquiries, listing follow-up, tenant screening, and transaction admin.',
  },
  {
    value: 'Med Spa',
    label: 'Med Spa',
    description: 'Bookings, rebooking, no-show recovery, and client nurture workflows.',
  },
  {
    value: 'Restaurant',
    label: 'Restaurant',
    description: 'Reservations, guest messaging, review capture, and team coordination.',
  },
  {
    value: 'Home Services',
    label: 'Home Services',
    description: 'Lead response, estimate follow-up, dispatch coordination, and review generation.',
  },
  {
    value: 'Consulting',
    label: 'Consulting',
    description: 'Discovery, proposals, client delivery, invoicing, and renewal support.',
  },
  {
    value: 'General',
    label: 'General',
    description: 'Cross-industry workflows that fit most small service businesses.',
  },
]

export const AGENT_ROLE_FILTERS: AgentRole[] = AGENT_ROLE_OPTIONS.map((item) => item.value)

export const AGENT_INDUSTRY_FILTERS: AgentIndustry[] = AGENT_INDUSTRY_OPTIONS.map(
  (item) => item.value,
)

export const AGENT_LIBRARY_PAGE_COPY = {
  eyebrow: 'ASE agent library',
  heading: 'ASE library agents built for real business workflows',
  subheading:
    'Browse the install-ready agent catalog, choose the workflows you want first, and let ASE deploy them around your tools, approvals, and team.',
} as const

const createAgent = ({
  slug,
  iconSlug,
  ...agent
}: Omit<AgentLibraryItem, 'image' | 'visualId' | 'iconSlug' | 'summary' | 'bestFor' | 'delivers' | 'connectsTo'> & {
  iconSlug?: string
  summary?: string
  bestFor?: string[]
  delivers?: string[]
  connectsTo?: string[]
}): AgentLibraryItem => {
  const resolvedIconSlug = iconSlug ?? slug

  return {
    ...agent,
    slug,
    summary: agent.summary ?? agent.description,
    bestFor: agent.bestFor ?? agent.industries,
    delivers: agent.delivers ?? ['Configured workflow', 'ASE setup', 'Team-ready handoff'],
    connectsTo: agent.connectsTo ?? ['Email', 'Calendar', 'Forms'],
    iconSlug: resolvedIconSlug,
    visualId: `icon-${resolvedIconSlug}`,
    image: `/agent-library-icons/${resolvedIconSlug}.png`,
  }
}

export const AGENT_LIBRARY: AgentLibraryItem[] = [

  createAgent({
    slug: 'google-ads-manager-agent',
    name: 'Google Ads Manager Agent',
    description: 'Monitors campaign performance, flags spend issues, and prepares optimization actions for Google Ads accounts.',
    summary: 'Keeps Google Ads reporting, checks, and optimization tasks moving on a steady rhythm.',
    role: 'Marketing',
    industries: ['General', 'Consulting', 'Home Services'],
    iconSlug: 'weekly-kpi-brief-agent',
    bestFor: ['Lead-gen campaigns', 'Agency reporting', 'Owner visibility'],
    delivers: ['Performance summaries', 'Budget alerts', 'Optimization task lists'],
    connectsTo: ['Google Ads', 'GA4', 'Sheets'],
  }),
  createAgent({
    slug: 'facebook-ads-manager-agent',
    name: 'Facebook Ads Manager Agent',
    description: 'Tracks Meta campaign performance, surfaces creative and funnel issues, and organizes next-step recommendations.',
    summary: 'Turns noisy Meta ads data into practical updates your team can act on quickly.',
    role: 'Marketing',
    industries: ['General', 'Med Spa', 'Real Estate'],
    iconSlug: 'social-caption-agent',
    bestFor: ['Meta lead campaigns', 'Creative reporting', 'Fast-moving offers'],
    delivers: ['Performance digests', 'Creative watchouts', 'Lead quality notes'],
    connectsTo: ['Meta Ads', 'Lead forms', 'CRM'],
  }),
  createAgent({
    slug: 'graphic-designer-agent',
    name: 'Graphic Designer Agent',
    description: 'Builds on-brand visual drafts and marketing asset requests so your team can move faster on promotions.',
    summary: 'Supports repeatable creative production for offers, promos, and internal requests.',
    role: 'Marketing',
    industries: ['General', 'Restaurant', 'Med Spa'],
    iconSlug: 'content-repurposing-agent',
    bestFor: ['Promo graphics', 'Campaign support', 'Brand consistency'],
    delivers: ['Creative briefs', 'Draft asset sets', 'Revision-ready handoff'],
    connectsTo: ['Brand files', 'Drive', 'Design tools'],
  }),
  createAgent({
    slug: 'video-creator-agent',
    name: 'Video Creator Agent',
    description: 'Turns offers, footage, and talking points into draft short-form video concepts, scripts, and production checklists.',
    summary: 'Helps the team publish more video content without rebuilding the process every week.',
    role: 'Marketing',
    industries: ['General', 'Med Spa', 'Real Estate'],
    iconSlug: 'social-caption-agent',
    bestFor: ['Short-form content', 'Offer promos', 'Repurposed founder content'],
    delivers: ['Video hooks', 'Script drafts', 'Shot lists'],
    connectsTo: ['Drive', 'Content calendar', 'Editing tools'],
  }),
  createAgent({
    slug: 'social-media-posting-agent',
    name: 'Social Media Posting Agent',
    description: 'Schedules approved posts, keeps the calendar organized, and maintains a steady publishing rhythm across channels.',
    summary: 'Takes approved content from draft to scheduled post without manual shuffling.',
    role: 'Marketing',
    industries: ['General', 'Restaurant', 'Med Spa'],
    iconSlug: 'social-caption-agent',
    bestFor: ['Multi-channel posting', 'Content ops', 'Consistent publishing'],
    delivers: ['Posting schedules', 'Channel checklists', 'Publishing confirmations'],
    connectsTo: ['Instagram', 'Facebook', 'Scheduling tools'],
  }),
  createAgent({
    slug: 'voice-calling-agent',
    name: 'Voice Calling Agent',
    description: 'Handles scripted outbound or inbound voice workflows like follow-up calls, reminders, and basic qualification.',
    summary: 'Adds a voice layer for repetitive phone workflows while keeping escalation paths clear.',
    role: 'Sales',
    industries: ['Home Services', 'Law', 'General'],
    iconSlug: 'missed-call-text-back-agent',
    bestFor: ['Reminder calls', 'Lead qualification', 'Call overflow'],
    delivers: ['Call outcomes', 'Disposition notes', 'Escalation handoff'],
    connectsTo: ['Phone system', 'CRM', 'Calendar'],
  }),
  createAgent({
    slug: 'customer-support-agent',
    name: 'Customer Support Agent',
    description: 'Handles routine customer questions, routes edge cases, and keeps service updates moving without burying the team.',
    summary: 'Creates a dependable first line of customer support across common service channels.',
    role: 'Support',
    industries: ['General', 'Restaurant', 'Home Services'],
    iconSlug: 'faq-support-agent',
    bestFor: ['FAQ coverage', 'Status requests', 'Support triage'],
    delivers: ['Resolved routine tickets', 'Escalation routing', 'Customer-ready replies'],
    connectsTo: ['Shared inbox', 'Chat', 'Knowledge base'],
  }),
  createAgent({
    slug: 'website-developer-agent',
    name: 'Website Developer Agent',
    description: 'Prepares page updates, content change requests, and structured implementation tasks for ongoing website work.',
    summary: 'Keeps smaller website improvements organized so nothing stalls between idea and launch.',
    role: 'Operations',
    industries: ['General', 'Consulting', 'Real Estate'],
    iconSlug: 'website-lead-capture-agent',
    bestFor: ['Landing page updates', 'Site QA', 'Content implementation'],
    delivers: ['Build-ready specs', 'Update queues', 'Launch checklists'],
    connectsTo: ['CMS', 'Analytics', 'Forms'],
  }),
  createAgent({
    slug: 'app-developer-agent',
    name: 'App Developer Agent',
    description: 'Organizes feature specs, QA feedback, and implementation tasks for internal tools or customer-facing app workflows.',
    summary: 'Supports ongoing product execution with cleaner specs, faster handoff, and tighter delivery loops.',
    role: 'Operations',
    industries: ['General', 'Consulting'],
    iconSlug: 'sop-builder-agent',
    bestFor: ['Internal tools', 'Feature delivery', 'QA coordination'],
    delivers: ['Feature briefs', 'Acceptance criteria', 'Release notes drafts'],
    connectsTo: ['Project tracker', 'Docs', 'Feedback forms'],
  }),
  createAgent({
    slug: 'email-organizer',
    name: 'Email Organizer',
    description: 'Sorts inbound email into action buckets so owners stop living in their inbox.',
    role: 'Operations',
    industries: ['General', 'Consulting'],
  }),
  createAgent({
    slug: 'meeting-notes-agent',
    name: 'Meeting Notes Agent',
    description: 'Turns calls into tidy summaries, next steps, and follow-up reminders.',
    role: 'Executive',
    industries: ['General', 'Consulting'],
  }),
  createAgent({
    slug: 'inbox-triage-assistant',
    name: 'Inbox Triage Assistant',
    description: 'Flags urgent messages, routes routine ones, and keeps the queue under control.',
    role: 'Support',
    industries: ['General', 'Law'],
  }),
  createAgent({
    slug: 'lead-follow-up-agent',
    name: 'Lead Follow-Up Agent',
    description: 'Sends timely outreach so new leads do not go cold after first contact.',
    role: 'Sales',
    industries: ['General', 'Consulting'],
  }),
  createAgent({
    slug: 'crm-update-agent',
    name: 'CRM Update Agent',
    description: 'Pushes call notes and contact updates into your CRM without manual data entry.',
    role: 'Sales',
    industries: ['General', 'Real Estate'],
  }),
  createAgent({
    slug: 'appointment-reminder-agent',
    name: 'Appointment Reminder Agent',
    description: 'Sends reminders and confirmations to reduce no-shows before the calendar slips.',
    role: 'Operations',
    industries: ['Med Spa', 'Law', 'General'],
  }),
  createAgent({
    slug: 'review-request-agent',
    name: 'Review Request Agent',
    description: 'Requests fresh reviews after completed service while the experience is still warm.',
    role: 'Marketing',
    industries: ['Home Services', 'Restaurant', 'Med Spa'],
  }),
  createAgent({
    slug: 'proposal-drafting-agent',
    name: 'Proposal Drafting Agent',
    description: 'Builds a clean first draft proposal from call notes, pricing, and scope.',
    role: 'Sales',
    industries: ['Consulting', 'Home Services'],
  }),
  createAgent({
    slug: 'call-summary-agent',
    name: 'Call Summary Agent',
    description: 'Packages every sales or client call into a short recap your team can actually use.',
    role: 'Executive',
    industries: ['General', 'Consulting'],
  }),
  createAgent({
    slug: 'sales-pipeline-agent',
    name: 'Sales Pipeline Agent',
    description: 'Watches stalled deals and prompts the next move so pipeline reviews stay honest.',
    role: 'Sales',
    industries: ['General', 'Consulting'],
  }),
  createAgent({
    slug: 'missed-call-text-back-agent',
    name: 'Missed Call Text-Back Agent',
    description: 'Texts back after missed calls to capture leads when the front desk is busy.',
    role: 'Support',
    industries: ['Home Services', 'Med Spa', 'Law'],
  }),
  createAgent({
    slug: 'faq-support-agent',
    name: 'FAQ Support Agent',
    description: 'Answers common customer questions with approved business information and guardrails.',
    role: 'Support',
    industries: ['General', 'Restaurant'],
  }),
  createAgent({
    slug: 'estimate-follow-up-agent',
    name: 'Estimate Follow-Up Agent',
    description: 'Checks in on open estimates so quoted jobs have a better chance of closing.',
    role: 'Sales',
    industries: ['Home Services'],
  }),
  createAgent({
    slug: 'document-chaser-agent',
    name: 'Document Chaser Agent',
    description: 'Reminds clients to send forms, IDs, and paperwork before work gets delayed.',
    role: 'Operations',
    industries: ['Accounting', 'Law', 'Real Estate'],
  }),
  createAgent({
    slug: 'billing-reminder-agent',
    name: 'Billing Reminder Agent',
    description: 'Sends polite payment reminders so balances do not age quietly in the background.',
    role: 'Finance',
    industries: ['Accounting', 'Consulting', 'General'],
  }),
  createAgent({
    slug: 'expense-categorizer',
    name: 'Expense Categorizer',
    description: 'Sorts transactions into bookkeeping buckets for faster month-end cleanup.',
    role: 'Finance',
    industries: ['Accounting', 'General'],
  }),
  createAgent({
    slug: 'invoice-prep-agent',
    name: 'Invoice Prep Agent',
    description: 'Builds draft invoices from completed work so finance can review and send faster.',
    role: 'Finance',
    industries: ['Consulting', 'Home Services'],
  }),
  createAgent({
    slug: 'accounts-receivable-agent',
    name: 'Accounts Receivable Agent',
    description: 'Tracks overdue invoices and schedules steady follow-up without sounding robotic.',
    role: 'Finance',
    industries: ['Accounting', 'Consulting', 'General'],
  }),
  createAgent({
    slug: 'tenant-inquiry-agent',
    name: 'Tenant Inquiry Agent',
    description: 'Screens rental inquiries and routes serious tenants to the right next step.',
    role: 'Support',
    industries: ['Real Estate'],
  }),
  createAgent({
    slug: 'listing-inquiry-agent',
    name: 'Listing Inquiry Agent',
    description: 'Replies to property inquiries fast so brokers do not lose momentum with new buyers.',
    role: 'Sales',
    industries: ['Real Estate'],
  }),
  createAgent({
    slug: 'intake-screener-agent',
    name: 'Intake Screener Agent',
    description: 'Collects intake details and qualifies new matters before staff spend billable time.',
    role: 'Operations',
    industries: ['Law'],
  }),
  createAgent({
    slug: 'consultation-booking-agent',
    name: 'Consultation Booking Agent',
    description: 'Moves interested prospects from inquiry to booked consultation with fewer handoffs.',
    role: 'Sales',
    industries: ['Law', 'Consulting', 'Med Spa'],
  }),
  createAgent({
    slug: 'case-update-assistant',
    name: 'Case Update Assistant',
    description: 'Prepares client-ready case updates from internal notes so staff answer fewer status calls.',
    role: 'Support',
    industries: ['Law'],
  }),
  createAgent({
    slug: 'med-spa-rebooking-agent',
    name: 'Med Spa Rebooking Agent',
    description: 'Prompts guests to book their next visit before retention slips between treatments.',
    role: 'Marketing',
    industries: ['Med Spa'],
  }),
  createAgent({
    slug: 'no-show-rescue-agent',
    name: 'No-Show Rescue Agent',
    description: 'Follows up after missed appointments and offers an easy path back onto the calendar.',
    role: 'Operations',
    industries: ['Med Spa', 'Law', 'Restaurant'],
  }),
  createAgent({
    slug: 'menu-reservation-assistant',
    name: 'Menu & Reservation Assistant',
    description: 'Handles menu questions and reservation nudges so service teams can stay focused on guests.',
    role: 'Support',
    industries: ['Restaurant'],
  }),
  createAgent({
    slug: 'social-caption-agent',
    name: 'Social Caption Agent',
    description: 'Turns promos, photos, and events into usable social captions for the week ahead.',
    role: 'Marketing',
    industries: ['Restaurant', 'Med Spa', 'Real Estate'],
  }),
  createAgent({
    slug: 'content-repurposing-agent',
    name: 'Content Repurposing Agent',
    description: 'Reworks one long asset into posts, emails, and short snippets your team can publish.',
    role: 'Marketing',
    industries: ['Consulting', 'General'],
  }),
  createAgent({
    slug: 'sop-builder-agent',
    name: 'SOP Builder Agent',
    description: 'Turns voice notes and team process docs into cleaner SOP drafts for review.',
    role: 'Operations',
    industries: ['General', 'Home Services'],
  }),
  createAgent({
    slug: 'recruiting-coordinator-agent',
    name: 'Recruiting Coordinator Agent',
    description: 'Keeps interviews, candidate follow-ups, and scheduling from falling through the cracks.',
    role: 'Recruiting',
    industries: ['General', 'Restaurant', 'Home Services'],
  }),
  createAgent({
    slug: 'job-posting-agent',
    name: 'Job Posting Agent',
    description: 'Drafts role posts and adapts them for multiple hiring channels in one pass.',
    role: 'Recruiting',
    industries: ['General', 'Restaurant'],
  }),
  createAgent({
    slug: 'candidate-screening-agent',
    name: 'Candidate Screening Agent',
    description: 'Summarizes applicant fit against your hiring criteria before interviews begin.',
    role: 'Recruiting',
    industries: ['General', 'Home Services'],
  }),
  createAgent({
    slug: 'weekly-kpi-brief-agent',
    name: 'Weekly KPI Brief Agent',
    description: 'Packages core numbers into a short owner update instead of another messy spreadsheet.',
    role: 'Executive',
    industries: ['General', 'Consulting'],
  }),
  createAgent({
    slug: 'owner-daily-brief-agent',
    name: 'Owner Daily Brief Agent',
    description: 'Delivers a plain-English digest of priorities, bookings, leads, and follow-ups each morning.',
    role: 'Executive',
    industries: ['General', 'Home Services'],
  }),
  createAgent({
    slug: 'website-lead-capture-agent',
    name: 'Website Lead Capture Agent',
    description: 'Qualifies inbound website leads and captures the details your team needs to respond fast.',
    role: 'Sales',
    industries: ['General', 'Law', 'Home Services'],
  }),
  createAgent({
    slug: 'renewal-reminder-agent',
    name: 'Renewal Reminder Agent',
    description: 'Sends renewal and check-in prompts before contracts or subscriptions quietly lapse.',
    role: 'Support',
    industries: ['Consulting', 'Accounting', 'General'],
  }),
  createAgent({
    slug: 'bookkeeping-cleanup-agent',
    name: 'Bookkeeping Cleanup Agent',
    description: 'Flags uncategorized transactions and missing notes before month-end turns into a scramble.',
    role: 'Finance',
    industries: ['Accounting', 'General'],
  }),
  createAgent({
    slug: 'referral-request-agent',
    name: 'Referral Request Agent',
    description: 'Asks happy clients for introductions while the value of the engagement is still fresh.',
    role: 'Marketing',
    industries: ['Consulting', 'Accounting', 'Home Services'],
  }),
  createAgent({
    slug: 'dispatch-coordinator-agent',
    name: 'Dispatch Coordinator Agent',
    description: 'Keeps field teams updated on job details, delays, and customer notes throughout the day.',
    role: 'Operations',
    industries: ['Home Services'],
  }),
  createAgent({
    slug: 'new-client-onboarding-agent',
    name: 'New Client Onboarding Agent',
    description: 'Collects kickoff details, forms, and expectations so new accounts start cleanly.',
    role: 'Operations',
    industries: ['Consulting', 'Accounting', 'General'],
  }),
  createAgent({
    slug: 'candidate-follow-up-agent',
    name: 'Candidate Follow-Up Agent',
    description: 'Keeps promising applicants warm between screening, interviews, and offer decisions.',
    role: 'Recruiting',
    industries: ['General', 'Restaurant', 'Home Services'],
  }),
]
