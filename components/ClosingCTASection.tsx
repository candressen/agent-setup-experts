'use client'

import { motion } from 'framer-motion'
import { SITE } from '@/lib/constants'

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

export default function ClosingCTASection() {
  return (
    <motion.section
      className="relative overflow-hidden bg-[#0a0a0a] px-6 py-28 text-center"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[200px] w-[500px] rounded-full bg-[#2563EB]/8 blur-[100px]" />
      </div>
      <div className="relative z-10 mx-auto max-w-3xl">
        <motion.h2 variants={fadeInUp} transition={{ duration: 0.5 }} className="mb-6 text-4xl font-bold text-white md:text-5xl">
          Imagine Your Business Running on AI — Starting This Week.
        </motion.h2>
        <motion.p variants={fadeInUp} transition={{ duration: 0.5 }} className="mx-auto mb-12 max-w-xl text-xl text-white/60">
          Your team focused on high-value work. Leads followed up automatically. Admin handled without anyone touching it. That is what a working AI system looks like. Every week you wait is another week of manual work your competitors are automating.
        </motion.p>
        <motion.div variants={fadeInUp} transition={{ duration: 0.5 }}>
          <a
            href={SITE.calendlyUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-xl bg-[#2563EB] px-8 py-4 text-base font-semibold text-white transition hover:bg-[#1d4ed8]"
          >
            Book Your Free Strategy Call
          </a>
          <p className="mt-4 text-sm text-white/30">Free 30-minute call. No obligation. No pressure.</p>
        </motion.div>
      </div>
    </motion.section>
  )
}
