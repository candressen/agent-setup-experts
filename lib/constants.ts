export const SITE = {
  name: 'Agent Setup Experts',
  tagline: 'Your First ASE Workflows, Live in 48 Hours.',
  url: 'https://agentsetupexperts.com',
  email: 'hello@agentsetupexperts.com',
  phone: '704-490-9493',
  location: 'Miami, Florida',
  calendlyUrl: 'https://calendly.com/agentsetupexperts/30min?redirect_url=https://agentsetupexperts.com/thank-you',
}

export const COLORS = {
  accent: '#2563EB',
  accentHover: '#1d4ed8',
  bg: '#0a0a0a',
  surface: 'rgba(255,255,255,0.04)',
  border: 'rgba(255,255,255,0.08)',
  textPrimary: '#ffffff',
  textSecondary: 'rgba(255,255,255,0.60)',
}

export const SERVICES_NAV = {
  label: 'Services',
  href: '/services',
  children: [{ label: 'Agent Library', href: '/library' }],
} as const

export const NAV_LINKS = [
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
] as const

export const LOGO_PATH = '/logos/logo-full.svg'

export const HOME_ANNOUNCEMENT_TEXT = 'First Workflows Live in 48 Hours'

export const EQUIPMENT_NOTE = {
  label: 'Equipment sold separately',
  description:
    'Required hardware is not included in any plan. Equipment starts at $400 one-time, and you keep the equipment.',
} as const

export const EARLY_CANCEL_NOTE =
  'Plans are structured around a 12-month agreement. If you cancel early, the remaining unpaid setup balance becomes due.'

export const PRICING_TIERS = [
  {
    id: 'starter',
    name: 'Starter Library',
    price: '$3,000',
    priceNote: 'setup price for 5 library agents',
    monthlyPrice: '$400/mo',
    monthlyNote: '$400/month, cancel anytime',
    financedTotal: '$2,600',
    headline: 'Start with the core workflows that save time fastest',
    description:
      'Best for businesses that want ASE to install a focused starter stack from the library and get the first five agents live cleanly.',
    includes: [
      '5 ASE library agents installed',
      'First workflows launched within 48 hours of approved scope',
      'Connections to your key tools and inboxes',
      'Team handoff and operating guidance',
      '24/7 live support',
    ],
    cta: 'Book a Strategy Call',
    highlight: false,
  },
  {
    id: 'growth',
    name: 'Growth Library',
    price: '$5,000',
    priceNote: 'setup price for 10 library agents',
    monthlyPrice: '$600/mo',
    monthlyNote: '$600/month, cancel anytime',
    financedTotal: '$3,900',
    headline: 'Build a fuller operating system around your team',
    description:
      'Best for businesses ready to launch a broader library stack across lead handling, follow-up, support, reporting, and admin workflows.',
    includes: [
      '10 ASE library agents installed',
      '1 fully custom-built agent flow',
      'Core stack launched fast, then expanded across sales, ops, and support',
      'Business tool integrations and approvals',
      'Launch guidance for your team',
      '24/7 live support',
    ],
    cta: 'Book a Strategy Call',
    highlight: true,
  },
  {
    id: 'custom',
    name: 'Custom Unlimited',
    price: '$14,000',
    priceNote: 'setup price for unlimited library + custom-built agents',
    monthlyPrice: '$1,500/mo',
    monthlyNote: '$1,500/month, cancel anytime',
    financedTotal: '$13,000',
    headline: 'Unlimited library coverage plus custom agent builds',
    description:
      'Best for teams that want ASE to deploy the library broadly, add custom agents, and architect a more tailored AI operating layer.',
    includes: [
      'Unlimited ASE library agents installed',
      '5 custom-built agent flows',
      'Phased rollout for broader library coverage plus custom workflows',
      'Advanced workflow design and systems integration',
      'Team training and rollout support',
      '24/7 live support',
    ],
    cta: 'Book a Strategy Call',
    highlight: false,
  },
] as const

export const API_DISCLAIMER = 'Note: OpenAI, Anthropic (Claude), and other AI provider API fees are not included and billed separately based on your usage. <a href="/blog/understanding-ai-api-costs">Learn how API pricing works →</a>'
