'use client'

import { useState } from 'react'
import { Check, CreditCard, Upload, MapPin } from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { Button } from '@/components/ui/Button'

const STEPS = ['Property Details', 'Photos', 'Location', 'Payment', 'Verification']

const LISTING_PRICE = 499
const LISTING_VALIDITY_DAYS = 90

export default function ListPropertyPage() {
  const [step, setStep] = useState(0)
  const [paid, setPaid] = useState(false)

  return (
    <div className="px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">List Your Property</h1>
        <p className="mt-1 text-slate-500">
          ₹{LISTING_PRICE} per property · {LISTING_VALIDITY_DAYS} days validity · Verified before going live
        </p>

        <div className="mt-8 flex gap-1">
          {STEPS.map((s, i) => (
            <div key={s} className="flex-1">
              <div className={`h-1.5 rounded-full ${i <= step ? 'bg-brand-600' : 'bg-slate-200'}`} />
              <p className={`mt-1 text-[10px] font-medium ${i <= step ? 'text-brand-600' : 'text-slate-400'}`}>{s}</p>
            </div>
          ))}
        </div>

        <GlassCard strong className="mt-8 p-6">
          {step === 0 && (
            <div className="space-y-4">
              <h2 className="font-semibold text-slate-900">Property Details</h2>
              {['Building Name', 'Sector', 'Locality', 'BHK', 'Monthly Rent (₹)', 'Deposit (₹)', 'Carpet Area (sq.ft)', 'Floor'].map((label) => (
                <input key={label} placeholder={label} className="w-full rounded-xl border border-slate-200 bg-white/60 px-4 py-3 text-sm outline-none focus:border-brand-400" />
              ))}
              <select className="w-full rounded-xl border border-slate-200 bg-white/60 px-4 py-3 text-sm outline-none">
                <option>Furnishing Status</option>
                <option>Furnished</option>
                <option>Semi Furnished</option>
                <option>Unfurnished</option>
              </select>
            </div>
          )}

          {step === 1 && (
            <div className="text-center py-8">
              <Upload className="mx-auto h-12 w-12 text-brand-400" />
              <h2 className="mt-4 font-semibold text-slate-900">Upload Photos</h2>
              <p className="mt-2 text-sm text-slate-500">Drag &amp; drop or click to upload (max 10 photos)</p>
              <Button variant="secondary" className="mt-4">Choose Files</Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h2 className="font-semibold text-slate-900 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-brand-600" /> Location Validation
              </h2>
              <p className="text-sm text-slate-500">
                Enter building name and sector — we&apos;ll auto-detect nearby amenities via Google Maps.
              </p>
              <input placeholder="Building Name (e.g. Sai Riverdale)" className="w-full rounded-xl border border-slate-200 bg-white/60 px-4 py-3 text-sm outline-none" />
              <input placeholder="Sector (e.g. Sector 37)" className="w-full rounded-xl border border-slate-200 bg-white/60 px-4 py-3 text-sm outline-none" />
            </div>
          )}

          {step === 3 && (
            <div className="text-center py-6">
              <CreditCard className="mx-auto h-12 w-12 text-brand-400" />
              <h2 className="mt-4 font-semibold text-slate-900">Payment — ₹{LISTING_PRICE}</h2>
              <p className="mt-2 text-sm text-slate-500">
                Secure payment via Razorpay. Listing valid for {LISTING_VALIDITY_DAYS} days.
              </p>
              {!paid ? (
                <Button className="mt-6" onClick={() => setPaid(true)}>
                  Pay ₹{LISTING_PRICE} with Razorpay
                </Button>
              ) : (
                <div className="mt-6 flex items-center justify-center gap-2 text-emerald-600">
                  <Check className="h-5 w-5" /> Payment successful
                </div>
              )}
            </div>
          )}

          {step === 4 && (
            <div className="text-center py-6">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-100">
                <Check className="h-8 w-8 text-brand-600" />
              </div>
              <h2 className="mt-4 font-semibold text-slate-900">Submitted for Verification</h2>
              <p className="mt-2 text-sm text-slate-500">
                Our team will verify your listing within 24 hours. You&apos;ll receive expiry reminders before day {LISTING_VALIDITY_DAYS}.
              </p>
              <ul className="mt-4 space-y-2 text-left text-xs text-slate-500">
                <li>✓ Phone verification</li>
                <li>✓ Address validation via Google Maps</li>
                <li>✓ Duplicate listing check</li>
                <li>✓ Agent/owner verification</li>
              </ul>
            </div>
          )}

          <div className="mt-6 flex justify-between">
            {step > 0 && step < 4 && (
              <Button variant="ghost" onClick={() => setStep(step - 1)}>Back</Button>
            )}
            {step < 4 && (
              <Button
                className="ml-auto"
                onClick={() => setStep(step + 1)}
                disabled={step === 3 && !paid}
              >
                {step === 3 ? 'Continue' : 'Next'}
              </Button>
            )}
          </div>
        </GlassCard>
      </div>
    </div>
  )
}
