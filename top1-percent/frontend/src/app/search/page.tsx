'use client'

import { useSearchParams } from 'next/navigation'
import { useMemo, useState, Suspense } from 'react'
import { Search } from 'lucide-react'
import { PropertyCard } from '@/components/property/PropertyCard'
import { SearchFilters } from '@/components/search/SearchFilters'
import { searchProperties } from '@/data/properties'
import { useFavoritesStore } from '@/store/favorites'

function SearchContent() {
  const searchParams = useSearchParams()
  const initialQ = searchParams.get('q') ?? ''
  const [query, setQuery] = useState(initialQ)
  const [filters, setFilters] = useState<Record<string, string | boolean>>({})
  const addRecentSearch = useFavoritesStore((s) => s.addRecentSearch)
  const recentSearches = useFavoritesStore((s) => s.recentSearches)

  const results = useMemo(() => {
    return searchProperties({
      q: query || undefined,
      bhk: (filters.bhk as string) || undefined,
      locality: (filters.locality as string) || undefined,
      budgetTier: (filters.budgetTier as string) || undefined,
      furnished: (filters.furnished as string) || undefined,
      parking: filters.parking ? true : undefined,
      petFriendly: filters.petFriendly ? true : undefined,
      bachelorFriendly: filters.bachelorFriendly ? true : undefined,
      familyPreferred: filters.familyPreferred ? true : undefined,
      nearMetro: filters.nearMetro ? true : undefined,
      verifiedOnly: filters.verifiedOnly ? true : undefined,
      availableImmediately: filters.availableImmediately ? true : undefined,
    })
  }, [query, filters])

  const handleFilterChange = (key: string, value: string | boolean) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <div className="px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">Search Rentals</h1>
        <p className="mt-1 text-slate-500">{results.length} properties found in Taloja</p>

        <div className="mt-6 glass-strong flex items-center gap-3 rounded-2xl px-4 py-3">
          <Search className="h-5 w-5 text-brand-500" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addRecentSearch(query)}
            placeholder="Building, sector, landmark, society, road..."
            className="flex-1 bg-transparent text-sm outline-none"
          />
        </div>

        {recentSearches.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="text-xs text-slate-400">Recent:</span>
            {recentSearches.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setQuery(s)}
                className="rounded-full bg-white/60 px-2.5 py-1 text-xs text-slate-600 hover:bg-white"
              >
                {s}
              </button>
            ))}
          </div>
        )}

        <div className="mt-6">
          <SearchFilters filters={filters} onChange={handleFilterChange} />
        </div>

        {results.length === 0 ? (
          <div className="mt-16 text-center">
            <p className="text-lg font-medium text-slate-600">No properties match your search</p>
            <p className="mt-2 text-sm text-slate-400">Try adjusting filters or search terms</p>
          </div>
        ) : (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-slate-500">Loading search...</div>}>
      <SearchContent />
    </Suspense>
  )
}
