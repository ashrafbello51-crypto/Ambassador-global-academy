import Image from 'next/image'

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

export default function GalleryPage() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-navy-900">
          <Image
            src="/images/gallery/13.jpg"
            alt="Gallery"
            fill
            className="object-cover opacity-40"
            priority
            sizes="100vw"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.src = 'https://placehold.co/1920x600/1a2b4a/ffffff?text=Gallery'
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold-400 font-semibold text-sm uppercase tracking-[0.2em] mb-4">Moments in Focus</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-4">
            Gallery
          </h1>
          <p className="text-white/80 text-lg max-w-xl">
            Explore the vibrant life at Ambassador Global Academy through our photo gallery.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
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
                <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/20 transition-colors duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}