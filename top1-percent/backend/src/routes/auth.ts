import { Router } from 'express'
import { z } from 'zod'

const router = Router()

const loginSchema = z.object({
  email: z.string().email().optional(),
  phone: z.string().optional(),
  otp: z.string().optional(),
  googleToken: z.string().optional(),
})

router.post('/login', (req, res) => {
  const parsed = loginSchema.safeParse(req.body)
  if (!parsed.success) return res.status(400).json({ error: parsed.error.flatten() })

  res.json({
    token: 'demo-jwt-token',
    user: {
      id: 'user-demo',
      name: 'Demo User',
      role: 'TENANT',
      email: parsed.data.email,
      phone: parsed.data.phone,
    },
  })
})

router.post('/otp/send', (req, res) => {
  const { phone } = req.body
  if (!phone) return res.status(400).json({ error: 'Phone required' })
  res.json({ message: 'OTP sent', expiresIn: 300 })
})

router.post('/otp/verify', (req, res) => {
  const { phone, otp } = req.body
  if (!phone || !otp) return res.status(400).json({ error: 'Phone and OTP required' })
  res.json({
    token: 'demo-jwt-token',
    user: { id: 'user-demo', phone, role: 'TENANT' },
  })
})

router.get('/me', (_req, res) => {
  res.json({
    user: { id: 'user-demo', name: 'Demo User', role: 'TENANT' },
  })
})

export { router as authRouter }
