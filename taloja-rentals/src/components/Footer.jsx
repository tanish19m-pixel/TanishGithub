export default function Footer() {
  return (
    <footer className="border-t border-cream-200 bg-cream-100 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600">
                <svg className="h-5 w-5 text-cream-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </svg>
              </div>
              <span className="font-display text-lg font-bold text-brand-700">Taloja Rentals</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-warm-700/70">
              Your trusted partner for residential and commercial rentals in Taloja, Navi Mumbai.
              Verified properties, transparent pricing, local expertise.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-warm-800">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm text-warm-700/70">
              <li><a href="#listings" className="hover:text-brand-600">Browse Listings</a></li>
              <li><a href="#about" className="hover:text-brand-600">About Us</a></li>
              <li><a href="#services" className="hover:text-brand-600">Services</a></li>
              <li><a href="#contact" className="hover:text-brand-600">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-warm-800">Areas We Cover</h4>
            <ul className="mt-4 space-y-2 text-sm text-warm-700/70">
              <li>Taloja Phase 1 &amp; 2</li>
              <li>Taloja Sector 26</li>
              <li>Taloja Station Road</li>
              <li>Taloja MIDC</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-cream-200 pt-8 sm:flex-row">
          <p className="text-sm text-warm-700/60">
            &copy; {new Date().getFullYear()} Taloja Rentals. All rights reserved.
          </p>
          <p className="text-sm text-warm-700/60">
            Made with care for the Taloja community
          </p>
        </div>
      </div>
    </footer>
  )
}
