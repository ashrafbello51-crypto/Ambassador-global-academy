'use client'

import SectionTitle from '@/components/shared/SectionTitle'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'

export default function ContactPage() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-navy-900">
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label text-gold-400 mb-4">Get in Touch</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-4">
            Contact Us
          </h1>
          <p className="text-white/80 text-lg max-w-xl">
            We would love to hear from you. Whether you have questions about admissions, want to book a visit, or need assistance, we are here to help.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2">
              <SectionTitle
                label="Contact Details"
                title="Get in Touch"
                subtitle="Reach out to us through any of the channels below."
                centered={false}
              />

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-navy-50">
                  <div className="w-10 h-10 bg-navy-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-1">Address</h4>
                    <p className="text-navy-500 text-sm">123 Education Drive,<br />Lagos, Nigeria</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-navy-50">
                  <div className="w-10 h-10 bg-navy-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-1">Phone</h4>
                    <a href="tel:+234123456789" className="text-navy-500 text-sm hover:text-gold-500 block">+234 1 2345 6789</a>
                    <a href="tel:+2348001234567" className="text-navy-500 text-sm hover:text-gold-500 block">+234 800 123 4567</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-navy-50">
                  <div className="w-10 h-10 bg-navy-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-1">Email</h4>
                    <a href="mailto:info@ambassadorglobalacademy.org" className="text-navy-500 text-sm hover:text-gold-500 block">info@ambassadorglobalacademy.org</a>
                    <a href="mailto:admissions@ambassadorglobalacademy.org" className="text-navy-500 text-sm hover:text-gold-500 block">admissions@ambassadorglobalacademy.org</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-navy-50">
                  <div className="w-10 h-10 bg-navy-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-1">Office Hours</h4>
                    <p className="text-navy-500 text-sm">Monday – Friday: 8:00 AM – 4:00 PM</p>
                    <p className="text-navy-500 text-sm">Saturday: 9:00 AM – 1:00 PM</p>
                    <p className="text-navy-500 text-sm">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-navy-50 rounded-2xl p-8 lg:p-12">
                <h3 className="text-2xl font-heading font-semibold text-navy-900 mb-2">
                  Send Us a Message
                </h3>
                <p className="text-navy-500 mb-8">
                  Fill out the form below and we will get back to you as soon as possible.
                </p>
                <form
                  className="space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault()
                    const data = new FormData(e.currentTarget)
                    const subject = encodeURIComponent(`Website inquiry from ${data.get('name')}`)
                    const body = encodeURIComponent(
                      `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nPhone: ${data.get('phone') || 'Not provided'}\nSubject: ${data.get('subject')}\n\n${data.get('message')}`
                    )
                    window.location.href = `mailto:info@ambassadorglobalacademy.org?subject=${subject}&body=${body}`
                  }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-navy-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-white text-navy-900 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-white text-navy-900 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-navy-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-white text-navy-900 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all"
                        placeholder="+234..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy-700 mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-white text-navy-900 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select a subject</option>
                        <option value="admissions">Admissions Inquiry</option>
                        <option value="visit">Book a Visit</option>
                        <option value="general">General Inquiry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-white text-navy-900 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary w-full justify-center text-base"
                  >
                    <Send size={18} className="mr-2" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="h-[400px] bg-navy-100">
        <div className="w-full h-full flex items-center justify-center text-navy-400">
          <div className="text-center">
            <MapPin size={48} className="mx-auto mb-4 opacity-50" />
            <p className="text-lg font-medium">Map Embed</p>
            <p className="text-sm">123 Education Drive, Lagos, Nigeria</p>
          </div>
        </div>
      </section>
    </>
  )
}