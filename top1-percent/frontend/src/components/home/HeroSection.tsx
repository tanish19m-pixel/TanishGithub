'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Search, MapPin, Building2, Mic } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { popularSearches } from '@/data/updates'
import { useFavoritesStore } from '@/store/favorites'

export function HeroSection() {
  const router = useRouter()
  const [query, setQuery] = useState('')
  const addRecentSearch = useFavoritesStore((s) => s.addRecentSearch)

  const handleSearch = () => {
    addRecentSearch(query)
    const params = new URLSearchParams()
    if (query) params.set('q', query)
    router.push(`/search?${params.toString()}`)
  }

  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-8 sm:px-6 sm:pt-12">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold text-brand-700">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Verified Rentals · Taloja Only
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Find Your{' '}
            <span className="text-gradient">Top 1%</span>
            <br />
            Rental Home
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-base text-slate-500 sm:text-lg">
            Smart rentals in Taloja Phase 1, Phase 2, MIDC &amp; Ghotgaon — with verified agents,
            location intelligence, and zero guesswork.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mx-auto mt-10 max-w-2xl"
        >
          <div className="glass-strong animate-float rounded-2xl p-2 shadow-2xl shadow-brand-600/10">
            <div className="flex items-center gap-2 rounded-xl bg-white/60 px-4 py-3">
              <Search className="h-5 w-5 shrink-0 text-brand-500" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                placeholder="Building name, sector, locality, landmark..."
                className="flex-1 bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
                aria-label="Search properties"
              />
              <button
                type="button"
                className="rounded-lg p-2 text-slate-400 hover:bg-white/50 hover:text-brand-600"
                title="Voice search (coming soon)"
                aria-label="Voice search"
              >
                <Mic className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-2 px-2 pb-1">
              <span className="flex items-center gap-1 text-[10px] text-slate-400">
                <Building2 className="h-3 w-3" /> Building
              </span>
              <span className="flex items-center gap-1 text-[10px] text-slate-400">
                <MapPin className="h-3 w-3" /> Sector
              </span>
              <span className="flex items-center gap-1 text-[10px] text-slate-400">
                <MapPin className="h-3 w-3" /> Locality
              </span>
            </div>
          </div>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" onClick={handleSearch} className="w-full sm:w-auto">
              Find Your Rental Home
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
              onClick={() => router.push('/list-property')}
            >
              List Your Property
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {popularSearches.slice(0, 5).map((term) => (
              <button
                key={term}
                type="button"
                onClick={() => {
                  setQuery(term)
                  addRecentSearch(term)
                  router.push(`/search?q=${encodeURIComponent(term)}`)
                }}
                className="rounded-full glass px-3 py-1 text-xs font-medium text-slate-600 transition hover:bg-white/80"
              >
                {term}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
