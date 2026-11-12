'use client'

import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'

// One row of hardware and field media that scrolls sideways: swipe on a phone,
// arrows on a desktop. Monochrome until hovered, like the rest of the section.

type Slide = {
  caption: string
  alt: string
  src: string
  // set for a looping video; src is then the mp4
  poster?: string
}

const SLIDES: Slide[] = [
  {
    src: '/media/new-files/module-mk2-prototype.jpg',
    alt: 'MerlinSight prototype, camera and compute',
    caption: 'Prototype · optics & compute',
  },
  {
    src: '/videos/demo/field-trial.mp4',
    poster: '/videos/posters/field-trial.jpg',
    alt: 'Fitting the MerlinSight module under a drone, then the drone in flight',
    caption: 'Flight trials · module on the airframe',
  },
  {
    src: '/media/new-files/field-mission-setup.jpg',
    alt: 'Preparing a flight on a laptop in the field',
    caption: 'Mission setup · in the field',
  },
  {
    src: '/media/new-files/field-trial-site.jpg',
    alt: 'Flight trial site with the drone and ground equipment on folding tables',
    caption: 'Flight trials · on site',
  },
  {
    src: '/media/new-files/field-demo.jpg',
    alt: 'Presenting the MerlinSight prototype to a soldier in the field',
    caption: 'Field demonstration · army regiment',
  },
  {
    src: '/media/new-files/workshop.png',
    alt: 'Flight integration work in the KALGARD workshop',
    caption: 'Flight integration · workshop',
  },
]

function Brackets() {
  return (
    <>
      <span aria-hidden="true" className="absolute left-0 top-0 h-3 w-3 border-l border-t border-ink/60" />
      <span aria-hidden="true" className="absolute right-0 top-0 h-3 w-3 border-r border-t border-ink/60" />
      <span aria-hidden="true" className="absolute bottom-0 left-0 h-3 w-3 border-b border-l border-ink/60" />
      <span aria-hidden="true" className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-ink/60" />
    </>
  )
}

export default function MediaCarousel() {
  const track = useRef<HTMLDivElement>(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const update = useCallback(() => {
    const el = track.current
    if (!el) return
    setAtStart(el.scrollLeft <= 2)
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 2)
  }, [])

  useEffect(() => {
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [update])

  // move by one slide
  const step = (dir: 1 | -1) => {
    const el = track.current
    const slide = el?.firstElementChild as HTMLElement | null
    if (!el || !slide) return
    el.scrollBy({ left: dir * (slide.offsetWidth + 16), behavior: 'smooth' })
  }

  const arrow =
    'flex h-10 w-10 items-center justify-center border border-ink/30 font-sans text-lg text-ink transition hover:border-marker hover:text-marker disabled:cursor-default disabled:border-ink/10 disabled:text-ink/20'

  return (
    <div className="mt-16" role="region" aria-label="Hardware and field media">
      <div
        ref={track}
        onScroll={update}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {SLIDES.map((s) => (
          <figure
            key={s.src}
            className="w-[82%] shrink-0 snap-start sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-2rem)/3)]"
          >
            <div className="relative overflow-hidden p-1.5">
              <Brackets />
              {s.poster ? (
                <video
                  className="aspect-[3/2] w-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  poster={s.poster}
                  aria-label={s.alt}
                >
                  <source src={s.src} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={s.src}
                  alt={s.alt}
                  width={900}
                  height={600}
                  sizes="(min-width: 1024px) 340px, (min-width: 640px) 50vw, 82vw"
                  className="aspect-[3/2] w-full object-cover grayscale transition duration-500 hover:scale-[1.02] hover:grayscale-0"
                />
              )}
            </div>
            <figcaption className="mt-3 font-sans text-xs font-light uppercase tracking-[0.15em] text-ink/40">
              {s.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-6 flex justify-end gap-2">
        <button type="button" className={arrow} onClick={() => step(-1)} disabled={atStart} aria-label="Previous media">
          &larr;
        </button>
        <button type="button" className={arrow} onClick={() => step(1)} disabled={atEnd} aria-label="Next media">
          &rarr;
        </button>
      </div>
    </div>
  )
}
