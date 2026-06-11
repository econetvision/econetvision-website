import { Sun, Recycle, Wifi, BarChart3, Droplets } from 'lucide-react'

const services = [
  {
    icon: Sun,
    title: 'Renewable Energy',
    desc: 'Solar, wind, and hybrid energy systems designed and installed for homes, industries, and commercial campuses.',
    color: 'from-yellow-400 to-orange-400',
  },
  {
    icon: Recycle,
    title: 'Smart Waste Management',
    desc: 'IoT-powered waste collection, sorting, and recycling systems that reduce landfill dependency by up to 70%.',
    color: 'from-teal-400 to-emerald-600',
  },
  {
    icon: Wifi,
    title: 'Environmental IoT',
    desc: 'Real-time sensor networks that monitor air quality, water levels, soil health, and energy consumption.',
    color: 'from-blue-400 to-blue-600',
  },
  {
    icon: BarChart3,
    title: 'Carbon Solutions',
    desc: 'Comprehensive carbon audits, offset programs, and net-zero roadmaps tailored to your organisation.',
    color: 'from-violet-400 to-purple-600',
  },
  {
    icon: Droplets,
    title: 'Water Conservation',
    desc: 'Smart irrigation, rainwater harvesting, and water recycling systems to reduce consumption by up to 50%.',
    color: 'from-sky-400 to-cyan-600',
  },
]

export default function Services() {
  return (
    <section id="services" className="section-pad bg-eco-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-eco-600 font-semibold text-sm uppercase tracking-widest mb-3">
            What We Do
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-4">
            Our Eco-Smart Services
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            From energy generation to environmental monitoring — we offer a complete
            suite of sustainable technology services.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(s => (
            <div
              key={s.title}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1 group"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${s.color} mb-4 shadow`}>
                <s.icon size={22} className="text-white" />
              </div>
              <h3 className="font-display font-semibold text-lg text-gray-900 mb-2 group-hover:text-eco-700 transition-colors">
                {s.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
