'use client'

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
            We Have Been Where You Are. And We Know How to Fix It.
          </h2>
          <p className="mb-10 max-w-lg text-lg leading-relaxed text-white/60">
            Most AI setups fail because businesses try to figure it out alone. We have deployed AI
            agent systems for businesses like yours and we know exactly what works. We take care
            of the entire setup — so you get a working system, not another experiment.
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
          <div className="mb-6 text-xs uppercase tracking-[0.2em] text-white/40">What changes in 48 hours</div>
          <div className="mb-8 space-y-4">
            {['Your team stops doing work AI should handle', 'Your systems talk to each other automatically', 'You get back hours every week, starting immediately'].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-0.5 text-lg text-[#2563EB]">&#x2713;</span>
                <span className="text-white/80">{item}</span>
              </div>
            ))}
          </div>
          <div className='grid grid-cols-2 gap-6 border-t border-white/8 pt-8'>
            <div>
              <div className='text-3xl font-bold text-white'>48 hrs</div>
              <div className='mt-1 text-sm text-white/40'>From call to live system</div>
            </div>
            <div>
              <div className='text-3xl font-bold text-white'>from $1,000</div>
              <div className='mt-1 text-sm text-white/40'>One-time setup fee</div>
            </div>
          </div>
          <p className='mt-4 text-xs text-white/30'>
            AI provider API fees (OpenAI, Claude) billed separately.{' '}
            <a href='/blog/understanding-ai-api-costs' className='text-[#2563EB]/60 hover:text-[#2563EB] transition'>Learn more</a>
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}
