import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, ShieldCheck, Phone, Calendar } from 'lucide-react'
import { getPropertyById, properties, searchProperties } from '@/data/properties'
import { PropertyScoreDisplay } from '@/components/property/PropertyScoreDisplay'
import { LocationIntelligence } from '@/components/property/LocationIntelligence'
import { MapView } from '@/components/property/MapView'
import { PropertyCard } from '@/components/property/PropertyCard'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { formatINR } from '@/lib/utils'
import { PropertyActions } from '@/components/property/PropertyActions'

export async function generateStaticParams() {
  return properties.map((p) => ({ id: p.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const property = getPropertyById(id)
  if (!property) return { title: 'Property Not Found' }
  return {
    title: `${property.buildingName} — ${property.bhk} for Rent`,
    description: `Rent ${property.bhk} at ${property.buildingName}, ${property.sector} for ${formatINR(property.rent)}/month. Top 1% score: ${property.score.total}/100.`,
  }
}

export default async function PropertyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const property = getPropertyById(id)
  if (!property) notFound()

  const similar = searchProperties({
    bhk: property.bhk,
    locality: property.locality,
  }).filter((p) => p.id !== property.id).slice(0, 3)

  return (
    <div className="px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="grid gap-3 sm:grid-cols-2">
              {property.images.map((img, i) => (
                <div key={img} className={`relative overflow-hidden rounded-2xl ${i === 0 ? 'sm:col-span-2 aspect-[16/9]' : 'aspect-[4/3]'}`}>
                  <Image src={img} alt={`${property.buildingName} ${i + 1}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" priority={i === 0} />
                </div>
              ))}
            </div>

            <GlassCard strong className="mt-6 p-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex flex-wrap gap-2">
                    {property.verified && (
                      <Badge variant="verified"><ShieldCheck className="h-3 w-3" /> Verified Listing</Badge>
                    )}
                    {property.agentVerified && (
                      <Badge variant="verified"><ShieldCheck className="h-3 w-3" /> Verified Agent</Badge>
                    )}
                  </div>
                  <h1 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">{property.buildingName}</h1>
                  <p className="mt-1 flex items-center gap-1 text-slate-500">
                    <MapPin className="h-4 w-4" />
                    {property.sector} · {property.locality}
                    {property.landmark && ` · Near ${property.landmark}`}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-brand-600">{formatINR(property.rent)}<span className="text-sm font-normal text-slate-400">/mo</span></p>
                  <p className="text-sm text-slate-500">Deposit {formatINR(property.deposit)}</p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  ['BHK', property.bhk],
                  ['Carpet Area', `${property.carpetAreaSqFt} sq.ft`],
                  ['Floor', `${property.floor} of ${property.totalFloors}`],
                  ['Furnishing', property.furnishing],
                  ['Parking', property.parking ? 'Yes' : 'No'],
                  ['Available', new Date(property.availableFrom).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })],
                  ['Agent', property.agentName],
                  ['Pet Friendly', property.petFriendly ? 'Yes' : 'No'],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-xl bg-slate-50 p-3">
                    <p className="text-[10px] font-semibold uppercase text-slate-400">{label}</p>
                    <p className="mt-0.5 text-sm font-medium text-slate-800">{value}</p>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-sm leading-relaxed text-slate-600">{property.description}</p>
            </GlassCard>

            <div className="mt-6">
              <LocationIntelligence proximity={property.proximity} />
            </div>

            <div className="mt-6">
              <MapView lat={property.lat} lng={property.lng} buildingName={property.buildingName} />
            </div>
          </div>

          <div className="space-y-6">
            <PropertyScoreDisplay score={property.score} />

            <PropertyActions propertyId={property.id} agentName={property.agentName} />

            <GlassCard strong className="p-5">
              <h3 className="font-semibold text-slate-900">Contact Agent</h3>
              <p className="mt-1 text-sm text-slate-500">{property.agentName}</p>
              <div className="mt-4 space-y-2">
                <Button className="w-full"><Phone className="h-4 w-4" /> Call Agent</Button>
                <Button variant="secondary" className="w-full"><Calendar className="h-4 w-4" /> Schedule Visit</Button>
              </div>
            </GlassCard>
          </div>
        </div>

        {similar.length > 0 && (
          <div className="mt-16">
            <h2 className="text-xl font-bold text-slate-900">Similar Rentals</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              {similar.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
