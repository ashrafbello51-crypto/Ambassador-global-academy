'use client'

import { useEffect, useRef, useState } from 'react'
import { GraduationCap, Users, Trophy, BookOpen } from 'lucide-react'

const stats = [
  { value: 25,   suffix: '+', label: 'Years of Excellence', icon: Trophy,       color: 'text-gold-500' },
  { value: 1500, suffix: '+', label: 'Students Enrolled',   icon: Users,        color: 'text-blue-500' },
  { value: 98,   suffix: '%', label: 'Exam Success Rate',   icon: GraduationCap,color: 'text-emerald-500' },
  { value: 60,   suffix: '+', label: 'Qualified Teachers',  icon: BookOpen,     color: 'text-purple-500' },
]

export default function TrustStats() {
  const [visible, setVisible] = useState(false)
  const [counts,  setCounts]  = useState(stats.map(() => 0))
  const ref = useRef<HTMLDivElement>(null)

  /* Intersection observer — fires once */
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.25 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  /* Count-up animation */
  useEffect(() => {
    if (!visible) return
    const STEPS    = 60
    const DURATION = 2000
    const delay    = DURATION / STEPS

    const timers = stats.map((stat, i) =>
      setInterval(() => {
        setCounts((prev) => {
          const next = [...prev]
          if (next[i] < stat.value) {
            next[i] = Math.min(next[i] + Math.ceil(stat.value / STEPS), stat.value)
          }
          return next
        })
      }, delay)
    )
    return () => timers.forEach(clearInterval)
  }, [visible])

  return (
    <section ref={ref} className="bg-white border-b border-navy-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <div
                key={i}
                className={`flex flex-col items-center text-center py-10 px-6 group
                  ${i < stats.length - 1 ? 'border-r border-navy-100/50 last:border-0' : ''}
                  ${i >= 2 ? 'border-t border-navy-100/50 lg:border-t-0' : ''}`}
              >
                <div className={`w-11 h-11 rounded-2xl flex items-center justify-center mb-4
                                 bg-navy-50 group-hover:bg-navy-100 transition-colors duration-300`}>
                  <Icon size={20} className={stat.color} strokeWidth={1.75} aria-hidden />
                </div>
                <span className="text-[2.375rem] lg:text-[2.75rem] font-heading font-extrabold text-navy-900 leading-none tracking-tight tabular-nums">
                  {counts[i]}{stat.suffix}
                </span>
                <span className="mt-2 text-[0.8125rem] font-body text-navy-400 leading-snug">
                  {stat.label}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
