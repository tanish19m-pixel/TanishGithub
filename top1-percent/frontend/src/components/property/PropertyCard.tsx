'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Heart, MapPin, ShieldCheck, Star } from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'
import { formatINR } from '@/lib/utils'
import { useFavoritesStore } from '@/store/favorites'
import type { Property } from '@/types'

export function PropertyCard({ property }: { property: Property }) {
  const { favorites, toggleFavorite } = useFavoritesStore()
  const isFavorite = favorites.includes(property.id)

  return (
    <Link href={`/properties/${property.id}`}>
      <GlassCard hover className="group overflow-hidden">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={property.images[0]}
            alt={property.buildingName}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault()
              toggleFavorite(property.id)
            }}
            className="absolute right-3 top-3 rounded-full bg-white/90 p-2 shadow-sm backdrop-blur-sm transition hover:scale-110"
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            <Heart className={`h-4 w-4 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-slate-400'}`} />
          </button>
          {property.verified && (
            <div className="absolute left-3 top-3">
              <Badge variant="verified">
                <ShieldCheck className="h-3 w-3" /> Verified
              </Badge>
            </div>
          )}
          <div className="absolute bottom-3 right-3">
            <Badge variant="score">
              <Star className="h-3 w-3" /> {property.score.total}/100
            </Badge>
          </div>
        </div>

        <div className="p-4">
          <div className="flex items-baseline justify-between">
            <p className="text-lg font-bold text-brand-600">{formatINR(property.rent)}<span className="text-xs font-normal text-slate-400">/mo</span></p>
            <span className="text-xs text-slate-400">{property.bhk}</span>
          </div>
          <h3 className="mt-1 font-semibold text-slate-900">{property.buildingName}</h3>
          <p className="mt-1 flex items-center gap-1 text-xs text-slate-500">
            <MapPin className="h-3 w-3" />
            {property.sector} · {property.locality}
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5 text-[10px] text-slate-500">
            <span className="rounded-md bg-slate-100 px-2 py-0.5">{property.furnishing}</span>
            <span className="rounded-md bg-slate-100 px-2 py-0.5">{property.carpetAreaSqFt} sq.ft</span>
            <span className="rounded-md bg-slate-100 px-2 py-0.5">Floor {property.floor}</span>
            {property.parking && <span className="rounded-md bg-slate-100 px-2 py-0.5">Parking</span>}
          </div>
          <p className="mt-2 text-[10px] text-slate-400">
            Deposit {formatINR(property.deposit)} · Available {new Date(property.availableFrom).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
          </p>
        </div>
      </GlassCard>
    </Link>
  )
}
