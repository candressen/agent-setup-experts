'use client'

import { motion } from 'framer-motion'
import { SITE } from '@/lib/constants'

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }
const stagger = { visible: { transition: { staggerChildren: 0.15 } } }

const steps = [
  {
    number: '1',
    title: 'You Tell Us How Your Business Works',
    body: 'We start with a free 30-minute call. You walk us through your workflows, your tools, and where your team loses the most time. We map out exactly what your AI system needs to do.',
  },
  {
    number: '2',
    title: 'We Build It - You Stay Focused on Your Business',
    body: 'Our team handles the full setup. We install OpenClaw, connect your tools, and configure AI agents around your specific workflows. No technical work required from you.',
  },
  {
    number: '3',
    title: 'You Run a Faster, Smarter Business',
    body: 'Your system goes live. Your team is trained. The repetitive work starts moving automatically. You get back hours every week - starting from day one.',
  },
] as const

export default function HowItWorksSection() {
  return (
    <motion.section
      id="how-it-works"
      aria-label={`${SITE.name} process`}
      className="bg-[#0a0a0a] px-6 py-28"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="mx-auto max-w-[1200px]">
        <motion.div variants={fadeInUp} transition={{ duration: 0.5 }} className="mb-20 text-center">
          <div className="mb-4 text-xs uppercase tracking-[0.2em] text-white/40">THE PLAN</div>
          <h2 className="text-4xl font-bold text-white md:text-5xl">Three Steps to a Business That Runs Smarter</h2>
        </motion.div>

        <div className="relative grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="pointer-events-none absolute top-5 left-[16.67%] right-[16.67%] hidden border-t border-dashed border-white/10 md:block" />
          {steps.map((step) => (
            <motion.div key={step.number} variants={fadeInUp} transition={{ duration: 0.5 }} className="relative">
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-[#2563EB] text-sm font-bold text-white">
                {step.number}
              </div>
              <h3 className="mb-4 text-xl font-semibold text-white">{step.title}</h3>
              <p className="leading-relaxed text-white/60">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
