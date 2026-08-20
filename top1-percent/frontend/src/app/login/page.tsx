'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, Phone, Globe } from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { Button } from '@/components/ui/Button'

export default function LoginPage() {
  const [mode, setMode] = useState<'email' | 'otp'>('email')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [otp, setOtp] = useState('')

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 py-12">
      <GlassCard strong className="w-full max-w-md p-8">
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-lg font-bold text-white">
            1%
          </div>
          <h1 className="mt-4 text-2xl font-bold text-slate-900">Welcome to Top 1%</h1>
          <p className="mt-1 text-sm text-slate-500">Sign in to save favorites, compare &amp; manage listings</p>
        </div>

        <div className="mt-6 flex rounded-xl bg-slate-100 p-1">
          <button
            type="button"
            onClick={() => setMode('email')}
            className={`flex-1 rounded-lg py-2 text-sm font-medium transition ${mode === 'email' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500'}`}
          >
            Email
          </button>
          <button
            type="button"
            onClick={() => setMode('otp')}
            className={`flex-1 rounded-lg py-2 text-sm font-medium transition ${mode === 'otp' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500'}`}
          >
            Mobile OTP
          </button>
        </div>

        <div className="mt-6 space-y-4">
          <Button variant="secondary" className="w-full">
            <Globe className="h-4 w-4" /> Continue with Google
          </Button>

          <div className="relative text-center text-xs text-slate-400">
            <span className="bg-white/80 px-2">or</span>
            <div className="absolute inset-x-0 top-1/2 -z-10 border-t border-slate-200" />
          </div>

          {mode === 'email' ? (
            <>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="w-full rounded-xl border border-slate-200 bg-white/60 px-4 py-3 text-sm outline-none focus:border-brand-400"
              />
              <Button className="w-full"><Mail className="h-4 w-4" /> Sign In with Email</Button>
            </>
          ) : (
            <>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 98765 43210"
                className="w-full rounded-xl border border-slate-200 bg-white/60 px-4 py-3 text-sm outline-none focus:border-brand-400"
              />
              {otp && (
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter 6-digit OTP"
                  className="w-full rounded-xl border border-slate-200 bg-white/60 px-4 py-3 text-sm outline-none focus:border-brand-400"
                />
              )}
              <Button className="w-full"><Phone className="h-4 w-4" /> {otp ? 'Verify OTP' : 'Send OTP'}</Button>
            </>
          )}
        </div>

        <p className="mt-6 text-center text-xs text-slate-400">
          By continuing, you agree to our Terms &amp; Privacy Policy.
          <br />
          <Link href="/dashboard/agent" className="text-brand-600 hover:underline">Agent?</Link>
          {' · '}
          <Link href="/dashboard/tenant" className="text-brand-600 hover:underline">Tenant dashboard</Link>
        </p>
      </GlassCard>
    </div>
  )
}
