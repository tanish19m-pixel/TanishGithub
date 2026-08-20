'use client'

import { properties } from '@/data/properties'
import { GlassCard } from '@/components/ui/GlassCard'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { formatINR } from '@/lib/utils'
import { Eye, Users, RefreshCw, Plus } from 'lucide-react'
import Link from 'next/link'

export default function AgentDashboard() {
  const myListings = properties.filter((p) => p.agentName === 'Rahul Patil' || p.agentName === 'Priya Sharma')

  return (
    <div className="px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Agent Dashboard</h1>
            <p className="text-slate-500">Manage your listings and leads</p>
          </div>
          <Link href="/list-property">
            <Button><Plus className="h-4 w-4" /> Add Property</Button>
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            { label: 'Active Listings', value: myListings.length, icon: Eye },
            { label: 'Total Leads', value: 24, icon: Users },
            { label: 'Expiring Soon', value: 1, icon: RefreshCw },
          ].map((stat) => (
            <GlassCard key={stat.label} className="flex items-center gap-4 p-5">
              <stat.icon className="h-8 w-8 text-brand-600" />
              <div>
                <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                <p className="text-sm text-slate-500">{stat.label}</p>
              </div>
            </GlassCard>
          ))}
        </div>

        <GlassCard strong className="mt-8 overflow-hidden">
          <div className="border-b border-slate-100 px-5 py-4">
            <h2 className="font-semibold text-slate-900">My Listings</h2>
          </div>
          <div className="divide-y divide-slate-100">
            {myListings.map((p) => {
              const daysLeft = p.expiresAt
                ? Math.ceil((new Date(p.expiresAt).getTime() - Date.now()) / 86400000)
                : 0
              return (
                <div key={p.id} className="flex flex-wrap items-center justify-between gap-4 px-5 py-4">
                  <div>
                    <p className="font-medium text-slate-900">{p.buildingName} — {p.bhk}</p>
                    <p className="text-sm text-slate-500">{formatINR(p.rent)}/mo · {p.sector}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant={p.verified ? 'verified' : 'default'}>
                      {p.status === 'live' ? 'Live' : p.status}
                    </Badge>
                    {daysLeft <= 14 && daysLeft > 0 && (
                      <span className="text-xs text-amber-600">Expires in {daysLeft} days</span>
                    )}
                    {daysLeft <= 0 && (
                      <Button size="sm" variant="outline"><RefreshCw className="h-3 w-3" /> Renew ₹499</Button>
                    )}
                    <Button size="sm" variant="ghost">Edit</Button>
                  </div>
                </div>
              )
            })}
          </div>
        </GlassCard>
      </div>
    </div>
  )
}
