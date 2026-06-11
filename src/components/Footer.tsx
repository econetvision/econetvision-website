import { Leaf } from 'lucide-react'

const nav = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <a href="#home" className="flex items-center gap-2.5">
            <img src="/EcoNetVision.png" alt="EcoNetVision" className="h-10 w-auto" />
            <div>
              <div className="font-display font-bold text-base text-white">EcoNetVision</div>
              <div className="text-white/40 text-xs">Smart Solutions for a Sustainable Future</div>
            </div>
          </a>

          <nav className="flex flex-wrap justify-center gap-5">
            {nav.map(l => (
              <a key={l.href} href={l.href} className="text-white/50 text-sm hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} EcoNetVision. All rights reserved.
          </p>
          <p className="text-white/30 text-xs flex items-center gap-1">
            Made with <Leaf size={11} className="text-eco-500" /> for a greener planet
          </p>
        </div>
      </div>
    </footer>
  )
}
