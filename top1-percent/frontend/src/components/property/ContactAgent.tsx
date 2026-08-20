'use client'

import { Phone, Calendar, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { BRAND, whatsappUrl, telUrl } from '@/lib/brand'

interface ContactAgentProps {
  agentName: string
  buildingName: string
  bhk: string
  rent: number
}

export function ContactAgent({ agentName, buildingName, bhk, rent }: ContactAgentProps) {
  const message = `Hi, I'm interested in ${bhk} at ${buildingName} (₹${rent.toLocaleString('en-IN')}/mo) on Top 1%. Please share more details.`
  const visitMessage = `Hi, I'd like to schedule a visit for ${buildingName} - ${bhk}. When is a good time?`

  return (
    <div className="space-y-2">
      <a href={telUrl()} className="block">
        <Button className="w-full">
          <Phone className="h-4 w-4" /> Call {BRAND.phoneDisplay}
        </Button>
      </a>
      <a href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer" className="block">
        <Button variant="secondary" className="w-full bg-emerald-50 text-emerald-700 hover:bg-emerald-100">
          <MessageCircle className="h-4 w-4" /> WhatsApp Inquiry
        </Button>
      </a>
      <a href={whatsappUrl(visitMessage)} target="_blank" rel="noopener noreferrer" className="block">
        <Button variant="outline" className="w-full">
          <Calendar className="h-4 w-4" /> Schedule Visit
        </Button>
      </a>
      <p className="pt-1 text-center text-xs text-slate-400">Agent: {agentName}</p>
    </div>
  )
}
