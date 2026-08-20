import type { NextConfig } from 'next'

const isGitHubPages = process.env.GITHUB_PAGES === 'true'
const isStaticDeploy = isGitHubPages || process.env.STATIC_EXPORT === 'true'
const basePath = isGitHubPages ? '/TanishGithub' : ''

const nextConfig: NextConfig = {
  output: isStaticDeploy ? 'export' : undefined,
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: {
    unoptimized: isGitHubPages,
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || '',
  },
}

export default nextConfig
