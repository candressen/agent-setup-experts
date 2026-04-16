import type { Metadata } from 'next'
import Link from 'next/link'

import { getAllPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog | AI Agent Setup Insights',
  description:
    'Practical guides on AI automation, OpenClaw setup, and how businesses are saving time with AI agents.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <main className='mx-auto max-w-[1200px] px-6 py-32'>
      <div className='mb-16'>
        <div className='mb-4 text-xs uppercase tracking-[0.2em] text-white/40'>BLOG</div>
        <h1 className='text-4xl font-bold text-white md:text-5xl'>AI Automation Insights</h1>
        <p className='mt-4 max-w-xl text-lg text-white/50'>
          Practical guides on how businesses use AI agents to save time and reduce manual work.
        </p>
      </div>

      {posts.length === 0 ? (
        <p className='text-white/40'>Posts coming soon.</p>
      ) : (
        <div className='grid gap-8 md:grid-cols-2'>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={'/blog/' + post.slug}
              className='group rounded-2xl border border-white/10 bg-[#111] p-8 transition hover:border-white/20'
            >
              <div className='mb-2 text-xs text-white/30'>{post.date}</div>
              <h2 className='mb-3 text-xl font-semibold text-white transition group-hover:text-[#2563EB]'>
                {post.title}
              </h2>
              <p className='text-sm leading-relaxed text-white/50'>{post.description}</p>
              <div className='mt-6 text-xs text-[#2563EB]'>Read more →</div>
            </Link>
          ))}
        </div>
      )}
    </main>
  )
}
