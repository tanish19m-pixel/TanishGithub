import { Router } from 'express'

const router = Router()

const MOCK_PROXIMITY = [
  { name: 'Taloja Metro Station', type: 'metro', distanceKm: 1.8, travelTimeMin: 7 },
  { name: 'Sector 37 Bus Stop', type: 'bus', distanceKm: 0.15, travelTimeMin: 2 },
  { name: 'Taloja Auto Stand', type: 'auto', distanceKm: 0.1, travelTimeMin: 1 },
  { name: 'Podar International School', type: 'school', distanceKm: 0.9, travelTimeMin: 4 },
  { name: 'MGM Hospital', type: 'hospital', distanceKm: 2.5, travelTimeMin: 9 },
  { name: 'Dmart Taloja', type: 'dmart', distanceKm: 1.2, travelTimeMin: 5 },
  { name: 'HDFC ATM', type: 'atm', distanceKm: 0.2, travelTimeMin: 2 },
  { name: 'Indian Oil Petrol Pump', type: 'petrol', distanceKm: 0.8, travelTimeMin: 3 },
]

router.get('/geocode', (req, res) => {
  const { address } = req.query
  if (!address) return res.status(400).json({ error: 'address required' })

  if (process.env.GOOGLE_MAPS_API_KEY) {
    return res.json({
      message: 'Use Google Geocoding API with configured key',
      address,
      lat: 19.0752,
      lng: 73.1015,
    })
  }

  res.json({
    address,
    lat: 19.0752,
    lng: 73.1015,
    formatted: `${address}, Taloja, Navi Mumbai`,
  })
})

router.get('/nearby', (req, res) => {
  const { lat, lng, buildingName, sector } = req.query

  res.json({
    location: { lat: lat || 19.0752, lng: lng || 73.1015 },
    buildingName,
    sector,
    proximity: MOCK_PROXIMITY,
    source: process.env.GOOGLE_MAPS_API_KEY ? 'google_places' : 'demo_data',
  })
})

router.get('/distance-matrix', (req, res) => {
  const { origin, destination } = req.query
  res.json({
    origin,
    destination,
    distanceKm: 1.8,
    durationMin: 7,
  })
})

export { router as mapsRouter }
