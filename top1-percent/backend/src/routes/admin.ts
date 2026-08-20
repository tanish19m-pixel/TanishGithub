import { Router } from 'express'

const router = Router()

router.get('/verification-queue', (_req, res) => {
  res.json({
    data: [
      { id: '1', buildingName: 'New 2BHK Sector 35', agent: 'Amit Deshmukh', status: 'pending' },
      { id: '2', buildingName: '1BHK Ghotgaon', agent: 'Suresh Jadhav', status: 'pending' },
    ],
  })
})

router.post('/verify/:listingId', (req, res) => {
  const { approved, notes } = req.body
  res.json({
    listingId: req.params.listingId,
    status: approved ? 'LIVE' : 'REJECTED',
    notes,
    verifiedAt: new Date().toISOString(),
  })
})

router.get('/stats', (_req, res) => {
  res.json({
    liveListings: 7,
    pendingVerification: 2,
    verifiedAgents: 7,
    totalRevenue: 3493,
  })
})

export { router as adminRouter }
