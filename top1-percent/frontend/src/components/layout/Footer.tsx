import Link from 'next/link'
import { BRAND, telUrl, mailtoUrl } from '@/lib/brand'

export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/40 bg-white/30 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-xs font-bold text-white">
                1%
              </div>
              <span className="font-bold text-slate-900">Top 1%</span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-slate-500">
              {BRAND.tagline}. Verified listings, smart location intelligence,
              and trusted local agents.
            </p>
            <p className="mt-3 text-sm text-slate-500">
              <a href={telUrl()} className="hover:text-brand-600">{BRAND.phoneDisplay}</a>
              {' · '}
              <a href={mailtoUrl('Rental Inquiry')} className="hover:text-brand-600">{BRAND.email}</a>
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Areas</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-500">
              <li>Taloja Phase 1</li>
              <li>Taloja Phase 2</li>
              <li>MIDC Taloja</li>
              <li>Ghotgaon</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Platform</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-500">
              <li><Link href="/search" className="hover:text-brand-600">Search Rentals</Link></li>
              <li><Link href="/list-property" className="hover:text-brand-600">List Property</Link></li>
              <li><Link href="/dashboard/agent" className="hover:text-brand-600">Agent Dashboard</Link></li>
              <li><Link href="/dashboard/tenant" className="hover:text-brand-600">Saved Properties</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-slate-200/50 pt-8 text-xs text-slate-400 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Top 1%. All rights reserved.</p>
          <p>Top 1% — Taloja&apos;s Smart Rental Marketplace</p>
        </div>
      </div>
    </footer>
  )
}
