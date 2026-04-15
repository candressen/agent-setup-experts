'use client'

import { motion } from 'framer-motion'

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

const problems = [
  {
    num: '01',
    title: 'Hours lost to work that should not exist',
    body: 'Follow-ups, status updates, data entry, scheduling — your team handles it all manually. Every hour spent on repetitive tasks is an hour not spent on the work that actually grows your business.',
  },
  {
    num: '02',
    title: 'You tried AI tools and got nothing usable',
    body: 'You tested ChatGPT, bought subscriptions, watched tutorials. But nothing turned into a real system. You got a list of prompts, not a working solution.',
  },
  {
    num: '03',
    title: 'Building it yourself is not realistic',
    body: 'A proper AI setup takes weeks of decisions, integrations, and testing. You do not have a technical team for that — and you should not have to.',
  },
] as const

export default function ProblemSection() {
  return (
    <motion.section
      id="problem"
      className="bg-[#0a0a0a] px-6 py-28"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="mx-auto max-w-[1200px]">
        <motion.div variants={fadeInUp} transition={{ duration: 0.5 }} className="mb-20 text-center">
          <div className="mb-4 text-xs uppercase tracking-[0.2em] text-white/40">THE PROBLEM</div>
          <h2 className="mx-auto max-w-3xl text-4xl font-bold text-white md:text-5xl">
            Your team is capable. Manual work is what is slowing them down.
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {problems.map((p) => (
            <motion.div key={p.num} variants={fadeInUp} transition={{ duration: 0.5 }} className="rounded-2xl border border-white/10 bg-[#111] p-8">
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full border border-[#2563EB]/40 bg-[#2563EB]/10 text-sm font-bold text-[#2563EB]">
                {p.num}
              </div>
              <h3 className="mb-4 text-xl font-semibold text-white">{p.title}</h3>
              <p className="leading-relaxed text-white/60">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
