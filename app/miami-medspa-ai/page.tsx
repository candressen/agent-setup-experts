import type { Metadata } from 'next'

import ClosingCTASection from '@/components/ClosingCTASection'
import PricingPreviewSection from '@/components/PricingPreviewSection'
import { SITE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'AI Agents for Miami Med Spas | Agent Setup Experts',
  description:
    'Automate DM responses, appointment reminders, and rebooking for your Miami med spa. AI agents deployed in 48 hours. Book a free strategy call.',
}

const features = [
  {
    title: 'DM & Inquiry Response',
    description:
      'Respond to Instagram and Facebook DMs instantly — answering questions about treatments, pricing, and availability before prospects lose interest or message a competitor.',
  },
  {
    title: 'Appointment Reminders',
    description:
      'Automated SMS and email reminders reduce no-shows and keep your chairs filled. Customized for your services, your brand voice, and your schedule.',
  },
  {
    title: 'Rebooking Campaigns',
    description:
      'Your AI agent identifies clients due for a follow-up treatment and sends personalized rebooking messages automatically. Recurring revenue on autopilot.',
  },
  {
    title: 'New Client Intake',
    description:
      'Collect health history forms, consent information, and treatment preferences before the appointment — so your staff is prepared and the client experience starts strong.',
  },
] as const

const reasons = [
  'Miami med spas live and die by their booking flow — AI tightens every step.',
  'DMs answered, reminders sent, and rebooking handled without adding staff.',
  'Deployed in 48 hours and integrated with your existing booking and CRM tools.',
] as const

export default function MiamiMedSpaAIPage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Agent Setup Experts',
            description: 'AI agent automation for Miami med spas — DMs, reminders, and rebooking.',
            url: 'https://agentsetupexperts.com/miami-medspa-ai',
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
            MIAMI MED SPA AI AUTOMATION
          </div>

          <h1 className="mb-8 text-5xl font-bold tracking-tight text-white leading-tight md:text-7xl">
            AI Agents for Miami Med Spas
          </h1>

          <p className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-white/60 md:text-xl">
            Miami med spas that automate their client communication fill their books faster and lose
            fewer clients between visits. An AI agent handles DMs, appointment reminders, and
            rebooking automatically — so your team focuses on treatments, not admin.
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
            The Problem: Clients Slip Away Between Visits
          </h2>
          <div className="space-y-5 text-white/60 leading-relaxed">
            <p>
              A client finishes their Botox appointment and leaves happy. Three months later, they
              are overdue for a follow-up — but no one reached out, so they booked at the new place
              down the street.
            </p>
            <p>
              Miami med spas with consistent, automated follow-up retain more clients and generate
              more recurring revenue without any extra effort from their team.
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
          <h2 className="mb-8 text-3xl font-bold text-white">Built for Miami Med Spas</h2>
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
