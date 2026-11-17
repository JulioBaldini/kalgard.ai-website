'use client'

import { useState, type FormEvent } from 'react'

type Status = 'idle' | 'sending' | 'sent' | 'error'

const FIELD_CLASSES =
  'w-full border border-loam bg-bedrock px-4 py-3 font-sans text-sm font-light text-ink placeholder:text-ink/30 outline-none transition-colors focus:border-marker'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    setStatus('sending')
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        const body = await res.json().catch(() => null)
        throw new Error(body?.error ?? 'Something went wrong.')
      }
      setStatus('sent')
      form.reset()
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Something went wrong.')
    }
  }

  if (status === 'sent') {
    return (
      <div className="border border-loam p-8" role="status">
        <p className="font-display text-2xl font-medium uppercase leading-none text-marker">
          Message sent
        </p>
        <p className="mt-4 font-sans text-sm font-light leading-relaxed text-ink/70">
          Thank you. We read every message and will get back to you shortly.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {/* honeypot — hidden from humans, bots fill it */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-clay">
            Name *
          </span>
          <input name="name" required maxLength={200} className={FIELD_CLASSES} />
        </label>
        <label className="flex flex-col gap-2">
          <span className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-clay">
            Email *
          </span>
          <input name="email" type="email" required maxLength={320} className={FIELD_CLASSES} />
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-clay">
          Organization
        </span>
        <input name="organization" maxLength={200} className={FIELD_CLASSES} />
      </label>

      <label className="flex flex-col gap-2">
        <span className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-clay">
          Message *
        </span>
        <textarea name="message" required maxLength={5000} rows={5} className={FIELD_CLASSES} />
      </label>

      {status === 'error' && (
        <p className="font-sans text-sm font-medium text-marker" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="mt-2 w-fit bg-marker px-7 py-3 font-sans text-sm font-semibold uppercase tracking-wide text-ink transition-all duration-200 hover:-translate-y-0.5 hover:bg-salmon-2 hover:shadow-lg hover:shadow-marker/30 disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
      >
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  )
}
