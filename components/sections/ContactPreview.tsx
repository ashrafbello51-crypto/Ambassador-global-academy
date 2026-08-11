'use client'

import SectionTitle from '@/components/shared/SectionTitle'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function ContactPreview() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionTitle
              label="Get in Touch"
              title="Contact Us"
              subtitle="We would love to hear from you. Reach out for admissions inquiries, visits, or general information."
              centered={false}
            />
            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-navy-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-navy-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-900 mb-1">Address</h4>
                  <p className="text-navy-500 text-sm">123 Education Drive, Lagos, Nigeria</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-navy-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-navy-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-900 mb-1">Phone</h4>
                  <p className="text-navy-500 text-sm">+234 1 2345 6789</p>
                  <p className="text-navy-500 text-sm">+234 800 123 4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-navy-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-navy-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-900 mb-1">Email</h4>
                  <p className="text-navy-500 text-sm">info@ambassadorglobalacademy.org</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-navy-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="text-navy-700" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-900 mb-1">Office Hours</h4>
                  <p className="text-navy-500 text-sm">Mon–Fri: 8:00 AM – 4:00 PM</p>
                  <p className="text-navy-500 text-sm">Saturday: 9:00 AM – 1:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-navy-50 rounded-2xl p-8">
            <h3 className="text-xl font-heading font-semibold text-navy-900 mb-6">
              Send Us a Message
            </h3>
            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault()
                const data = new FormData(e.currentTarget)
                const subject = encodeURIComponent(`Website inquiry from ${data.get('name')}`)
                const body = encodeURIComponent(
                  `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nPhone: ${data.get('phone') || 'Not provided'}\n\n${data.get('message')}`
                )
                window.location.href = `mailto:info@ambassadorglobalacademy.org?subject=${subject}&body=${body}`
              }}
            >
              <div>
                <label className="block text-sm font-medium text-navy-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-white text-navy-900 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-white text-navy-900 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-white text-navy-900 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all"
                    placeholder="+234..."
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-navy-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-white text-navy-900 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all resize-none"
                  placeholder="How can we help you?"
                />
              </div>
              <button type="submit" className="btn-primary w-full justify-center">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}