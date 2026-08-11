'use client'

import { useRef } from 'react'
import { useReveal } from '@/lib/useReveal'
import SectionTitle from '@/components/shared/SectionTitle'
import { GraduationCap, Shield, Users, Globe, Award, Heart } from 'lucide-react'

const features = [
  {
    icon: GraduationCap,
    title: 'Academic Excellence',
    description: 'Rigorous international curriculum that develops confident, lifelong learners equipped for global universities.',
  },
  {
    icon: Shield,
    title: 'Safe Environment',
    description: 'Secure, nurturing campus with round-the-clock monitoring and dedicated pastoral care for every child.',
  },
  {
    icon: Users,
    title: 'Expert Faculty',
    description: 'Over 60 highly qualified educators who are passionate about discovering and nurturing each student\'s potential.',
  },
  {
    icon: Globe,
    title: 'Global Perspective',
    description: 'International curricula, exchange programmes, and multicultural experiences that prepare students for the world.',
  },
  {
    icon: Award,
    title: 'Proven Results',
    description: '98% exam pass rate, consistent top scores, and placements at leading universities worldwide.',
  },
  {
    icon: Heart,
    title: 'Community Spirit',
    description: 'A warm, inclusive family community where every student belongs, is celebrated, and truly thrives.',
  },
]

export default function WhyChooseUs() {
  const sectionRef = useReveal() as React.RefObject<HTMLElement>

  return (
    <section ref={sectionRef as React.RefObject<HTMLDivElement>} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header: left-aligned for visual variety */}
        <div className="reveal max-w-xl mb-14">
          <SectionTitle
            label="Why Choose Us"
            title="A Tradition of Excellence"
            subtitle="Every aspect of Ambassador Global Academy is designed to deliver an exceptional, transformative educational experience."
            centered={false}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)}
                group relative p-7 rounded-3xl bg-navy-50/70 border border-navy-100/60
                hover:bg-white hover:shadow-card-hover hover:-translate-y-1
                transition-all duration-400`}
            >
              {/* Top accent on hover */}
              <div className="absolute inset-x-8 top-0 h-[2px] rounded-b-full
                              bg-gradient-to-r from-transparent via-gold-400/0 to-transparent
                              group-hover:via-gold-400/50 transition-all duration-500" />

              <div className="w-11 h-11 bg-navy-900 rounded-2xl flex items-center justify-center mb-5
                              group-hover:bg-gold-500 transition-colors duration-300 shadow-sm flex-shrink-0">
                <feature.icon size={21} className="text-white" strokeWidth={1.75} aria-hidden />
              </div>

              <h3 className="text-[1rem] font-heading font-semibold text-navy-900 mb-2.5 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-navy-500 text-sm leading-[1.75] font-body">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
