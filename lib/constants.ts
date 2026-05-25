export const SITE = {
  name: 'Agent Setup Experts',
  tagline: 'Your Business. Running on AI. In 48 Hours.',
  url: 'https://agentsetupexperts.com',
  email: 'agentsetupexperts@gmail.com',
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

export const NAV_LINKS = [
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Library', href: '/library' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export const LOGO_PATH = '/logos/logo-full.svg'

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
    price: '$2,000',
    priceNote: 'setup price for 5 library agents',
    monthlyPrice: '$217/mo',
    monthlyNote: '$2,600 financed total, split across 12 months',
    financedTotal: '$2,600',
    headline: 'Start with the core workflows that save time fastest',
    description:
      'Best for businesses that want ASE to install a focused starter stack from the library and get the first five agents live cleanly.',
    includes: [
      '5 ASE library agents installed',
      'Workflow setup and launch configuration',
      'Connections to your key tools and inboxes',
      'Team handoff and operating guidance',
      '30 days of post-launch support',
    ],
    cta: 'Book a Strategy Call',
    highlight: false,
  },
  {
    id: 'growth',
    name: 'Growth Library',
    price: '$3,000',
    priceNote: 'setup price for 10 library agents',
    monthlyPrice: '$325/mo',
    monthlyNote: '$3,900 financed total, split across 12 months',
    financedTotal: '$3,900',
    headline: 'Build a fuller operating system around your team',
    description:
      'Best for businesses ready to launch a broader library stack across lead handling, follow-up, support, reporting, and admin workflows.',
    includes: [
      '10 ASE library agents installed',
      'Cross-workflow setup across sales, ops, and support',
      'Business tool integrations and approvals',
      'Launch guidance for your team',
      '30 days of post-launch support',
    ],
    cta: 'Book a Strategy Call',
    highlight: true,
  },
  {
    id: 'custom',
    name: 'Custom Unlimited',
    price: '$10,000',
    priceNote: 'setup price for unlimited library + custom-built agents',
    monthlyPrice: '$1,084/mo',
    monthlyNote: '$13,000 financed total, split across 12 months',
    financedTotal: '$13,000',
    headline: 'Unlimited library coverage plus custom agent builds',
    description:
      'Best for teams that want ASE to deploy the library broadly, add custom agents, and architect a more tailored AI operating layer.',
    includes: [
      'Unlimited ASE library agents installed',
      'Custom-built agents for unique workflows',
      'Advanced workflow design and systems integration',
      'Team training and rollout support',
      '30 days of post-launch support',
    ],
    cta: 'Book a Strategy Call',
    highlight: false,
  },
] as const

export const API_DISCLAIMER = 'Note: OpenAI, Anthropic (Claude), and other AI provider API fees are not included and billed separately based on your usage. <a href="/blog/understanding-ai-api-costs">Learn how API pricing works →</a>'
