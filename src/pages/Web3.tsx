import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import {
  Coins,
  Zap,
  Shield,
  Eye,
  Wallet,
  Globe,
  Lock,
  RefreshCw,
  CheckCircle2,
} from 'lucide-react'
import Hero from '../components/Hero'
import SectionHeader from '../components/SectionHeader'
import FeatureCard from '../components/FeatureCard'
import CTASection from '../components/CTASection'
import useDocumentTitle from '../hooks/useDocumentTitle'

const features = [
  {
    icon: Coins,
    titleKey: 'web3.featureStablecoinTitle',
    descriptionKey: 'web3.featureStablecoinDesc',
  },
  {
    icon: Zap,
    titleKey: 'web3.featureSettlementTitle',
    descriptionKey: 'web3.featureSettlementDesc',
  },
  {
    icon: Shield,
    titleKey: 'web3.featureCustodyTitle',
    descriptionKey: 'web3.featureCustodyDesc',
  },
  {
    icon: Eye,
    titleKey: 'web3.featureTransparencyTitle',
    descriptionKey: 'web3.featureTransparencyDesc',
  },
]

const benefits = [
  {
    icon: Wallet,
    titleKey: 'web3.benefitMultiCurrencyTitle',
    descriptionKey: 'web3.benefitMultiCurrencyDesc',
  },
  {
    icon: Globe,
    titleKey: 'web3.benefitBorderlessTitle',
    descriptionKey: 'web3.benefitBorderlessDesc',
  },
  {
    icon: Lock,
    titleKey: 'web3.benefitCompliantTitle',
    descriptionKey: 'web3.benefitCompliantDesc',
  },
  {
    icon: RefreshCw,
    titleKey: 'web3.benefitHybridTitle',
    descriptionKey: 'web3.benefitHybridDesc',
  },
]

const techSpecs = [
  { labelKey: 'web3.specChainsLabel', valueKey: 'web3.specChainsValue' },
  { labelKey: 'web3.specStablecoinsLabel', valueKey: 'web3.specStablecoinsValue' },
  { labelKey: 'web3.specSettlementLabel', valueKey: 'web3.specSettlementValue' },
  { labelKey: 'web3.specCustodyLabel', valueKey: 'web3.specCustodyValue' },
  { labelKey: 'web3.specComplianceLabel', valueKey: 'web3.specComplianceValue' },
  { labelKey: 'web3.specApiLabel', valueKey: 'web3.specApiValue' },
]

export default function Web3() {
  const { t } = useTranslation()
  useDocumentTitle('web3.pageTitle')
  return (
    <>
      <Hero
        badge={t('web3.heroBadge')}
        title={t('web3.heroTitle')}
        titleAccent={t('web3.heroAccent')}
        subtitle={t('web3.heroSubtitle')}
        primaryCTA={{ label: t('web3.ctaDiscuss'), to: '/contact' }}
        secondaryCTA={{ label: t('web3.ctaViewTech'), to: '/technology' }}
        compact
      />

      {/* Core Features */}
      <section className="py-24 bg-btx-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label={t('web3.infraLabel')}
            title={t('web3.infraTitle')}
            subtitle={t('web3.infraSubtitle')}
            center
          />
          <div className="mt-16 grid md:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <FeatureCard key={feature.titleKey} icon={feature.icon} title={t(feature.titleKey)} description={t(feature.descriptionKey)} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-24 bg-btx-800/30 border-y border-btx-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                label={t('web3.archLabel')}
                title={t('web3.archTitle')}
                subtitle={t('web3.archSubtitle')}
              />
              <div className="mt-8 space-y-4">
                {[
                  'web3.archItem1',
                  'web3.archItem2',
                  'web3.archItem3',
                  'web3.archItem4',
                  'web3.archItem5',
                  'web3.archItem6',
                ].map((itemKey) => (
                  <div key={itemKey} className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent shrink-0 mt-0.5" size={18} />
                    <span className="text-sm text-btx-200">{t(itemKey)}</span>
                  </div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-btx-700/50 border border-btx-500/30 rounded-xl p-8"
            >
              <h3 className="text-lg font-semibold mb-6 text-btx-100">{t('web3.specTitle')}</h3>
              <div className="space-y-0">
                {techSpecs.map((spec) => (
                  <div
                    key={spec.labelKey}
                    className="flex items-start justify-between py-4 border-b border-btx-500/20 last:border-0 gap-4"
                  >
                    <span className="text-sm text-btx-300 shrink-0">{t(spec.labelKey)}</span>
                    <span className="text-sm text-btx-100 font-medium text-right">{t(spec.valueKey)}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-btx-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label={t('web3.benefitsLabel')}
            title={t('web3.benefitsTitle')}
            subtitle={t('web3.benefitsSubtitle')}
            center
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-6 rounded-xl border border-btx-500/20 bg-btx-700/30 hover:border-accent/20 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/15 transition-colors">
                  <benefit.icon className="text-accent" size={22} />
                </div>
                <h3 className="font-semibold text-btx-50 mb-2">{t(benefit.titleKey)}</h3>
                <p className="text-sm text-btx-200 leading-relaxed">{t(benefit.descriptionKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={t('web3.ctaTitle')}
        subtitle={t('web3.ctaSubtitle')}
        primaryCTA={{ label: t('web3.ctaContact'), to: '/contact' }}
        secondaryCTA={{ label: t('web3.ctaViewApi'), to: '/technology' }}
      />
    </>
  )
}
