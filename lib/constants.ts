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
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export const LOGO_PATH = '/logos/logo-full.svg'

export const PRICING_TIERS = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$1,000',
    priceNote: 'one-time setup fee',
    headline: 'Autonomous AI Agent',
    description: 'A fully functional OpenClaw-powered autonomous agent deployed for your business. Use it however you need — no customization, no hand-holding.',
    includes: [
      'OpenClaw agent deployment',
      'Environment and infrastructure setup',
      'Ready to use out of the box',
    ],
    cta: 'Get Started',
    highlight: false,
  },
  {
    id: 'custom',
    name: 'Custom',
    price: '$4,000',
    priceNote: 'one-time setup fee',
    headline: 'Done-For-You AI Stack',
    description: 'Full setup, customization, and workflow automation built around your specific business. Everything in Starter plus hands-on configuration.',
    includes: [
      'Everything in Starter',
      'API integrations (email, CRM, Slack, and more)',
      '1-3 custom AI agents built for your workflows',
      'Workflow automation',
      'Training session',
    ],
    cta: 'Book a Strategy Call',
    highlight: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: '$10,000',
    priceNote: 'one-time setup fee',
    headline: 'Full Stack + 1 Year Support',
    description: 'Everything in Custom plus a full year of dedicated support, maintenance, and ongoing optimization.',
    includes: [
      'Everything in Custom',
      '12 months of dedicated support',
      'Ongoing maintenance and optimization',
      'Priority response',
    ],
    cta: 'Book a Strategy Call',
    highlight: false,
  },
] as const

export const API_DISCLAIMER = 'Note: OpenAI, Anthropic (Claude), and other AI provider API fees are not included and billed separately based on your usage. <a href="/blog/understanding-ai-api-costs">Learn how API pricing works →</a>'
