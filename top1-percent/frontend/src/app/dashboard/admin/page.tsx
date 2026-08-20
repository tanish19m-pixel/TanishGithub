'use client'

import { properties } from '@/data/properties'
import { GlassCard } from '@/components/ui/GlassCard'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { ShieldCheck, X, Check } from 'lucide-react'

export default function AdminDashboard() {
  const pending = properties.filter((p) => p.status === 'pending_verification')
  const live = properties.filter((p) => p.status === 'live')

  return (
    <div className="px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-2xl font-bold text-slate-900">Admin Dashboard</h1>
        <p className="text-slate-500">Verify listings and manage platform</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <GlassCard className="p-5 text-center">
            <p className="text-3xl font-bold text-brand-600">{live.length}</p>
            <p className="text-sm text-slate-500">Live Listings</p>
          </GlassCard>
          <GlassCard className="p-5 text-center">
            <p className="text-3xl font-bold text-amber-600">{pending.length || 2}</p>
            <p className="text-sm text-slate-500">Pending Verification</p>
          </GlassCard>
          <GlassCard className="p-5 text-center">
            <p className="text-3xl font-bold text-slate-900">7</p>
            <p className="text-sm text-slate-500">Verified Agents</p>
          </GlassCard>
        </div>

        <GlassCard strong className="mt-8 p-5">
          <h2 className="font-semibold text-slate-900">Verification Queue</h2>
          <div className="mt-4 space-y-3">
            {[
              { name: 'New 2BHK — Sector 35', agent: 'Amit Deshmukh', checks: ['Phone ✓', 'Maps ✓', 'Duplicate ✓'] },
              { name: '1BHK — Ghotgaon', agent: 'Suresh Jadhav', checks: ['Phone ✓', 'Maps pending', 'Duplicate ✓'] },
            ].map((item) => (
              <div key={item.name} className="flex flex-wrap items-center justify-between gap-3 rounded-xl bg-slate-50 p-4">
                <div>
                  <p className="font-medium text-slate-900">{item.name}</p>
                  <p className="text-sm text-slate-500">Agent: {item.agent}</p>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {item.checks.map((c) => (
                      <span key={c} className="text-[10px] text-slate-400">{c}</span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline"><X className="h-3 w-3" /> Reject</Button>
                  <Button size="sm"><Check className="h-3 w-3" /> Approve</Button>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="mt-6 p-5">
          <h2 className="font-semibold text-slate-900">All Live Listings</h2>
          <div className="mt-4 divide-y divide-slate-100">
            {live.map((p) => (
              <div key={p.id} className="flex items-center justify-between py-3">
                <div>
                  <p className="text-sm font-medium text-slate-900">{p.buildingName}</p>
                  <p className="text-xs text-slate-500">{p.agentName}</p>
                </div>
                <Badge variant="verified"><ShieldCheck className="h-3 w-3" /> Verified</Badge>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  )
}
