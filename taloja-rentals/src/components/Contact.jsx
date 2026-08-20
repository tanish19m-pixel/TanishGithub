import { useState, useEffect } from 'react'

export default function Contact({ selectedListing }) {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    interest: '',
  })

  useEffect(() => {
    if (selectedListing) {
      setForm((prev) => ({ ...prev, interest: selectedListing.title }))
      setSubmitted(false)
    }
  }, [selectedListing])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-brand-800 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-200">
              Get in Touch
            </p>
            <h2 className="font-display mt-2 text-3xl font-bold text-white sm:text-4xl">
              Ready to find your next home?
            </h2>
            <p className="mt-4 leading-relaxed text-brand-100/80">
              Send us a message and our team will get back within 2 hours during business hours.
              You can also call or WhatsApp us directly.
            </p>

            <div className="mt-8 space-y-5">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-4 text-brand-100 transition hover:text-white"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm text-brand-200">Call us</p>
                  <p className="font-semibold">+91 98765 43210</p>
                </div>
              </a>
              <a
                href="mailto:hello@talojarentals.com"
                className="flex items-center gap-4 text-brand-100 transition hover:text-white"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm text-brand-200">Email</p>
                  <p className="font-semibold">hello@talojarentals.com</p>
                </div>
              </a>
              <div className="flex items-center gap-4 text-brand-100">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm text-brand-200">Office</p>
                  <p className="font-semibold">Shop 12, Taloja Station Road, Navi Mumbai 410208</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-xl sm:p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <h3 className="mt-4 text-xl font-semibold text-warm-800">Message sent!</h3>
                <p className="mt-2 text-warm-700/70">
                  Thank you for reaching out. We&apos;ll contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-lg font-semibold text-warm-800">Send an inquiry</h3>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-warm-700">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-cream-200 bg-cream-50 px-4 py-3 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-warm-700">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-cream-200 bg-cream-50 px-4 py-3 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-warm-700">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-cream-200 bg-cream-50 px-4 py-3 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="interest" className="mb-1.5 block text-sm font-medium text-warm-700">
                    Property of Interest
                  </label>
                  <input
                    id="interest"
                    name="interest"
                    type="text"
                    value={form.interest}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-cream-200 bg-cream-50 px-4 py-3 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                    placeholder="e.g. 2BHK in Taloja Phase 1"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-warm-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full resize-none rounded-xl border border-cream-200 bg-cream-50 px-4 py-3 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                    placeholder="Tell us about your requirements..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-brand-600 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-700"
                >
                  Send Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
