import { TopAdCarousel } from '@/components/home/TopAdCarousel'
import { HeroSection } from '@/components/home/HeroSection'
import { InfrastructureProjects } from '@/components/home/InfrastructureProjects'
import { RoadConnectivitySection } from '@/components/home/RoadConnectivitySection'
import { BrandsCarousel } from '@/components/home/BrandsCarousel'
import { BudgetCollections } from '@/components/home/BudgetCollections'
import { FeaturedListings } from '@/components/home/FeaturedListings'
import { HighlightsCarousel } from '@/components/home/HighlightsCarousel'
import { TalojaUpdates } from '@/components/home/TalojaUpdates'

export default function HomePage() {
  return (
    <>
      <TopAdCarousel />
      <HeroSection />
      <InfrastructureProjects />
      <RoadConnectivitySection />
      <BrandsCarousel />
      <BudgetCollections />
      <FeaturedListings />
      <HighlightsCarousel />
      <TalojaUpdates />
    </>
  )
}
