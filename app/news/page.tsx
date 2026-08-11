import SectionTitle from '@/components/shared/SectionTitle'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, ArrowRight, Clock } from 'lucide-react'

const newsArticles = [
  {
    id: 1,
    title: 'Ambassador Global Academy Celebrates Record Exam Results',
    excerpt:
      'Our students have once again exceeded expectations, achieving a 98% pass rate in the latest national examinations with over 80% of students earning distinctions.',
    date: 'June 15, 2025',
    category: 'Achievement',
    image: '/images/news/news-1.jpg',
    author: 'Communications Office',
    readTime: '4 min read',
  },
  {
    id: 2,
    title: 'New Science Laboratory Inaugurated by Honourable Minister',
    excerpt:
      'Our state-of-the-art science lab, equipped with modern equipment and digital learning tools, is now ready to inspire the next generation of scientists and innovators.',
    date: 'June 5, 2025',
    category: 'Facilities',
    image: '/images/news/news-2.jpg',
    author: 'Communications Office',
    readTime: '3 min read',
  },
  {
    id: 3,
    title: 'Annual Cultural Festival Showcases Global Diversity',
    excerpt:
      'Students from over 20 nations came together to celebrate culture, music, and heritage at our annual international festival, promoting unity and understanding.',
    date: 'May 20, 2025',
    category: 'Events',
    image: '/images/news/news-3.jpg',
    author: 'Communications Office',
    readTime: '5 min read',
  },
  {
    id: 4,
    title: 'Announcing Our New Music Scholarship Programme',
    excerpt:
      'We are proud to launch a new scholarship programme for musically gifted students, offering full tuition support and mentorship from industry professionals.',
    date: 'May 10, 2025',
    category: 'Announcements',
    image: '/images/campus/music.jpg',
    author: 'Admissions Office',
    readTime: '3 min read',
  },
  {
    id: 5,
    title: 'Debate Team Wins National Championship',
    excerpt:
      'Ambassador Global Academy debate team emerged victorious at the National Schools Debate Championship, showcasing exceptional oratory and critical thinking skills.',
    date: 'April 25, 2025',
    category: 'Achievement',
    image: '/images/academics/academics-1.jpg',
    author: 'Communications Office',
    readTime: '4 min read',
  },
  {
    id: 6,
    title: 'Parent-Teacher Conference: Dates Announced',
    excerpt:
      'The upcoming parent-teacher conference will be held on July 12th. We look forward to productive discussions about your child\'s progress and development.',
    date: 'April 15, 2025',
    category: 'Events',
    image: '/images/academics/academics-2.jpg',
    author: 'Academic Office',
    readTime: '2 min read',
  },
]

export default function NewsPage() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-navy-900">
          <Image
            src="/images/news/news-1.jpg"
            alt="News & Events"
            fill
            className="object-cover opacity-40"
            priority
            sizes="100vw"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.src = 'https://placehold.co/1920x600/1a2b4a/ffffff?text=News+%26+Events'
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label text-gold-400 mb-4">Stay Informed</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-4">
            News & Events
          </h1>
          <p className="text-white/80 text-lg max-w-xl">
            Stay connected with the latest happenings, achievements, and announcements from Ambassador Global Academy.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article) => (
              <article key={article.id} className="card group">
                <div className="overflow-hidden aspect-[4/3]">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={600}
                    height={450}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = `https://placehold.co/600x450/1a2b4a/ffffff?text=${encodeURIComponent(article.category)}`
                    }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4 text-sm text-navy-400">
                    <span className="bg-gold-100 text-gold-700 px-3 py-1 rounded-full text-xs font-semibold">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {article.date}
                    </span>
                  </div>
                  <h3 className="font-heading font-semibold text-navy-900 mb-3 group-hover:text-gold-500 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-navy-500 text-sm leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-navy-100">
                    <span className="flex items-center gap-1 text-navy-400 text-xs">
                      <Clock size={12} />
                      {article.readTime}
                    </span>
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 text-gold-500 font-semibold text-sm hover:gap-3 transition-all"
                    >
                      Read More
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}