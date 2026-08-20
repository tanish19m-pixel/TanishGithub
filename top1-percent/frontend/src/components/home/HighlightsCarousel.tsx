'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import {
  Train, Route, Plane, ShoppingBag, Building2, Laptop,
  GraduationCap, HeartPulse, TrendingUp, Briefcase, ChevronLeft, ChevronRight,
} from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { highlights } from '@/data/highlights'

const iconMap: Record<string, React.ElementType> = {
  Train, Road: Route, Plane, ShoppingBag, Building2, Laptop,
  GraduationCap, HeartPulse, TrendingUp, Briefcase,
}

export function HighlightsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'left' ? -320 : 320, behavior: 'smooth' })
  }

  return (
    <section id="highlights" className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Why Rent in Taloja?</h2>
            <p className="mt-2 text-slate-500">Infrastructure, growth, and lifestyle advantages</p>
          </div>
          <div className="hidden gap-2 sm:flex">
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
          {highlights.map((card, i) => {
            const Icon = iconMap[card.icon] ?? Building2
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="w-72 shrink-0 snap-start"
              >
                <GlassCard className="h-full p-5" hover>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100 text-brand-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-semibold text-slate-900">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{card.description}</p>
                  {card.readMoreUrl && (
                    <a
                      href={card.readMoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block text-sm font-semibold text-brand-600 hover:underline"
                    >
                      Read More →
                    </a>
                  )}
                </GlassCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
