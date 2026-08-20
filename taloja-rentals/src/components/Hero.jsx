export default function Hero({ onSearch }) {
  return (
    <section className="relative overflow-hidden bg-brand-800">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-800/95 via-brand-700/90 to-brand-600/80" />

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="max-w-2xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-brand-100 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-brand-200" />
            Trusted rentals in Taloja since 2018
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Find your perfect home in{' '}
            <span className="text-brand-200">Taloja</span>
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-brand-100/90 sm:text-xl">
            Browse verified apartments and commercial spaces across Taloja Phase 1 &amp; 2,
            Sector 26, and surrounding neighborhoods — with zero brokerage on select listings.
          </p>
        </div>

        <div className="mt-10 rounded-2xl bg-white p-5 shadow-xl sm:p-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <label htmlFor="hero-type" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-warm-700/70">
                Property Type
              </label>
              <select
                id="hero-type"
                className="w-full rounded-xl border border-cream-200 bg-cream-50 px-4 py-3 text-sm text-warm-800 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                defaultValue="All"
              >
                <option>All</option>
                <option>1BHK</option>
                <option>2BHK</option>
                <option>3BHK</option>
                <option>Commercial</option>
              </select>
            </div>
            <div>
              <label htmlFor="hero-area" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-warm-700/70">
                Area
              </label>
              <select
                id="hero-area"
                className="w-full rounded-xl border border-cream-200 bg-cream-50 px-4 py-3 text-sm text-warm-800 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                defaultValue="All Areas"
              >
                <option>All Areas</option>
                <option>Taloja Phase 1</option>
                <option>Taloja Phase 2</option>
                <option>Taloja Sector 26</option>
                <option>Taloja Station Road</option>
              </select>
            </div>
            <div>
              <label htmlFor="hero-budget" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-warm-700/70">
                Max Budget
              </label>
              <select
                id="hero-budget"
                className="w-full rounded-xl border border-cream-200 bg-cream-50 px-4 py-3 text-sm text-warm-800 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                defaultValue="any"
              >
                <option value="any">Any Budget</option>
                <option value="15000">Up to ₹15,000</option>
                <option value="20000">Up to ₹20,000</option>
                <option value="30000">Up to ₹30,000</option>
                <option value="50000">Up to ₹50,000</option>
              </select>
            </div>
            <div className="flex items-end">
              <button
                type="button"
                onClick={onSearch}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Search Properties
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            { value: '500+', label: 'Properties Listed' },
            { value: '2,000+', label: 'Happy Tenants' },
            { value: '50+', label: 'Societies Covered' },
            { value: '4.8★', label: 'Average Rating' },
          ].map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <p className="font-display text-2xl font-bold text-white sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-sm text-brand-200">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
