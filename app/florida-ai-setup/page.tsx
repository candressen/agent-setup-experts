import type { Metadata } from 'next'

import ClosingCTASection from '@/components/ClosingCTASection'
import PricingPreviewSection from '@/components/PricingPreviewSection'
import { SITE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Florida AI Setup Service | AI Agents for Florida Businesses',
  description:
    'Florida AI agent setup experts. Done-for-you AI automation for businesses across Florida. 48-hour deployment, starting at $2,000.',
}

const serviceAreas = [
  'Miami',
  'Orlando',
  'Tampa',
  'Fort Lauderdale',
  'Jacksonville',
  'Surrounding areas',
] as const

const industries = [
  {
    title: 'Florida Agencies',
    description: 'Speed up client delivery, automate reporting, improve lead response',
  },
  {
    title: 'Florida Law Firms',
    description: 'Streamline intake, document workflows, client updates',
  },
  {
    title: 'Florida Real Estate',
    description: 'Respond to leads faster, coordinate appointments, keep pipeline consistent',
  },
  {
    title: 'Florida Consultants',
    description: 'Reduce back-and-forth, organize delivery, automate client-facing tasks',
  },
] as const

const faqItems = [
  {
    question: 'Do you work with businesses outside Miami?',
    answer:
      'Yes. We work with businesses across Florida, including Orlando, Tampa, Fort Lauderdale, Jacksonville, and surrounding areas.',
  },
  {
    question: 'Is the setup done remotely or on-site?',
    answer:
      'Most projects are completed remotely. For Miami-area businesses, local availability is also an option when needed.',
  },
  {
    question: 'How quickly can we get started?',
    answer:
      'We begin with a strategy call to confirm scope, workflows, and access. Once that is in place, the build is completed within 48 hours.',
  },
  {
    question: 'What if we are not in a major city?',
    answer:
      'We support businesses across Florida, including companies outside the major metro areas.',
  },
] as const

export default function FloridaAISetupPage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Agent Setup Experts',
            description: 'AI agent setup service for businesses across Florida.',
            url: 'https://agentsetupexperts.com/florida-ai-setup',
            email: 'hello@agentsetupexperts.com',
            address: {
              '@type': 'PostalAddress',
              addressRegion: 'FL',
              addressCountry: 'US',
            },
            areaServed: {
              '@type': 'State',
              name: 'Florida',
            },
            priceRange: '$$',
          }),
        }}
      />

      <section className="bg-[#0a0a0a] px-6 py-20 text-center">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-[#2563EB]">
            FLORIDA AI SETUP
          </div>

          <h1 className="mb-8 text-5xl font-bold tracking-tight text-white leading-tight md:text-7xl">
            AI Agent Setup for Florida Businesses
          </h1>

          <p className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-white/60 md:text-xl">
            Florida businesses are moving quickly to automate follow-up, admin work, and internal
            operations with AI. We serve companies across Florida and deliver a working AI agent
            setup in 48 hours.
          </p>

          <a
            href={SITE.calendlyUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-xl bg-[#2563EB] px-8 py-4 text-base font-semibold text-white transition hover:bg-[#1d4ed8]"
          >
            Book Your Free Strategy Call
          </a>
        </div>
      </section>

      <section className="border-y border-white/8 bg-white/[0.02] px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold text-white">Built for Florida Businesses</h2>

          <div className="space-y-6 text-white/60 leading-relaxed">
            <p>
              Florida businesses are adopting AI to keep pace with rising client expectations,
              tighter response times, and the need to do more with less manual work.
            </p>
            <p>
              We build practical AI agent setups for companies across the state so they can
              automate repetitive work, improve operations, and move faster without adding
              unnecessary headcount.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white">Areas We Serve</h2>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-white/8 bg-white/[0.04] px-4 py-2 text-sm text-white/70"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-white/[0.02] px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">
            Industries We Serve in Florida
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {industries.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-white/8 bg-white/[0.04] p-8"
              >
                <h3 className="mb-4 text-xl font-semibold text-white">{card.title}</h3>
                <p className="leading-relaxed text-white/60">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PricingPreviewSection />

      <section className="bg-[#0a0a0a] px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <div className="mb-4 text-xs uppercase tracking-[0.2em] text-white/40">FAQ</div>
            <h2 className="text-4xl font-bold text-white">Common Questions</h2>
          </div>

          <div className="space-y-4">
            {faqItems.map((item) => (
              <div key={item.question} className="rounded-2xl border border-white/8 bg-white/[0.02]">
                <div className="px-6 py-5">
                  <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                  <p className="mt-3 leading-relaxed text-white/60">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClosingCTASection />
    </>
  )
}
