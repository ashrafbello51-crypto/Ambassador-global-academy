import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Baby, BookOpen, Layers, GraduationCap } from 'lucide-react'

const programmes = [
  {
    id: 'nursery',
    level: 'Nursery',
    ages: 'Ages 2 – 4',
    icon: Baby,
    description:
      'Our nurturing early years programme focuses on play-based learning, social development, and foundational skills in literacy and numeracy.',
    subjects: ['Phonics & Literacy', 'Numeracy', 'Creative Arts', 'Physical Development', 'Music & Movement'],
    activities: ['Story Time', 'Sensory Play', 'Arts & Crafts', 'Outdoor Exploration'],
    accent: 'bg-warm-50 border-warm-100',
    iconBg: 'bg-warm-500',
  },
  {
    id: 'primary',
    level: 'Primary',
    ages: 'Ages 5 – 10',
    icon: BookOpen,
    description:
      'Our primary curriculum builds strong foundations across core subjects while fostering creativity, critical thinking, and a love for learning.',
    subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Arts & Technology'],
    activities: ['Science Fair', 'Reading Club', 'Sports Day', 'Field Trips'],
    accent: 'bg-navy-50 border-navy-100',
    iconBg: 'bg-navy-700',
  },
  {
    id: 'junior-secondary',
    level: 'Junior Secondary',
    ages: 'Ages 11 – 13',
    icon: Layers,
    description:
      'A bridge between primary and senior school, where students explore a broader curriculum and develop independent learning skills.',
    subjects: ['English Language', 'Mathematics', 'Basic Sciences', 'Humanities', 'Computer Studies'],
    activities: ['Debate Club', 'Coding Club', 'Leadership Programme', 'Community Service'],
    accent: 'bg-navy-50 border-navy-100',
    iconBg: 'bg-navy-700',
  },
  {
    id: 'senior-secondary',
    level: 'Senior Secondary',
    ages: 'Ages 14 – 17',
    icon: GraduationCap,
    description:
      'Our senior secondary programme offers rigorous academic pathways leading to national and international examinations, preparing students for university and beyond.',
    subjects: ['English Language', 'Mathematics', 'Further Mathematics', 'Sciences', 'Humanities', 'Commerce'],
    activities: ['University Prep', 'Exam Preparation', 'Entrepreneurship Club', 'Sports & Leadership'],
    accent: 'bg-gold-50 border-gold-100',
    iconBg: 'bg-gold-600',
  },
]

export default function AcademicsPage() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-navy-900">
          <Image
            src="/images/hero/hero-1.jpg"
            alt="Academics at Ambassador Global Academy"
            fill
            className="object-cover opacity-40"
            priority
            sizes="100vw"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.src = 'https://placehold.co/1920x600/1a2b4a/ffffff?text=Academics'
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold-400 font-semibold text-sm uppercase tracking-[0.2em] mb-4">Our Programmes</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-4">
            Academic Programmes
          </h1>
          <p className="text-white/80 text-lg max-w-xl">
            A comprehensive curriculum designed to inspire curiosity, build knowledge, and develop critical thinking.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programmes.map((programme) => (
              <div
                key={programme.id}
                className={`rounded-2xl border ${programme.accent} hover:shadow-elevated transition-all duration-500 p-8 lg:p-10`}
              >
                <div className={`w-14 h-14 ${programme.iconBg} rounded-xl flex items-center justify-center mb-5`}>
                  <programme.icon size={26} className="text-white" />
                </div>
                <span className="text-gold-600 text-xs font-semibold uppercase tracking-widest">
                  {programme.level}
                </span>
                <h2 className="text-2xl lg:text-3xl font-heading font-semibold text-navy-900 mt-1 mb-4">
                  {programme.ages}
                </h2>
                <p className="text-navy-500 leading-relaxed mb-6">
                  {programme.description}
                </p>

                <h3 className="font-semibold text-navy-900 mb-3 text-sm uppercase tracking-wider">
                  Core Subjects
                </h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {programme.subjects.map((subject) => (
                    <span key={subject} className="px-3 py-1.5 bg-white text-navy-700 text-sm rounded-full border border-navy-200">
                      {subject}
                    </span>
                  ))}
                </div>

                <h3 className="font-semibold text-navy-900 mb-3 text-sm uppercase tracking-wider">
                  Activities
                </h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {programme.activities.map((activity) => (
                    <span key={activity} className="px-3 py-1.5 bg-white text-gold-700 text-sm rounded-full border border-gold-200">
                      {activity}
                    </span>
                  ))}
                </div>

                <Link href="/admissions" className="btn-primary inline-flex items-center gap-2">
                  Learn More
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}