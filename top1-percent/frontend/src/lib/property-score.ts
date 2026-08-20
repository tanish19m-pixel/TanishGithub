import type { NearbyPlace, PropertyScore } from '@/types'

interface ScoreInput {
  locality: string
  sector: string
  furnishing: string
  parking: boolean
  proximity: NearbyPlace[]
  buildingName: string
}

function findProximity(proximity: NearbyPlace[], ...types: string[]): NearbyPlace | undefined {
  return proximity.find((p) => types.some((t) => p.type.toLowerCase().includes(t.toLowerCase())))
}

export function calculatePropertyScore(input: ScoreInput): PropertyScore {
  const metro = findProximity(input.proximity, 'metro')
  const school = findProximity(input.proximity, 'school')
  const college = findProximity(input.proximity, 'college')
  const hospital = findProximity(input.proximity, 'hospital')
  const grocery = findProximity(input.proximity, 'grocery', 'dmart')
  const bus = findProximity(input.proximity, 'bus')
  const atm = findProximity(input.proximity, 'atm')

  const location = input.sector.includes('37') || input.sector.includes('26') ? 22 : 18
  const metroConnectivity = metro
    ? metro.distanceKm <= 1 ? 20 : metro.distanceKm <= 2 ? 16 : metro.distanceKm <= 4 ? 12 : 8
    : 5
  const schoolAccessibility = school
    ? school.distanceKm <= 1 ? 10 : school.distanceKm <= 2 ? 8 : 5
    : 4
  const hospitalAccessibility = hospital
    ? hospital.distanceKm <= 2 ? 10 : hospital.distanceKm <= 4 ? 7 : 4
    : 4
  const marketConvenience = grocery
    ? grocery.distanceKm <= 0.5 ? 10 : grocery.distanceKm <= 1.5 ? 8 : 5
    : 4
  const publicTransport = bus
    ? bus.distanceKm <= 0.3 ? 10 : bus.distanceKm <= 0.8 ? 8 : 5
    : 4
  const buildingQuality =
    input.buildingName.toLowerCase().includes('paradise') ||
    input.buildingName.toLowerCase().includes('gami') ||
    input.buildingName.toLowerCase().includes('arihant')
      ? 9
      : input.buildingName.toLowerCase().includes('cidco')
        ? 7
        : 8
  const safetyNeighborhood = input.locality.includes('Phase') ? 5 : 4

  const breakdown = {
    location,
    metroConnectivity,
    schoolAccessibility,
    hospitalAccessibility,
    marketConvenience,
    publicTransport,
    buildingQuality,
    safetyNeighborhood,
  }

  const total = Object.values(breakdown).reduce((a, b) => a + b, 0)

  const pros: string[] = []
  const cons: string[] = []
  const idealFor: string[] = []

  if (metro && metro.distanceKm <= 2) pros.push(`Metro station ${metro.name} within ${metro.distanceKm} km`)
  else cons.push('Metro connectivity is moderate — plan for auto/bus commute')

  if (school) pros.push(`Schools nearby (${school.name}, ${school.distanceKm} km)`)
  if (college) pros.push(`College access: ${college.name}`)
  if (hospital) pros.push(`Hospital ${hospital.distanceKm} km away`)
  if (grocery) pros.push(`Daily needs: ${grocery.name} at ${grocery.distanceKm} km`)
  if (input.parking) pros.push('Dedicated parking available')
  else cons.push('Limited parking — confirm with owner')

  if (input.furnishing === 'Furnished') idealFor.push('Professionals relocating to Taloja')
  if (input.furnishing === 'Semi Furnished') idealFor.push('Small families and working couples')
  if (input.furnishing === 'Unfurnished') idealFor.push('Long-term tenants who prefer custom interiors')

  if (total >= 85) idealFor.push('Tenants prioritizing connectivity and amenities')
  if (atm && atm.distanceKm <= 0.5) pros.push('ATM within walking distance')

  const label =
    total >= 90 ? 'Excellent Connectivity' :
    total >= 80 ? 'Great Location' :
    total >= 70 ? 'Good Value' :
    total >= 60 ? 'Decent Choice' : 'Budget Option'

  return { total, label, breakdown, pros, cons, idealFor }
}
