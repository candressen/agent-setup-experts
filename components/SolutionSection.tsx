'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { SITE } from '@/lib/constants'

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }
const stagger = { visible: { transition: { staggerChildren: 0.12 } } }

export default function SolutionSection() {
  return (
    <motion.section
      id="solution"
      className="border-y border-white/6 bg-[#0f0f0f] px-6 py-28"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 md:grid-cols-2">
        <motion.div variants={fadeInUp} transition={{ duration: 0.5 }}>
          <div className="mb-4 text-xs uppercase tracking-[0.2em] text-[#2563EB]">THE SOLUTION</div>
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            Start with ASE&apos;s library, then expand only where your business needs more.
          </h2>
          <p className="mb-10 max-w-lg text-lg leading-relaxed text-white/60">
            Most businesses do not need to invent every workflow from scratch. We help you choose the
            right library agents first, install them around your tools, and then layer in custom work
            only where it creates real leverage.
          </p>
          <a
            href={SITE.calendlyUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-xl bg-[#2563EB] px-8 py-4 text-base font-semibold text-white transition hover:bg-[#1d4ed8]"
          >
            Book Your Free Strategy Call
          </a>
        </motion.div>

        <motion.div variants={fadeInUp} transition={{ duration: 0.5 }} className="rounded-2xl border border-white/10 bg-[#111] p-8">
          <div className="mb-6 text-xs uppercase tracking-[0.2em] text-white/40">What launches in the first 48 hours</div>
          <div className="mb-8 space-y-4">
            {[
              'You stop guessing which agent to build first',
              'Your first selected library workflows get connected to the systems you already use',
              'Your team gets a clear rollout path for the rest of the stack after that first launch',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-0.5 text-lg text-[#2563EB]">&#x2713;</span>
                <span className="text-white/80">{item}</span>
              </div>
            ))}
          </div>
          <div className='grid grid-cols-2 gap-6 border-t border-white/8 pt-8'>
            <div>
              <div className='text-3xl font-bold text-white'>48 hrs</div>
              <div className='mt-1 text-sm text-white/40'>From approved scope to first workflows live</div>
            </div>
            <div>
              <div className='text-3xl font-bold text-white'>from $3,000</div>
              <div className='mt-1 text-sm text-white/40'>5 library agents installed</div>
            </div>
          </div>
          <p className='mt-4 text-xs text-white/30'>
            Equipment starts at $400 one-time and is sold separately. AI provider API fees are billed separately.{' '}
            <Link href='/blog/understanding-ai-api-costs' className='text-[#2563EB]/60 transition hover:text-[#2563EB]'>Learn more</Link>
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}
