import { HeroSection } from '@/components/home/HeroSection'
import { BudgetCollections } from '@/components/home/BudgetCollections'
import { FeaturedListings } from '@/components/home/FeaturedListings'
import { HighlightsCarousel } from '@/components/home/HighlightsCarousel'
import { TalojaUpdates } from '@/components/home/TalojaUpdates'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BudgetCollections />
      <FeaturedListings />
      <HighlightsCarousel />
      <TalojaUpdates />
    </>
  )
}
