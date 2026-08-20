import { Router } from 'express'

const router = Router()

const SAMPLE_PROPERTIES = [
  { id: 'sai-riverdale-1bhk', buildingName: 'Sai Riverdale', sector: 'Sector 37', rent: 12000, bhk: '1 BHK' },
  { id: 'paradise-sai-world-2bhk', buildingName: 'Paradise Sai World', sector: 'Sector 35', rent: 22000, bhk: '2 BHK' },
  { id: 'arihant-anaika-1bhk', buildingName: 'Arihant Anaika', sector: 'Sector 36', rent: 11500, bhk: '1 BHK' },
  { id: 'cidco-housing-1bhk', buildingName: 'CIDCO Housing', sector: 'Sector 20', rent: 8000, bhk: '1 BHK' },
  { id: 'siddhivinayak-pratima-2bhk', buildingName: 'Siddhivinayak Pratima', sector: 'Sector 34', rent: 18000, bhk: '2 BHK' },
  { id: 'paradise-sai-riverdale-2bhk', buildingName: 'Paradise Sai Riverdale', sector: 'Sector 37', rent: 17500, bhk: '2 BHK' },
  { id: 'gami-amar-harmony-3bhk', buildingName: 'Gami Amar Harmony', sector: 'Sector 26', rent: 25000, bhk: '3 BHK' },
]

router.get('/', (req, res) => {
  const { q, bhk, locality, budgetTier } = req.query
  let results = [...SAMPLE_PROPERTIES]

  if (q && typeof q === 'string') {
    const query = q.toLowerCase()
    results = results.filter(
      (p) =>
        p.buildingName.toLowerCase().includes(query) ||
        p.sector.toLowerCase().includes(query)
    )
  }
  if (bhk) results = results.filter((p) => p.bhk === bhk)
  if (locality) results = results.filter((p) => p.sector.includes(String(locality)))

  res.json({ data: results, total: results.length })
})

router.get('/:id', (req, res) => {
  const property = SAMPLE_PROPERTIES.find((p) => p.id === req.params.id)
  if (!property) return res.status(404).json({ error: 'Property not found' })
  res.json({ data: property })
})

export { router as propertiesRouter }
