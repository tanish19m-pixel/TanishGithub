export interface TopAdSlide {
  id: string
  title: string
  subtitle: string
  cta: string
  category: string
  image: string
  url: string
  bgGradient?: string
}

export interface InfrastructureProject {
  id: string
  title: string
  description: string
  status: 'Upcoming' | 'Under Construction' | 'Planned'
  expectedCompletion?: string
  impact: string
  newsUrl: string
  newsSource: string
  image: string
}

export interface RoadConnectivity {
  id: string
  title: string
  route: string
  description: string
  benefit: string
  newsUrl: string
  newsSource: string
  image: string
}

export interface BrandPartner {
  id: string
  name: string
  category: string
  description: string
  logoText: string
  color: string
  url?: string
}
