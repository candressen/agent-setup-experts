import type { Metadata } from 'next'

import ClosingCTASection from '@/components/ClosingCTASection'
import PricingPreviewSection from '@/components/PricingPreviewSection'
import { SITE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'AI Agents for Miami Restaurants | Agent Setup Experts',
  description:
    'Automate reservation handling, catering inquiries, and review responses for your Miami restaurant. AI agents deployed in 48 hours. Book a free strategy call.',
}

const features = [
  {
    title: 'Reservation Handling',
    description:
      'Take reservations through your website, Instagram DMs, or Google — automatically. No more missed calls during a dinner rush or double-bookings from manual tracking.',
  },
  {
    title: 'Catering Inquiries',
    description:
      'Respond instantly to catering requests with pricing, availability, and next-step booking links. Convert more inquiries before competitors even reply.',
  },
  {
    title: 'Review Response Automation',
    description:
      'Your AI agent drafts and posts responses to Google and Yelp reviews on your behalf — keeping your reputation sharp without taking time away from the kitchen.',
  },
  {
    title: 'Private Event Coordination',
    description:
      'Handle buyout requests, birthday dinners, and corporate events through a guided AI intake flow. Collect what you need, confirm details, and move deals forward automatically.',
  },
] as const

const reasons = [
  'Miami restaurants run at full speed — your front-of-house AI should too.',
  'Reservations, catering, and reviews handled without adding staff.',
  'Deployed in 48 hours and integrated with your existing tools.',
] as const

export default function MiamiRestaurantAIPage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Agent Setup Experts',
            description: 'AI agent automation for Miami restaurants — reservations, catering, and reviews.',
            url: 'https://agentsetupexperts.com/miami-restaurant-ai',
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
            MIAMI RESTAURANT AUTOMATION
          </div>

          <h1 className="mb-8 text-5xl font-bold tracking-tight text-white leading-tight md:text-7xl">
            AI Agents for Miami Restaurants
          </h1>

          <p className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-white/60 md:text-xl">
            Your staff should be running the floor, not answering the same reservation questions all
            day. An AI agent handles bookings, catering inquiries, and review responses automatically
            — so your team focuses on the guest experience.
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
            The Problem: Missed Reservations and Slow Replies
          </h2>
          <div className="space-y-5 text-white/60 leading-relaxed">
            <p>
              A group of eight wants to book Friday night. They DM you on Instagram, leave a
              voicemail, and check OpenTable — and if you do not respond fast enough, they go
              somewhere else.
            </p>
            <p>
              Miami&apos;s restaurant scene is competitive. The places filling up every weekend are
              the ones responding instantly. AI makes that happen at any hour, on any channel.
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
          <h2 className="mb-8 text-3xl font-bold text-white">Built for Miami Restaurants</h2>
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
