'use client'

import { motion } from 'framer-motion'
import { SITE, PRICING_TIERS } from '@/lib/constants'

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

export default function PricingPreviewSection() {
  return (
    <motion.section
      id="pricing"
      className="border-y border-white/6 bg-[#0f0f0f] px-6 py-28"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div
        variants={fadeInUp}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl text-center"
      >
        <div className="mb-4 text-xs uppercase tracking-[0.2em] text-white/40">PRICING</div>
        <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
          Simple, Transparent Pricing
        </h2>
        <p className="mt-4 text-lg text-white/60">
          Three tiers. One clear price. No monthly fees.
        </p>
      </motion.div>

      <motion.div
        variants={stagger}
        className="mx-auto mt-16 grid max-w-[1200px] gap-6 md:grid-cols-3"
      >
        {PRICING_TIERS.map((tier) => (
          <motion.div
            key={tier.id}
            variants={fadeInUp}
            transition={{ duration: 0.45 }}
            className={`flex flex-col rounded-2xl border p-6 ${
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

            <div className="mb-1 text-xs uppercase tracking-widest text-white/40">{tier.name}</div>
            <div className="text-4xl font-bold text-white">{tier.price}</div>
            <div className="mb-3 mt-1 text-xs text-white/40">{tier.priceNote}</div>
            <h3 className="mb-2 text-base font-semibold text-white">{tier.headline}</h3>

            <ul className="space-y-2">
              {tier.includes.slice(0, 3).map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs text-white/60">
                  <span className="mt-0.5 text-[#2563EB]">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a
              href={SITE.calendlyUrl}
              target="_blank"
              rel="noreferrer"
              className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-8 py-2.5 text-xs font-semibold transition ${
                tier.highlight
                  ? 'bg-[#2563EB] text-white hover:bg-[#1d4ed8]'
                  : 'border border-white/20 text-white/70 hover:border-white/40 hover:text-white'
              }`}
            >
              {tier.cta}
            </a>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-10 text-center text-xs text-white/30">
        AI provider API fees (OpenAI, Claude) are billed separately based on usage.
        <a
          href="/blog/understanding-ai-api-costs"
          className="ml-1 text-[#2563EB]/60 transition hover:text-[#2563EB]"
        >
          Learn more
        </a>
      </div>

      <a
        href="/pricing"
        className="mt-4 block text-center text-sm text-white/40 transition hover:text-white"
      >
        See full pricing
      </a>
    </motion.section>
  )
}
