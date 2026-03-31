import {
  Palette,
  ShieldCheck,
  BarChart3,
  Settings,
  Plug,
  LayoutDashboard,
  LineChart,
  Globe,
  Users,
  Gamepad2,
  Coins,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Hero from '../components/Hero'
import SectionHeader from '../components/SectionHeader'
import FeatureCard from '../components/FeatureCard'
import CTASection from '../components/CTASection'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import useDocumentTitle from '../hooks/useDocumentTitle'

const included = [
  {
    icon: Palette,
    titleKey: 'whiteLabel.compBrandedUI',
    descriptionKey: 'whiteLabel.compBrandedUIDesc',
  },
  {
    icon: ShieldCheck,
    titleKey: 'whiteLabel.compRisk',
    descriptionKey: 'whiteLabel.compRiskDesc',
  },
  {
    icon: BarChart3,
    titleKey: 'whiteLabel.compSettlement',
    descriptionKey: 'whiteLabel.compSettlementDesc',
  },
  {
    icon: Settings,
    titleKey: 'whiteLabel.compCommission',
    descriptionKey: 'whiteLabel.compCommissionDesc',
  },
]

const integration = [
  {
    icon: Plug,
    titleKey: 'whiteLabel.intApi',
    descriptionKey: 'whiteLabel.intApiDesc',
  },
  {
    icon: LayoutDashboard,
    titleKey: 'whiteLabel.intDashboard',
    descriptionKey: 'whiteLabel.intDashboardDesc',
  },
  {
    icon: LineChart,
    titleKey: 'whiteLabel.intReporting',
    descriptionKey: 'whiteLabel.intReportingDesc',
  },
]

const targetClients = [
  {
    icon: Globe,
    titleKey: 'whiteLabel.partnerRegional',
    descriptionKey: 'whiteLabel.partnerRegionalDesc',
  },
  {
    icon: Users,
    titleKey: 'whiteLabel.partnerAffiliates',
    descriptionKey: 'whiteLabel.partnerAffiliatesDesc',
  },
  {
    icon: Gamepad2,
    titleKey: 'whiteLabel.partnerSports',
    descriptionKey: 'whiteLabel.partnerSportsDesc',
  },
  {
    icon: Coins,
    titleKey: 'whiteLabel.partnerCrypto',
    descriptionKey: 'whiteLabel.partnerCryptoDesc',
  },
]

const steps = [
  { step: '01', titleKey: 'whiteLabel.step1', descKey: 'whiteLabel.step1Desc' },
  { step: '02', titleKey: 'whiteLabel.step2', descKey: 'whiteLabel.step2Desc' },
  { step: '03', titleKey: 'whiteLabel.step3', descKey: 'whiteLabel.step3Desc' },
  { step: '04', titleKey: 'whiteLabel.step4', descKey: 'whiteLabel.step4Desc' },
]

export default function WhiteLabel() {
  const { t } = useTranslation()
  useDocumentTitle('whiteLabel.pageTitle')
  return (
    <>
      <Hero
        badge={t('whiteLabel.heroBadge')}
        title={t('whiteLabel.heroTitle')}
        titleAccent={t('whiteLabel.heroAccent')}
        subtitle={t('whiteLabel.heroSubtitle')}
        primaryCTA={{ label: t('whiteLabel.ctaDemo'), to: '/contact' }}
        secondaryCTA={{ label: t('whiteLabel.ctaViewTech'), to: '/technology' }}
      />

      {/* What's Included */}
      <section className="py-24 bg-btx-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label={t('whiteLabel.componentsLabel')}
            title={t('whiteLabel.componentsTitle')}
            subtitle={t('whiteLabel.componentsSubtitle')}
            center
          />
          <div className="mt-16 grid md:grid-cols-2 gap-6">
            {included.map((item, i) => (
              <FeatureCard key={item.titleKey} icon={item.icon} title={t(item.titleKey)} description={t(item.descriptionKey)} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Deployment Timeline */}
      <section className="py-24 bg-btx-800/30 border-y border-btx-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label={t('whiteLabel.deployLabel')}
            title={t('whiteLabel.deployTitle')}
            subtitle={t('whiteLabel.deploySubtitle')}
            center
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative p-6 rounded-xl border border-btx-500/30 bg-btx-700/40"
              >
                <div className="text-4xl font-bold text-accent/20 mb-4">{s.step}</div>
                <h3 className="text-lg font-semibold text-btx-50 mb-2">{t(s.titleKey)}</h3>
                <p className="text-sm text-btx-200 leading-relaxed">{t(s.descKey)}</p>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 text-btx-500">
                    <ArrowRight size={16} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className="py-24 bg-btx-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label={t('whiteLabel.integrationLabel')}
            title={t('whiteLabel.integrationTitle')}
            subtitle={t('whiteLabel.integrationSubtitle')}
            center
          />
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {integration.map((item, i) => (
              <FeatureCard key={item.titleKey} icon={item.icon} title={t(item.titleKey)} description={t(item.descriptionKey)} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-24 bg-btx-800/30 border-y border-btx-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label={t('whiteLabel.partnersLabel')}
            title={t('whiteLabel.partnersTitle')}
            subtitle={t('whiteLabel.partnersSubtitle')}
            center
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetClients.map((client, i) => (
              <motion.div
                key={client.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-xl border border-btx-500/20 bg-btx-700/30 hover:border-accent/20 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/15 transition-colors">
                  <client.icon className="text-accent" size={22} />
                </div>
                <h3 className="font-semibold text-btx-50 mb-2">{t(client.titleKey)}</h3>
                <p className="text-sm text-btx-200 leading-relaxed">{t(client.descriptionKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why IQEX */}
      <section className="py-24 bg-btx-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                label={t('whiteLabel.whyLabel')}
                title={t('whiteLabel.whyTitle')}
                subtitle={t('whiteLabel.whySubtitle')}
              />
              <div className="mt-8 space-y-4">
                {[
                  'whiteLabel.whyItem1',
                  'whiteLabel.whyItem2',
                  'whiteLabel.whyItem3',
                  'whiteLabel.whyItem4',
                  'whiteLabel.whyItem5',
                  'whiteLabel.whyItem6',
                ].map((itemKey) => (
                  <div key={itemKey} className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent shrink-0 mt-0.5" size={18} />
                    <span className="text-sm text-btx-200">{t(itemKey)}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-accent hover:bg-accent-light text-accent-fg font-semibold rounded-lg transition-all group"
              >
                {t('whiteLabel.whyDiscuss')}
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-btx-700/50 border border-btx-500/30 rounded-xl p-8"
            >
              <h3 className="text-lg font-semibold mb-6 text-btx-100">{t('whiteLabel.deployIncludes')}</h3>
              <div className="space-y-3">
                {[
                  'whiteLabel.deployItem1',
                  'whiteLabel.deployItem2',
                  'whiteLabel.deployItem3',
                  'whiteLabel.deployItem4',
                  'whiteLabel.deployItem5',
                  'whiteLabel.deployItem6',
                  'whiteLabel.deployItem7',
                  'whiteLabel.deployItem8',
                ].map((itemKey, i) => (
                  <div
                    key={itemKey}
                    className="flex items-center gap-3 py-2 border-b border-btx-500/20 last:border-0"
                  >
                    <span className="text-accent text-xs font-mono">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-sm text-btx-200">{t(itemKey)}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection
        title={t('whiteLabel.ctaTitle')}
        subtitle={t('whiteLabel.ctaSubtitle')}
        primaryCTA={{ label: t('whiteLabel.ctaContact'), to: '/contact' }}
        secondaryCTA={{ label: t('whiteLabel.ctaExplore'), to: '/technology' }}
      />
    </>
  )
}
