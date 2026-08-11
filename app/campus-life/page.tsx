import Image from 'next/image'
import { Dumbbell, FlaskConical, Monitor, BookOpen, Music, Palette, Calendar, Trophy, Bus, GraduationCap } from 'lucide-react'

const categories = [
  { name: 'Sports', desc: 'Teamwork, discipline, and physical fitness through a wide range of activities.', icon: Dumbbell },
  { name: 'Science', desc: 'Hands-on science activities that ignite curiosity and build practical lab skills.', icon: FlaskConical },
  { name: 'ICT', desc: 'Coding, robotics, and computer science programmes for the digital age.', icon: Monitor },
  { name: 'Library', desc: 'A resource-rich library that fosters a lifelong love of reading and research.', icon: BookOpen },
  { name: 'Music', desc: 'Choir, instrument lessons, and creative expression through music.', icon: Music },
  { name: 'Art', desc: 'Painting, sculpture, design, and creative exploration in dedicated studios.', icon: Palette },
  { name: 'Events', desc: 'Annual concerts, cultural days, science fairs, and leadership conferences.', icon: Calendar },
  { name: 'Competitions', desc: 'Inter-school debates, olympiads, sports tournaments, and more.', icon: Trophy },
  { name: 'Excursions', desc: 'Educational field trips that bring learning to life beyond the classroom.', icon: Bus },
  { name: 'Graduation', desc: 'Memorable ceremonies celebrating the achievements of our students.', icon: GraduationCap },
]

export default function CampusLifePage() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-navy-900">
          <Image
            src="/images/hero/hero-1.jpg"
            alt="Campus Life at Ambassador Global Academy"
            fill
            className="object-cover opacity-40"
            priority
            sizes="100vw"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.src = 'https://placehold.co/1920x600/1a2b4a/ffffff?text=Campus+Life'
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold-400 font-semibold text-sm uppercase tracking-[0.2em] mb-4">Beyond the Classroom</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-4">
            Campus Life
          </h1>
          <p className="text-white/80 text-lg max-w-xl">
            A vibrant world of learning, discovery, and personal growth that goes far beyond academics.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-navy-100 bg-navy-50 hover:bg-white hover:shadow-elevated transition-all duration-500 p-8"
              >
                <div className="w-12 h-12 bg-navy-900 rounded-xl flex items-center justify-center mb-5 group-hover:bg-gold-500 transition-colors duration-300">
                  <category.icon size={22} className="text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-navy-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-navy-500 text-sm leading-relaxed">
                  {category.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}