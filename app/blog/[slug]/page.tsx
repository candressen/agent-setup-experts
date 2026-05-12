import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { getAllPosts, getPostBySlug } from '@/lib/blog'

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) return {}

  return {
    title: post.title + ' | Agent Setup Experts',
    description: post.description,
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) notFound()

  return (
    <main className='min-h-screen bg-white px-6 py-32'>
      <div className='mx-auto max-w-[800px]'>
      <Link href='/blog' className='mb-12 block text-sm text-gray-400 transition hover:text-gray-800'>
        ← Back to Blog
      </Link>
      <div className='mb-4 text-xs text-gray-400'>{post.date}</div>
      <h1 className='mb-6 text-4xl font-bold text-gray-900 md:text-5xl'>{post.title}</h1>
      <p className='mb-12 border-b border-gray-200 pb-12 text-lg text-gray-600'>
        {post.description}
      </p>
      <div className='prose max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-[#2563EB] prose-strong:text-gray-900'>
        <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }} />
      </div>
      <div className='mt-16 rounded-2xl border border-[#2563EB]/20 bg-blue-50 p-8 text-center'>
        <h3 className='mb-3 text-xl font-semibold text-gray-900'>
          Ready to automate your business?
        </h3>
        <p className='mb-6 text-gray-600'>
          Book a free 30-minute strategy call and get a working AI system in 48 hours.
        </p>
        <a
          href='https://calendly.com/agentsetupexperts/30min?redirect_url=https://agentsetupexperts.com/thank-you'
          target='_blank'
          rel='noreferrer'
          className='inline-flex rounded-xl bg-[#2563EB] px-8 py-4 text-base font-semibold text-white transition hover:bg-[#1d4ed8]'
        >
          Book Your Free Strategy Call
        </a>
      </div>
      </div>
    </main>
  )
}
