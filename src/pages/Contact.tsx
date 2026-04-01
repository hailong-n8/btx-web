import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
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

export default function Contact() {
  const { t } = useTranslation()
  useDocumentTitle('contact.pageTitle')

  const inquiryTypes = [
    {
      icon: Building2,
      title: t('contact.channelPartnership'),
      description: t('contact.channelPartnershipDesc'),
      email: 'contact@iqex.io',
    },
    {
      icon: MessageSquare,
      title: t('contact.channelLiquidity'),
      description: t('contact.channelLiquidityDesc'),
      email: 'contact@iqex.io',
    },
    {
      icon: Mail,
      title: t('contact.channelTechnical'),
      description: t('contact.channelTechnicalDesc'),
      email: 'technical@iqex.io',
    },
    {
      icon: Globe,
      title: t('contact.channelGeneral'),
      description: t('contact.channelGeneralDesc'),
      email: 'contact@iqex.io',
    },
  ]
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
        badge={t('contact.heroBadge')}
        title={t('contact.heroTitle')}
        titleAccent={t('contact.heroAccent')}
        subtitle={t('contact.heroSubtitle')}
        compact
      />

      <section className="py-24 bg-btx-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <SectionHeader
                label={t('contact.formLabel')}
                title={t('contact.formTitle')}
              />
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-8 p-8 rounded-xl border border-accent/30 bg-accent/5 text-center"
                >
                  <CheckCircle2 className="text-accent mx-auto mb-4" size={40} />
                  <h3 className="text-xl font-bold text-btx-50 mb-2">{t('contact.successTitle')}</h3>
                  <p className="text-btx-200">
                    {t('contact.successDesc')}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-btx-200 mb-2">{t('contact.fieldName')}</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-btx-700/50 border border-btx-500/30 text-btx-50 text-sm placeholder:text-btx-400 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors"
                        placeholder={t('contact.fieldNamePlaceholder')}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-btx-200 mb-2">{t('contact.fieldEmail')}</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-btx-700/50 border border-btx-500/30 text-btx-50 text-sm placeholder:text-btx-400 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors"
                        placeholder={t('contact.fieldEmailPlaceholder')}
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-btx-200 mb-2">{t('contact.fieldCompany')}</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-btx-700/50 border border-btx-500/30 text-btx-50 text-sm placeholder:text-btx-400 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors"
                        placeholder={t('contact.fieldCompanyPlaceholder')}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-btx-200 mb-2">{t('contact.fieldType')}</label>
                      <select
                        required
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-btx-700/50 border border-btx-500/30 text-btx-50 text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors appearance-none"
                      >
                        <option value="" className="bg-btx-700">{t('contact.fieldTypeDefault')}</option>
                        <option value="partnership" className="bg-btx-700">{t('contact.typePartnership')}</option>
                        <option value="liquidity" className="bg-btx-700">{t('contact.typeLiquidity')}</option>
                        <option value="technical" className="bg-btx-700">{t('contact.typeTechnical')}</option>
                        <option value="compliance" className="bg-btx-700">{t('contact.typeCompliance')}</option>
                        <option value="general" className="bg-btx-700">{t('contact.typeGeneral')}</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-btx-200 mb-2">{t('contact.fieldMessage')}</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-btx-700/50 border border-btx-500/30 text-btx-50 text-sm placeholder:text-btx-400 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors resize-none"
                      placeholder={t('contact.fieldMessagePlaceholder')}
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent hover:bg-accent-light text-accent-fg font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-accent/25 group"
                  >
                    {t('contact.submitButton')}
                    <Send size={16} className="group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Channels */}
            <div className="lg:col-span-2">
              <SectionHeader label={t('contact.channelsLabel')} title={t('contact.channelsTitle')} />
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
                <h4 className="text-sm font-semibold text-btx-100 mb-2">{t('contact.responseTitle')}</h4>
                <div className="space-y-2 text-xs text-btx-300">
                  <div className="flex justify-between">
                    <span>{t('contact.responsePartnership')}</span>
                    <span className="text-btx-100">{t('contact.responsePartnershipTime')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('contact.responseTechnical')}</span>
                    <span className="text-btx-100">{t('contact.responseTechnicalTime')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('contact.responseGeneral')}</span>
                    <span className="text-btx-100">{t('contact.responseGeneralTime')}</span>
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
