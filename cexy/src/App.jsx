import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Collection from './components/Collection'
import About from './components/About'
import Features from './components/Features'
import Contact from './components/Contact'
import Footer from './components/Footer'

function ProductModal({ product, onClose }) {
  if (!product) return null

  const sizes = ['S', 'M', 'L', 'XL', 'XXL']

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-600 shadow"
          aria-label="Close"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <img
          src={product.image}
          alt={product.name}
          className="h-64 w-full object-cover sm:h-80"
        />

        <div className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <span className="rounded-full bg-cexy-100 px-3 py-1 text-xs font-bold uppercase text-cexy-600">
                {product.tag}
              </span>
              <h3 className="mt-2 text-2xl font-bold text-neutral-900">{product.name}</h3>
              <p className="text-sm text-neutral-500">{product.color} · 180 GSM Cotton</p>
            </div>
            <p className="font-display text-3xl text-cexy-600">₹{product.price}</p>
          </div>

          <p className="mt-4 text-neutral-600">{product.description}</p>

          <div className="mt-6">
            <p className="text-xs font-bold uppercase tracking-wider text-neutral-500">Select Size</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 text-sm font-semibold transition hover:border-cexy-600 hover:bg-cexy-50 hover:text-cexy-600"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="mt-6 w-full rounded-xl bg-cexy-600 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-cexy-700"
          >
            Add to Cart — ₹{product.price}
          </button>
        </div>
      </div>
    </div>
  )
}

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [modalProduct, setModalProduct] = useState(null)

  const handleSelectProduct = (product) => {
    setModalProduct(product)
  }

  const handleInquire = (product) => {
    setSelectedProduct(product)
    setModalProduct(null)
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Collection onSelectProduct={handleSelectProduct} />
        <About />
        <Features />
        <Contact selectedProduct={selectedProduct} />
      </main>
      <Footer />

      <ProductModal
        product={modalProduct}
        onClose={() => setModalProduct(null)}
      />
    </div>
  )
}

export default App
