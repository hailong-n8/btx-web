import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  MessageSquare,
  Building2,
  Globe,
  CheckCircle2,
  Send,
} from 'lucide-react'
import Hero from '../components/Hero'
import SectionHeader from '../components/SectionHeader'
import useDocumentTitle from '../hooks/useDocumentTitle'

const inquiryTypes = [
  {
    icon: Building2,
    title: 'Partnerships & White Label',
    description: 'White-label deployment, operator partnerships, and commercial arrangements.',
    email: 'partnerships@btx.exchange',
  },
  {
    icon: MessageSquare,
    title: 'Liquidity & Market Making',
    description: 'Liquidity partner applications, fee structures, and market making programmes.',
    email: 'liquidity@btx.exchange',
  },
  {
    icon: Mail,
    title: 'API & Technical Integration',
    description: 'API credentials, sandbox access, and technical integration support.',
    email: 'developers@btx.exchange',
  },
  {
    icon: Globe,
    title: 'General Enquiries',
    description: 'Press, compliance, regulatory, and general enquiries.',
    email: 'info@btx.exchange',
  },
]

export default function Contact() {
  useDocumentTitle('Contact')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    type: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Hero
        badge="Contact"
        title="Get in "
        titleAccent="Touch"
        subtitle="API integration, partnerships, or white-label deployment — we're ready to help."
        compact
      />

      <section className="py-24 bg-btx-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <SectionHeader
                label="Send a Message"
                title="Tell Us About Your Requirements"
              />
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-8 p-8 rounded-xl border border-accent/30 bg-accent/5 text-center"
                >
                  <CheckCircle2 className="text-accent mx-auto mb-4" size={40} />
                  <h3 className="text-xl font-bold text-btx-50 mb-2">Message Received</h3>
                  <p className="text-btx-200">
                    Thank you for your enquiry. Our team will respond within one business day.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-btx-200 mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-btx-700/50 border border-btx-500/30 text-btx-50 text-sm placeholder:text-btx-400 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-btx-200 mb-2">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-btx-700/50 border border-btx-500/30 text-btx-50 text-sm placeholder:text-btx-400 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-btx-200 mb-2">Company</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-btx-700/50 border border-btx-500/30 text-btx-50 text-sm placeholder:text-btx-400 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors"
                        placeholder="Company name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-btx-200 mb-2">Enquiry Type *</label>
                      <select
                        required
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-btx-700/50 border border-btx-500/30 text-btx-50 text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors appearance-none"
                      >
                        <option value="" className="bg-btx-700">Select type</option>
                        <option value="partnership" className="bg-btx-700">Partnerships & White Label</option>
                        <option value="liquidity" className="bg-btx-700">Liquidity & Market Making</option>
                        <option value="technical" className="bg-btx-700">API & Technical Integration</option>
                        <option value="compliance" className="bg-btx-700">Compliance & Regulatory</option>
                        <option value="general" className="bg-btx-700">General Enquiry</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-btx-200 mb-2">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-btx-700/50 border border-btx-500/30 text-btx-50 text-sm placeholder:text-btx-400 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors resize-none"
                      placeholder="Tell us about your requirements, use case, or questions..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent hover:bg-accent-light text-accent-fg font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-accent/25 group"
                  >
                    Send Message
                    <Send size={16} className="group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Channels */}
            <div className="lg:col-span-2">
              <SectionHeader label="Direct Channels" title="Reach Our Teams" />
              <div className="mt-8 space-y-4">
                {inquiryTypes.map((type, i) => (
                  <motion.div
                    key={type.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="p-5 rounded-xl border border-btx-500/30 bg-btx-700/40 hover:border-accent/20 transition-colors group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent/15 transition-colors">
                        <type.icon className="text-accent" size={18} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-btx-50 text-sm mb-1">{type.title}</h3>
                        <p className="text-xs text-btx-300 leading-relaxed mb-2">{type.description}</p>
                        <a
                          href={`mailto:${type.email}`}
                          className="text-xs text-accent hover:text-accent-light transition-colors font-mono"
                        >
                          {type.email}
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-5 rounded-xl border border-btx-500/20 bg-btx-700/20">
                <h4 className="text-sm font-semibold text-btx-100 mb-2">Response Times</h4>
                <div className="space-y-2 text-xs text-btx-300">
                  <div className="flex justify-between">
                    <span>Partnership enquiries</span>
                    <span className="text-btx-100">Within 24 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Technical support</span>
                    <span className="text-btx-100">Within 4 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span>General enquiries</span>
                    <span className="text-btx-100">Within 48 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
