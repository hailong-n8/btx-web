import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import {
  TrendingUp,
  Percent,
  Award,
  Server,
  Timer,
  ListOrdered,
  BarChart3,
  Target,
  ArrowRight,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import SectionHeader from '../components/SectionHeader'
import FeatureCard from '../components/FeatureCard'
import CTASection from '../components/CTASection'
import useDocumentTitle from '../hooks/useDocumentTitle'

const feeFeatures = [
  {
    icon: Percent,
    titleKey: 'liquidity.feeTransparent',
    descriptionKey: 'liquidity.feeTransparentDesc',
  },
  {
    icon: BarChart3,
    titleKey: 'liquidity.feeVolume',
    descriptionKey: 'liquidity.feeVolumeDesc',
  },
  {
    icon: Award,
    titleKey: 'liquidity.feeIncentive',
    descriptionKey: 'liquidity.feeIncentiveDesc',
  },
]

const infraFeatures = [
  {
    icon: Server,
    titleKey: 'liquidity.infraCoLocation',
    descriptionKey: 'liquidity.infraCoLocationDesc',
  },
  {
    icon: Timer,
    titleKey: 'liquidity.infraLatency',
    descriptionKey: 'liquidity.infraLatencyDesc',
  },
  {
    icon: ListOrdered,
    titleKey: 'liquidity.infraOrderTypes',
    descriptionKey: 'liquidity.infraOrderTypesDesc',
  },
]

const tiers = [
  { tierKey: 'liquidity.tierStandard', volume: '< £1M / month', makerFee: '0.10%', takerFee: '0.20%' },
  { tierKey: 'liquidity.tierProfessional', volume: '£1M – £10M', makerFee: '0.06%', takerFee: '0.15%' },
  { tierKey: 'liquidity.tierInstitutional', volume: '£10M – £50M', makerFee: '0.03%', takerFee: '0.10%' },
  { tierKey: 'liquidity.tierMarketMaker', volume: '> £50M', makerFee: 'Custom', takerFee: 'Custom' },
]

export default function Liquidity() {
  const { t } = useTranslation()
  useDocumentTitle('liquidity.pageTitle')
  return (
    <>
      <Hero
        badge={t('liquidity.heroBadge')}
        title={t('liquidity.heroTitle')}
        titleAccent={t('liquidity.heroAccent')}
        subtitle={t('liquidity.heroSubtitle')}
        primaryCTA={{ label: t('liquidity.ctaApply'), to: '/contact' }}
        secondaryCTA={{ label: t('liquidity.ctaViewDocs'), to: '/developers' }}
      />

      {/* Fee Model */}
      <section className="py-24 bg-btx-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label={t('liquidity.feeLabel')}
            title={t('liquidity.feeTitle')}
            subtitle={t('liquidity.feeSubtitle')}
          />
          <div className="mt-14 grid sm:grid-cols-3 gap-6">
            {feeFeatures.map((f, i) => (
              <FeatureCard key={f.titleKey} icon={f.icon} title={t(f.titleKey)} description={t(f.descriptionKey)} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Fee Tiers Table */}
      <section className="py-24 bg-btx-800/30 border-y border-btx-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label={t('liquidity.tiersLabel')}
            title={t('liquidity.tiersTitle')}
            subtitle={t('liquidity.tiersSubtitle')}
            center
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-14 overflow-hidden rounded-xl border border-btx-500/30"
          >
            <table className="w-full">
              <thead>
                <tr className="bg-btx-700/50">
                  <th className="text-left px-6 py-4 text-sm font-semibold text-btx-100 uppercase tracking-wider">{t('liquidity.tierHeader')}</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-btx-100 uppercase tracking-wider">{t('liquidity.tierVolume')}</th>
                  <th className="text-center px-6 py-4 text-sm font-semibold text-btx-100 uppercase tracking-wider">{t('liquidity.tierMaker')}</th>
                  <th className="text-center px-6 py-4 text-sm font-semibold text-btx-100 uppercase tracking-wider">{t('liquidity.tierTaker')}</th>
                </tr>
              </thead>
              <tbody>
                {tiers.map((tier, i) => (
                  <tr
                    key={tier.tierKey}
                    className={`border-t border-btx-500/20 ${i === tiers.length - 1 ? 'bg-accent/5' : 'bg-btx-800/50'}`}
                  >
                    <td className="px-6 py-4 text-sm font-medium text-btx-50">{t(tier.tierKey)}</td>
                    <td className="px-6 py-4 text-sm text-btx-200">{tier.volume}</td>
                    <td className="px-6 py-4 text-sm text-accent text-center font-mono">{tier.makerFee}</td>
                    <td className="px-6 py-4 text-sm text-btx-100 text-center font-mono">{tier.takerFee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
          <p className="mt-4 text-xs text-btx-300 text-center">
            {t('liquidity.tierCustomNote')}
          </p>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-24 bg-btx-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label={t('liquidity.infraLabel')}
            title={t('liquidity.infraTitle')}
            subtitle={t('liquidity.infraSubtitle')}
          />
          <div className="mt-14 grid sm:grid-cols-3 gap-6">
            {infraFeatures.map((f, i) => (
              <FeatureCard key={f.titleKey} icon={f.icon} title={t(f.titleKey)} description={t(f.descriptionKey)} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Incentives */}
      <section className="py-24 bg-btx-800/30 border-y border-btx-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                label={t('liquidity.incentiveLabel')}
                title={t('liquidity.incentiveTitle')}
                subtitle={t('liquidity.incentiveSubtitle')}
              />
              <div className="mt-8 space-y-6">
                {[
                  {
                    icon: Target,
                    titleKey: 'liquidity.incentiveRebates',
                    descKey: 'liquidity.incentiveRebatesDesc',
                  },
                  {
                    icon: TrendingUp,
                    titleKey: 'liquidity.incentiveVolume',
                    descKey: 'liquidity.incentiveVolumeDesc',
                  },
                  {
                    icon: Award,
                    titleKey: 'liquidity.incentiveNetwork',
                    descKey: 'liquidity.incentiveNetworkDesc',
                  },
                ].map((item) => (
                  <div key={item.titleKey} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                      <item.icon className="text-accent" size={18} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-btx-50 text-sm">{t(item.titleKey)}</h4>
                      <p className="text-sm text-btx-200 mt-1">{t(item.descKey)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-btx-700/50 border border-btx-500/30 rounded-xl p-8"
            >
              <h3 className="text-xl font-bold text-btx-50 mb-4">{t('liquidity.partnerTitle')}</h3>
              <p className="text-sm text-btx-200 leading-relaxed mb-6">
                {t('liquidity.partnerDesc')}
              </p>
              <div className="space-y-3 mb-6">
                {[
                  'liquidity.partnerPerk1',
                  'liquidity.partnerPerk2',
                  'liquidity.partnerPerk3',
                  'liquidity.partnerPerk4',
                ].map((perkKey) => (
                  <div key={perkKey} className="flex items-center gap-2 text-sm text-btx-200">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {t(perkKey)}
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-light text-accent-fg font-semibold rounded-lg transition-all w-full justify-center group"
              >
                {t('liquidity.partnerApply')}
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection
        title={t('liquidity.ctaTitle')}
        subtitle={t('liquidity.ctaSubtitle')}
        primaryCTA={{ label: t('liquidity.ctaContact'), to: '/contact' }}
        secondaryCTA={{ label: t('liquidity.ctaExplore'), to: '/technology' }}
      />
    </>
  )
}
