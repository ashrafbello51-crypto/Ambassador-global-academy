'use client'

import { useReveal } from '@/lib/useReveal'
import SectionTitle from '@/components/shared/SectionTitle'
import {
  Building2, Library, FlaskConical, Computer,
  Music, Palette, Trophy, UtensilsCrossed,
} from 'lucide-react'

const facilities = [
  { icon: Building2,       title: 'Modern Classrooms',    description: 'Spacious, air-conditioned classrooms with interactive smart boards designed for collaborative, engaging learning.' },
  { icon: Library,         title: 'Resource Library',     description: 'A rich collection of books, digital resources, and research materials to support every level of academic study.' },
  { icon: FlaskConical,    title: 'Science Laboratories', description: 'Fully equipped physics, chemistry, and biology labs where students explore science through hands-on experiments.' },
  { icon: Computer,        title: 'ICT Suite',            description: 'State-of-the-art computer labs with the latest software and tools, preparing students for the digital world.' },
  { icon: Music,           title: 'Music Studio',         description: 'A dedicated space for vocal training, instrument lessons, and creative musical expression at all levels.' },
  { icon: Palette,         title: 'Art Studio',           description: 'A bright, inspiring studio for painting, sculpture, design, and creative exploration.' },
  { icon: Trophy,          title: 'Sports Complex',       description: 'Professional-grade facilities for football, basketball, athletics, and a wide range of indoor and outdoor sports.' },
  { icon: UtensilsCrossed, title: 'Dining Hall',          description: 'A clean, welcoming dining space serving nutritious, balanced meals to fuel students through every school day.' },
]

export default function Facilities() {
  const sectionRef = useReveal() as React.RefObject<HTMLElement>

  return (
    <section ref={sectionRef as React.RefObject<HTMLDivElement>} className="py-20 md:py-28 bg-navy-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="reveal text-center mb-14">
          <SectionTitle
            label="Our Facilities"
            title="World-Class Campus"
            subtitle="Purpose-built spaces that support the academic, athletic, and creative development of every student."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {facilities.map((f, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${Math.min((i % 4) + 1, 4)}
                group bg-white rounded-3xl border border-navy-100/60 overflow-hidden
                hover:shadow-card-hover hover:-translate-y-1
                transition-all duration-400`}
            >
              <div className="p-6">
                <div className="w-11 h-11 bg-navy-900 rounded-2xl flex items-center justify-center mb-5
                                group-hover:bg-gold-500 transition-colors duration-300 shadow-sm">
                  <f.icon size={21} className="text-white" strokeWidth={1.75} aria-hidden />
                </div>
                <h3 className="text-[0.9375rem] font-heading font-semibold text-navy-900 mb-2 tracking-tight">
                  {f.title}
                </h3>
                <p className="text-navy-500 text-[0.8125rem] leading-[1.75] font-body">
                  {f.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
