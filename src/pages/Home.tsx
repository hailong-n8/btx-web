import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
  ArrowRight,
  Waves,
  Cpu,
  Blocks,
  BarChart3,
  Building2,
  Database,
  TrendingUp,
  Users,
  Globe,
  Clock,
} from 'lucide-react'
import useDocumentTitle from '../hooks/useDocumentTitle'
import SectionHeader from '../components/SectionHeader'
import FeatureCard from '../components/FeatureCard'
import MetricCard from '../components/MetricCard'
import CTASection from '../components/CTASection'

const pillars = [
  {
    icon: Waves,
    titleKey: 'home.pillarLiquidity',
    descriptionKey: 'home.pillarLiquidityDesc',
  },
  {
    icon: Cpu,
    titleKey: 'home.pillarTech',
    descriptionKey: 'home.pillarTechDesc',
  },
  {
    icon: Blocks,
    titleKey: 'home.pillarWhiteLabel',
    descriptionKey: 'home.pillarWhiteLabelDesc',
  },
]

const audiences = [
  {
    icon: TrendingUp,
    titleKey: 'home.clientMakers',
    descriptionKey: 'home.clientMakersDesc',
  },
  {
    icon: Building2,
    titleKey: 'home.clientExchanges',
    descriptionKey: 'home.clientExchangesDesc',
  },
  {
    icon: Database,
    titleKey: 'home.clientData',
    descriptionKey: 'home.clientDataDesc',
  },
  {
    icon: Users,
    titleKey: 'home.clientTraders',
    descriptionKey: 'home.clientTradersDesc',
  },
]

const metrics = [
  { value: '15+', labelKey: 'home.metricsTypes' },
  { value: '20+', labelKey: 'home.metricsYears' },
  { value: '99.9%', labelKey: 'home.metricsUptime' },
]

export default function Home() {
  const { t } = useTranslation()
  useDocumentTitle('home.pageTitle')
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-24 lg:pt-44 lg:pb-36">
        <div className="absolute inset-0 bg-gradient-to-b from-btx-700/40 via-btx-900/95 to-btx-900" />
        <div className="absolute inset-0">
          <div className="absolute -top-20 left-1/3 -translate-x-1/2 w-[1000px] h-[700px] bg-accent/8 rounded-full blur-[150px]" />
          <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-accent-blue/6 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/4 rounded-full blur-[100px]" />
        </div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-60" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              {t('home.heroBadge')}
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] text-btx-50">
              {t('home.heroTitle1')}
              <br />
              {t('home.heroTitle2')}
              <br />
              <span className="text-accent">{t('home.heroTitle3')}</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 text-lg lg:text-xl text-btx-200 leading-relaxed max-w-2xl"
            >
              {t('home.heroSubtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent hover:bg-accent-light text-accent-fg font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-accent/25 group"
              >
                {t('home.ctaAccessApi')}
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                to="/liquidity"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-btx-400 hover:border-btx-300 text-btx-100 font-medium rounded-lg transition-all hover:bg-btx-600/50"
              >
                {t('home.ctaLiquidityPartner')}
              </Link>
              <Link
                to="/white-label"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-btx-500/50 hover:border-btx-400 text-btx-200 font-medium rounded-lg transition-all hover:bg-btx-600/30"
              >
                {t('home.ctaExploreWhiteLabel')}
              </Link>
            </motion.div>
          </motion.div>

          {/* Floating stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-20 grid grid-cols-3 gap-px bg-btx-500/30 rounded-xl overflow-hidden border border-btx-500/30"
          >
            {[
              { icon: Globe, labelKey: 'home.statGlobalMarkets', valueKey: 'home.statMultiRegion' },
              { icon: BarChart3, labelKey: 'home.statMarketTypes', value: '15+' },
              { icon: Clock, labelKey: 'home.statPlatformUptime', value: '99.9%' },
            ].map((stat) => (
              <div key={stat.labelKey} className="bg-btx-800/80 backdrop-blur-sm p-5 lg:p-6 flex items-center gap-4">
                <stat.icon className="text-accent shrink-0" size={20} />
                <div>
                  <div className="text-lg font-bold text-btx-50">{stat.value ?? t(stat.valueKey!)}</div>
                  <div className="text-xs text-btx-300 uppercase tracking-wider">{t(stat.labelKey)}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-24 bg-btx-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label={t('home.pillarsLabel')}
            title={t('home.pillarsTitle')}
            subtitle={t('home.pillarsSubtitle')}
            center
          />
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => (
              <FeatureCard
                key={pillar.titleKey}
                icon={pillar.icon}
                title={t(pillar.titleKey)}
                description={t(pillar.descriptionKey)}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-20 bg-btx-800/50 border-y border-btx-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 divide-x divide-btx-500/30">
            {metrics.map((metric, i) => (
              <MetricCard key={metric.labelKey} value={metric.value} label={t(metric.labelKey)} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-24 bg-btx-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label={t('home.clientsLabel')}
            title={t('home.clientsTitle')}
            subtitle={t('home.clientsSubtitle')}
            center
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {audiences.map((audience, i) => (
              <motion.div
                key={audience.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-6 rounded-xl border border-btx-500/20 bg-btx-700/30 hover:border-accent/20 transition-colors group"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/15 transition-colors">
                  <audience.icon className="text-accent" size={24} />
                </div>
                <h3 className="font-semibold text-btx-50 mb-2">{t(audience.titleKey)}</h3>
                <p className="text-sm text-btx-200 leading-relaxed">{t(audience.descriptionKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Preview */}
      <section className="py-24 bg-btx-800/30 border-y border-btx-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                label={t('home.archLabel')}
                title={t('home.archTitle')}
                subtitle={t('home.archSubtitle')}
              />
              <div className="mt-8 space-y-4">
                {[
                  'home.archFeature1',
                  'home.archFeature2',
                  'home.archFeature3',
                  'home.archFeature4',
                ].map((itemKey) => (
                  <div key={itemKey} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center mt-0.5 shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    </div>
                    <span className="text-btx-200 text-sm">{t(itemKey)}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/technology"
                className="inline-flex items-center gap-2 mt-8 text-accent hover:text-accent-light font-medium text-sm transition-colors group"
              >
                {t('home.archExplore')}
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Architecture diagram placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-btx-700/50 border border-btx-500/30 rounded-xl p-8 space-y-4">
                {[
                  { labelKey: 'home.archClientLayer', items: ['gRPC API'], color: '#0ea5e9' },
                  { labelKey: 'home.archMatchingEngine', items: ['Order Book', 'Price Engine', 'Risk Check'], color: '#00d4aa' },
                  { labelKey: 'home.archLiquidityBridge', items: ['Aggregation', 'Settlement'], color: '#00d4aa' },
                  { labelKey: 'home.archDataLayer', items: ['Sports Data', 'Analytics'], color: '#22d3ee' },
                ].map((layer, i) => (
                  <div key={layer.labelKey}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: layer.color }} />
                      <span className="text-xs font-semibold text-btx-100 uppercase tracking-wider">
                        {t(layer.labelKey)}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {layer.items.map((item) => (
                        <div
                          key={item}
                          className="bg-btx-600/50 border border-btx-500/30 rounded-md px-3 py-2 text-center text-xs text-btx-200"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                    {i < 3 && (
                      <div className="flex justify-center my-2">
                        <div className="w-px h-4 bg-btx-500/50" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title={t('home.ctaTitle')}
        subtitle={t('home.ctaSubtitle')}
        primaryCTA={{ label: t('home.ctaContact'), to: '/contact' }}
        secondaryCTA={{ label: t('home.ctaViewApi'), to: '/technology' }}
      />
    </>
  )
}
