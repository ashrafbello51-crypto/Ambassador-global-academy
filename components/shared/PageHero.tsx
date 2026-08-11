'use client'

import Image from 'next/image'

interface PageHeroProps {
  label:    string
  title:    string
  subtitle: string
  image:    string
  fallback?: string
  imagePosition?: string
}

/**
 * Consistent inner-page hero used across About, Academics, Admissions,
 * Campus Life, Gallery, News, and Contact.
 */
export default function PageHero({
  label,
  title,
  subtitle,
  image,
  fallback,
  imagePosition = 'object-center',
}: PageHeroProps) {
  return (
    <section className="page-hero" aria-label={`${title} page hero`}>
      {/* Background image */}
      <div className="absolute inset-0 bg-navy-900">
        <Image
          src={image}
          alt=""
          fill
          className={`object-cover ${imagePosition} opacity-45`}
          priority
          sizes="100vw"
          quality={80}
          onError={(e) => {
            const img = e.target as HTMLImageElement
            if (fallback) img.src = fallback
            else img.style.display = 'none'
          }}
        />
      </div>

      {/* Layered overlays */}
      <div className="absolute inset-0 bg-gradient-to-t  from-navy-950/92 via-navy-950/45 to-navy-900/15" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-r  from-navy-950/65 to-transparent"                  aria-hidden />

      {/* Content — aligned to bottom-left */}
      <div className="page-hero-content">
        <span className="section-label text-gold-400 mb-1">{label}</span>
        <h1 className="text-[2.125rem] sm:text-[2.75rem] md:text-[3.375rem] font-heading font-extrabold
                       text-white leading-tight tracking-tight mb-4 text-balance">
          {title}
        </h1>
        <p className="text-white/72 text-[0.9375rem] md:text-[1.0625rem] font-body leading-[1.75]
                      max-w-[34rem]">
          {subtitle}
        </p>
      </div>
    </section>
  )
}
