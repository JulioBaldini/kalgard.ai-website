'use client'

import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react'

/**
 * Scroll reveals that never gate content on JavaScript.
 *
 * The hidden state lives in globals.css behind `html[data-anim="on"]`, which the
 * pre-paint script in app/layout.tsx sets. Nothing here ever hides markup — the
 * components only add `data-revealed` — so a slow, blocked or broken bundle
 * degrades to a plain readable page instead of a blank one.
 */

declare global {
  interface Window {
    __kalgardAnimReady?: () => void
  }
}

function useRevealOnScroll<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // Tell the layout failsafe the app is alive, so it stops counting down.
    window.__kalgardAnimReady?.()

    const reveal = () => node.setAttribute('data-revealed', '')

    if (typeof IntersectionObserver === 'undefined') {
      reveal()
      return
    }

    // threshold 0 so a block taller than the screen still triggers: a ratio
    // threshold becomes unreachable once an element outgrows the viewport,
    // which is how the stacked mobile layout ended up permanently hidden.
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return
        reveal()
        observer.disconnect()
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return ref
}

export function Reveal({
  children,
  className,
  delay = 0,
  scale = 1,
}: {
  children: ReactNode
  className?: string
  delay?: number
  scale?: number
}) {
  const ref = useRevealOnScroll<HTMLDivElement>()

  return (
    <div
      ref={ref}
      data-reveal=""
      className={className}
      style={{ '--reveal-scale': String(scale), '--reveal-delay': `${delay}s` } as CSSProperties}
    >
      {children}
    </div>
  )
}

export function StaggerGroup({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRevealOnScroll<HTMLDivElement>()

  return (
    <div ref={ref} data-stagger="" className={className}>
      {children}
    </div>
  )
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div data-stagger-item="" className={className}>
      {children}
    </div>
  )
}

export function HeroEntrance({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  useEffect(() => {
    window.__kalgardAnimReady?.()
  }, [])

  return (
    <div
      data-hero-entrance=""
      className={className}
      style={{ '--reveal-delay': `${delay}s` } as CSSProperties}
    >
      {children}
    </div>
  )
}
