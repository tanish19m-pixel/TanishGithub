'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const nav = [
  { href: '/search', label: 'Search' },
  { href: '/collections/affordable', label: 'Collections' },
  { href: '/#highlights', label: 'Why Taloja' },
  { href: '/#updates', label: 'Updates' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl glass-strong px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-500 text-sm font-bold text-white shadow-lg shadow-brand-600/30">
            1%
          </div>
          <div>
            <span className="block text-sm font-bold text-slate-900">Top 1%</span>
            <span className="block text-[10px] font-medium text-slate-500">Taloja Rentals</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-brand-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Link href="/login">
            <Button variant="ghost" size="sm">Sign In</Button>
          </Link>
          <Link href="/list-property">
            <Button size="sm">List Property</Button>
          </Link>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-slate-600 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl glass-strong p-4 md:hidden">
          <nav className="flex flex-col gap-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-white/50"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/login" onClick={() => setOpen(false)}>
              <Button variant="ghost" size="sm" className="w-full">Sign In</Button>
            </Link>
            <Link href="/list-property" onClick={() => setOpen(false)}>
              <Button size="sm" className="w-full">List Property</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
