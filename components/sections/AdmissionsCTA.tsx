'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Phone } from 'lucide-react'

const trustStats = [
  { value: '98%',   label: 'Exam Pass Rate' },
  { value: '1500+', label: 'Students Enrolled' },
  { value: '25+',   label: 'Years of Excellence' },
]

export default function AdmissionsCTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-navy-900" aria-label="Admissions call to action">
      {/* Background image */}
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/images/hero/hero-6k-4.png"
          alt=""
          fill
          className="object-cover opacity-[0.12]"
          loading="lazy"
          sizes="100vw"
          onError={(e) => { ;(e.target as HTMLImageElement).style.display = 'none' }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950/92 via-navy-900/85 to-navy-800/92" aria-hidden />

      {/* Top / bottom gold lines */}
      <div className="absolute top-0 inset-x-0 divider-gold" aria-hidden />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" aria-hidden />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <span className="section-label text-gold-400 mb-2">Admissions Open</span>

        <h2 className="text-[2rem] sm:text-[2.625rem] md:text-[3.25rem] font-heading font-extrabold
                       text-white leading-tight tracking-tight mb-5 text-balance">
          Begin Your Child's{' '}
          <span className="text-gold-400 block sm:inline">Journey to Excellence</span>
        </h2>

        <p className="text-navy-200 text-[0.9375rem] md:text-[1.0625rem] leading-[1.8] mb-10
                      max-w-[36rem] mx-auto font-body">
          Join Ambassador Global Academy and unlock a world of opportunity, discovery,
          and lasting achievement. Our admissions team is ready to welcome your family.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-14">
          <Link href="/admissions" className="btn-gold !text-[0.9375rem] !px-9 !py-4 group">
            Start Application
            <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
          </Link>
          <Link href="/contact" className="btn-outline-white !text-[0.9375rem] !px-9 !py-4">
            <Phone size={17} aria-hidden />
            Contact Admissions
          </Link>
        </div>

        {/* Trust stats row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12
                        pt-10 border-t border-white/8">
          {trustStats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-[2rem] font-heading font-extrabold text-gold-400 leading-none tracking-tight">
                {s.value}
              </div>
              <div className="text-navy-400 text-[0.7rem] font-button font-semibold uppercase tracking-widest mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
