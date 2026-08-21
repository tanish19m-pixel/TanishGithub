export default function About() {
  return (
    <section id="about" className="bg-cexy-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&q=80"
                alt="CEXY brand lifestyle"
                className="h-48 w-full rounded-2xl object-cover sm:h-64"
              />
              <img
                src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80"
                alt="CEXY t-shirt detail"
                className="mt-8 h-48 w-full rounded-2xl object-cover sm:h-64"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 rounded-2xl bg-cexy-600 px-6 py-4 shadow-xl sm:right-6">
              <p className="font-display text-4xl text-white">CEXY</p>
              <p className="text-xs font-medium uppercase tracking-widest text-white/70">Est. 2024</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-cexy-600">About Us</p>
            <h2 className="mt-2 font-display text-5xl text-neutral-900 sm:text-6xl">
              MORE THAN
              <br />
              JUST A TEE
            </h2>
            <p className="mt-6 leading-relaxed text-neutral-600">
              CEXY was born from a simple idea: t-shirts should be more than basics.
              They should be a canvas for self-expression. We specialize exclusively in
              premium t-shirts — nothing else, because we believe in doing one thing
              exceptionally well.
            </p>
            <p className="mt-4 leading-relaxed text-neutral-600">
              From our signature logo tees to limited-edition graphic drops, every piece
              is designed in-house and made with 100% combed cotton. Red and white aren&apos;t
              just our colors — they&apos;re our attitude.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6">
              {[
                { label: 'T-Shirts Only', desc: 'Focused expertise' },
                { label: 'In-House Design', desc: 'Original artwork' },
                { label: '180 GSM Cotton', desc: 'Premium weight' },
                { label: 'Made in India', desc: 'Proudly local' },
              ].map((item) => (
                <div key={item.label} className="rounded-xl bg-white p-4 shadow-sm">
                  <p className="font-semibold text-neutral-900">{item.label}</p>
                  <p className="mt-1 text-sm text-neutral-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
