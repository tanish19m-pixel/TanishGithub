import { ExternalLink } from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { talojaUpdates } from '@/data/updates'
import { AdBanner } from '@/components/home/AdBanner'
import { adPlacements } from '@/data/updates'

export function TalojaUpdates() {
  return (
    <section id="updates" className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Taloja Updates</h2>
          <p className="mt-2 text-slate-500">Official public domain information only</p>
        </div>

        <div className="mt-10 space-y-4">
          {talojaUpdates.map((update) => (
            <GlassCard key={update.id} className="p-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <span className="text-xs font-semibold text-brand-600">{update.source}</span>
                  <h3 className="mt-1 font-semibold text-slate-900">{update.headline}</h3>
                  <p className="mt-2 text-sm text-slate-500">{update.summary}</p>
                  <p className="mt-2 text-xs text-slate-400">
                    {new Date(update.publishedAt).toLocaleDateString('en-IN', {
                      day: 'numeric', month: 'long', year: 'numeric',
                    })}
                  </p>
                </div>
                <a
                  href={update.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-brand-600 hover:underline"
                >
                  Official Source <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <AdBanner ad={adPlacements[1]} />
          <AdBanner ad={adPlacements[2]} />
        </div>
      </div>
    </section>
  )
}
