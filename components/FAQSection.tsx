'use client'

import { useState } from 'react'

const items = [
  {
    question: 'How do the library plans work?',
    answer:
      'Starter includes 5 ASE library agents for a $2,000 setup. Growth includes 10 library agents for a $3,000 setup. Custom is $10,000 for unlimited library agents plus custom-built agents.',
  },
  {
    question: 'Can we pay monthly instead of all at once?',
    answer:
      'Yes. We can present the setup on a 12-month financing view. Starter is $2,600 total financed, shown as about $217 per month. Growth is $3,900 total financed, about $325 per month. Custom is $13,000 total financed, about $1,084 per month.',
  },
  {
    question: 'Is equipment included?',
    answer:
      'No. Equipment is not included in the setup price. Hardware starts at $400 one-time, and your business keeps the equipment.',
  },
  {
    question: 'What happens if we cancel early?',
    answer:
      'These plans are structured around a 12-month agreement. If you choose to cancel early, the remaining unpaid setup balance becomes due. We keep the wording simple so there are no surprises.',
  },
  {
    question: 'We tried ChatGPT and it did not work.',
    answer:
      'ChatGPT is a tool. We build the system. Knowing what to automate, how to connect your tools, and how to configure agents that actually run reliably is a different skill set.',
  },
  {
    question: 'How long does it actually take?',
    answer:
      'The deployment is completed within 48 hours of starting the build. The strategy call and scoping happen before that, usually in the same week.',
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
                  <div className="px-6 pb-5 leading-relaxed text-white/60">{item.answer}</div>
                ) : null}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
