'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { budgetCollections } from '@/data/collections'
import { getCollectionStats } from '@/data/properties'
import { formatINR } from '@/lib/utils'
import { AdBanner } from '@/components/home/AdBanner'
import { adPlacements } from '@/data/updates'

export function BudgetCollections() {
  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Budget Collections</h2>
          <p className="mt-2 text-slate-500">Curated rentals for every lifestyle</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {budgetCollections.map((collection, i) => {
            const stats = getCollectionStats(collection.slug)
            return (
              <motion.div
                key={collection.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={`/collections/${collection.slug}`}>
                  <GlassCard hover className="group overflow-hidden">
                    <div className="relative h-44 overflow-hidden">
                      <Image
                        src={collection.coverImage}
                        alt={collection.title}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-lg font-bold text-white">{collection.title}</h3>
                        <p className="text-sm text-white/80">{collection.subtitle}</p>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-semibold text-brand-600">{stats.count} properties</span>
                        <span className="text-slate-500">Avg {formatINR(stats.avgRent)}/mo</span>
                      </div>
                      <p className="mt-3 text-xs text-slate-500">
                        Suitable for: {collection.suitableFor.join(' · ')}
                      </p>
                      <p className="mt-2 text-xs text-slate-400">
                        Popular: {stats.sectors.slice(0, 3).join(', ')}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
                        Explore <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </GlassCard>
                </Link>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-10">
          <AdBanner ad={adPlacements[0]} />
        </div>
      </div>
    </section>
  )
}
