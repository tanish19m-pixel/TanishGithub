import Image from 'next/image'
import Link from 'next/link'
import type { AdPlacement } from '@/types'
import { GlassCard } from '@/components/ui/GlassCard'

export function AdBanner({ ad }: { ad: AdPlacement }) {
  return (
    <GlassCard className="overflow-hidden">
      <div className="flex flex-col sm:flex-row">
        {ad.image && (
          <div className="relative h-32 w-full sm:h-auto sm:w-48 shrink-0">
            <Image src={ad.image} alt={ad.title} fill className="object-cover" sizes="200px" />
          </div>
        )}
        <div className="flex flex-1 items-center justify-between gap-4 p-5">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-500">
              Sponsored · {ad.category}
            </span>
            <h3 className="mt-1 font-semibold text-slate-900">{ad.title}</h3>
            <p className="text-sm text-slate-500">{ad.subtitle}</p>
          </div>
          <Link
            href="#"
            className="shrink-0 rounded-xl bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700 transition hover:bg-brand-100"
          >
            {ad.cta}
          </Link>
        </div>
      </div>
    </GlassCard>
  )
}
