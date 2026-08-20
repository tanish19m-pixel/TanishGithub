import { Router } from 'express'

const router = Router()

const LISTING_PRICE_PAISE = 49900
const LISTING_VALIDITY_DAYS = 90

router.post('/create-order', (req, res) => {
  const { listingId } = req.body
  if (!listingId) return res.status(400).json({ error: 'listingId required' })

  res.json({
    orderId: `order_${Date.now()}`,
    amount: LISTING_PRICE_PAISE,
    currency: 'INR',
    key: process.env.RAZORPAY_KEY_ID || 'rzp_test_demo',
    validityDays: LISTING_VALIDITY_DAYS,
  })
})

router.post('/verify', (req, res) => {
  const { razorpayOrderId, razorpayPaymentId, razorpaySignature } = req.body
  if (!razorpayOrderId || !razorpayPaymentId) {
    return res.status(400).json({ error: 'Payment details required' })
  }

  res.json({
    success: true,
    listingStatus: 'PENDING_VERIFICATION',
    expiresAt: new Date(Date.now() + LISTING_VALIDITY_DAYS * 86400000).toISOString(),
  })
})

router.post('/renew', (req, res) => {
  const { listingId } = req.body
  if (!listingId) return res.status(400).json({ error: 'listingId required' })

  res.json({
    orderId: `renew_${Date.now()}`,
    amount: LISTING_PRICE_PAISE,
    message: 'Renewal order created',
  })
})

export { router as paymentsRouter }
