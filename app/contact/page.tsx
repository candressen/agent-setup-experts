import type { Metadata } from 'next'
import Script from 'next/script'

import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Book a Free Strategy Call | Contact Agent Setup Experts',
  description:
    'Book a free 30-minute strategy call. We will map out exactly what AI can do for your business. No pressure, no obligation.',
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-[#0a0a0a] px-6 py-20 text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
            Let&apos;s Build Your AI System
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/80 md:text-xl">
            Book a free 30-minute strategy call. We will map out exactly what AI can do for your
            business.
          </p>
        </div>
      </section>

      <section className="border-y border-white/8 bg-[#0f0f0f] px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-10 text-3xl font-bold text-white">What Happens on the Call</h2>

          <div className="space-y-5">
            <div className="flex items-start gap-3 text-white/80">
              <span className="text-[#2563EB]">✓</span>
              <p>We review your current workflows and identify the best automation opportunities</p>
            </div>
            <div className="flex items-start gap-3 text-white/80">
              <span className="text-[#2563EB]">✓</span>
              <p>We recommend the right setup for your business size and budget</p>
            </div>
            <div className="flex items-start gap-3 text-white/80">
              <span className="text-[#2563EB]">✓</span>
              <p>You leave with a clear action plan — no pressure, no upsell</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] px-6 py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold text-white">Book Your Free Strategy Call</h2>
          <p className="mt-6 text-lg leading-relaxed text-white/80">
            Book a free 30-minute strategy call. You will walk away with a clear action plan for
            how AI can save your team time and reduce costs — whether we work together or not. No
            pressure, no obligation.
          </p>

          <div
            className="calendly-inline-widget mt-8 rounded-2xl overflow-hidden"
            data-url="https://calendly.com/agentsetupexperts/30min?hide_gdpr_banner=1&background_color=111111&text_color=ffffff&primary_color=2563eb&redirect_url=https://agentsetupexperts.com/thank-you"
            style={{minWidth: '320px', height: '700px'}}
          />
          <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
        </div>
      </section>

      <section className="border-y border-white/8 bg-[#0f0f0f] px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-8 text-3xl font-bold text-white">Send Us a Message</h2>
          <ContactForm />
        </div>
      </section>

      <section className="border-y border-white/8 bg-[#0f0f0f] px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-8 text-3xl font-bold text-white">Prefer to reach out directly?</h2>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-white/80">
              <span className="text-[#2563EB]">•</span>
              <span>Phone: 704-490-9493</span>
            </div>
            <div className="flex items-center gap-3 text-white/80">
              <span className="text-[#2563EB]">•</span>
              <span>Email: agentsetupexperts@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-white/80">
              <span className="text-[#2563EB]">•</span>
              <span>Location: Miami, Florida</span>
            </div>
            <div className="flex items-center gap-3 text-white/80">
              <span className="text-[#2563EB]">•</span>
              <span>Response time: Within 24 hours</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] px-6 py-12 text-center">
        <p className="text-xl font-semibold text-white">Build it right the first time.</p>
      </section>
    </>
  )
}
