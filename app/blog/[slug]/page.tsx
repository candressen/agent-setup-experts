import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
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
    <main className='mx-auto max-w-[800px] px-6 py-32'>
      <Link href='/blog' className='mb-12 block text-sm text-white/40 transition hover:text-white'>
        ← Back to Blog
      </Link>
      <div className='mb-4 text-xs text-white/30'>{post.date}</div>
      <h1 className='mb-6 text-4xl font-bold text-white md:text-5xl'>{post.title}</h1>
      <p className='mb-12 border-b border-white/8 pb-12 text-lg text-white/50'>
        {post.description}
      </p>
      <div className='prose prose-invert max-w-none prose-headings:text-white prose-p:text-white/70 prose-a:text-[#2563EB] prose-strong:text-white'>
        <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }} />
      </div>
      <div className='mt-16 rounded-2xl border border-[#2563EB]/20 bg-[#2563EB]/5 p-8 text-center'>
        <h3 className='mb-3 text-xl font-semibold text-white'>
          Ready to automate your business?
        </h3>
        <p className='mb-6 text-white/60'>
          Book a free 30-minute strategy call and get a working AI system in 48 hours.
        </p>
        <a
          href='https://calendly.com/agentsetupexperts/30min'
          target='_blank'
          rel='noreferrer'
          className='inline-flex rounded-xl bg-[#2563EB] px-8 py-4 text-base font-semibold text-white transition hover:bg-[#1d4ed8]'
        >
          Book Your Free Strategy Call
        </a>
      </div>
    </main>
  )
}
