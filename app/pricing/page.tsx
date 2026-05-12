import type { Metadata } from 'next'

import { SITE, PRICING_TIERS } from '@/lib/constants'
import ClosingCTASection from '@/components/ClosingCTASection'

export const metadata: Metadata = {
  title: 'AI Agent Pricing for Small Business | Agent Setup Experts',
  description:
    'Simple, transparent AI agent pricing for small businesses. From starter setup to full done-for-you AI agent installation. See all plans.',
}

export default function PricingPage() {
  return (
    <>
      <section className="bg-[#0a0a0a] px-6 py-20 text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
            Simple Pricing. Real Results.
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/60 md:text-xl">
            Three tiers. One clear price. No retainers, no monthly fees — just a working AI system.
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
              <div className="mb-4 mt-1 text-sm text-white/40">{tier.priceNote}</div>
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
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-xs text-white/40">
            i
          </div>
          <h3 className="mb-3 text-lg font-semibold text-white">About AI Provider Costs</h3>
          <p className="mb-4 text-sm leading-relaxed text-white/60">
            OpenAI, Anthropic (Claude), and other AI provider API fees are not included in any of
            our packages. These are billed directly by the provider based on your usage -
            typically a few dollars to a few hundred dollars per month depending on how much your
            agent is used.
          </p>
          <a
            href="/blog/understanding-ai-api-costs"
            className="text-sm text-[#2563EB] transition hover:text-[#1d4ed8]"
          >
            Learn how AI API pricing works
          </a>
        </div>
      </section>

      <section className="bg-[#0a0a0a] px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-10 text-3xl font-bold text-white">Common Questions</h2>

          <div className="space-y-6">
            <div className="border-b border-white/8 pb-6">
              <h3 className="text-lg font-semibold text-white">Can I upgrade later?</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                Yes. If you start with Starter and want customization later, we credit the
                original amount toward the Custom package.
              </p>
            </div>

            <div className="border-b border-white/8 pb-6">
              <h3 className="text-lg font-semibold text-white">Is support included in Starter or Custom?</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                No. Support is only included in the Enterprise tier. Starter and Custom are one-time
                setup fees with no ongoing commitment.
              </p>
            </div>

            <div className="border-b border-white/8 pb-6">
              <h3 className="text-lg font-semibold text-white">What AI providers do you support?</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                We support OpenAI (GPT models) and Anthropic (Claude) by default. Other providers
                can be integrated on request.
              </p>
            </div>

            <div className="border-b border-white/8 pb-6">
              <h3 className="text-lg font-semibold text-white">Why is the API fee separate?</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                AI API fees are variable and depend entirely on how much you use your agent.
                Bundling them into a flat setup fee would either overcharge low-usage clients or
                undercharge high-usage ones. Keeping them separate keeps pricing honest.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ClosingCTASection />
    </>
  )
}
