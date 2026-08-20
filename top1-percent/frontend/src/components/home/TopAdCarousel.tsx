'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import { topAdSlides } from '@/data/ads-and-infra'

const INTERVAL_MS = 5000

export function TopAdCarousel() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const slides = topAdSlides

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length)
  }, [slides.length])

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length)
  }, [slides.length])

  useEffect(() => {
    if (paused) return
    const timer = setInterval(next, INTERVAL_MS)
    return () => clearInterval(timer)
  }, [paused, next])

  const slide = slides[current]
  const isExternal = slide.url.startsWith('http')

  return (
    <section
      className="relative mx-4 mt-2 overflow-hidden rounded-2xl sm:mx-6"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Sponsored advertisements"
    >
      <div className="relative aspect-[21/7] min-h-[140px] sm:aspect-[21/6] sm:min-h-[180px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0"
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              sizes="100vw"
              priority={current === 0}
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgGradient ?? 'from-slate-900/80 to-slate-900/40'}`} />

            <div className="absolute inset-0 flex items-center">
              <div className="max-w-6xl px-6 sm:px-10">
                <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm sm:text-xs">
                  Sponsored · {slide.category}
                </span>
                <h2 className="mt-2 text-lg font-bold text-white sm:text-2xl lg:text-3xl">
                  {slide.title}
                </h2>
                <p className="mt-1 max-w-lg text-xs text-white/85 sm:text-sm">
                  {slide.subtitle}
                </p>
                {isExternal ? (
                  <a
                    href={slide.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 rounded-xl bg-white px-4 py-2 text-xs font-semibold text-brand-700 shadow-lg transition hover:bg-brand-50 sm:mt-4 sm:px-5 sm:py-2.5 sm:text-sm"
                  >
                    {slide.cta} <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <Link
                    href={slide.url}
                    className="mt-3 inline-flex items-center gap-1.5 rounded-xl bg-white px-4 py-2 text-xs font-semibold text-brand-700 shadow-lg transition hover:bg-brand-50 sm:mt-4 sm:px-5 sm:py-2.5 sm:text-sm"
                  >
                    {slide.cta}
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          type="button"
          onClick={prev}
          className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition hover:bg-white/40 sm:left-4"
          aria-label="Previous ad"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={next}
          className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition hover:bg-white/40 sm:right-4"
          aria-label="Next ad"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
        {slides.map((s, i) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === current ? 'w-6 bg-white' : 'w-1.5 bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
