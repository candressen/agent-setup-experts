'use client'

import { motion } from 'framer-motion'

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }
const stagger = { visible: { transition: { staggerChildren: 0.07 } } }

const items = [
  { title: 'Environment Setup', description: 'We configure the infrastructure your AI system needs to run reliably' },
  { title: 'OpenClaw Deployment', description: 'Full installation and configuration of the OpenClaw agent framework' },
  { title: 'API Integrations', description: 'Connected to your email, CRM, Slack, and other core business tools' },
  { title: '1-3 Custom AI Agents', description: 'Built around your specific workflows, not generic templates' },
  { title: 'Workflow Automation', description: 'End-to-end automations that move work without manual intervention' },
  { title: 'Training Session', description: 'Your team learns exactly how to use and manage the system' },
  { title: '30-Day Support', description: 'Post-launch availability to fix issues and make adjustments' },
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
          <h2 className="text-4xl font-bold text-white md:text-5xl">Everything You Need, Done For You</h2>
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
