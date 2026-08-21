import { useState } from 'react'
import { products } from '../data/products'
import ProductCard from './ProductCard'

export default function Collection({ onSelectProduct }) {
  const [filter, setFilter] = useState('All')
  const colors = ['All', 'White', 'Red', 'Black']

  const filtered =
    filter === 'All' ? products : products.filter((p) => p.color === filter)

  return (
    <section id="collection" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-cexy-600">Our Collection</p>
          <h2 className="mt-2 font-display text-5xl text-neutral-900 sm:text-6xl">
            THE TEES
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-neutral-500">
            Every CEXY tee is crafted with premium cotton and designed to make a statement.
            Pick your vibe.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {colors.map((color) => (
            <button
              key={color}
              type="button"
              onClick={() => setFilter(color)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                filter === color
                  ? 'bg-cexy-600 text-white'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-cexy-50 hover:text-cexy-600'
              }`}
            >
              {color}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-12 text-center text-neutral-400">No tees found for this filter.</p>
        )}
      </div>
    </section>
  )
}
