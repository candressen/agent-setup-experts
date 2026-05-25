'use client'

import { motion } from 'framer-motion'

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }
const stagger = { visible: { transition: { staggerChildren: 0.07 } } }

const items = [
  { title: 'Library Agent Stack', description: 'Start with 5 or 10 ASE library agents, or go unlimited with custom-built additions.' },
  { title: 'Workflow Setup', description: 'We map each selected agent to your real process so the automation fits how your team already works.' },
  { title: 'Tool Connections', description: 'Connected to your email, CRM, calendar, ads, forms, and other core business systems.' },
  { title: 'Approvals and Guardrails', description: 'Human review, escalation paths, and business rules are set up where they should be.' },
  { title: 'Launch and Handoff', description: 'Your team gets a clean rollout, practical operating guidance, and launch support.' },
  { title: 'Monthly Financing Option', description: 'Clear monthly payment view available for all three plans when that fits the purchase better.' },
  { title: 'Hardware Note', description: 'Equipment is not included. Hardware starts at $400 one-time, and you keep the equipment.' },
] as const

export default function IncludedSection() {
  return (
    <motion.section
      id="included"
      className="border-y border-white/6 bg-[#0f0f0f] px-6 py-28"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="mx-auto max-w-[1200px]">
        <motion.div variants={fadeInUp} transition={{ duration: 0.5 }} className="mb-16 text-center">
          <div className="mb-4 text-xs uppercase tracking-[0.2em] text-white/40">WHAT YOU GET</div>
          <h2 className="text-4xl font-bold text-white md:text-5xl">A Cohesive Agent Stack, Set Up for You</h2>
        </motion.div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className={`flex items-start gap-4 rounded-xl border border-white/10 bg-[#111] p-6${i === items.length - 1 ? ' md:col-span-2' : ''}`}
            >
              <span className="mt-0.5 flex-shrink-0 text-lg text-[#2563EB]">&#x2713;</span>
              <div>
                <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                <p className="mt-1 text-sm text-white/50">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
