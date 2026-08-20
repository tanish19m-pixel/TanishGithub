import type { BudgetCollection } from '@/types'

export const budgetCollections: BudgetCollection[] = [
  {
    slug: 'affordable',
    title: 'Affordable Rentals',
    subtitle: '₹5,000 – ₹15,000',
    minRent: 5000,
    maxRent: 15000,
    suitableFor: ['Students', 'Working professionals', 'Small families'],
    coverImage: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80',
    popularSectors: ['Sector 20', 'Sector 36', 'Sector 37'],
  },
  {
    slug: 'mid-range',
    title: 'Mid-Range Rentals',
    subtitle: '₹15,000 – ₹30,000',
    minRent: 15000,
    maxRent: 30000,
    suitableFor: ['Families', 'Professionals'],
    coverImage: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
    popularSectors: ['Sector 34', 'Sector 35', 'Sector 37'],
  },
  {
    slug: 'luxury',
    title: 'Luxury Rentals',
    subtitle: '₹30,000+',
    minRent: 30000,
    maxRent: null,
    suitableFor: ['Premium tenants', 'Executives', 'Large families'],
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    popularSectors: ['Sector 26', 'MIDC Taloja'],
  },
]
