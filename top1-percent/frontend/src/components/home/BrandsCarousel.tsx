'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, ExternalLink, Award } from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { brandPartners } from '@/data/ads-and-infra'

export function BrandsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'left' ? -200 : 200, behavior: 'smooth' })
  }

  return (
    <section id="brands" className="px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-brand-600" />
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
                Trusted Brands
              </span>
            </div>
            <h2 className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl">
              Brands &amp; Partners
            </h2>
            <p className="mt-2 text-slate-500">Builders, banks, retail &amp; infrastructure brands in Taloja</p>
          </div>
          <div className="flex shrink-0 gap-2">
            <button type="button" onClick={() => scroll('left')} className="rounded-full glass p-2" aria-label="Scroll left">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button type="button" onClick={() => scroll('right')} className="rounded-full glass p-2" aria-label="Scroll right">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="mt-8 flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
        >
          {brandPartners.map((brand, i) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="w-44 shrink-0 snap-start sm:w-48"
            >
              <GlassCard className="flex h-full flex-col items-center p-5 text-center" hover>
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl text-sm font-bold text-white shadow-lg"
                  style={{ backgroundColor: brand.color }}
                >
                  {brand.logoText}
                </div>
                <h3 className="mt-3 font-semibold text-slate-900">{brand.name}</h3>
                <p className="mt-0.5 text-[10px] font-medium uppercase tracking-wide text-brand-500">
                  {brand.category}
                </p>
                <p className="mt-2 text-xs text-slate-500">{brand.description}</p>
                {brand.url && brand.url !== '#' && (
                  <a
                    href={brand.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand-600 hover:underline"
                  >
                    Visit <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
