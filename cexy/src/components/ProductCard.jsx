export default function ProductCard({ product, onSelect }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-neutral-100 transition hover:shadow-lg hover:ring-cexy-200">
      <div className="relative aspect-[3/4] overflow-hidden bg-neutral-50">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute left-3 top-3 rounded-full bg-cexy-600 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
          {product.tag}
        </span>
        <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/60 to-transparent p-4 transition duration-300 group-hover:translate-y-0">
          <p className="text-sm text-white/90">{product.description}</p>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-semibold text-neutral-900">{product.name}</h3>
            <p className="mt-0.5 text-xs font-medium text-neutral-400">{product.color}</p>
          </div>
          <p className="font-display text-xl text-cexy-600">₹{product.price}</p>
        </div>

        <button
          type="button"
          onClick={() => onSelect(product)}
          className="mt-4 w-full rounded-xl bg-neutral-900 py-2.5 text-sm font-semibold text-white transition hover:bg-cexy-600"
        >
          View Details
        </button>
      </div>
    </article>
  )
}
