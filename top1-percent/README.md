# Top 1% — Taloja's Smart Rental Marketplace

A premium, glassmorphism-styled rental marketplace exclusively for Taloja, Navi Mumbai.

**Tagline:** Top 1% — Taloja's Smart Rental Marketplace

## Features

- Frosted glass UI with smooth animations (Framer Motion)
- Budget collections (Affordable, Mid-Range, Luxury)
- Smart Location Intelligence with Google Maps integration
- Top 1% Property Score (0–100) with pros/cons
- Verified listings and agents
- Paid listing workflow (₹499 / 90 days)
- Agent, Tenant, and Admin dashboards
- PWA-ready, SEO optimized, mobile-first

## Quick Start

### Frontend

```bash
cd frontend
cp .env.example .env.local
npm install
npm run dev
```

Open http://localhost:3000

### Backend

```bash
cd backend
cp .env.example .env
npm install
npx prisma generate
npm run dev
```

API runs on http://localhost:4000

## Sample Listings

| Building | BHK | Rent |
|----------|-----|------|
| Sai Riverdale | 1 BHK | ₹12,000 |
| Paradise Sai World | 2 BHK | ₹22,000 |
| Arihant Anaika | 1 BHK | ₹11,500 |
| CIDCO Housing | 1 BHK | ₹8,000 |
| Siddhivinayak Pratima | 2 BHK | ₹18,000 |
| Paradise Sai Riverdale | 2 BHK | ₹17,500 |
| Gami Amar Harmony | 3 BHK | ₹25,000 |

## Tech Stack

- **Frontend:** Next.js 16, TypeScript, Tailwind CSS v4, Framer Motion
- **Backend:** Node.js, Express.js, Prisma, PostgreSQL
- **Maps:** Google Maps, Places, Geocoding, Distance Matrix APIs
- **Payments:** Razorpay
- **Auth:** Google Login, Mobile OTP, Email
- **Storage:** Cloudinary

## Documentation

- [Architecture](./docs/ARCHITECTURE.md)
- [API Reference](./docs/API.md)

## Deployment

- Frontend → Vercel (`cd frontend && vercel`)
- Backend → Railway/Render (`cd backend`)
- Set environment variables from `.env.example` files

## Google Maps Setup

1. Create a project in [Google Cloud Console](https://console.cloud.google.com/)
2. Enable: Maps JavaScript API, Places API, Geocoding API, Distance Matrix API
3. Add key to `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` (frontend) and `GOOGLE_MAPS_API_KEY` (backend)

Without an API key, the app uses demo proximity data and static map fallbacks.
