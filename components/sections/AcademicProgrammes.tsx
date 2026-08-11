import SectionTitle from '@/components/shared/SectionTitle'
import Link from 'next/link'
import { ArrowRight, Baby, BookOpen, Layers, GraduationCap } from 'lucide-react'

const programmes = [
  {
    id: 'nursery',
    level: 'Nursery',
    ages: 'Ages 2 – 4',
    icon: Baby,
    description: 'A nurturing play-based programme that builds foundational skills in literacy, numeracy, and social development.',
    subjects: ['Literacy', 'Numeracy', 'Creative Arts', 'Music'],
    accent: 'bg-warm-50 border-warm-100',
    iconBg: 'bg-warm-500',
  },
  {
    id: 'primary',
    level: 'Primary',
    ages: 'Ages 5 – 10',
    icon: BookOpen,
    description: 'Strong academic foundations through a broad curriculum that fosters creativity, critical thinking, and curiosity.',
    subjects: ['English', 'Mathematics', 'Science', 'Arts'],
    accent: 'bg-navy-50 border-navy-100',
    iconBg: 'bg-navy-700',
  },
  {
    id: 'junior-secondary',
    level: 'Junior Secondary',
    ages: 'Ages 11 – 13',
    icon: Layers,
    description: 'A broad curriculum developing independent learning skills across sciences, humanities, and technology.',
    subjects: ['Sciences', 'Humanities', 'ICT', 'Languages'],
    accent: 'bg-navy-50 border-navy-100',
    iconBg: 'bg-navy-700',
  },
  {
    id: 'senior-secondary',
    level: 'Senior Secondary',
    ages: 'Ages 14 – 17',
    icon: GraduationCap,
    description: 'Rigorous academic pathways preparing students for university and careers through national and international examinations.',
    subjects: ['Sciences', 'Humanities', 'Commerce', 'Arts'],
    accent: 'bg-gold-50 border-gold-100',
    iconBg: 'bg-gold-600',
  },
]

export default function AcademicProgrammes() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Academic Programmes"
          title="A Complete Educational Journey"
          subtitle="From nursery through senior secondary, we provide a continuous and comprehensive education."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programmes.map((programme) => (
            <div
              key={programme.id}
              className={`group rounded-2xl border ${programme.accent} overflow-hidden hover:shadow-elevated transition-all duration-500 flex flex-col`}
            >
              <div className="p-8 pb-0">
                <div className={`w-14 h-14 ${programme.iconBg} rounded-xl flex items-center justify-center mb-5`}>
                  <programme.icon size={26} className="text-white" />
                </div>
                <span className="text-gold-600 text-xs font-semibold uppercase tracking-widest">
                  {programme.level}
                </span>
                <h3 className="text-2xl font-heading font-semibold text-navy-900 mt-1 mb-3">
                  {programme.ages}
                </h3>
                <p className="text-navy-500 text-sm leading-relaxed">
                  {programme.description}
                </p>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {programme.subjects.map((subject) => (
                    <span
                      key={subject}
                      className="px-2.5 py-1 bg-white text-navy-600 text-xs rounded-full border border-navy-100"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
                <Link
                  href="/admissions"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 group-hover:text-gold-600 transition-colors duration-300 mt-auto"
                >
                  Learn More
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}