import SectionTitle from '@/components/shared/SectionTitle'
import Image from 'next/image'

const timeline = [
  { year: '2002', event: 'Ambassador Global Academy was founded with a vision for excellence.' },
  { year: '2005', event: 'First graduating class achieved exceptional results.' },
  { year: '2008', event: 'Opened a state-of-the-art science and ICT complex.' },
  { year: '2012', event: 'Launched international exchange programmes with partner schools.' },
  { year: '2016', event: 'Celebrated its first batch of university placements worldwide.' },
  { year: '2020', event: 'Expanded facilities to include a sports complex and modern library.' },
  { year: '2025', event: 'Continued record-breaking academic achievements and innovation.' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-navy-900">
          <Image
            src="/images/hero/hero-1.jpg"
            alt="About Ambassador Global Academy"
            fill
            className="object-cover opacity-40"
            priority
            sizes="100vw"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.src = 'https://placehold.co/1920x600/1a2b4a/ffffff?text=About+Us'
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label text-gold-400 mb-4">Who We Are</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-4">
            About Us
          </h1>
          <p className="text-white/80 text-lg max-w-xl">
            A premier institution dedicated to shaping the leaders, thinkers, and innovators of tomorrow.
          </p>
        </div>
      </section>

      {/* History & Mission */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle
                label="Our History"
                title="A Legacy of Excellence"
                subtitle="For over two decades, Ambassador Global Academy has been at the forefront of educational innovation."
                centered={false}
              />
              <p className="text-navy-500 leading-relaxed mt-6">
                Founded in 2002, Ambassador Global Academy began with a simple yet powerful vision: to provide world-class education that goes beyond academics. Over the years, we have grown into one of the most respected educational institutions in the region, consistently producing outstanding graduates who excel in universities and careers worldwide.
              </p>
              <p className="text-navy-500 leading-relaxed mt-4">
                Our commitment to academic excellence, character development, and global citizenship has remained unchanged since day one. We believe that every child deserves access to the highest quality education, and we relentlessly pursue improvement in all that we do.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-square shadow-soft">
              <Image
                src="/images/about/about-1.jpg"
                alt="School building"
                fill
                className="object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = 'https://placehold.co/600x600/1a2b4a/ffffff?text=Our+History'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-soft">
              <h3 className="text-2xl font-heading font-bold text-navy-900 mb-4">
                Our Mission
              </h3>
              <p className="text-navy-500 leading-relaxed">
                To provide a transformative educational experience that nurtures intellectual curiosity, fosters leadership, and develops the character and skills students need to thrive in a rapidly changing world.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-soft">
              <h3 className="text-2xl font-heading font-bold text-navy-900 mb-4">
                Our Vision
              </h3>
              <p className="text-navy-500 leading-relaxed">
                To be the leading international school in Nigeria and West Africa, recognised globally for academic excellence, innovation, and the development of well-rounded, compassionate leaders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            label="Our Values"
            title="Core Values"
            subtitle="The principles that guide everything we do."
          />

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Integrity', desc: 'We act with honesty and transparency in all we do.' },
              { name: 'Excellence', desc: 'We strive for the highest standards in everything.' },
              { name: 'Respect', desc: 'We value every individual and their unique contribution.' },
              { name: 'Innovation', desc: 'We embrace creativity and forward-thinking approaches.' },
              { name: 'Community', desc: 'We foster belonging, collaboration, and service.' },
              { name: 'Resilience', desc: 'We encourage perseverance and growth through challenge.' },
            ].map((value, index) => (
              <div key={index} className="p-6 rounded-2xl bg-navy-50 border border-navy-100 hover:bg-white hover:shadow-elevated transition-all duration-300">
                <h4 className="font-heading font-semibold text-navy-900 mb-3">
                  {value.name}
                </h4>
                <p className="text-navy-500 text-sm leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            label="Our Journey"
            title="Milestones"
            subtitle="Key moments that define our story of growth and excellence."
          />

          <div className="mt-16 space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-24 pt-1">
                  <span className="text-gold-400 font-heading font-bold text-lg">
                    {item.year}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="w-3 h-3 bg-gold-500 rounded-full mt-2 -ml-1.5" />
                  <p className="text-navy-200 leading-relaxed ml-6 mt-1">
                    {item.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}