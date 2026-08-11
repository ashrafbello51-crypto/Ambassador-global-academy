'use client'

import SectionTitle from '@/components/shared/SectionTitle'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const galleryImages = [
  { src: '/images/gallery/1.jpg', alt: 'Students in classroom' },
  { src: '/images/gallery/2.jpg', alt: 'School playground' },
  { src: '/images/gallery/3.jpg', alt: 'Science laboratory' },
  { src: '/images/gallery/4.jpg', alt: 'School assembly' },
  { src: '/images/gallery/5.jpg', alt: 'Library reading' },
  { src: '/images/gallery/6.jpg', alt: 'Sports event' },
  { src: '/images/gallery/7.jpg', alt: 'Inter-house sports' },
  { src: '/images/gallery/8.jpg', alt: 'School building' },
  { src: '/images/gallery/9.jpg', alt: 'Sports day' },
  { src: '/images/gallery/10.jpg', alt: 'Graduation ceremony' },
  { src: '/images/gallery/11.jpg', alt: 'ICT class' },
  { src: '/images/gallery/12.jpg', alt: 'Students on excursion' },
  { src: '/images/gallery/13.jpg', alt: 'Outdoor event' },
  { src: '/images/gallery/14.jpg', alt: 'Classroom activity' },
  { src: '/images/gallery/15.jpg', alt: 'Creative arts' },
  { src: '/images/gallery/16.jpg', alt: 'Facility tour' },
  { src: '/images/gallery/17.jpg', alt: 'Music session' },
  { src: '/images/gallery/18.jpg', alt: 'Art workshop' },
  { src: '/images/gallery/19.jpg', alt: 'School event' },
  { src: '/images/gallery/20.jpg', alt: 'Competition' },
  { src: '/images/gallery/21.jpg', alt: 'Excursion trip' },
]

export default function GalleryPreview() {
  return (
    <section className="py-20 md:py-28 bg-navy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Gallery"
          title="Life at Ambassador"
          subtitle="A glimpse into the vibrant academic and extracurricular life at our school."
        />

        <div className="mt-16 columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="break-inside-avoid group relative rounded-xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={index % 3 === 0 ? 450 : index % 3 === 1 ? 350 : 500}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = `https://placehold.co/600x450/1a2b4a/ffffff?text=Photo`
                }}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/gallery" className="btn-secondary inline-flex items-center gap-2">
            View Full Gallery
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}