import Image from 'next/image'

const contacts = [
  { role: 'Team', emails: ['jules@kalgard.ai', 'thibault@kalgard.ai'] },
  { role: 'Business', emails: ['maxime@kalgard.ai'] },
  { role: 'Testing & military field experience', emails: ['massimo@kalgard.ai'] },
]

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-loam bg-bedrock px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-clay">
          Contact
        </p>
        <div className="mt-3 h-px w-10 bg-clay/40" />

        <a
          href="mailto:contact@kalgardsystems.com"
          className="mt-10 block w-fit font-display text-2xl font-medium uppercase leading-none text-ink transition-colors hover:text-marker md:text-h3"
        >
          contact@kalgardsystems.com
        </a>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {contacts.map(({ role, emails }) => (
            <div key={role}>
              <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-clay">
                {role}
              </p>
              {emails.map((email) => (
                <a
                  key={email}
                  href={`mailto:${email}`}
                  className="mt-3 block w-fit break-all font-sans text-base text-ink/80 transition-colors hover:text-marker"
                >
                  {email}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-loam pt-8 md:flex-row md:items-center md:justify-between">
          <Image
            src="/logos/logo-h.png"
            alt="KALGARD"
            width={1296}
            height={304}
            className="h-6 w-auto self-start invert"
          />
          <div className="font-sans text-xs font-light text-ink/40">
            <p>INRIA-incubated · © 2026 KALGARD Systems. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
