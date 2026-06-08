'use client'

import type { ChangeEvent, FormEvent } from 'react'
import { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    company: '',
    message: '',
  })

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      await fetch('https://formspree.io/f/mbdqgwob', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className='rounded-2xl border border-[#2563EB]/20 bg-[#2563EB]/5 p-8 text-center'>
        <div className='mb-3 text-2xl'>✓</div>
        <h3 className='text-lg font-semibold text-white'>Message received</h3>
        <p className='mt-2 text-sm text-white/50'>We will get back to you within 24 hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
        <div>
          <label className='mb-1.5 block text-sm text-white/50'>First Name</label>
          <input
            name='firstName'
            required
            value={form.firstName}
            onChange={handleChange}
            className='w-full rounded-xl border border-white/10 bg-[#111] px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition focus:border-[#2563EB]/50 focus:ring-1 focus:ring-[#2563EB]/30'
            placeholder='First name'
          />
        </div>
        <div>
          <label className='mb-1.5 block text-sm text-white/50'>Last Name</label>
          <input
            name='lastName'
            required
            value={form.lastName}
            onChange={handleChange}
            className='w-full rounded-xl border border-white/10 bg-[#111] px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition focus:border-[#2563EB]/50 focus:ring-1 focus:ring-[#2563EB]/30'
            placeholder='Last name'
          />
        </div>
      </div>
      <div>
        <label className='mb-1.5 block text-sm text-white/50'>Company</label>
        <input
          name='company'
          value={form.company}
          onChange={handleChange}
          className='w-full rounded-xl border border-white/10 bg-[#111] px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition focus:border-[#2563EB]/50 focus:ring-1 focus:ring-[#2563EB]/30'
          placeholder='Your company name'
        />
      </div>
      <div>
        <label className='mb-1.5 block text-sm text-white/50'>Message</label>
        <textarea
          name='message'
          required
          value={form.message}
          onChange={handleChange}
          rows={4}
          className='w-full resize-none rounded-xl border border-white/10 bg-[#111] px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition focus:border-[#2563EB]/50 focus:ring-1 focus:ring-[#2563EB]/30'
          placeholder='Tell us about your business and what you want to automate...'
        />
      </div>
      <button
        type='submit'
        disabled={status === 'sending'}
        className='w-full rounded-xl bg-[#2563EB] px-8 py-4 text-base font-semibold text-white transition hover:bg-[#1d4ed8] disabled:opacity-60'
      >
        Send Message
      </button>
      {status === 'error' && (
        <p className='text-center text-sm text-red-400'>
          Something went wrong. Try emailing us directly.
        </p>
      )}
    </form>
  )
}
