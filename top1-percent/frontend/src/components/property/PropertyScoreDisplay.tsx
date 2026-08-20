import { Star } from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import type { PropertyScore } from '@/types'

export function PropertyScoreDisplay({ score }: { score: PropertyScore }) {
  const pct = score.total

  return (
    <GlassCard strong className="p-6">
      <div className="flex items-center gap-4">
        <div className="relative flex h-20 w-20 items-center justify-center">
          <svg className="h-20 w-20 -rotate-90" viewBox="0 0 36 36">
            <circle cx="18" cy="18" r="15.5" fill="none" stroke="#e2e8f0" strokeWidth="3" />
            <circle
              cx="18" cy="18" r="15.5" fill="none"
              stroke="#2563eb" strokeWidth="3"
              strokeDasharray={`${pct} 100`}
              strokeLinecap="round"
            />
          </svg>
          <span className="absolute text-lg font-bold text-brand-700">{score.total}</span>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">Top 1% Property Score</p>
          <p className="text-2xl font-bold text-slate-900">{score.total}/100</p>
          <p className="flex items-center gap-1 text-sm text-slate-500">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            {score.label}
          </p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-2 text-xs">
        {Object.entries(score.breakdown).map(([key, val]) => (
          <div key={key} className="flex justify-between rounded-lg bg-slate-50 px-3 py-2">
            <span className="capitalize text-slate-500">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
            <span className="font-semibold text-slate-700">{val}</span>
          </div>
        ))}
      </div>

      {score.pros.length > 0 && (
        <div className="mt-5">
          <h4 className="text-sm font-semibold text-emerald-700">Pros</h4>
          <ul className="mt-2 space-y-1">
            {score.pros.map((p) => (
              <li key={p} className="text-xs text-slate-600">✓ {p}</li>
            ))}
          </ul>
        </div>
      )}

      {score.cons.length > 0 && (
        <div className="mt-4">
          <h4 className="text-sm font-semibold text-amber-700">Cons</h4>
          <ul className="mt-2 space-y-1">
            {score.cons.map((c) => (
              <li key={c} className="text-xs text-slate-600">− {c}</li>
            ))}
          </ul>
        </div>
      )}

      {score.idealFor.length > 0 && (
        <div className="mt-4">
          <h4 className="text-sm font-semibold text-brand-700">Ideal For</h4>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {score.idealFor.map((item) => (
              <span key={item} className="rounded-full bg-brand-50 px-2.5 py-1 text-xs text-brand-700">
                {item}
              </span>
            ))}
          </div>
        </div>
      )}
    </GlassCard>
  )
}
