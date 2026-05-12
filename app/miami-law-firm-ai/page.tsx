import type { Metadata } from 'next'

import ClosingCTASection from '@/components/ClosingCTASection'
import PricingPreviewSection from '@/components/PricingPreviewSection'
import { SITE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'AI Agents for Miami Law Firms | Agent Setup Experts',
  description:
    'Automate client intake, 24/7 inquiry responses, and appointment booking for your Miami law firm. AI agents deployed in 48 hours. Book a free strategy call.',
}

const features = [
  {
    title: 'Automated Client Intake',
    description:
      'Capture new client details, qualify leads, and route cases automatically — before your staff lifts a finger. No more missed intakes after hours.',
  },
  {
    title: '24/7 Inquiry Response',
    description:
      'Answer common questions about practice areas, fees, and availability around the clock. Prospects get instant answers; your team handles only the conversations that matter.',
  },
  {
    title: 'Appointment Booking',
    description:
      'Let prospects book consultations directly through your AI agent. Calendar sync, confirmation emails, and reminders handled automatically.',
  },
  {
    title: 'Follow-Up Sequences',
    description:
      'Prospects who do not book immediately get automated follow-ups. No lead falls through the cracks because someone forgot to send an email.',
  },
] as const

const reasons = [
  'Miami law firms compete hard for clients — faster response wins the case.',
  'AI handles intake and scheduling while your attorneys focus on billable work.',
  'Deployed in 48 hours, fully configured for your practice area and workflows.',
] as const

export default function MiamiLawFirmAIPage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Agent Setup Experts',
            description: 'AI agent automation for Miami law firms — intake, response, and scheduling.',
            url: 'https://agentsetupexperts.com/miami-law-firm-ai',
            email: SITE.email,
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

      {/* Hero */}
      <section className="bg-[#0a0a0a] px-6 py-20 text-center">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-[#2563EB]">
            MIAMI LAW FIRM AI AUTOMATION
          </div>

          <h1 className="mb-8 text-5xl font-bold tracking-tight text-white leading-tight md:text-7xl">
            AI Agents for Miami Law Firms
          </h1>

          <p className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-white/60 md:text-xl">
            Miami law firms are losing clients to faster competitors. An AI agent handles intake,
            answers inquiries 24/7, and books consultations automatically — so your attorneys focus
            on cases, not admin.
          </p>

          <a
            href={SITE.calendlyUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-xl bg-[#2563EB] px-8 py-4 text-base font-semibold text-white transition hover:bg-[#1d4ed8]"
          >
            Book Your Free Strategy Call
          </a>
          <p className="mt-4 text-sm text-white/30">Free 30-minute call. No obligation. No pressure.</p>
        </div>
      </section>

      {/* Problem */}
      <section className="border-y border-white/8 bg-white/[0.02] px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold text-white">
            The Problem: Manual Intake Is Costing You Cases
          </h2>
          <div className="space-y-5 text-white/60 leading-relaxed">
            <p>
              A prospective client fills out your contact form at 9 PM. Your team sees it at 9 AM
              the next morning. By then, they have already hired someone else.
            </p>
            <p>
              Miami law firms that respond within minutes win more clients. An AI agent makes that
              happen without adding headcount or changing how your team works.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-[#0a0a0a] px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">
            What Your AI Agent Handles
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-white/8 bg-white/[0.04] p-8"
              >
                <h3 className="mb-4 text-xl font-semibold text-white">{feature.title}</h3>
                <p className="leading-relaxed text-white/60">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="border-y border-white/8 bg-white/[0.02] px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-3xl font-bold text-white">Built for Miami Law Firms</h2>
          <div className="space-y-5">
            {reasons.map((item) => (
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
