import type { Metadata } from 'next'
import Link from 'next/link'

import { SITE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Learn what information Agent Setup Experts collects, how we use it, and how to contact us with privacy questions.',
  alternates: {
    canonical: '/privacy-policy',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const lastUpdated = 'May 22, 2026'

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-[#0a0a0a] px-6 py-20 text-white">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm uppercase tracking-[0.24em] text-[#60a5fa]">Privacy Policy</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">How Agent Setup Experts handles your information</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
          This page explains what information we collect through <Link href={SITE.url} className="text-white underline decoration-white/30 underline-offset-4">agentsetupexperts.com</Link>, how we use it, who helps us operate the site, and how to contact us if you have privacy questions.
        </p>
        <p className="mt-4 text-sm text-white/45">Last updated: {lastUpdated}</p>

        <div className="mt-12 space-y-10 rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
          <section>
            <h2 className="text-2xl font-semibold">What information we collect</h2>
            <div className="mt-4 space-y-4 text-white/75">
              <p>
                We collect information you choose to send us, plus limited website usage data that helps us understand how people use the site.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li><strong>Contact form submissions:</strong> when you send us a message, we collect the information you enter in the form, including your first name, last name, company, and message.</li>
                <li><strong>Booking information:</strong> when you schedule a call through Calendly, Calendly may collect details such as your name, email address, scheduling preferences, and any information you choose to provide during booking.</li>
                <li><strong>Website usage data:</strong> Google Analytics and Google Tag Manager may collect information such as pages viewed, general device and browser information, referral source, and basic interaction data. This information is typically collected through cookies or similar technologies.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">How we use your information</h2>
            <div className="mt-4 space-y-4 text-white/75">
              <p>We use the information we collect to run the website and respond to business inquiries.</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Respond to questions and follow up on requests you send through the contact form.</li>
                <li>Schedule and manage strategy calls requested through Calendly.</li>
                <li>Measure site traffic and improve the website, messaging, and lead flow.</li>
                <li>Maintain site security, diagnose technical issues, and support business operations.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">How your information is protected</h2>
            <div className="mt-4 space-y-4 text-white/75">
              <p>
                We use reasonable administrative and technical measures to protect the information submitted through this website. That includes relying on established third-party platforms that provide their own security controls for form handling, scheduling, hosting, and analytics.
              </p>
              <p>
                No internet transmission or storage system is guaranteed to be 100% secure, but we take privacy seriously and work to limit access to business inquiry information to what is reasonably needed to operate the site and respond to leads.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Third parties and service providers</h2>
            <div className="mt-4 space-y-4 text-white/75">
              <p>
                We do not sell your personal information. We may share information with service providers that help us operate the website and handle inquiries, only as needed for those services to work.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li><strong>Formspree</strong> processes contact form submissions sent through this website.</li>
                <li><strong>Calendly</strong> handles online scheduling for strategy calls.</li>
                <li><strong>Google Tag Manager and Google Analytics</strong> help us understand website traffic and marketing performance.</li>
                <li><strong>Our hosting and website infrastructure providers</strong> may process technical data needed to deliver the website securely and reliably.</li>
              </ul>
              <p>
                We may also disclose information if required to comply with law, enforce our rights, or protect the security of the website or our business.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Your choices</h2>
            <div className="mt-4 space-y-4 text-white/75">
              <p>
                You can choose not to submit contact information through the form or not to book through Calendly. You can also control or block cookies through your browser settings, although some site features or measurement tools may not work as expected.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Contact us about privacy</h2>
            <div className="mt-4 space-y-4 text-white/75">
              <p>
                If you have any questions about this Privacy Policy or how your information is handled, contact us at <a href={`mailto:${SITE.email}`} className="text-white underline decoration-white/30 underline-offset-4">{SITE.email}</a>.
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}
