'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, ExternalLink, HardHat } from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { infrastructureProjects } from '@/data/ads-and-infra'

const statusColors = {
  'Under Construction': 'bg-amber-100 text-amber-700',
  Upcoming: 'bg-brand-100 text-brand-700',
  Planned: 'bg-slate-100 text-slate-600',
}

export function InfrastructureProjects() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'left' ? -340 : 340, behavior: 'smooth' })
  }

  return (
    <section id="infrastructure" className="px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <HardHat className="h-5 w-5 text-brand-600" />
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-600">
                Upcoming Projects
              </span>
            </div>
            <h2 className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl">
              Infrastructure &amp; Development
            </h2>
            <p className="mt-2 text-slate-500">Major projects shaping Taloja&apos;s future — with official news links</p>
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
          {infrastructureProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="w-80 shrink-0 snap-start"
            >
              <GlassCard className="h-full overflow-hidden" hover>
                <div className="relative h-40">
                  <Image src={project.image} alt={project.title} fill className="object-cover" sizes="320px" />
                  <span className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-semibold ${statusColors[project.status]}`}>
                    {project.status}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-slate-900">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{project.description}</p>
                  {project.expectedCompletion && (
                    <p className="mt-2 text-xs text-slate-400">Expected: {project.expectedCompletion}</p>
                  )}
                  <p className="mt-2 text-xs font-medium text-emerald-600">✓ {project.impact}</p>
                  <a
                    href={project.newsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:underline"
                  >
                    {project.newsSource} <ExternalLink className="h-3.5 w-3.5" />
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
