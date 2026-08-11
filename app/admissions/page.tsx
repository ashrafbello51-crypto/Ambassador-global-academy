import type { Metadata } from 'next'
import PageHero from '@/components/shared/PageHero'
import SectionTitle from '@/components/shared/SectionTitle'
import Image from 'next/image'
import Link from 'next/link'
import { Check, ArrowRight, Phone, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Admissions',
  description: 'Apply to Ambassador Global Academy. Learn about our simple admissions process, required documents, and frequently asked questions.',
}

const steps = [
  {
    number: '01',
    title: 'Submit Application',
    desc: 'Complete the online application form with your child\'s personal details and academic history.',
  },
  {
    number: '02',
    title: 'Assessment & Interview',
    desc: 'Your child will be invited for an age-appropriate assessment and a friendly informal interview.',
  },
  {
    number: '03',
    title: 'Review & Acceptance',
    desc: 'We review your application carefully and communicate our decision within two weeks.',
  },
  {
    number: '04',
    title: 'Enrolment',
    desc: 'Complete the enrolment process, pay fees, and prepare your child for an exciting first day.',
  },
]

const requirements = [
  'Completed application form',
  'Birth certificate or passport copy',
  'Previous school reports (last 2 years)',
  'Immunisation records',
  'Passport-sized photographs (4)',
  'Teacher recommendation letter',
  'Transfer certificate (where applicable)',
]

const faqs = [
  { q: 'When can I apply?', a: 'Applications are accepted year-round. We encourage early applications, especially for nursery and primary sections where spaces fill quickly.' },
  { q: 'Is there an entrance exam?', a: 'Yes, applicants for primary and above complete an age-appropriate assessment to ensure proper class placement.' },
  { q: 'What documents are required?', a: 'Please see the Required Documents section above for the complete checklist.' },
  { q: 'Do you offer financial aid?', a: 'Yes, we offer merit-based scholarships and need-based financial assistance. Contact our admissions office for details and eligibility criteria.' },
  { q: 'Is there a waiting list?', a: 'For popular entry points a waiting list may apply. We recommend applying at least one term in advance.' },
  { q: 'What curriculum do you follow?', a: 'We follow a blended curriculum that combines international best practices with Nigerian national educational standards.' },
]

export default function AdmissionsPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────── */}
      <PageHero
        label="Join Our Community"
        title="Admissions"
        subtitle="Our admissions process is designed to be simple, transparent, and welcoming. We look forward to meeting your family."
        image="/images/hero/hero-6k-5.png"
        fallback="/images/academics/academics-2.jpg"
        imagePosition="object-top"
      />

      {/* ── Process ───────────────────────────────── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            label="How It Works"
            title="The Admission Process"
            subtitle="A clear, straightforward four-step process designed for your family's convenience."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-3xl bg-navy-50/60 border border-navy-100/60 hover:bg-white hover:shadow-card-hover hover:-translate-y-1 transition-all duration-400"
              >
                {/* Step number */}
                <div className="text-5xl font-heading font-extrabold text-navy-100 mb-4 leading-none group-hover:text-gold-100 transition-colors duration-300">
                  {step.number}
                </div>
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-3 w-6 h-px bg-navy-200 z-10" />
                )}
                <h4 className="font-heading font-semibold text-navy-900 mb-3 tracking-tight">{step.title}</h4>
                <p className="text-navy-500 text-sm leading-relaxed font-body">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Requirements ──────────────────────────── */}
      <section className="py-20 bg-navy-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            label="Requirements"
            title="Required Documents"
            subtitle="Please have these documents ready when you submit your application."
            light
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {requirements.map((req, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
                <Check size={18} className="text-gold-400 flex-shrink-0" strokeWidth={2.5} />
                <span className="text-navy-200 text-sm font-body">{req}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/contact" className="btn-gold inline-flex items-center gap-2">
              Contact Admissions <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            label="FAQ"
            title="Frequently Asked Questions"
            subtitle="Answers to common questions about our admissions process."
          />

          <div className="mt-12 space-y-3">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group rounded-2xl border border-navy-100 bg-navy-50/60 overflow-hidden hover:border-navy-200 transition-colors duration-300"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-navy-50 transition-colors">
                  <h4 className="font-heading font-semibold text-navy-900 pr-4 text-[0.95rem]">{faq.q}</h4>
                  <span className="text-gold-500 text-2xl font-heading leading-none transition-transform duration-300 group-open:rotate-45 flex-shrink-0">+</span>
                </summary>
                <div className="px-6 pb-6 border-t border-navy-100">
                  <p className="text-navy-500 leading-relaxed font-body text-sm mt-4">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact CTA ───────────────────────────── */}
      <section className="py-20 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4 tracking-tight">Ready to Apply?</h2>
          <p className="text-navy-500 text-lg font-body mb-8 max-w-lg mx-auto leading-relaxed">
            Our admissions team is here to answer your questions and guide you through every step.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+234123456789" className="btn-primary inline-flex items-center gap-2">
              <Phone size={18} strokeWidth={1.8} />
              Call Us Now
            </a>
            <a
              href="mailto:admissions@ambassadorglobalacademy.org"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <Mail size={18} strokeWidth={1.8} />
              Email Admissions
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
