'use client'

import { useEffect, useRef } from 'react'

/**
 * Attaches an IntersectionObserver that adds the `is-visible` class
 * to every child with the `reveal` class within the container ref.
 *
 * Usage:
 *   const containerRef = useReveal()
 *   <section ref={containerRef}>
 *     <div className="reveal">...</div>
 *     <div className="reveal reveal-delay-1">...</div>
 *   </section>
 */
export function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const targets = el.querySelectorAll<HTMLElement>('.reveal')
    if (!targets.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    )

    targets.forEach((t) => observer.observe(t))
    return () => observer.disconnect()
  }, [threshold])

  return ref
}
