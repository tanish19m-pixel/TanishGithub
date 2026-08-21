import { features } from '../data/products'

const icons = {
  shield: (
    <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  design: (
    <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    </svg>
  ),
  fit: (
    <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  ),
  shipping: (
    <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
}

export default function Features() {
  return (
    <section id="features" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-cexy-600">Why CEXY</p>
          <h2 className="mt-2 font-display text-5xl text-neutral-900 sm:text-6xl">
            BUILT DIFFERENT
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-neutral-500">
            We don&apos;t cut corners. Every CEXY tee goes through rigorous quality checks
            before it reaches you.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-neutral-100 bg-white p-6 transition hover:border-cexy-200 hover:shadow-lg"
            >
              <div className="inline-flex rounded-xl bg-cexy-50 p-3 text-cexy-600 transition group-hover:bg-cexy-600 group-hover:text-white">
                {icons[feature.icon]}
              </div>
              <h3 className="mt-4 font-semibold text-neutral-900">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 overflow-hidden rounded-3xl bg-cexy-600">
          <div className="flex flex-col items-center justify-between gap-6 px-8 py-10 sm:flex-row sm:px-12">
            <div>
              <p className="font-display text-4xl text-white sm:text-5xl">FREE SHIPPING</p>
              <p className="mt-2 text-white/70">On all orders above ₹999. No hidden charges.</p>
            </div>
            <a
              href="#collection"
              className="shrink-0 rounded-full bg-white px-8 py-3 text-sm font-bold uppercase tracking-wider text-cexy-600 transition hover:bg-cexy-50"
            >
              Shop Collection
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
