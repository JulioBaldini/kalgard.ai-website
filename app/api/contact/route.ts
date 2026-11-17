import { NextResponse } from 'next/server'
import { Resend } from 'resend'

// Contact form endpoint. Sends the submission to contact@kalgard.ai via
// Resend. Until the kalgard.ai domain is verified in Resend, the "from"
// address must stay on resend.dev; the visitor's address goes in reply-to.

const TO_ADDRESS = process.env.CONTACT_TO_ADDRESS ?? 'contact@kalgard.ai'
const FROM_ADDRESS = process.env.CONTACT_FROM_ADDRESS ?? 'Kalgard website <onboarding@resend.dev>'
const MAX_LENGTHS = { name: 200, email: 320, organization: 200, message: 5000 } as const

type Payload = Record<keyof typeof MAX_LENGTHS, string> & { website?: string }

function invalid(payload: Partial<Payload>): string | null {
  const { name, email, message } = payload
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return 'Name, email and message are required.'
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return 'Invalid email address.'
  }
  for (const [field, max] of Object.entries(MAX_LENGTHS)) {
    const value = payload[field as keyof typeof MAX_LENGTHS]
    if (value && value.length > max) return `${field} is too long.`
  }
  return null
}

export async function POST(request: Request) {
  let payload: Partial<Payload>
  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  // Honeypot: real visitors never fill this hidden field.
  if (payload.website) {
    return NextResponse.json({ ok: true })
  }

  const error = invalid(payload)
  if (error) {
    return NextResponse.json({ error }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('RESEND_API_KEY is not set')
    return NextResponse.json(
      { error: 'Mail service is not configured.' },
      { status: 503 },
    )
  }

  const { name, email, organization, message } = payload as Payload
  const resend = new Resend(apiKey)

  const { error: sendError } = await resend.emails.send({
    from: FROM_ADDRESS,
    to: TO_ADDRESS,
    replyTo: email,
    subject: `[kalgard.ai] Contact — ${name}${organization ? ` (${organization})` : ''}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      organization ? `Organization: ${organization}` : null,
      '',
      message,
    ]
      .filter((line) => line !== null)
      .join('\n'),
  })

  if (sendError) {
    console.error('Resend error:', sendError)
    return NextResponse.json(
      { error: 'Failed to send the message. Please try again later.' },
      { status: 502 },
    )
  }

  return NextResponse.json({ ok: true })
}
