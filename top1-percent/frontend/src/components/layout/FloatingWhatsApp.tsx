'use client'

import { MessageCircle } from 'lucide-react'
import { BRAND, whatsappUrl } from '@/lib/brand'

export function FloatingWhatsApp() {
  const message = `Hi Top 1%, I'm looking for a rental in Taloja. Can you help?`

  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 transition hover:scale-105 hover:bg-emerald-600"
      aria-label={`Chat on WhatsApp with ${BRAND.name}`}
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  )
}
