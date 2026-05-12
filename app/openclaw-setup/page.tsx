import type { Metadata } from 'next'

import ClosingCTASection from '@/components/ClosingCTASection'
import PricingPreviewSection from '@/components/PricingPreviewSection'
import { SITE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'OpenClaw AI Agent Setup Service | Miami | Agent Setup Experts',
  description:
    'Professional OpenClaw AI agent setup for businesses in Miami. Installation, API integrations, custom agents, and workflow automation in 48 hours.',
}

const serviceCards = [
  {
    title: 'Install and Configure',
    description:
      'We install OpenClaw in the right environment for your business and make sure the core setup is stable, secure, and ready to use.',
  },
  {
    title: 'Connect Your Tools',
    description:
      'We connect OpenClaw to the systems your team already uses, including email, CRM platforms, Slack, internal tools, and other business software.',
  },
  {
    title: 'Build Custom Agents',
    description:
      'We create one to three agents based on your actual business processes, so the system supports real work instead of sitting unused after setup.',
  },
  {
    title: 'Train Your Team',
    description:
      'We show your team how to use the system, what each agent does, and how to manage it going forward, with documentation you can keep internally.',
  },
] as const

const audienceCards = [
  {
    title: 'Agencies 🏢',
    description:
      'We set up OpenClaw to help agencies handle lead follow-up, client communication, reporting, and internal task routing faster.',
  },
  {
    title: 'Law Firms ⚖️',
    description:
      'We use OpenClaw to support intake, document workflows, client updates, and other repeatable admin-heavy processes law firms deal with every day.',
  },
  {
    title: 'Real Estate 🏠',
    description:
      'We set up OpenClaw for lead response, appointment coordination, listing-related workflows, and follow-up across your sales pipeline.',
  },
  {
    title: 'Consultants 💼',
    description:
      'We build OpenClaw systems that help consultants organize client requests, prepare research, manage delivery steps, and reduce manual back-and-forth.',
  },
] as const

const whyItems = [
  {
    number: '1',
    title: 'We Have Installed OpenClaw for Businesses',
    description:
      'We know where setups usually break, where integrations get messy, and what needs to be configured correctly from the start to avoid wasted time.',
  },
  {
    number: '2',
    title: 'We Configure It for Your Specific Workflows',
    description:
      'We do not drop in a generic template and call it done. We map OpenClaw to the way your business actually works so the agents are useful on day one.',
  },
  {
    number: '3',
    title: '48-Hour Deployment, Trained Team, 30-Day Support',
    description:
      'You get a fast rollout, clear team training, documentation, and post-setup support so you are not left managing the handoff alone.',
  },
] as const

const faqItems = [
  {
    question: 'Do I need a server to run OpenClaw?',
    answer:
      'In most cases yes. OpenClaw needs to run somewhere reliable — your own server, a cloud environment, or infrastructure we help you set up for the project.',
  },
  {
    question: 'Can OpenClaw connect to tools we already use?',
    answer:
      'Yes. We set up OpenClaw to work with the tools your business already depends on, as long as those tools support integrations or API access.',
  },
  {
    question: 'How is this different from just using ChatGPT?',
    answer:
      'ChatGPT is a single AI tool. OpenClaw gives your business a framework for running connected AI agents that can follow workflows, use multiple tools, and support ongoing operational tasks.',
  },
  {
    question: 'What does the setup process look like?',
    answer:
      'We start with a strategy call, define the workflows that matter most, install and configure OpenClaw, connect your tools, build your agents, test everything, and train your team.',
  },
  {
    question: 'What if we need changes after the setup?',
    answer:
      'Your setup includes 30 days of support, so we can make adjustments, fix issues, and help your team settle into the system after launch.',
  },
] as const

export default function OpenClawSetupPage() {
  return (
    <>
      <section className="bg-[#0a0a0a] px-6 py-20 text-center">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-[#2563EB]">
            OPENCLAW SETUP
          </div>

          <h1 className="mb-8 text-5xl font-bold tracking-tight text-white leading-tight md:text-7xl">
            OpenClaw Setup for Your Business
          </h1>

          <p className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-white/60 md:text-xl">
            We handle the OpenClaw setup from start to finish, so your business does not have to
            sort through servers, integrations, and technical configuration on its own. Instead
            of spending weeks figuring it out, you get a working AI agent system set up around
            the way your team already operates.
          </p>

          <a
            href={SITE.calendlyUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-xl bg-[#2563EB] px-8 py-4 text-base font-semibold text-white transition hover:bg-[#1d4ed8]"
          >
            Book Your Free Strategy Call
          </a>
        </div>
      </section>

      <section className="border-y border-white/8 bg-white/[0.02] px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold text-white">What Is OpenClaw?</h2>

          <div className="space-y-6 text-white/60 leading-relaxed">
            <p>
              OpenClaw is an AI agent framework that helps businesses run AI-powered workflows.
              It gives you a way to set up agents that can follow rules, complete tasks, and move
              work across your systems.
            </p>
            <p>
              Businesses choose OpenClaw because it is flexible, powerful, and built to connect
              with the tools they already use. That makes it useful for companies that want more
              than a basic chatbot and need AI to actually support day-to-day operations.
            </p>
            <p>
              The challenge is that OpenClaw is not a plug-and-play business tool. It takes setup
              work, technical configuration, integrations, testing, and a clear plan for how the
              agents should fit into your workflow.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">
            What We Do With OpenClaw
          </h2>

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
            {serviceCards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-white/8 bg-white/[0.04] p-8"
              >
                <h3 className="mb-4 text-xl font-semibold text-white">{card.title}</h3>
                <p className="leading-relaxed text-white/60">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-white/[0.02] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">
            Who Uses OpenClaw
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {audienceCards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-white/8 bg-white/[0.04] p-6"
              >
                <h3 className="mb-4 text-lg font-semibold text-white">{card.title}</h3>
                <p className="leading-relaxed text-white/60">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-12 text-3xl font-bold text-white">Why Work With Us</h2>

          <div className="space-y-6 text-left">
            {whyItems.map((item) => (
              <div key={item.number} className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-[#2563EB]/30 bg-[#2563EB]/10 text-sm font-semibold text-[#2563EB]">
                  {item.number}
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="leading-relaxed text-white/60">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PricingPreviewSection />

      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-white">Common Questions</h2>
          </div>

          <div className="space-y-6">
            {faqItems.map((item) => (
              <div key={item.question} className="border-b border-white/8 pb-6">
                <h3 className="mb-3 text-lg font-semibold text-white">{item.question}</h3>
                <p className="leading-relaxed text-white/60">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClosingCTASection />
    </>
  )
}
