import { ArrowDown, Leaf, Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-[#0a2a1a] to-[#0d3320]" />

      {/* Animated green orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-eco-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        {/* Pill badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-eco-600/20 border border-eco-500/30 text-eco-400 text-sm font-medium mb-6">
          <Leaf size={14} />
          Smart Solutions for a Sustainable Future
        </div>

        <h1 className="font-display font-extrabold text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
          Building a{' '}
          <span className="bg-gradient-to-r from-eco-400 to-emerald-300 bg-clip-text text-transparent">
            Greener Tomorrow
          </span>
          , Today
        </h1>

        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          EcoNetVision delivers cutting-edge, eco-friendly solutions that combine smart technology
          with sustainable practices — protecting our planet while powering your future.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-eco-600 hover:bg-eco-700 text-white font-semibold transition-all shadow-lg shadow-eco-900/40 hover:scale-105"
          >
            <Zap size={18} />
            Explore Solutions
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold border border-white/20 transition-all backdrop-blur-sm hover:scale-105"
          >
            Get in Touch
          </a>
        </div>

      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 transition-colors animate-bounce"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  )
}
