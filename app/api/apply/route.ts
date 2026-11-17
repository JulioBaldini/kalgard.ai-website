import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { getOpenings } from '@/lib/careers'

// Job application endpoint. Receives multipart form data (fields + CV) and
// relays it by email via Resend, CV attached. Same sandbox rule as
// /api/contact: CONTACT_TO_ADDRESS overrides the recipient until the
// kalgard.ai domain is verified in Resend.

const FROM_ADDRESS = process.env.CONTACT_FROM_ADDRESS ?? 'Kalgard website <onboarding@resend.dev>'
const MAX_CV_BYTES = 4 * 1024 * 1024 // Vercel function body limit is 4.5 MB
const ALLOWED_CV_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]

function text(value: FormDataEntryValue | null, max: number): string {
  return typeof value === 'string' ? value.trim().slice(0, max) : ''
}

export async function POST(request: Request) {
  let form: FormData
  try {
    form = await request.formData()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  // Honeypot: real visitors never fill this hidden field.
  if (text(form.get('website'), 100)) {
    return NextResponse.json({ ok: true })
  }

  const openingId = text(form.get('opening'), 200)
  const name = text(form.get('name'), 200)
  const email = text(form.get('email'), 320)
  const phone = text(form.get('phone'), 50)
  const linkedin = text(form.get('linkedin'), 300)
  const portfolio = text(form.get('portfolio'), 300)
  const message = text(form.get('message'), 5000)
  const cv = form.get('cv')

  const opening = getOpenings().find((o) => o.id === openingId)
  if (!opening) {
    return NextResponse.json({ error: 'Unknown position.' }, { status: 400 })
  }
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'Name, email and message are required.' },
      { status: 400 },
    )
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 })
  }
  if (!(cv instanceof File) || cv.size === 0) {
    return NextResponse.json({ error: 'A CV file is required.' }, { status: 400 })
  }
  if (cv.size > MAX_CV_BYTES) {
    return NextResponse.json({ error: 'CV must be under 4 MB.' }, { status: 400 })
  }
  if (!ALLOWED_CV_TYPES.includes(cv.type)) {
    return NextResponse.json(
      { error: 'CV must be a PDF or Word document.' },
      { status: 400 },
    )
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('RESEND_API_KEY is not set')
    return NextResponse.json(
      { error: 'Mail service is not configured.' },
      { status: 503 },
    )
  }

  const resend = new Resend(apiKey)
  const cvContent = Buffer.from(await cv.arrayBuffer())

  const { error: sendError } = await resend.emails.send({
    from: FROM_ADDRESS,
    to: process.env.CONTACT_TO_ADDRESS ?? opening.applyEmail,
    replyTo: email,
    subject: `[kalgard.ai] Application — ${opening.title} — ${name}`,
    text: [
      `Position: ${opening.title}`,
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      linkedin ? `LinkedIn: ${linkedin}` : null,
      portfolio ? `Portfolio / GitHub: ${portfolio}` : null,
      '',
      message,
    ]
      .filter((line) => line !== null)
      .join('\n'),
    attachments: [
      {
        filename: cv.name || 'cv.pdf',
        content: cvContent,
      },
    ],
  })

  if (sendError) {
    console.error('Resend error:', sendError)
    return NextResponse.json(
      { error: 'Failed to send the application. Please try again later.' },
      { status: 502 },
    )
  }

  return NextResponse.json({ ok: true })
}
