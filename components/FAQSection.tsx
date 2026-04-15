'use client'

import { useState } from 'react'

const items = [
  {
    question: 'Is $2,000 worth it?',
    answer:
      'If your team spends 10+ hours per week on repetitive work, this pays for itself in 6 weeks at $30/hour rates. The more repetitive your operations, the faster the return.',
  },
  {
    question: 'We tried ChatGPT and it did not work.',
    answer:
      'ChatGPT is a tool. We build the system. Knowing what to automate, how to connect your tools, and how to configure agents that actually run reliably is a different skill set.',
  },
  {
    question: 'What if it breaks after you leave?',
    answer:
      'You get 30 days of post-launch support included. After that, our $200/month plan keeps us available for maintenance, fixes, and updates.',
  },
  {
    question: 'How long does it actually take?',
    answer:
      'The deployment is completed within 48 hours of starting the build. The strategy call and scoping happen before that, usually in the same week.',
  },
  {
    question: 'Do we need technical staff to maintain it?',
    answer:
      'No. We train your team during the handoff and document everything. The system is designed to run without ongoing technical management from your side.',
  },
] as const

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-[#0a0a0a] px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <div className="mb-4 text-xs uppercase tracking-[0.2em] text-white/40">FAQ</div>
          <h2 className="text-4xl font-bold text-white">Common Questions</h2>
        </div>

        <div className="space-y-4">
          {items.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-2xl border border-white/8"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between px-6 py-5 text-left font-medium text-white hover:bg-white/[0.02]"
                >
                  <span>{item.question}</span>
                  <span className="flex-shrink-0 text-xl text-[#2563EB]">
                    {isOpen ? '-' : '+'}
                  </span>
                </button>
                {isOpen ? (
                  <div className="px-6 pb-5 text-white/60 leading-relaxed">{item.answer}</div>
                ) : null}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
