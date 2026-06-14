export const metadata = {
  title: 'Free Guide: Build Your Own Email Manager AI Agent',
  description: 'A practical guide to setting up an AI email manager for your business.',
}

const sections = [
  {
    title: '1. Why email is costing your business time and money',
    body: 'Most teams lose hours every week triaging inboxes, rewriting the same replies, and missing follow-ups. An email manager AI agent helps you respond faster, keep leads warm, and reduce admin work without adding headcount.',
  },
  {
    title: '2. What an Email Manager AI Agent actually does',
    body: 'It can monitor incoming messages, label and prioritize them, draft replies in your brand voice, surface urgent requests, summarize long threads, and trigger automations when a customer is ready to book, buy, or escalate.',
  },
  {
    title: '3. The tools you need',
    body: 'You can start with Gmail, Google Sheets or a CRM, OpenAI or Claude for drafting, and Zapier, Make, or n8n for orchestration. For more advanced workflows, we recommend a proper database, retrieval layer, and monitoring.',
  },
  {
    title: '4. Basic setup steps',
    body: 'Define your inbox categories, list the repeatable reply types, create prompt templates, connect your email platform, add safeguards for approvals, and test with real messages before allowing any automatic sends.',
  },
  {
    title: '5. What we build for businesses like yours',
    body: 'We set up production-ready AI agents that handle inbound email workflows, qualification, follow-ups, and routing. That includes the tools, prompts, automation logic, and team training so you can launch quickly with confidence.',
  },
]

export default function EmailAgentGuidePage() {
  return (
    <section className="bg-[#0a0a0a] px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/30 md:p-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Free Guide</p>
        <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
          Build Your Own Email Manager AI Agent
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-white/75">
          Thanks for downloading the guide. Use this page as your quick-start playbook for reducing inbox busywork and creating a more reliable email workflow.
        </p>

        <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5 text-sm text-cyan-50">
          Want help implementing it faster? Book a free strategy call at{' '}
          <a className="font-semibold underline decoration-cyan-300 underline-offset-4" href="https://calendly.com/agentsetupexperts/30min">
            calendly.com/agentsetupexperts/30min
          </a>
          .
        </div>

        <div className="mt-10 space-y-6">
          {sections.map((section) => (
            <article key={section.title} className="rounded-2xl border border-white/10 bg-black/20 p-6">
              <h2 className="text-xl font-semibold text-white">{section.title}</h2>
              <p className="mt-3 leading-7 text-white/75">{section.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
