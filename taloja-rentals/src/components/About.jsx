export default function About() {
  return (
    <section id="about" className="bg-cream-100 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
              alt="Modern apartment building in Taloja"
              className="rounded-2xl shadow-lg"
            />
            <div className="absolute -bottom-6 -right-4 rounded-2xl bg-brand-600 p-6 text-white shadow-xl sm:-right-6">
              <p className="font-display text-3xl font-bold">7+</p>
              <p className="text-sm text-brand-100">Years serving Taloja</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
              About Us
            </p>
            <h2 className="font-display mt-2 text-3xl font-bold text-warm-800 sm:text-4xl">
              Your local rental experts in Taloja
            </h2>
            <p className="mt-4 leading-relaxed text-warm-700/80">
              Taloja Rentals is a Navi Mumbai–based property rental service specializing in
              residential and commercial spaces across Taloja and nearby areas. We know every
              society, every lane, and what makes a neighborhood right for you.
            </p>
            <p className="mt-4 leading-relaxed text-warm-700/80">
              Whether you&apos;re a young professional looking for a 1BHK near the station, a
              family seeking a 3BHK in a gated community, or a business owner needing commercial
              space on MIDC Road — we make finding and moving in simple.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                'Every property personally visited and verified',
                'Transparent pricing with no hidden brokerage',
                'End-to-end support from inquiry to move-in',
                'Deep knowledge of Taloja Phase 1, Phase 2 & Sector 26',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-warm-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
