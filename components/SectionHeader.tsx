// Editorial section header: full-width rule, survey-square, oversized title,
// optional meta aligned right. Tone switches text colors for normal (bedrock
// bg) and inverted (ink bg) sections.
type Props = {
  title: string
  meta?: string
  tone?: 'dark' | 'light'
}

export default function SectionHeader({ title, meta, tone = 'dark' }: Props) {
  const text = tone === 'dark' ? 'text-ink' : 'text-bedrock'
  const faded = tone === 'dark' ? 'text-ink/40' : 'text-bedrock/40'
  const rule = tone === 'dark' ? 'bg-ink/15' : 'bg-bedrock/15'

  return (
    <header>
      <div className={`h-px w-full ${rule}`} />
      <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4 pt-5">
        <div className="flex items-start gap-4">
          <span className="mt-2 h-2 w-2 bg-marker" aria-hidden="true" />
          <h2
            className={`font-display text-4xl font-medium uppercase leading-none md:text-h1 ${text}`}
          >
            {title}
          </h2>
        </div>
        {meta && (
          <p className={`font-sans text-xs font-light tracking-[0.15em] ${faded}`}>
            {meta}
          </p>
        )}
      </div>
    </header>
  )
}
