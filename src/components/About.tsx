import { Globe, Lightbulb, ShieldCheck } from 'lucide-react'

const values = [
  {
    icon: Globe,
    title: 'Planet First',
    desc: 'Every decision we make prioritises long-term ecological health over short-term convenience. We measure success in carbon saved, not just revenue earned.',
    color: 'bg-eco-50 text-eco-700 border-eco-200',
  },
  {
    icon: Lightbulb,
    title: 'Smart Innovation',
    desc: 'We fuse IoT, AI, and renewable technology to create intelligent eco-systems that monitor, adapt, and optimise themselves in real time.',
    color: 'bg-blue-50 text-blue-700 border-blue-200',
  },
  {
    icon: ShieldCheck,
    title: 'Proven Impact',
    desc: 'Over a decade of certified green projects across energy, construction, waste, and water — backed by measurable outcomes and international standards.',
    color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  },
]

export default function About() {
  return (
    <section id="about" className="section-pad bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <span className="inline-block text-eco-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Who We Are
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-6 leading-tight">
              Who We Are
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              EcoNetVision is a technology-driven sustainability company that designs,
              builds, and manages eco-friendly infrastructure for businesses, governments,
              and communities across India and beyond.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              From smart solar grids and green buildings to IoT-powered environmental
              monitoring networks, our end-to-end solutions help organisations hit their
              sustainability targets without compromising on performance or profitability.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-eco-600 text-white font-semibold hover:bg-eco-700 transition-colors shadow"
            >
              Partner With Us
            </a>
          </div>

          {/* Values */}
          <div className="flex flex-col gap-5">
            {values.map(v => (
              <div
                key={v.title}
                className={`flex gap-4 p-5 rounded-2xl border ${v.color} transition-transform hover:-translate-y-0.5`}
              >
                <div className="flex-shrink-0 mt-0.5">
                  <v.icon size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-base mb-1">{v.title}</h3>
                  <p className="text-sm opacity-80 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
