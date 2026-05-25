import type { Metadata } from 'next'
import Link from 'next/link'

import ClosingCTASection from '@/components/ClosingCTASection'
import { EARLY_CANCEL_NOTE, EQUIPMENT_NOTE, SITE, PRICING_TIERS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'AI Agent Pricing for Small Business | Agent Setup Experts',
  description:
    'Library-first AI agent pricing for small businesses. Choose 5 agents, 10 agents, or unlimited plus custom-built agents.',
}

export default function PricingPage() {
  return (
    <>
      <section className="bg-[#0a0a0a] px-6 py-20 text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
            Library Pricing. Clear Setup. Clear Monthly View.
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/60 md:text-xl">
            Choose the ASE library stack that fits now, then expand when the first workflows are live.
            Equipment is separate, and monthly financing is shown up front.
          </p>
        </div>
      </section>

      <section className="bg-[#0a0a0a] px-6 py-16">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 md:grid-cols-3">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`flex flex-col rounded-2xl border p-8 ${
                tier.highlight
                  ? 'border-[#2563EB]/40 bg-[#111] ring-1 ring-[#2563EB]/20'
                  : 'border-white/10 bg-[#0f0f0f]'
              }`}
            >
              {tier.highlight ? (
                <span className="mb-4 self-start rounded-full border border-[#2563EB]/20 bg-[#2563EB]/10 px-3 py-1 text-xs text-[#2563EB]">
                  Most Popular
                </span>
              ) : null}
              <div className="mb-2 text-sm uppercase tracking-[0.2em] text-white/40">
                {tier.name}
              </div>
              <div className="text-5xl font-bold text-white">{tier.price}</div>
              <div className="mt-1 text-sm text-white/40">{tier.priceNote}</div>
              <div className="mt-4 text-2xl font-semibold text-[#93c5fd]">{tier.monthlyPrice}</div>
              <div className="mb-4 mt-1 text-sm text-white/50">{tier.monthlyNote}</div>
              <h2 className="mb-3 text-xl font-semibold text-white">{tier.headline}</h2>
              <p className="mb-6 text-sm leading-relaxed text-white/60">{tier.description}</p>
              <div className="mb-6 border-t border-white/8" />
              <ul className="mb-8 flex-1 space-y-3">
                {tier.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-[#2563EB]">✓</span>
                    <span className="text-sm text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={SITE.calendlyUrl}
                target="_blank"
                rel="noreferrer"
                className={`mt-auto w-full rounded-xl py-3 text-center text-sm font-semibold transition ${
                  tier.highlight
                    ? 'bg-[#2563EB] text-white hover:bg-[#1d4ed8]'
                    : 'border border-white/20 text-white/70 hover:border-white/40 hover:text-white'
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/8 bg-[#0f0f0f] px-6 py-10">
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-black/20 p-8">
          <h2 className="text-2xl font-semibold text-white">Monthly financing example</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {PRICING_TIERS.map((tier) => (
              <div key={`${tier.id}-monthly`} className="rounded-2xl border border-white/8 bg-[#0a0a0a] p-5">
                <div className="text-sm uppercase tracking-[0.18em] text-white/40">{tier.name}</div>
                <div className="mt-3 text-3xl font-bold text-white">{tier.monthlyPrice}</div>
                <p className="mt-2 text-sm leading-6 text-white/55">{tier.monthlyNote}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-white/55">
            Monthly pricing is based on adding a 30% surcharge to the setup total, then splitting it across
            12 months.
          </p>
        </div>
      </section>

      <section className="border-b border-white/8 bg-[#0f0f0f] px-6 py-10">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-[#0a0a0a] p-6">
            <h3 className="text-lg font-semibold text-white">Equipment and hardware</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/60">{EQUIPMENT_NOTE.description}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#0a0a0a] p-6">
            <h3 className="text-lg font-semibold text-white">Early-cancel policy</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/60">{EARLY_CANCEL_NOTE}</p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-[#0f0f0f] px-6 py-10">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-xs text-white/40">
            i
          </div>
          <h3 className="mb-3 text-lg font-semibold text-white">About AI Provider Costs</h3>
          <p className="mb-4 text-sm leading-relaxed text-white/60">
            OpenAI, Anthropic (Claude), and other AI provider API fees are not included in any of
            our packages. These are billed directly by the provider based on your usage.
          </p>
          <Link
            href="/blog/understanding-ai-api-costs"
            className="text-sm text-[#2563EB] transition hover:text-[#1d4ed8]"
          >
            Learn how AI API pricing works
          </Link>
        </div>
      </section>

      <section className="bg-[#0a0a0a] px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-10 text-3xl font-bold text-white">Common Questions</h2>

          <div className="space-y-6">
            <div className="border-b border-white/8 pb-6">
              <h3 className="text-lg font-semibold text-white">Can I start with 5 agents and expand later?</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                Yes. Many clients start with the 5-agent stack, prove value, then move to 10 agents or add
                custom builds once the first workflows are live.
              </p>
            </div>

            <div className="border-b border-white/8 pb-6">
              <h3 className="text-lg font-semibold text-white">What is included in the monthly pricing view?</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                It is a financing presentation of the setup cost only. Equipment and AI provider usage fees are
                still separate.
              </p>
            </div>

            <div className="border-b border-white/8 pb-6">
              <h3 className="text-lg font-semibold text-white">Do you still build custom agents?</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                Yes. The Custom Unlimited plan includes unlimited library agents plus custom-built agents for
                workflows that are unique to your business.
              </p>
            </div>

            <div className="border-b border-white/8 pb-6">
              <h3 className="text-lg font-semibold text-white">Why are AI provider fees separate?</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                Usage varies by business. Keeping provider costs separate keeps setup pricing honest and makes it
                easier for clients to control spend.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ClosingCTASection />
    </>
  )
}
