import { useState } from 'react'
import { Mail, Send, CheckCircle2 } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Opens mail client with prefilled content as a simple contact mechanism
    const body = encodeURIComponent(`Name: ${form.name}\n\n${form.message}`)
    window.location.href = `mailto:info@econetvision.com?subject=${encodeURIComponent(form.subject)}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="section-pad bg-eco-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-eco-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Get in Touch
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-4">
            Start Your Green Journey
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Ready to make your business or community more sustainable? Talk to our experts today.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <a
              href="mailto:info@econetvision.com"
              className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-eco-200 transition-all group"
            >
              <div className="p-2.5 rounded-xl bg-eco-100 text-eco-700 group-hover:bg-eco-600 group-hover:text-white transition-colors">
                <Mail size={18} />
              </div>
              <div>
                <div className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-0.5">Email Us</div>
                <div className="text-gray-800 font-medium text-sm">info@econetvision.com</div>
              </div>
            </a>

            {/* Quote box */}
            <div className="mt-2 p-5 rounded-2xl bg-gradient-to-br from-eco-600 to-eco-800 text-white">
              <p className="text-sm font-medium leading-relaxed opacity-90">
                "Every eco-friendly choice today is an investment in a thriving planet for the next generation."
              </p>
              <p className="text-eco-200 text-xs mt-3 font-semibold">— EcoNetVision Team</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-10 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <CheckCircle2 size={52} className="text-eco-500 mb-4" />
                <h3 className="font-display font-bold text-xl text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-500 text-sm">Your mail client should open with a pre-filled message. We'll get back to you within 24 hours.</p>
                <button onClick={() => setSent(false)} className="mt-6 px-5 py-2 rounded-full bg-eco-600 text-white text-sm font-medium hover:bg-eco-700 transition-colors">
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">Your Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-eco-500 focus:ring-2 focus:ring-eco-500/20 text-sm transition"
                      placeholder="Ravi Kumar"
                      value={form.name}
                      onChange={set('name')}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-eco-500 focus:ring-2 focus:ring-eco-500/20 text-sm transition"
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={set('email')}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">Subject</label>
                  <select
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-eco-500 focus:ring-2 focus:ring-eco-500/20 text-sm transition bg-white"
                    value={form.subject}
                    onChange={set('subject')}
                    required
                  >
                    <option value="">Select a topic…</option>
                    <option>Renewable Energy</option>
                    <option>Green Building Design</option>
                    <option>Environmental IoT</option>
                    <option>Waste Management</option>
                    <option>Carbon Solutions</option>
                    <option>Partnership / Investment</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-eco-500 focus:ring-2 focus:ring-eco-500/20 text-sm transition resize-none"
                    placeholder="Tell us about your project or sustainability goals…"
                    value={form.message}
                    onChange={set('message')}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-eco-600 hover:bg-eco-700 text-white font-semibold transition-colors shadow"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
