'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    image:    '/images/hero/hero-6k-1.png',
    fallback: '/images/hero/hero-1.jpg',
    badge:    'Premier International School',
    title:    ["Preparing Today's Learners", "for Tomorrow's World"],
    subtitle: 'Where academic excellence, character development, and global opportunity unite — from nursery through senior secondary.',
    cta1: { label: 'Apply Now',     href: '/admissions' },
    cta2: { label: 'Book a Visit',  href: '/contact' },
  },
  {
    image:    '/images/hero/hero-6k-2.png',
    fallback: '/images/hero/hero-2.jpg',
    badge:    'A Tradition of Excellence',
    title:    ['Shaping Leaders,', 'Thinkers & Innovators'],
    subtitle: 'A rigorous international curriculum combined with vibrant campus life to develop well-rounded, confident graduates.',
    cta1: { label: 'Explore Programmes', href: '/academics' },
    cta2: { label: 'Our Story',          href: '/about' },
  },
  {
    image:    '/images/hero/hero-6k-3.png',
    fallback: '/images/hero/hero-3.jpg',
    badge:    'World-Class Facilities',
    title:    ['Your Child Deserves', 'the Very Best'],
    subtitle: 'Discover a learning environment built to inspire curiosity, creativity, and the confidence to excel on the world stage.',
    cta1: { label: 'Start Application', href: '/admissions' },
    cta2: { label: 'Explore Campus',    href: '/campus-life' },
  },
]

const INTERVAL = 7000

export default function Hero() {
  const [current,    setCurrent]    = useState(0)
  const [animating,  setAnimating]  = useState(false)
  const [paused,     setPaused]     = useState(false)
  const progressRef                 = useRef<HTMLDivElement>(null)

  /* ── slide logic ─────────────────────────── */
  const goTo = useCallback((idx: number) => {
    if (animating) return
    setAnimating(true)
    setTimeout(() => {
      setCurrent(idx)
      setAnimating(false)
    }, 120)
  }, [animating])

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo])
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo])

  /* ── auto-advance ────────────────────────── */
  useEffect(() => {
    if (paused) return
    const id = setInterval(next, INTERVAL)
    return () => clearInterval(id)
  }, [next, paused])

  /* ── progress bar reset on slide change ─── */
  useEffect(() => {
    const bar = progressRef.current
    if (!bar || paused) return
    bar.style.transition = 'none'
    bar.style.width = '0%'
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        bar.style.transition = `width ${INTERVAL}ms linear`
        bar.style.width = '100%'
      })
    })
  }, [current, paused])

  const slide = slides[current]

  return (
    <section
      className="relative h-screen min-h-[640px] max-h-[960px] flex items-center overflow-hidden select-none"
      aria-label="Hero image carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Slide backgrounds ──────────────── */}
      {slides.map((s, i) => (
        <div
          key={i}
          aria-hidden={i !== current}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out will-change-opacity ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={s.image}
            alt=""
            fill
            className="object-cover object-center"
            priority={i === 0}
            sizes="100vw"
            quality={88}
            onError={(e) => { (e.target as HTMLImageElement).src = s.fallback }}
          />
        </div>
      ))}

      {/* ── Layered overlays ───────────────── */}
      <div className="absolute inset-0 bg-navy-950/50 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 via-navy-950/35 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/65 via-transparent to-navy-950/15 z-10" />

      {/* ── Content ────────────────────────── */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[42rem]">

          {/* Badge */}
          <div
            key={`b${current}`}
            className="inline-flex items-center gap-2.5 glass rounded-full px-4 py-2 mb-7 animate-fade-in"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" aria-hidden />
            <span className="text-gold-300 font-button font-semibold text-[0.68rem] uppercase tracking-[0.22em]">
              {slide.badge}
            </span>
          </div>

          {/* Headline */}
          <h1
            key={`h${current}`}
            className={`font-heading font-extrabold text-white leading-[1.06] mb-5
                        text-[2.25rem] sm:text-[2.875rem] md:text-[3.5rem] lg:text-[4.25rem]
                        transition-opacity duration-200 ${animating ? 'opacity-0' : 'opacity-100'}`}
            style={{ letterSpacing: '-0.026em' }}
          >
            {slide.title.map((line, i) => (
              <span
                key={i}
                className={`block animate-fade-in-up ${i === 1 ? 'text-gold-400' : ''}`}
                style={{ animationDelay: `${i * 90}ms` }}
              >
                {line}
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          <p
            key={`s${current}`}
            className={`text-white/72 font-body leading-[1.8] mb-9
                        text-[0.9375rem] md:text-[1.0625rem] max-w-[36rem]
                        animate-fade-in-up delay-200
                        transition-opacity duration-200 ${animating ? 'opacity-0' : 'opacity-100'}`}
          >
            {slide.subtitle}
          </p>

          {/* CTAs */}
          <div
            key={`c${current}`}
            className="flex flex-col sm:flex-row gap-3 animate-fade-in-up delay-300"
          >
            <Link href={slide.cta1.href} className="btn-gold !text-[0.9375rem] !px-8 !py-4 group">
              {slide.cta1.label}
              <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
            </Link>
            <Link href={slide.cta2.href} className="btn-outline-white !text-[0.9375rem] !px-8 !py-4">
              {slide.cta2.label}
            </Link>
          </div>
        </div>
      </div>

      {/* ── Bottom controls ────────────────── */}
      <div className="absolute bottom-8 left-0 right-0 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Dot indicators */}
        <div className="flex items-center gap-2.5" role="tablist" aria-label="Slide navigation">
          {slides.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === current}
              aria-label={`Slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                i === current ? 'bg-gold-400 w-7 h-2' : 'bg-white/30 hover:bg-white/55 w-2 h-2'
              }`}
            />
          ))}
        </div>

        {/* Arrow controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="w-9 h-9 rounded-full glass flex items-center justify-center text-white hover:bg-white/15 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <ChevronLeft size={18} aria-hidden />
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="w-9 h-9 rounded-full glass flex items-center justify-center text-white hover:bg-white/15 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <ChevronRight size={18} aria-hidden />
          </button>
        </div>
      </div>

      {/* ── Progress bar ───────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-[2px] bg-white/10" aria-hidden>
        <div
          ref={progressRef}
          className="h-full bg-gold-400 w-0"
        />
      </div>
    </section>
  )
}
