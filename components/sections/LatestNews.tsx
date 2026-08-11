'use client'

import { useReveal } from '@/lib/useReveal'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, ArrowRight, Clock } from 'lucide-react'

const news = [
  {
    id:       1,
    title:    'Ambassador Global Academy Celebrates Record Exam Results',
    excerpt:  'Our students exceeded expectations once again, achieving a 98% pass rate with over 80% earning distinctions in the latest national examinations.',
    date:     'June 15, 2025',
    category: 'Achievement',
    image:    '/images/campus/events.jpg',
    readTime: '4 min read',
  },
  {
    id:       2,
    title:    'New State-of-the-Art Science Laboratory Inaugurated',
    excerpt:  'Our brand-new lab, equipped with modern digital research tools, is now ready to inspire the next generation of scientists and innovators.',
    date:     'June 5, 2025',
    category: 'Facilities',
    image:    '/images/campus/science.jpg',
    readTime: '3 min read',
  },
  {
    id:       3,
    title:    'Annual Cultural Festival Showcases Global Diversity',
    excerpt:  'Students from over 20 nations came together to celebrate culture, music, and shared heritage at our vibrant international festival.',
    date:     'May 20, 2025',
    category: 'Events',
    image:    '/images/campus/competitions.jpg',
    readTime: '5 min read',
  },
]

const categoryStyle: Record<string, string> = {
  Achievement: 'bg-emerald-50  text-emerald-700',
  Facilities:  'bg-blue-50     text-blue-700',
  Events:      'bg-amber-50    text-amber-700',
  Announcements:'bg-purple-50  text-purple-700',
}

export default function LatestNews() {
  const sectionRef = useReveal() as React.RefObject<HTMLElement>

  return (
    <section ref={sectionRef as React.RefObject<HTMLDivElement>} className="py-20 md:py-28 bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="reveal flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-12">
          <div className="max-w-lg">
            <span className="section-label text-gold-400">News & Updates</span>
            <h2 className="section-title text-white mt-2">Latest News</h2>
            <p className="section-subtitle text-navy-300 mt-3">
              Stay connected with the latest happenings and achievements at Ambassador Global Academy.
            </p>
          </div>
          <Link href="/news" className="btn-outline-white flex-shrink-0 self-start sm:self-auto">
            View All News
            <ArrowRight size={16} aria-hidden />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.map((article, i) => (
            <article
              key={article.id}
              className={`reveal reveal-delay-${i + 1}
                group bg-white/[0.04] border border-white/10 rounded-3xl overflow-hidden
                hover:bg-white/[0.08] hover:border-white/18 hover:-translate-y-1.5
                transition-all duration-400`}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[16/10]">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.06]"
                  sizes="(max-width:768px) 100vw, 33vw"
                  loading={i === 0 ? 'eager' : 'lazy'}
                  onError={(e) => {
                    ;(e.target as HTMLImageElement).src =
                      `https://placehold.co/600x375/060d17/e8a01a?text=${encodeURIComponent(article.category)}`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
                {/* Category badge */}
                <span className={`absolute top-3.5 left-3.5 text-[0.65rem] font-button font-bold
                                  uppercase tracking-widest px-2.5 py-1 rounded-full
                                  ${categoryStyle[article.category] ?? 'bg-gold-100 text-gold-700'}`}>
                  {article.category}
                </span>
              </div>

              {/* Body */}
              <div className="p-6">
                <div className="flex items-center gap-3.5 text-navy-500 text-[0.75rem] mb-3.5 font-body">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={12} aria-hidden /> {article.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={12} aria-hidden /> {article.readTime}
                  </span>
                </div>

                <h3 className="text-[0.9375rem] font-heading font-semibold text-white leading-snug mb-3
                               group-hover:text-gold-300 transition-colors duration-300 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-navy-400 text-[0.8125rem] leading-[1.75] font-body line-clamp-3 mb-5">
                  {article.excerpt}
                </p>

                <Link
                  href="/news"
                  className="inline-flex items-center gap-1.5 text-gold-400 text-[0.8125rem]
                             font-button font-semibold hover:text-gold-300 group/lnk
                             transition-colors duration-200"
                >
                  Read More
                  <ArrowRight size={13} className="transition-transform duration-300 group-hover/lnk:translate-x-1" aria-hidden />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
