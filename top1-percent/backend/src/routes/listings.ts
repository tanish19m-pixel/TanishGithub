import { Router } from 'express'

const router = Router()

router.post('/', (req, res) => {
  const listing = req.body
  res.status(201).json({
    id: `listing_${Date.now()}`,
    status: 'PENDING_PAYMENT',
    message: 'Listing created. Proceed to payment.',
    data: listing,
  })
})

router.patch('/:id', (req, res) => {
  res.json({
    id: req.params.id,
    ...req.body,
    updatedAt: new Date().toISOString(),
  })
})

router.get('/agent/:agentId', (req, res) => {
  res.json({
    data: [],
    agentId: req.params.agentId,
  })
})

router.post('/:id/renew', (req, res) => {
  res.json({
    id: req.params.id,
    status: 'PENDING_PAYMENT',
    message: 'Renewal initiated. Complete payment to extend listing.',
  })
})

export { router as listingsRouter }
