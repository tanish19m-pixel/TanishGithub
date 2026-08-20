import { calculatePropertyScore } from '@/lib/property-score'
import type { NearbyPlace, Property } from '@/types'

function makeProximity(items: Array<[string, string, number, number]>): NearbyPlace[] {
  return items.map(([name, type, distanceKm, travelTimeMin]) => ({
    name,
    type,
    distanceKm,
    travelTimeMin,
  }))
}

const baseProximity = makeProximity([
  ['Taloja Metro Station', 'metro', 2.1, 8],
  ['Taloja Bus Stop', 'bus', 0.2, 3],
  ['Taloja Auto Stand', 'auto', 0.15, 2],
  ['Ryan International School', 'school', 1.2, 5],
  ['Bharati Vidyapeeth College', 'college', 3.5, 12],
  ['MGM Hospital Taloja', 'hospital', 2.8, 10],
  ['Apollo Pharmacy', 'medical', 0.4, 2],
  ['Dmart Taloja', 'dmart', 1.5, 6],
  ['Local Grocery Mart', 'grocery', 0.3, 2],
  ['HDFC ATM', 'atm', 0.25, 2],
  ['Indian Oil Petrol Pump', 'petrol', 1.0, 4],
  ['Taloja Food Court', 'restaurant', 0.5, 3],
  ['FitLife Gym', 'gym', 0.8, 4],
  ['Taloja Garden Park', 'park', 0.6, 3],
  ['Panvel Railway Station', 'railway', 8.5, 25],
])

function buildProperty(
  partial: Omit<Property, 'score' | 'proximity'> & { proximity?: NearbyPlace[] }
): Property {
  const proximity = partial.proximity ?? baseProximity
  const { proximity: _, ...rest } = partial
  const score = calculatePropertyScore({
    locality: rest.locality,
    sector: rest.sector,
    furnishing: rest.furnishing,
    parking: rest.parking,
    proximity,
    buildingName: rest.buildingName,
  })
  return { ...rest, proximity, score }
}

export const properties: Property[] = [
  buildProperty({
    id: 'sai-riverdale-1bhk',
    buildingName: 'Sai Riverdale',
    sector: 'Sector 37',
    locality: 'Taloja Phase 1',
    landmark: 'Near Taloja Metro',
    bhk: '1 BHK',
    rent: 12000,
    deposit: 36000,
    carpetAreaSqFt: 520,
    floor: '5th',
    totalFloors: 14,
    furnishing: 'Semi Furnished',
    parking: true,
    petFriendly: false,
    bachelorFriendly: true,
    familyPreferred: true,
    nearMetro: true,
    availableFrom: '2026-09-01',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
    ],
    description: 'Bright 1 BHK in Sai Riverdale with modular kitchen, balcony, and society amenities including lift and 24/7 security.',
    verified: true,
    agentName: 'Rahul Patil',
    agentVerified: true,
    budgetTier: 'affordable',
    lat: 19.0752,
    lng: 73.1015,
    status: 'live',
    expiresAt: '2026-11-20',
    proximity: makeProximity([
      ['Taloja Metro Station', 'metro', 1.8, 7],
      ['Sector 37 Bus Stop', 'bus', 0.15, 2],
      ['Taloja Auto Stand', 'auto', 0.1, 1],
      ['Podar International School', 'school', 0.9, 4],
      ['Bharati Vidyapeeth College', 'college', 3.2, 11],
      ['MGM Hospital', 'hospital', 2.5, 9],
      ['MedPlus Pharmacy', 'medical', 0.3, 2],
      ['Dmart Taloja', 'dmart', 1.2, 5],
      ['Daily Needs Store', 'grocery', 0.2, 2],
      ['SBI ATM', 'atm', 0.2, 2],
      ['HP Petrol Pump', 'petrol', 0.8, 3],
      ['Cafe Taloja', 'restaurant', 0.4, 2],
      ['Taloja Fitness Hub', 'gym', 0.6, 3],
      ['Sector 37 Park', 'park', 0.3, 2],
      ['Panvel Railway Station', 'railway', 8.2, 24],
    ]),
  }),
  buildProperty({
    id: 'paradise-sai-world-2bhk',
    buildingName: 'Paradise Sai World',
    sector: 'Sector 35',
    locality: 'Taloja Phase 1',
    bhk: '2 BHK',
    rent: 22000,
    deposit: 66000,
    carpetAreaSqFt: 890,
    floor: '8th',
    totalFloors: 18,
    furnishing: 'Semi Furnished',
    parking: true,
    petFriendly: true,
    bachelorFriendly: false,
    familyPreferred: true,
    nearMetro: true,
    availableFrom: '2026-08-25',
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80',
    ],
    description: 'Spacious 2 BHK in gated Paradise Sai World with clubhouse, children play area, and covered parking.',
    verified: true,
    agentName: 'Priya Sharma',
    agentVerified: true,
    budgetTier: 'mid-range',
    lat: 19.0745,
    lng: 73.0998,
    status: 'live',
    expiresAt: '2026-10-15',
  }),
  buildProperty({
    id: 'arihant-anaika-1bhk',
    buildingName: 'Arihant Anaika',
    sector: 'Sector 36',
    locality: 'Taloja Phase 1',
    bhk: '1 BHK',
    rent: 11500,
    deposit: 34500,
    carpetAreaSqFt: 480,
    floor: '3rd',
    totalFloors: 12,
    furnishing: 'Unfurnished',
    parking: false,
    petFriendly: false,
    bachelorFriendly: true,
    familyPreferred: true,
    nearMetro: true,
    availableFrom: '2026-09-10',
    images: [
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80',
    ],
    description: 'Affordable 1 BHK in Arihant Anaika — ideal for first-time renters. Close to main road and bus connectivity.',
    verified: true,
    agentName: 'Amit Deshmukh',
    agentVerified: true,
    budgetTier: 'affordable',
    lat: 19.0738,
    lng: 73.1005,
    status: 'live',
    expiresAt: '2026-12-01',
  }),
  buildProperty({
    id: 'cidco-housing-1bhk',
    buildingName: 'CIDCO Housing',
    sector: 'Sector 20',
    locality: 'Taloja Phase 2',
    bhk: '1 BHK',
    rent: 8000,
    deposit: 24000,
    carpetAreaSqFt: 420,
    floor: '2nd',
    totalFloors: 7,
    furnishing: 'Unfurnished',
    parking: false,
    petFriendly: false,
    bachelorFriendly: true,
    familyPreferred: true,
    nearMetro: false,
    availableFrom: '2026-08-20',
    images: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80',
    ],
    description: 'Budget-friendly CIDCO allotment flat in Taloja Phase 2. Perfect for students and young professionals.',
    verified: true,
    agentName: 'Suresh Jadhav',
    agentVerified: false,
    budgetTier: 'affordable',
    lat: 19.0685,
    lng: 73.0920,
    status: 'live',
    expiresAt: '2026-09-30',
    proximity: makeProximity([
      ['Taloja Metro Station', 'metro', 3.5, 14],
      ['Phase 2 Bus Depot', 'bus', 0.1, 2],
      ['Taloja Auto Stand', 'auto', 0.2, 2],
      ['ZP School Taloja', 'school', 0.5, 3],
      ['Taloja Polytechnic', 'college', 2.0, 8],
      ['Primary Health Centre', 'hospital', 1.5, 6],
      ['Local Medical Store', 'medical', 0.2, 2],
      ['Reliance Fresh', 'grocery', 0.4, 3],
      ['Dmart Taloja', 'dmart', 2.5, 10],
      ['Bank of Baroda ATM', 'atm', 0.3, 2],
      ['Bharat Petroleum', 'petrol', 1.2, 5],
      ['Taloja Dhaba', 'restaurant', 0.3, 2],
      ['Community Park', 'park', 0.2, 2],
      ['Panvel Railway Station', 'railway', 9.0, 28],
    ]),
  }),
  buildProperty({
    id: 'siddhivinayak-pratima-2bhk',
    buildingName: 'Siddhivinayak Pratima',
    sector: 'Sector 34',
    locality: 'Taloja Phase 1',
    bhk: '2 BHK',
    rent: 18000,
    deposit: 54000,
    carpetAreaSqFt: 780,
    floor: '6th',
    totalFloors: 15,
    furnishing: 'Semi Furnished',
    parking: true,
    petFriendly: false,
    bachelorFriendly: false,
    familyPreferred: true,
    nearMetro: true,
    availableFrom: '2026-09-05',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    ],
    description: 'Well-maintained 2 BHK in Siddhivinayak Pratima with garden view, lift, and power backup.',
    verified: true,
    agentName: 'Neha Kulkarni',
    agentVerified: true,
    budgetTier: 'mid-range',
    lat: 19.0740,
    lng: 73.0988,
    status: 'live',
    expiresAt: '2026-11-01',
  }),
  buildProperty({
    id: 'paradise-sai-riverdale-2bhk',
    buildingName: 'Paradise Sai Riverdale',
    sector: 'Sector 37',
    locality: 'Taloja Phase 1',
    bhk: '2 BHK',
    rent: 17500,
    deposit: 52500,
    carpetAreaSqFt: 750,
    floor: '10th',
    totalFloors: 16,
    furnishing: 'Semi Furnished',
    parking: true,
    petFriendly: true,
    bachelorFriendly: false,
    familyPreferred: true,
    nearMetro: true,
    availableFrom: '2026-08-28',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    ],
    description: 'Premium 2 BHK in Paradise Sai Riverdale tower with panoramic views and modern amenities.',
    verified: true,
    agentName: 'Rahul Patil',
    agentVerified: true,
    budgetTier: 'mid-range',
    lat: 19.0755,
    lng: 73.1018,
    status: 'live',
    expiresAt: '2026-10-20',
  }),
  buildProperty({
    id: 'gami-amar-harmony-3bhk',
    buildingName: 'Gami Amar Harmony',
    sector: 'Sector 26',
    locality: 'MIDC Taloja',
    bhk: '3 BHK',
    rent: 25000,
    deposit: 75000,
    carpetAreaSqFt: 1100,
    floor: '12th',
    totalFloors: 20,
    furnishing: 'Furnished',
    parking: true,
    petFriendly: true,
    bachelorFriendly: false,
    familyPreferred: true,
    nearMetro: true,
    availableFrom: '2026-09-15',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    ],
    description: 'Luxury 3 BHK in Gami Amar Harmony — fully furnished with modular kitchen, AC, and premium society facilities.',
    verified: true,
    agentName: 'Vikram Singh',
    agentVerified: true,
    budgetTier: 'luxury',
    lat: 19.0710,
    lng: 73.0950,
    status: 'live',
    expiresAt: '2026-12-15',
    proximity: makeProximity([
      ['Taloja Metro Station', 'metro', 1.2, 5],
      ['MIDC Bus Stop', 'bus', 0.1, 2],
      ['MIDC Auto Stand', 'auto', 0.08, 1],
      ['DAV Public School', 'school', 0.7, 3],
      ['ITM College', 'college', 2.5, 9],
      ['Apollo Clinic MIDC', 'hospital', 1.8, 7],
      ['Wellness Forever', 'medical', 0.2, 2],
      ['Dmart Taloja', 'dmart', 0.9, 4],
      ['Big Bazaar Express', 'grocery', 0.3, 2],
      ['ICICI ATM', 'atm', 0.15, 1],
      ['Shell Petrol Pump', 'petrol', 0.5, 2],
      ['Barbeque Nation Taloja', 'restaurant', 0.6, 3],
      ['Gold Gym MIDC', 'gym', 0.4, 2],
      ['Harmony Garden', 'park', 0.1, 1],
      ['Panvel Railway Station', 'railway', 7.5, 22],
    ]),
  }),
]

export function getPropertyById(id: string): Property | undefined {
  return properties.find((p) => p.id === id)
}

export function searchProperties(query: {
  q?: string
  budgetTier?: string
  bhk?: string
  locality?: string
  minRent?: number
  maxRent?: number
  furnished?: string
  parking?: boolean
  petFriendly?: boolean
  bachelorFriendly?: boolean
  familyPreferred?: boolean
  nearMetro?: boolean
  verifiedOnly?: boolean
  availableImmediately?: boolean
}): Property[] {
  let results = [...properties]

  if (query.q) {
    const q = query.q.toLowerCase()
    results = results.filter(
      (p) =>
        p.buildingName.toLowerCase().includes(q) ||
        p.sector.toLowerCase().includes(q) ||
        p.locality.toLowerCase().includes(q) ||
        (p.landmark?.toLowerCase().includes(q) ?? false)
    )
  }
  if (query.budgetTier) results = results.filter((p) => p.budgetTier === query.budgetTier)
  if (query.bhk) results = results.filter((p) => p.bhk === query.bhk)
  if (query.locality) results = results.filter((p) => p.locality === query.locality)
  if (query.minRent) results = results.filter((p) => p.rent >= query.minRent!)
  if (query.maxRent) results = results.filter((p) => p.rent <= query.maxRent!)
  if (query.furnished) results = results.filter((p) => p.furnishing === query.furnished)
  if (query.parking) results = results.filter((p) => p.parking)
  if (query.petFriendly) results = results.filter((p) => p.petFriendly)
  if (query.bachelorFriendly) results = results.filter((p) => p.bachelorFriendly)
  if (query.familyPreferred) results = results.filter((p) => p.familyPreferred)
  if (query.nearMetro) results = results.filter((p) => p.nearMetro)
  if (query.verifiedOnly) results = results.filter((p) => p.verified)
  if (query.availableImmediately) {
    const now = new Date()
    results = results.filter((p) => new Date(p.availableFrom) <= now)
  }

  return results
}

export function getCollectionStats(tier: string) {
  const filtered = properties.filter((p) => p.budgetTier === tier)
  const avgRent = filtered.length
    ? Math.round(filtered.reduce((s, p) => s + p.rent, 0) / filtered.length)
    : 0
  const sectors = [...new Set(filtered.map((p) => p.sector))]
  return { count: filtered.length, avgRent, sectors }
}
