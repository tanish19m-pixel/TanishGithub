export default function Footer() {
  return (
    <footer className="bg-neutral-900 py-12 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <p className="font-display text-4xl tracking-widest text-cexy-500">CEXY</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-neutral-400">
              Premium t-shirt brand for those who dare to stand out.
              Bold designs. Premium cotton. Wear your attitude.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-neutral-500">Quick Links</p>
            <ul className="mt-4 space-y-2">
              {['Collection', 'About', 'Why CEXY', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-sm text-neutral-400 transition hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-neutral-500">Follow Us</p>
            <div className="mt-4 flex gap-3">
              {['Instagram', 'Twitter', 'YouTube'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 text-neutral-400 transition hover:bg-cexy-600 hover:text-white"
                  aria-label={social}
                >
                  <span className="text-xs font-bold">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-neutral-800 pt-8 sm:flex-row">
          <p className="text-xs text-neutral-500">
            &copy; {new Date().getFullYear()} CEXY. All rights reserved.
          </p>
          <p className="text-xs text-neutral-500">
            T-Shirts Only. Always.
          </p>
        </div>
      </div>
    </footer>
  )
}
