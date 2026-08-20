import { notFound } from 'next/navigation'
import { budgetCollections } from '@/data/collections'
import { searchProperties } from '@/data/properties'
import { PropertyCard } from '@/components/property/PropertyCard'
import { formatINR } from '@/lib/utils'

export async function generateStaticParams() {
  return budgetCollections.map((c) => ({ slug: c.slug }))
}

export default async function CollectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const collection = budgetCollections.find((c) => c.slug === slug)
  if (!collection) notFound()

  const properties = searchProperties({ budgetTier: slug })

  return (
    <div className="px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="glass-strong rounded-2xl p-8 text-center">
          <h1 className="text-3xl font-bold text-slate-900">{collection.title}</h1>
          <p className="mt-2 text-lg text-brand-600">{collection.subtitle}</p>
          <p className="mt-3 text-sm text-slate-500">
            Suitable for: {collection.suitableFor.join(' · ')}
          </p>
          <p className="mt-2 text-sm text-slate-400">
            {properties.length} properties · Popular sectors: {collection.popularSectors.join(', ')}
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>

        {properties.length === 0 && (
          <p className="mt-16 text-center text-slate-500">No properties in this collection yet.</p>
        )}
      </div>
    </div>
  )
}
