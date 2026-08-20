'use client'

import Link from 'next/link'
import { Building2, Heart, Shield, BarChart3 } from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'

const dashboards = [
  { href: '/dashboard/agent', icon: Building2, title: 'Agent Dashboard', desc: 'Manage listings, leads, renewals' },
  { href: '/dashboard/tenant', icon: Heart, title: 'Tenant Dashboard', desc: 'Saved favorites, comparisons, visits' },
  { href: '/dashboard/admin', icon: Shield, title: 'Admin Dashboard', desc: 'Verify listings, manage users' },
]

export default function DashboardHome() {
  return (
    <div className="px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
        <p className="mt-2 text-slate-500">Choose your dashboard</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {dashboards.map((d) => (
            <Link key={d.href} href={d.href}>
              <GlassCard hover className="p-6 text-center">
                <d.icon className="mx-auto h-10 w-10 text-brand-600" />
                <h2 className="mt-4 font-semibold text-slate-900">{d.title}</h2>
                <p className="mt-2 text-sm text-slate-500">{d.desc}</p>
              </GlassCard>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
