'use client'

import { motion } from 'framer-motion'
import { SITE } from '@/lib/constants'

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }
const stagger = { visible: { transition: { staggerChildren: 0.15 } } }

const steps = [
  {
    number: '1',
    title: 'Pick the Right Agent Stack',
    body: 'We start with a free strategy call. You walk us through the workflows that matter most, and we recommend the right 5-agent, 10-agent, or custom library stack for your business.',
  },
  {
    number: '2',
    title: 'We Install It Around Your Workflow',
    body: 'Our team handles the full setup. We connect the tools, configure the agents, add approvals and guardrails, and make sure the stack fits your real operating process.',
  },
  {
    number: '3',
    title: 'Launch, Train, and Expand from There',
    body: 'Your system goes live, your team gets trained, and your first workflows start running. Once the foundation is in place, adding more library or custom agents gets much easier.',
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
          <h2 className="text-4xl font-bold text-white md:text-5xl">Three Steps to a Working ASE Agent Stack</h2>
        </motion.div>

        <div className="relative grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="pointer-events-none absolute left-[16.67%] right-[16.67%] top-5 hidden border-t border-dashed border-white/10 md:block" />
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
