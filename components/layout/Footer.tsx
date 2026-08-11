import Link from 'next/link'
import { Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react'

const quickLinks = [
  { name: 'Home',          href: '/' },
  { name: 'About Us',      href: '/about' },
  { name: 'Academics',     href: '/academics' },
  { name: 'Admissions',    href: '/admissions' },
  { name: 'Campus Life',   href: '/campus-life' },
  { name: 'Gallery',       href: '/gallery' },
  { name: 'News & Events', href: '/news' },
  { name: 'Contact',       href: '/contact' },
]

const academicsLinks = [
  { name: 'Nursery',           href: '/academics#nursery' },
  { name: 'Primary',           href: '/academics#primary' },
  { name: 'Junior Secondary',  href: '/academics#junior-secondary' },
  { name: 'Senior Secondary',  href: '/academics#senior-secondary' },
]

const admissionsLinks = [
  { name: 'How to Apply',  href: '/admissions' },
  { name: 'Requirements',  href: '/admissions' },
  { name: 'Scholarships',  href: '/admissions' },
  { name: 'FAQ',           href: '/admissions' },
]

const socialLinks = [
  { name: 'Facebook',  href: '#', Icon: Facebook },
  { name: 'Twitter',   href: '#', Icon: Twitter },
  { name: 'Instagram', href: '#', Icon: Instagram },
  { name: 'LinkedIn',  href: '#', Icon: Linkedin },
  { name: 'YouTube',   href: '#', Icon: Youtube },
]

const legalLinks = ['Privacy Policy', 'Terms of Service', 'Cookie Policy']

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white" aria-label="Site footer">

      {/* Gold divider */}
      <div className="divider-gold" aria-hidden />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">

        {/* ── Main grid ────────────────────────── */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-10
                        pb-12 border-b border-white/[0.07]">

          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-6 group"
                  aria-label="Ambassador Global Academy — home">
              <div className="w-9 h-9 rounded-[10px] overflow-hidden flex items-center justify-center
                              bg-white shadow-sm transition-colors duration-300">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/logo.png" alt="Ambassador Global Academy logo"
                     className="w-full h-full object-contain" />
              </div>
              <div className="leading-none">
                <span className="block font-heading font-bold text-white text-[1rem] leading-none">Ambassador</span>
                <span className="block text-[8.5px] text-navy-400 uppercase tracking-[0.22em]
                                 font-button font-semibold mt-[3px]">
                  Global Academy
                </span>
              </div>
            </Link>

            <p className="text-navy-400 text-[0.8125rem] font-body leading-[1.8] mb-6 max-w-[22rem]">
              A premium international school dedicated to academic excellence, character development,
              and preparing students for global leadership.
            </p>

            {/* Contact info */}
            <address className="not-italic space-y-2.5 text-[0.8125rem] text-navy-400 font-body mb-7">
              <p className="flex items-start gap-2.5">
                <MapPin size={14} className="mt-0.5 flex-shrink-0 text-navy-500" aria-hidden />
                <span>123 Education Drive, Lagos, Nigeria</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone size={14} className="flex-shrink-0 text-navy-500" aria-hidden />
                <a href="tel:+234123456789"
                   className="hover:text-gold-400 transition-colors duration-250">+234 1 2345 6789</a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail size={14} className="flex-shrink-0 text-navy-500" aria-hidden />
                <a href="mailto:info@ambassadorglobalacademy.org"
                   className="hover:text-gold-400 transition-colors duration-250 break-all">
                  info@ambassadorglobalacademy.org
                </a>
              </p>
            </address>

            {/* Social icons */}
            <nav aria-label="Social media links">
              <div className="flex gap-2">
                {socialLinks.map(({ name, href, Icon }) => (
                  <a key={name} href={href} aria-label={name}
                     className="w-8 h-8 bg-white/[0.06] rounded-xl flex items-center justify-center
                                hover:bg-gold-500 transition-all duration-300 group">
                    <Icon size={15} className="text-navy-400 group-hover:text-white transition-colors" aria-hidden />
                  </a>
                ))}
              </div>
            </nav>
          </div>

          {/* Quick links */}
          <nav aria-label="Quick links">
            <h2 className="text-[0.7rem] font-button font-semibold text-white uppercase tracking-[0.2em] mb-5">
              Quick Links
            </h2>
            <ul className="space-y-2.5">
              {quickLinks.map(({ name, href }) => (
                <li key={name}>
                  <Link href={href}
                        className="text-navy-400 text-[0.8125rem] font-body hover:text-gold-400 transition-colors duration-250">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Academics */}
          <nav aria-label="Academic programmes">
            <h2 className="text-[0.7rem] font-button font-semibold text-white uppercase tracking-[0.2em] mb-5">
              Academics
            </h2>
            <ul className="space-y-2.5">
              {academicsLinks.map(({ name, href }) => (
                <li key={name}>
                  <Link href={href}
                        className="text-navy-400 text-[0.8125rem] font-body hover:text-gold-400 transition-colors duration-250">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Admissions */}
          <nav aria-label="Admissions links">
            <h2 className="text-[0.7rem] font-button font-semibold text-white uppercase tracking-[0.2em] mb-5">
              Admissions
            </h2>
            <ul className="space-y-2.5 mb-7">
              {admissionsLinks.map(({ name, href }) => (
                <li key={name}>
                  <Link href={href}
                        className="text-navy-400 text-[0.8125rem] font-body hover:text-gold-400 transition-colors duration-250">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>

            <Link href="/admissions"
                  className="inline-flex items-center gap-1.5 text-[0.75rem] font-button font-semibold
                             text-gold-400 border border-gold-500/35 rounded-xl px-4 py-2.5
                             hover:bg-gold-500 hover:text-white hover:border-gold-500
                             transition-all duration-300">
              Apply Now →
            </Link>
          </nav>
        </div>

        {/* ── Bottom bar ───────────────────────── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-7">
          <p className="text-navy-500 text-[0.75rem] font-body">
            © {new Date().getFullYear()} Ambassador Global Academy. All rights reserved.
          </p>
          <nav aria-label="Legal links">
            <div className="flex items-center gap-5">
              {legalLinks.map((item) => (
                <Link key={item} href="#"
                      className="text-navy-500 text-[0.75rem] font-body hover:text-gold-400 transition-colors duration-250">
                  {item}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </footer>
  )
}
