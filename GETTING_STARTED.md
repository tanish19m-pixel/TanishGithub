# Top 1% — Your Rental Website is Ready

Hi! You don't need to be technical to use this. Here's everything in plain English.

## Your live website

Once deployed, your site will be at:

**https://tanish19m-pixel.github.io/TanishGithub/**

Share this link with tenants, agents, and on WhatsApp.

## What tenants can do

- Search rentals in Taloja (building name, sector, landmark)
- Browse Affordable, Mid-Range, and Luxury collections
- View property details with location scores and nearby amenities
- Save favorites and compare properties
- Contact you via Call or WhatsApp

## What you should update (5 minutes)

Open `top1-percent/frontend/src/lib/brand.ts` and change:

- **Phone number** — your real mobile number
- **WhatsApp number** — same number (with country code, no +)
- **Email** — your business email
- **Office address** — your shop/office location

## How to go live (automatic)

1. Merge the pull request on GitHub (click **Merge** on the PR)
2. GitHub Actions will automatically build and publish your site
3. Wait 2–3 minutes, then open the live URL above

No Vercel, no server setup, no coding required.

## Run locally on your computer (optional)

```bash
cd top1-percent
npm install --prefix frontend
npm run dev
```

Open http://localhost:3000

## Need help?

The full technical docs are in `top1-percent/README.md`. For day-to-day use, you only need to update `brand.ts` and merge the PR.
