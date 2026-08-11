import SectionTitle from '@/components/shared/SectionTitle'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Mrs. Adeyemi',
    role: 'Parent of 3 Students',
    text: 'The dedication of the teachers and the nurturing environment have made an extraordinary difference in our children\'s lives.',
  },
  {
    name: 'Mr. Okonkwo',
    role: 'Parent of Graduates',
    text: 'The academic rigor and values instilled at this school prepared our children for success at university and beyond.',
  },
  {
    name: 'Mrs. Diallo',
    role: 'Current Parent',
    text: 'From the moment we walked in, we knew this was where our child belonged. The warmth, professionalism, and excellence here are unmatched.',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Testimonials"
          title="What Parents Say"
          subtitle="Hear from the families who trust us with their children's education."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-navy-50 border border-navy-100 hover:bg-white hover:shadow-elevated transition-all duration-500"
            >
              <Quote size={32} className="text-gold-500 mb-6" />
              <p className="text-navy-500 leading-relaxed mb-8">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div>
                <h4 className="font-heading font-semibold text-navy-900">
                  {testimonial.name}
                </h4>
                <p className="text-gold-500 text-sm font-medium">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}