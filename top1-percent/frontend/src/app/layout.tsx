import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { FloatingWhatsApp } from '@/components/layout/FloatingWhatsApp'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'Top 1% — Taloja\'s Smart Rental Marketplace',
    template: '%s | Top 1%',
  },
  description:
    'Find verified rental homes in Taloja Phase 1, Phase 2, MIDC Taloja & Ghotgaon. Smart location intelligence, verified agents, and premium listings.',
  keywords: ['Taloja rentals', 'Navi Mumbai rent', 'Taloja Phase 1', 'MIDC Taloja', 'verified rentals'],
  authors: [{ name: 'Top 1%' }],
  openGraph: {
    title: 'Top 1% — Taloja\'s Smart Rental Marketplace',
    description: 'Verified rental properties with smart location intelligence for Taloja, Navi Mumbai.',
    type: 'website',
    locale: 'en_IN',
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Top 1%',
  },
}

export const viewport: Viewport = {
  themeColor: '#2563eb',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
