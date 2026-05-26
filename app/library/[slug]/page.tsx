import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import AgentDetailPage from '@/components/library/AgentDetailPage'
import { AGENT_LIBRARY, getAgentBySlug } from '@/lib/agent-library'

type AgentDetailPageProps = {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return AGENT_LIBRARY.map((agent) => ({ slug: agent.slug }))
}

export async function generateMetadata({ params }: AgentDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const agent = getAgentBySlug(slug)

  if (!agent) {
    return {
      title: 'Agent not found | Agent Setup Experts',
      description: 'The requested library agent could not be found.',
    }
  }

  const title = `${agent.name} | ASE Agent Library`
  const description = `${agent.summary} Explore workflow fit, common triggers, outputs, and who this agent is best for.`
  const url = `https://agentsetupexperts.com/library/${agent.slug}`

  return {
    title,
    description,
    alternates: {
      canonical: `/library/${agent.slug}`,
    },
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      images: [
        {
          url: `https://agentsetupexperts.com${agent.image}`,
          alt: `${agent.name} icon`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

export default async function LibraryAgentPage({ params }: AgentDetailPageProps) {
  const { slug } = await params
  const agent = getAgentBySlug(slug)

  if (!agent) {
    notFound()
  }

  return <AgentDetailPage agent={agent} />
}
