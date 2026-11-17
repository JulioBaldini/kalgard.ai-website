'use client'

import { useState, type FormEvent } from 'react'

type Status = 'idle' | 'sending' | 'sent' | 'error'

const FIELD_CLASSES =
  'w-full border border-loam bg-bedrock px-4 py-3 font-sans text-sm font-light text-ink placeholder:text-ink/30 outline-none transition-colors focus:border-marker'

const LABEL_CLASSES = 'font-sans text-xs font-medium uppercase tracking-[0.2em] text-clay'

export default function ApplicationForm({ openingId }: { openingId: string }) {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget

    setStatus('sending')
    setError('')
    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        body: new FormData(form),
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
          Application sent
        </p>
        <p className="mt-4 font-sans text-sm font-light leading-relaxed text-ink/70">
          Thank you. We read every application and will get back to you shortly.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input type="hidden" name="opening" value={openingId} />
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
          <span className={LABEL_CLASSES}>Full name *</span>
          <input name="name" required maxLength={200} autoComplete="name" className={FIELD_CLASSES} />
        </label>
        <label className="flex flex-col gap-2">
          <span className={LABEL_CLASSES}>Email *</span>
          <input name="email" type="email" required maxLength={320} autoComplete="email" className={FIELD_CLASSES} />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className={LABEL_CLASSES}>Phone</span>
          <input name="phone" type="tel" maxLength={50} autoComplete="tel" className={FIELD_CLASSES} />
        </label>
        <label className="flex flex-col gap-2">
          <span className={LABEL_CLASSES}>LinkedIn</span>
          <input name="linkedin" type="url" maxLength={300} placeholder="https://" className={FIELD_CLASSES} />
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className={LABEL_CLASSES}>Portfolio / GitHub</span>
        <input name="portfolio" type="url" maxLength={300} placeholder="https://" className={FIELD_CLASSES} />
      </label>

      <label className="flex flex-col gap-2">
        <span className={LABEL_CLASSES}>CV (PDF, max 4 MB) *</span>
        <input
          name="cv"
          type="file"
          required
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          className="w-full border border-loam bg-bedrock px-4 py-3 font-sans text-sm font-light text-ink/70 outline-none transition-colors file:mr-4 file:border-0 file:bg-loam file:px-4 file:py-1.5 file:font-sans file:text-xs file:font-medium file:uppercase file:tracking-wide file:text-ink focus:border-marker"
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className={LABEL_CLASSES}>Why you, why now *</span>
        <textarea
          name="message"
          required
          maxLength={5000}
          rows={6}
          placeholder="A short note — and whatever shows your work best."
          className={FIELD_CLASSES}
        />
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
        {status === 'sending' ? 'Sending…' : 'Submit application'}
      </button>
    </form>
  )
}
