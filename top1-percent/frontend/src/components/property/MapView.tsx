'use client'

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import { isMapsConfigured, TALOJA_CENTER, getDirectionsUrl, getStreetViewUrl } from '@/lib/maps'
import { GlassCard } from '@/components/ui/GlassCard'
import { Button } from '@/components/ui/Button'
import { Navigation, Eye } from 'lucide-react'

interface MapViewProps {
  lat: number
  lng: number
  buildingName: string
}

const mapContainerStyle = { width: '100%', height: '320px', borderRadius: '16px' }

export function MapView({ lat, lng, buildingName }: MapViewProps) {
  if (!isMapsConfigured()) {
    return (
      <GlassCard className="overflow-hidden p-6">
        <div
          className="flex h-80 flex-col items-center justify-center rounded-xl bg-gradient-to-br from-brand-50 to-indigo-50"
          style={{ backgroundImage: 'url(https://maps.googleapis.com/maps/api/staticmap?center=19.075,73.1&zoom=14&size=600x400&maptype=roadmap&key=)' }}
        >
          <p className="text-sm font-semibold text-slate-700">Interactive Map</p>
          <p className="mt-2 max-w-xs text-center text-xs text-slate-500">
            Set <code className="rounded bg-white/60 px-1">NEXT_PUBLIC_GOOGLE_MAPS_API_KEY</code> to enable
            Google Maps, Places, Distance Matrix &amp; Street View.
          </p>
          <p className="mt-4 text-xs text-slate-400">
            {buildingName} · {lat.toFixed(4)}, {lng.toFixed(4)}
          </p>
          <div className="mt-4 flex gap-2">
            <a href={getDirectionsUrl(lat, lng)} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm">
                <Navigation className="h-4 w-4" /> Directions
              </Button>
            </a>
            <a href={getStreetViewUrl(lat, lng)} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="sm">
                <Eye className="h-4 w-4" /> Street View
              </Button>
            </a>
          </div>
        </div>
      </GlassCard>
    )
  }

  return (
    <GlassCard className="overflow-hidden p-2">
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={{ lat, lng }}
          zoom={15}
          options={{ disableDefaultUI: false, zoomControl: true }}
        >
          <Marker position={{ lat, lng }} title={buildingName} />
        </GoogleMap>
      </LoadScript>
      <div className="flex gap-2 p-3">
        <a href={getDirectionsUrl(lat, lng)} target="_blank" rel="noopener noreferrer" className="flex-1">
          <Button variant="outline" size="sm" className="w-full">
            <Navigation className="h-4 w-4" /> Get Directions
          </Button>
        </a>
        <a href={getStreetViewUrl(lat, lng)} target="_blank" rel="noopener noreferrer">
          <Button variant="ghost" size="sm">
            <Eye className="h-4 w-4" /> Street View
          </Button>
        </a>
      </div>
    </GlassCard>
  )
}
