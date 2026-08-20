'use client'

import { Heart, GitCompare, Share2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { useFavoritesStore } from '@/store/favorites'

export function PropertyActions({ propertyId, agentName }: { propertyId: string; agentName: string }) {
  const { favorites, compareList, toggleFavorite, addToCompare } = useFavoritesStore()
  const isFavorite = favorites.includes(propertyId)
  const inCompare = compareList.includes(propertyId)

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: 'Top 1% Rental',
        url: window.location.href,
      })
    } else {
      await navigator.clipboard.writeText(window.location.href)
      alert('Link copied!')
    }
  }

  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant={isFavorite ? 'primary' : 'secondary'}
        size="sm"
        onClick={() => toggleFavorite(propertyId)}
      >
        <Heart className={`h-4 w-4 ${isFavorite ? 'fill-current' : ''}`} />
        {isFavorite ? 'Saved' : 'Save'}
      </Button>
      <Button
        variant={inCompare ? 'primary' : 'secondary'}
        size="sm"
        onClick={() => addToCompare(propertyId)}
        disabled={inCompare || compareList.length >= 3}
      >
        <GitCompare className="h-4 w-4" />
        Compare
      </Button>
      <Button variant="ghost" size="sm" onClick={handleShare}>
        <Share2 className="h-4 w-4" />
        Share
      </Button>
    </div>
  )
}
