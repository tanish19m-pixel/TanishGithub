'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, ExternalLink, Route } from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { roadConnectivity } from '@/data/ads-and-infra'

export function RoadConnectivitySection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'left' ? -340 : 340, behavior: 'smooth' })
  }

  return (
    <section id="roads" className="bg-white/30 px-4 py-14 backdrop-blur-sm sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <Route className="h-5 w-5 text-brand-600" />
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
                Road Connectivity
              </span>
            </div>
            <h2 className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl">
              Roads &amp; Expressways
            </h2>
            <p className="mt-2 text-slate-500">Upcoming road projects improving Taloja connectivity — official sources</p>
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
          {roadConnectivity.map((road, i) => (
            <motion.div
              key={road.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="w-80 shrink-0 snap-start"
            >
              <GlassCard className="h-full overflow-hidden" hover>
                <div className="relative h-36">
                  <Image src={road.image} alt={road.title} fill className="object-cover" sizes="320px" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-[10px] font-medium uppercase tracking-wide text-white/70">{road.route}</p>
                    <h3 className="font-semibold text-white">{road.title}</h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm leading-relaxed text-slate-500">{road.description}</p>
                  <p className="mt-3 text-xs font-medium text-brand-600">→ {road.benefit}</p>
                  <a
                    href={road.newsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:underline"
                  >
                    Read on {road.newsSource} <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
