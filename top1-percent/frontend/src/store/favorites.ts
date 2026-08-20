import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface FavoritesState {
  favorites: string[]
  compareList: string[]
  recentSearches: string[]
  toggleFavorite: (id: string) => void
  addToCompare: (id: string) => void
  removeFromCompare: (id: string) => void
  addRecentSearch: (query: string) => void
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: [],
      compareList: [],
      recentSearches: [],
      toggleFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.includes(id)
            ? state.favorites.filter((f) => f !== id)
            : [...state.favorites, id],
        })),
      addToCompare: (id) => {
        const current = get().compareList
        if (current.includes(id) || current.length >= 3) return
        set({ compareList: [...current, id] })
      },
      removeFromCompare: (id) =>
        set((state) => ({ compareList: state.compareList.filter((c) => c !== id) })),
      addRecentSearch: (query) => {
        if (!query.trim()) return
        set((state) => ({
          recentSearches: [query, ...state.recentSearches.filter((s) => s !== query)].slice(0, 8),
        }))
      },
    }),
    { name: 'top1-favorites' }
  )
)
