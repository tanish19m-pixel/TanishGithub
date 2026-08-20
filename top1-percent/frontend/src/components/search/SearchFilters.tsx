'use client'

import type { Property } from '@/types'

interface SearchFiltersProps {
  filters: Record<string, string | boolean>
  onChange: (key: string, value: string | boolean) => void
}

export function SearchFilters({ filters, onChange }: SearchFiltersProps) {
  const selectClass =
    'rounded-xl border border-white/60 bg-white/70 px-3 py-2 text-sm text-slate-700 outline-none backdrop-blur-sm focus:border-brand-400'

  return (
    <div className="glass-strong rounded-2xl p-4">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <select
          value={String(filters.bhk || '')}
          onChange={(e) => onChange('bhk', e.target.value)}
          className={selectClass}
          aria-label="BHK"
        >
          <option value="">All BHK</option>
          <option value="1 BHK">1 BHK</option>
          <option value="2 BHK">2 BHK</option>
          <option value="3 BHK">3 BHK</option>
        </select>

        <select
          value={String(filters.furnished || '')}
          onChange={(e) => onChange('furnished', e.target.value)}
          className={selectClass}
          aria-label="Furnishing"
        >
          <option value="">Furnishing</option>
          <option value="Furnished">Furnished</option>
          <option value="Semi Furnished">Semi Furnished</option>
          <option value="Unfurnished">Unfurnished</option>
        </select>

        <select
          value={String(filters.locality || '')}
          onChange={(e) => onChange('locality', e.target.value)}
          className={selectClass}
          aria-label="Locality"
        >
          <option value="">All Localities</option>
          <option value="Taloja Phase 1">Taloja Phase 1</option>
          <option value="Taloja Phase 2">Taloja Phase 2</option>
          <option value="MIDC Taloja">MIDC Taloja</option>
          <option value="Ghotgaon">Ghotgaon</option>
        </select>

        <select
          value={String(filters.budgetTier || '')}
          onChange={(e) => onChange('budgetTier', e.target.value)}
          className={selectClass}
          aria-label="Budget collection"
        >
          <option value="">Budget Collection</option>
          <option value="affordable">Affordable</option>
          <option value="mid-range">Mid-Range</option>
          <option value="luxury">Luxury</option>
        </select>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {[
          { key: 'parking', label: 'Parking' },
          { key: 'petFriendly', label: 'Pet Friendly' },
          { key: 'bachelorFriendly', label: 'Bachelor Friendly' },
          { key: 'familyPreferred', label: 'Family Preferred' },
          { key: 'nearMetro', label: 'Near Metro' },
          { key: 'verifiedOnly', label: 'Verified Only' },
          { key: 'availableImmediately', label: 'Available Immediately' },
        ].map(({ key, label }) => (
          <button
            key={key}
            type="button"
            onClick={() => onChange(key, !filters[key])}
            className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
              filters[key]
                ? 'bg-brand-600 text-white'
                : 'bg-white/60 text-slate-600 hover:bg-white/80'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  )
}
