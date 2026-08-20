import { useState } from 'react'
import ListingCard from './ListingCard'
import { listings as allListings, propertyTypes, areas } from '../data/listings'

export default function Listings({ onInquire }) {
  const [typeFilter, setTypeFilter] = useState('All')
  const [areaFilter, setAreaFilter] = useState('All Areas')
  const [budgetFilter, setBudgetFilter] = useState('any')

  const filtered = allListings.filter((listing) => {
    if (typeFilter !== 'All' && listing.type !== typeFilter) return false
    if (areaFilter !== 'All Areas' && listing.area !== areaFilter) return false
    if (budgetFilter !== 'any' && listing.rent > Number(budgetFilter)) return false
    return true
  })

  return (
    <section id="listings" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Available Properties
          </p>
          <h2 className="font-display mt-2 text-3xl font-bold text-warm-800 sm:text-4xl">
            Browse Rentals in Taloja
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-warm-700/80">
            Every listing is personally verified. Schedule a visit or inquire directly — no hidden charges.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="rounded-full border border-cream-200 bg-white px-4 py-2 text-sm font-medium text-warm-700 outline-none focus:border-brand-500"
            aria-label="Filter by property type"
          >
            {propertyTypes.map((type) => (
              <option key={type} value={type}>
                {type === 'All' ? 'All Types' : type}
              </option>
            ))}
          </select>
          <select
            value={areaFilter}
            onChange={(e) => setAreaFilter(e.target.value)}
            className="rounded-full border border-cream-200 bg-white px-4 py-2 text-sm font-medium text-warm-700 outline-none focus:border-brand-500"
            aria-label="Filter by area"
          >
            {areas.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
          <select
            value={budgetFilter}
            onChange={(e) => setBudgetFilter(e.target.value)}
            className="rounded-full border border-cream-200 bg-white px-4 py-2 text-sm font-medium text-warm-700 outline-none focus:border-brand-500"
            aria-label="Filter by budget"
          >
            <option value="any">Any Budget</option>
            <option value="15000">Up to ₹15,000</option>
            <option value="20000">Up to ₹20,000</option>
            <option value="30000">Up to ₹30,000</option>
            <option value="50000">Up to ₹50,000</option>
          </select>
        </div>

        {filtered.length === 0 ? (
          <div className="mt-16 rounded-2xl border border-dashed border-cream-200 bg-cream-100/50 py-16 text-center">
            <p className="text-lg font-medium text-warm-700">No properties match your filters</p>
            <p className="mt-2 text-sm text-warm-700/60">
              Try adjusting your search or{' '}
              <a href="#contact" className="font-semibold text-brand-600 hover:underline">
                contact us
              </a>{' '}
              for custom requirements.
            </p>
          </div>
        ) : (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((listing) => (
              <ListingCard key={listing.id} listing={listing} onInquire={onInquire} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
