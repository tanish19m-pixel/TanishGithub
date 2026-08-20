function formatCurrency(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount)
}

export default function ListingCard({ listing, onInquire }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-cream-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={listing.image}
          alt={listing.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {listing.featured && (
          <span className="absolute left-3 top-3 rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white">
            Featured
          </span>
        )}
        <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-700 backdrop-blur-sm">
          {listing.type}
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold leading-snug text-warm-800">{listing.title}</h3>
        </div>
        <p className="mt-1 flex items-center gap-1 text-sm text-warm-700/70">
          <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {listing.area}
        </p>

        <div className="mt-4 flex items-baseline gap-2">
          <span className="text-xl font-bold text-brand-600">{formatCurrency(listing.rent)}</span>
          <span className="text-sm text-warm-700/60">/ month</span>
        </div>
        <p className="mt-1 text-xs text-warm-700/60">
          Deposit: {formatCurrency(listing.deposit)} · {listing.sqft} sq.ft · {listing.furnished}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {listing.amenities.slice(0, 3).map((amenity) => (
            <span
              key={amenity}
              className="rounded-full bg-cream-100 px-2.5 py-1 text-xs font-medium text-warm-700"
            >
              {amenity}
            </span>
          ))}
        </div>

        <button
          type="button"
          onClick={() => onInquire(listing)}
          className="mt-5 w-full rounded-xl border border-brand-600 py-2.5 text-sm font-semibold text-brand-600 transition hover:bg-brand-600 hover:text-white"
        >
          Inquire Now
        </button>
      </div>
    </article>
  )
}
