'use client'

import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', toggleVisibility, { passive: true })
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-8 z-40 w-11 h-11 bg-navy-900 text-white rounded-full shadow-elevated flex items-center justify-center hover:bg-gold-500 transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:ring-offset-2"
      aria-label="Scroll to top"
    >
      <ChevronUp size={18} strokeWidth={2.5} />
    </button>
  )
}
