export type Locality = 'Taloja Phase 1' | 'Taloja Phase 2' | 'MIDC Taloja' | 'Ghotgaon'

export type FurnishingStatus = 'Furnished' | 'Semi Furnished' | 'Unfurnished'

export type BudgetTier = 'affordable' | 'mid-range' | 'luxury'

export type UserRole = 'tenant' | 'agent' | 'owner' | 'admin'

export type ListingStatus = 'draft' | 'pending_payment' | 'pending_verification' | 'live' | 'expired'

export interface NearbyPlace {
  name: string
  distanceKm: number
  travelTimeMin: number
  type: string
}

export interface PropertyScore {
  total: number
  label: string
  breakdown: {
    location: number
    metroConnectivity: number
    schoolAccessibility: number
    hospitalAccessibility: number
    marketConvenience: number
    publicTransport: number
    buildingQuality: number
    safetyNeighborhood: number
  }
  pros: string[]
  cons: string[]
  idealFor: string[]
}

export interface Property {
  id: string
  buildingName: string
  sector: string
  locality: Locality
  landmark?: string
  bhk: string
  rent: number
  deposit: number
  carpetAreaSqFt: number
  floor: string
  totalFloors: number
  furnishing: FurnishingStatus
  parking: boolean
  petFriendly: boolean
  bachelorFriendly: boolean
  familyPreferred: boolean
  nearMetro: boolean
  availableFrom: string
  images: string[]
  description: string
  verified: boolean
  agentName: string
  agentVerified: boolean
  budgetTier: BudgetTier
  lat: number
  lng: number
  proximity: NearbyPlace[]
  score: PropertyScore
  status: ListingStatus
  expiresAt?: string
}

export interface BudgetCollection {
  slug: string
  title: string
  subtitle: string
  minRent: number
  maxRent: number | null
  suitableFor: string[]
  coverImage: string
  popularSectors: string[]
}

export interface HighlightCard {
  id: string
  title: string
  description: string
  icon: string
  readMoreUrl?: string
}

export interface TalojaUpdate {
  id: string
  headline: string
  summary: string
  source: string
  officialUrl: string
  publishedAt: string
}

export interface AdPlacement {
  id: string
  title: string
  subtitle: string
  cta: string
  category: string
  image?: string
}
