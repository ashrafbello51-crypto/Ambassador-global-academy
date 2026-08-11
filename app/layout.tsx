import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ScrollToTop from '@/components/shared/ScrollToTop'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a1526',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://ambassadorglobalacademy.org'),
  title: {
    default: 'Ambassador Global Academy — Excellence in Education',
    template: '%s | Ambassador Global Academy',
  },
  description:
    'Ambassador Global Academy is a premium international school committed to academic excellence, character development, and preparing students for a global future.',
  keywords: [
    'Ambassador Global Academy',
    'international school',
    'premium education',
    'private school',
    'academic excellence',
  ],
  openGraph: {
    title: 'Ambassador Global Academy — Excellence in Education',
    description:
      'A premium international school dedicated to academic excellence, character development, and preparing students for global leadership.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Ambassador Global Academy',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ambassador Global Academy — Excellence in Education',
    description:
      'A premium international school dedicated to academic excellence and global leadership.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${playfair.variable} ${inter.variable}`}>
      <body
        className="antialiased text-navy-900 bg-white font-body"
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}