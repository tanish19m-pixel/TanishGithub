export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-cexy-600 pt-20">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 py-16 sm:px-6 lg:flex-row lg:py-24">
        <div className="flex-1 text-center lg:text-left">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
            New Collection 2026
          </p>

          <h1 className="font-display text-6xl leading-none text-white sm:text-7xl lg:text-8xl">
            WEAR YOUR
            <br />
            <span className="text-white/80">ATTITUDE</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/80 lg:mx-0 mx-auto">
            CEXY is a premium t-shirt brand built for those who dare to stand out.
            Bold designs. Premium cotton. Unmatched comfort.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="#collection"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-cexy-600 transition hover:bg-cexy-50"
            >
              Explore Collection
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-8 py-3.5 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              Our Story
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/20 pt-8">
            {[
              { value: '50+', label: 'Designs' },
              { value: '10K+', label: 'Happy Customers' },
              { value: '4.9★', label: 'Rating' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl text-white">{stat.value}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex flex-1 items-center justify-center">
          <div className="animate-float relative">
            <div className="absolute -inset-4 rounded-full bg-white/10 blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&q=80"
              alt="CEXY premium t-shirt"
              className="relative h-80 w-80 rounded-3xl object-cover shadow-2xl ring-4 ring-white/20 sm:h-96 sm:w-96"
            />
            <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white px-5 py-3 shadow-xl">
              <p className="font-display text-2xl text-cexy-600">FROM ₹799</p>
              <p className="text-xs font-medium text-neutral-500">Premium Quality</p>
            </div>
            <div className="absolute -right-4 -top-4 rounded-2xl bg-cexy-800 px-4 py-2 shadow-xl">
              <p className="text-xs font-bold uppercase tracking-wider text-white">100% Cotton</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60V30C240 60 480 0 720 30C960 60 1200 0 1440 30V60H0Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
