const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

export const TALOJA_CENTER = { lat: 19.0728, lng: 73.0982 }

export function isMapsConfigured(): boolean {
  return Boolean(GOOGLE_MAPS_API_KEY && GOOGLE_MAPS_API_KEY !== 'your_google_maps_api_key')
}

export function getDirectionsUrl(lat: number, lng: number): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`
}

export function getStreetViewUrl(lat: number, lng: number): string {
  return `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${lat},${lng}`
}

export async function geocodeAddress(address: string): Promise<{ lat: number; lng: number } | null> {
  if (!isMapsConfigured()) return null
  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address + ', Taloja, Navi Mumbai')}&key=${GOOGLE_MAPS_API_KEY}`
    )
    const data = await res.json()
    if (data.results?.[0]?.geometry?.location) {
      return data.results[0].geometry.location
    }
  } catch {
    return null
  }
  return null
}

export async function fetchNearbyPlaces(
  lat: number,
  lng: number,
  type: string,
  radius = 3000
): Promise<Array<{ name: string; lat: number; lng: number }>> {
  if (!isMapsConfigured()) return []
  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${radius}&type=${type}&key=${GOOGLE_MAPS_API_KEY}`
    )
    const data = await res.json()
    return (data.results ?? []).slice(0, 3).map((r: { name: string; geometry: { location: { lat: number; lng: number } } }) => ({
      name: r.name,
      lat: r.geometry.location.lat,
      lng: r.geometry.location.lng,
    }))
  } catch {
    return []
  }
}
