import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import { propertiesRouter } from './routes/properties.js'
import { authRouter } from './routes/auth.js'
import { paymentsRouter } from './routes/payments.js'
import { listingsRouter } from './routes/listings.js'
import { adminRouter } from './routes/admin.js'
import { mapsRouter } from './routes/maps.js'

const app = express()
const PORT = process.env.PORT || 4000

app.use(helmet())
app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:3000' }))
app.use(express.json())

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: 'top1-percent-api', version: '1.0.0' })
})

app.use('/api/properties', propertiesRouter)
app.use('/api/auth', authRouter)
app.use('/api/payments', paymentsRouter)
app.use('/api/listings', listingsRouter)
app.use('/api/admin', adminRouter)
app.use('/api/maps', mapsRouter)

app.use((_req, res) => {
  res.status(404).json({ error: 'Not found' })
})

app.listen(PORT, () => {
  console.log(`Top 1% API running on http://localhost:${PORT}`)
})
