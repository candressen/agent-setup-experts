import type { Metadata } from 'next'

import ClosingCTASection from '@/components/ClosingCTASection'
import PricingPreviewSection from '@/components/PricingPreviewSection'
import { SITE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Miami OpenClaw Setup | AI Agent Installation in Miami, FL',
  description:
    'Miami-based OpenClaw and AI agent setup service. We install and configure AI agents for your Miami business in 48 hours.',
}

const whoWeServe = [
  {
    title: 'Miami Marketing Agencies',
    description: 'Lead follow-up, reporting, workflow automation',
  },
  {
    title: 'Miami Law Firms',
    description: 'Intake handling, document workflows, client communication',
  },
  {
    title: 'Miami Real Estate Teams',
    description: 'Lead response, appointment coordination, pipeline follow-up',
  },
  {
    title: 'Miami Consultants and SMBs',
    description: 'Admin reduction, delivery speed, repeatable task automation',
  },
] as const

const localWhyItems = [
  'We are local, so you are working with a Miami team that understands the market you operate in.',
  'We are available for Miami businesses that want a nearby partner, not a random remote vendor with no local context.',
  'We understand how fast-moving service businesses in Miami need AI systems that work immediately.',
] as const

export default function MiamiOpenClawSetupPage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Agent Setup Experts',
            description: 'AI agent setup and OpenClaw configuration for Miami businesses.',
            url: 'https://agentsetupexperts.com/miami-openclaw-setup',
            telephone: '',
            email: 'hello@agentsetupexperts.com',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Miami',
              addressRegion: 'FL',
              addressCountry: 'US',
            },
            areaServed: {
              '@type': 'City',
              name: 'Miami',
            },
            priceRange: '$$',
          }),
        }}
      />

      <section className="bg-[#0a0a0a] px-6 py-20 text-center">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-[#2563EB]">
            MIAMI OPENCLAW SETUP
          </div>

          <h1 className="mb-8 text-5xl font-bold tracking-tight text-white leading-tight md:text-7xl">
            OpenClaw Setup in Miami, Florida
          </h1>

          <p className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-white/60 md:text-xl">
            Miami businesses move fast, and the teams adopting AI early are gaining an edge in
            response time, operations, and client service. We provide OpenClaw setup in Miami for
            businesses that want a working AI agent system deployed in 48 hours.
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
          <h2 className="mb-8 text-3xl font-bold text-white">Miami Businesses Are Moving to AI Fast</h2>

          <div className="space-y-6 text-white/60 leading-relaxed">
            <p>
              Miami businesses are adopting AI fast because manual follow-up, admin work, and
              disconnected systems are slowing growth.
            </p>
            <p>
              We are based in Miami, and we set up AI agents for local businesses in 48 hours.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">Who We Serve in Miami</h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {whoWeServe.map((card) => (
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

      <section className="border-y border-white/8 bg-white/[0.02] px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-3xl font-bold text-white">Why Local Matters</h2>

          <div className="space-y-5">
            {localWhyItems.map((item) => (
              <div key={item} className="flex items-start gap-3 leading-relaxed text-white/60">
                <span className="mt-0.5 text-[#2563EB]">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PricingPreviewSection />

      <ClosingCTASection />
    </>
  )
}
