import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-lg">
        {/* Large decorative number */}
        <div className="text-[7rem] sm:text-[9rem] font-heading font-extrabold leading-none
                        text-navy-100 select-none mb-0" aria-hidden>
          404
        </div>

        <div className="-mt-4">
          <span className="section-label text-gold-500 mb-3">Page Not Found</span>
          <h1 className="text-[1.75rem] sm:text-[2.25rem] font-heading font-bold text-navy-900
                         tracking-tight mb-4">
            This page doesn't exist
          </h1>
          <p className="text-navy-500 text-[0.9375rem] font-body leading-[1.8] mb-8 max-w-sm mx-auto">
            The page you are looking for may have been moved, deleted, or never existed.
            Let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/" className="btn-primary">
              Return Home
              <ArrowRight size={16} aria-hidden />
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
