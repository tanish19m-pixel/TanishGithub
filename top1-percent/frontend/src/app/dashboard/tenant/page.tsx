'use client'

import Link from 'next/link'
import { properties } from '@/data/properties'
import { useFavoritesStore } from '@/store/favorites'
import { PropertyCard } from '@/components/property/PropertyCard'
import { GlassCard } from '@/components/ui/GlassCard'
import { Button } from '@/components/ui/Button'
import { GitCompare } from 'lucide-react'

export default function TenantDashboard() {
  const { favorites, compareList, removeFromCompare } = useFavoritesStore()
  const saved = properties.filter((p) => favorites.includes(p.id))
  const compare = properties.filter((p) => compareList.includes(p.id))

  return (
    <div className="px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-2xl font-bold text-slate-900">Tenant Dashboard</h1>
        <p className="text-slate-500">Your saved properties and comparisons</p>

        <section className="mt-8">
          <h2 className="text-lg font-semibold text-slate-900">Saved Favorites ({saved.length})</h2>
          {saved.length === 0 ? (
            <GlassCard className="mt-4 p-8 text-center">
              <p className="text-slate-500">No saved properties yet.</p>
              <Link href="/search"><Button variant="secondary" className="mt-4">Browse Rentals</Button></Link>
            </GlassCard>
          ) : (
            <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {saved.map((p) => <PropertyCard key={p.id} property={p} />)}
            </div>
          )}
        </section>

        <section className="mt-12">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
            <GitCompare className="h-5 w-5" /> Compare ({compare.length}/3)
          </h2>
          {compare.length === 0 ? (
            <p className="mt-4 text-sm text-slate-500">Add up to 3 properties to compare side by side.</p>
          ) : (
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {compare.map((p) => (
                <GlassCard key={p.id} className="p-4">
                  <p className="font-semibold text-slate-900">{p.buildingName}</p>
                  <p className="text-sm text-brand-600">₹{p.rent.toLocaleString('en-IN')}/mo</p>
                  <p className="text-xs text-slate-500">{p.bhk} · {p.sector}</p>
                  <p className="mt-2 text-xs text-slate-400">Score: {p.score.total}/100</p>
                  <Button size="sm" variant="ghost" className="mt-2" onClick={() => removeFromCompare(p.id)}>
                    Remove
                  </Button>
                </GlassCard>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  )
}
