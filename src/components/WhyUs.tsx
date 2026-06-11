import { Layers, Users, TrendingUp } from 'lucide-react'

const reasons = [
  {
    num: '01',
    icon: Layers,
    title: 'End-to-End Solutions',
    desc: 'From feasibility study and design through construction, deployment, and ongoing monitoring — we handle every phase under one roof.',
  },
  {
    num: '02',
    icon: TrendingUp,
    title: 'Measurable ROI',
    desc: 'Our solutions average 35% energy cost reduction within the first year. We provide transparent dashboards so you can track every unit saved.',
  },
  {
    num: '03',
    icon: Users,
    title: 'Community-Centred Approach',
    desc: 'Sustainability means people too. We engage local communities, create green jobs, and design projects that benefit ecosystems and economies alike.',
  },
]


export default function WhyUs() {
  return (
    <section id="why-us" className="section-pad bg-gradient-to-br from-navy-900 to-[#0a2a18] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-eco-400 font-semibold text-sm uppercase tracking-widest mb-3">
            Why EcoNetVision
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
            The Smarter Choice for Sustainability
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            We don't just meet green benchmarks — we redefine them.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {reasons.map(r => (
            <div
              key={r.num}
              className="flex gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="flex-shrink-0">
                <div className="flex flex-col items-center">
                  <span className="text-eco-400 font-display font-bold text-sm mb-2">{r.num}</span>
                  <div className="p-2.5 rounded-xl bg-eco-600/20 border border-eco-500/20">
                    <r.icon size={20} className="text-eco-400" />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-white text-base mb-2">{r.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
