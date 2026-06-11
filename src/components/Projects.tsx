import { Users, Calculator, Package, Droplets, Home, Sun, Building2 } from 'lucide-react'

const projects = [
  {
    icon: Sun,
    title: 'Solar for Homes',
    category: 'Renewable Energy',
    desc: 'End-to-end residential solar installation with rooftop panels, battery storage, and net metering — helping homeowners achieve energy independence and cut electricity bills by up to 80%.',
    gradient: 'from-yellow-400 to-orange-500',
    tags: ['Rooftop Solar', 'Battery Storage', 'Net Metering'],
  },
  {
    icon: Building2,
    title: 'Solar for Medium Enterprises',
    category: 'Renewable Energy',
    desc: 'ROI-focused commercial solar solutions for SMEs — from site assessment and system design to installation, grid integration, and real-time performance monitoring dashboards.',
    gradient: 'from-orange-400 to-red-500',
    tags: ['Commercial Solar', 'Grid Integration', 'Performance Monitoring'],
  },
  {
    icon: Droplets,
    title: 'Smart Irrigation',
    category: 'Environmental IoT',
    desc: 'IoT-powered automated irrigation using soil moisture sensors, weather data, and AI scheduling — reducing agricultural water consumption by up to 60% without compromising yield.',
    gradient: 'from-cyan-400 to-teal-600',
    tags: ['Soil Sensors', 'AI Scheduling', 'Water Saving'],
  },
  {
    icon: Home,
    title: 'Smart Home Projects',
    category: 'Home Automation',
    desc: 'Integrated smart home systems with automated lighting, climate control, security, and energy monitoring — delivering comfort, safety, and significant energy savings through a single app.',
    gradient: 'from-violet-500 to-purple-700',
    tags: ['Automation', 'Energy Monitoring', 'Security'],
  },
  {
    icon: Users,
    title: 'HRMS',
    category: 'Software Solutions',
    desc: 'A comprehensive Human Resource Management System covering employee onboarding, leave management, performance reviews, and real-time workforce analytics — all in one platform.',
    gradient: 'from-blue-500 to-indigo-600',
    tags: ['Employee Management', 'Leave Tracking', 'Analytics'],
  },
  {
    icon: Calculator,
    title: 'Payroll Maintenance',
    category: 'Software Solutions',
    desc: 'Automated payroll processing with attendance integration, statutory compliance (PF, ESI, TDS), digital salary slips, and one-click bank transfer — error-free and on time, every time.',
    gradient: 'from-emerald-500 to-eco-700',
    tags: ['Payroll Automation', 'Tax Compliance', 'Salary Slips'],
  },
  {
    icon: Package,
    title: 'Inventory Management',
    category: 'Software Solutions',
    desc: 'Real-time stock tracking with smart reorder alerts, multi-location warehouse management, supplier integration, and demand forecasting to eliminate overstocking and shortages.',
    gradient: 'from-pink-500 to-rose-600',
    tags: ['Stock Tracking', 'Demand Forecasting', 'Supplier Management'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section-pad bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-eco-600 font-semibold text-sm uppercase tracking-widest mb-3">
            What We Build
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-4">
            Our Projects & Solutions
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            From smart energy systems to intelligent software — we design and deliver solutions
            that make businesses greener and more efficient.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(p => (
            <div
              key={p.title}
              className="rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 group overflow-hidden"
            >
              {/* Colour strip */}
              <div className={`h-2 bg-gradient-to-r ${p.gradient}`} />

              <div className="p-6">
                {/* Icon + category */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${p.gradient} shadow`}>
                    <p.icon size={18} className="text-white" />
                  </div>
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    {p.category}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-gray-900 mb-2 group-hover:text-eco-700 transition-colors">
                  {p.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{p.desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map(t => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-500 text-xs font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
