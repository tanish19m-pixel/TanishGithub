# Top 1% — Architecture

## Overview

Top 1% is a full-stack rental marketplace exclusively for Taloja, Navi Mumbai. The architecture is designed for future expansion (sales, PG, flatmate finder, home services) without major rewrites.

```
┌─────────────────────────────────────────────────────────────┐
│                     Frontend (Next.js)                       │
│  App Router · TypeScript · Tailwind · Framer Motion · PWA   │
└─────────────────────────┬───────────────────────────────────┘
                          │ REST API
┌─────────────────────────▼───────────────────────────────────┐
│                   Backend (Express.js)                       │
│  Auth · Listings · Payments · Maps · Admin · Verification   │
└─────────────────────────┬───────────────────────────────────┘
                          │
        ┌─────────────────┼─────────────────┐
        ▼                 ▼                 ▼
   PostgreSQL         Google Maps        Razorpay
   (Prisma)           APIs              Payments
                      Cloudinary
                      (images)
```

## Service Areas

- Taloja Phase 1
- Taloja Phase 2
- MIDC Taloja
- Ghotgaon

## Core Modules

| Module | Description |
|--------|-------------|
| Search | Building, sector, landmark, society, road with auto-suggestions |
| Collections | Budget-tier curated listings (Affordable, Mid-Range, Luxury) |
| Location Intelligence | Auto-detected nearby amenities via Google Places + Distance Matrix |
| Property Score | Algorithmic 0–100 score with pros/cons/ideal-for |
| Verification | Phone, agent, address, maps, duplicate detection |
| Paid Listings | ₹499 / 90 days via Razorpay |
| Dashboards | Agent, Tenant, Admin |

## Property Score Algorithm

| Factor | Max Points |
|--------|-----------|
| Location | 25 |
| Metro Connectivity | 20 |
| School Accessibility | 10 |
| Hospital Accessibility | 10 |
| Market Convenience | 10 |
| Public Transport | 10 |
| Building Quality | 10 |
| Safety & Neighborhood | 5 |

## Listing Lifecycle

```
Submit → Pay ₹499 → Pending Verification → Live (90 days) → Expired → Renew
```

## Future Modules (Architecture Ready)

- Property Sales (`listingType: SALE`)
- Commercial Rentals (`category: COMMERCIAL`)
- PG & Hostel (`category: PG`)
- Flatmate Finder (`module: FLATMATE`)
- Home Services (`module: SERVICES`)
- Rent Agreement Generation (`module: LEGAL`)
- AI Recommendations (`module: AI`)
- Price Trend Analytics (`module: ANALYTICS`)

## Deployment

| Service | Platform |
|---------|----------|
| Frontend | Vercel |
| Backend | Railway / Render / AWS |
| Database | PostgreSQL (Railway / Supabase) |
| Images | Cloudinary |
