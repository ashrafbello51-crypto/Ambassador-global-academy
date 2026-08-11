'use client'

import { useReveal } from '@/lib/useReveal'
import SectionTitle from '@/components/shared/SectionTitle'
import Image from 'next/image'
import { Quote } from 'lucide-react'

const leadership = [
  {
    name:     'Mrs. Jane Adeyemi',
    role:     'Principal',
    bio:      'Over 20 years of educational leadership with a passion for nurturing academic excellence and character development.',
    image:    '/images/about/about-1.jpg',
    featured:  true,
    message:  'Our mission goes beyond academics. We are shaping the next generation of global leaders — confident, compassionate, and ready for the world.',
  },
  {
    name:     'Mr. John Okonkwo',
    role:     'Vice Principal',
    bio:      'Dedicated to fostering character development and student welfare across all levels of the school.',
    image:    '/images/about/about-2.jpg',
    featured:  false,
    message:  '',
  },
  {
    name:     'Dr. Sarah Nwosu',
    role:     'Head of Academics',
    bio:      'Curriculum specialist committed to delivering world-class educational standards and innovative teaching.',
    image:    '/images/about/about-3.jpg',
    featured:  false,
    message:  '',
  },
  {
    name:     'Mr. David Okafor',
    role:     'Head of Administration',
    bio:      'Ensuring smooth, efficient operations and excellent service for all students, staff, and parents.',
    image:    '/images/about/about-4.jpg',
    featured:  false,
    message:  '',
  },
  {
    name:     'Mrs. Lilian Obe-Oba Emalapa',
    role:     'Director of Studies',
    bio:      'Co-Founder. Dip. Public Admin & B.A Ed, Guidance & Counseling — dedicated to guiding students academically and supporting their personal development.',
    image:    '/images/about/about-5.jpg',
    featured:  false,
    message:  '',
  },
  {
    name:     'Mr. Omoniyi Omojowo Mark',
    role:     'FCS Patron / School Registrar',
    bio:      'ND (National Diploma) — committed to maintaining accurate student records and supporting the school community.',
    image:    '/images/about/about-6.jpg',
    featured:  false,
    message:  '',
  },
  {
    name:     'Mr. Muhammad Saidu',
    role:     'External Examination Officer',
    bio:      'B.Sc Computer Studies — experienced in managing external examinations with integrity and precision.',
    image:    '/images/about/about-7.jpg',
    featured:  false,
    message:  '',
  },
]

export default function Leadership() {
  const sectionRef = useReveal() as React.RefObject<HTMLElement>
  const principal  = leadership[0]
  const rest       = leadership.slice(1)

  return (
    <section ref={sectionRef as React.RefObject<HTMLDivElement>} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="reveal text-center mb-14">
          <SectionTitle
            label="Our Leadership"
            title="Meet Our Team"
            subtitle="Dedicated educators and administrators committed to academic excellence and the success of every student."
          />
        </div>

        {/* ── Principal featured card ────────────── */}
        <div className="reveal mb-10 bg-navy-950 rounded-3xl overflow-hidden shadow-elevated">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Photo */}
            <div className="lg:col-span-2 relative min-h-[280px] lg:min-h-0">
              <Image
                src={principal.image}
                alt={`${principal.name}, ${principal.role}`}
                fill
                className="object-cover object-top"
                sizes="(max-width:1024px) 100vw, 40vw"
                onError={(e) => {
                  ;(e.target as HTMLImageElement).src =
                    'https://placehold.co/600x600/0a1526/e8a01a?text=Principal'
                }}
              />
              {/* Gradient bridges to text panel on desktop */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent
                              lg:bg-gradient-to-r lg:from-transparent lg:to-navy-950/30" />
            </div>

            {/* Message */}
            <div className="lg:col-span-3 flex flex-col justify-center p-8 lg:p-12 xl:p-14">
              <Quote size={34} className="text-gold-500/80 mb-5" aria-hidden />
              <p className="text-white/88 text-[1.125rem] lg:text-[1.3125rem] font-heading font-medium
                            leading-[1.65] mb-7 italic text-pretty">
                &ldquo;{principal.message}&rdquo;
              </p>
              <div>
                <p className="font-heading font-bold text-white text-[1.0625rem] leading-tight">
                  {principal.name}
                </p>
                <p className="text-gold-400 text-[0.75rem] font-button font-semibold uppercase tracking-widest mt-1.5">
                  {principal.role}
                </p>
                <p className="text-navy-400 text-[0.8125rem] font-body leading-[1.7] mt-2.5 max-w-sm">
                  {principal.bio}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Rest of leadership ─────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {rest.map((person, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} group`}
            >
              {/* Photo */}
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden mb-5 bg-navy-100">
                <Image
                  src={person.image}
                  alt={`${person.name}, ${person.role}`}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width:640px) 100vw, 33vw"
                  loading="lazy"
                  onError={(e) => {
                    ;(e.target as HTMLImageElement).src =
                      `https://placehold.co/400x500/0a1526/e8a01a?text=${encodeURIComponent(person.name.split(' ')[1] ?? person.name)}`
                  }}
                />
                {/* Hover scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/45 to-transparent
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <h3 className="text-[1rem] font-heading font-semibold text-navy-900 leading-tight">{person.name}</h3>
              <p className="text-gold-500 text-[0.72rem] font-button font-semibold uppercase tracking-widest mt-1.5 mb-2">
                {person.role}
              </p>
              <p className="text-navy-400 text-[0.8125rem] font-body leading-[1.75]">{person.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
