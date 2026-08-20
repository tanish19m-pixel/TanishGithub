import Link from 'next/link'
import { PropertyCard } from '@/components/property/PropertyCard'
import { properties } from '@/data/properties'
import { AdBanner } from '@/components/home/AdBanner'
import { adPlacements } from '@/data/updates'

export function FeaturedListings() {
  const featured = properties.slice(0, 4)

  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Featured Rentals</h2>
            <p className="mt-2 text-slate-500">Verified properties with Top 1% scores</p>
          </div>
          <Link href="/search" className="text-sm font-semibold text-brand-600 hover:underline">
            View all →
          </Link>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <AdBanner ad={adPlacements[3]} />
          <AdBanner ad={adPlacements[4]} />
        </div>
      </div>
    </section>
  )
}
