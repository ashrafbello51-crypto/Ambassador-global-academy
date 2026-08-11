'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { siteConfig } from '@/lib/constants'

const navLinks = siteConfig.navigation

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${
              scrolled
                ? 'bg-navy-900 group-hover:bg-gold-500'
                : 'bg-gold-500'
            }`}>
              <span className={`font-heading font-bold text-lg ${
                scrolled ? 'text-white' : 'text-navy-900'
              }`}>A</span>
            </div>
            <div>
              <span className={`font-heading font-bold text-lg leading-none transition-colors duration-300 ${
                scrolled ? 'text-navy-900' : 'text-white'
              }`}>
                Ambassador
              </span>
              <span className={`block text-[10px] uppercase tracking-widest font-medium transition-colors duration-300 ${
                scrolled ? 'text-navy-400' : 'text-white/60'
              }`}>
                Global Academy
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 relative group ${
                  scrolled
                    ? 'text-navy-600 hover:text-gold-500'
                    : 'text-white/90 hover:text-gold-400'
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <Link href="/admissions" className="btn-primary text-sm !px-5 !py-2.5">
              Apply Now
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 transition-colors duration-300 ${
              scrolled ? 'text-navy-900' : 'text-white'
            }`}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-lg border-t border-navy-100 px-4 py-6">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-navy-700 hover:text-gold-500 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/admissions"
              onClick={() => setIsOpen(false)}
              className="btn-primary text-center mt-2"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
