import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import {
  Cpu,
  Radio,
  Code2,
  RotateCcw,
  Layers,
  Timer,
  GitBranch,
} from 'lucide-react'
import Hero from '../components/Hero'
import SectionHeader from '../components/SectionHeader'
import FeatureCard from '../components/FeatureCard'
import CTASection from '../components/CTASection'
import ComingSoonBadge from '../components/ComingSoonBadge'
import useDocumentTitle from '../hooks/useDocumentTitle'


const engineFeatures = [
  {
    icon: Layers,
    titleKey: 'technology.engineOrderBook',
    descriptionKey: 'technology.engineOrderBookDesc',
  },
  {
    icon: RotateCcw,
    titleKey: 'technology.engineRecovery',
    descriptionKey: 'technology.engineRecoveryDesc',
  },
  {
    icon: Timer,
    titleKey: 'technology.engineThroughput',
    descriptionKey: 'technology.engineThroughputDesc',
  },
]

const marketFeatures = [
  {
    icon: Radio,
    titleKey: 'technology.marketInPlay',
    descriptionKey: 'technology.marketInPlayDesc',
  },
  {
    icon: GitBranch,
    titleKey: 'technology.marketTypes',
    descriptionKey: 'technology.marketTypesDesc',
  },
  {
    icon: Cpu,
    titleKey: 'technology.marketCustom',
    descriptionKey: 'technology.marketCustomDesc',
  },
]

const apiCapabilities = [
  { labelKey: 'technology.apiGrpc', descriptionKey: 'technology.apiGrpcDesc' },
  { labelKey: 'technology.apiSandbox', descriptionKey: 'technology.apiSandboxDesc', comingSoon: true },
  { labelKey: 'technology.apiIdempotency', descriptionKey: 'technology.apiIdempotencyDesc' },
]

export default function Technology() {
  const { t } = useTranslation()
  useDocumentTitle('technology.pageTitle')
  return (
    <>
      <Hero
        badge={t('technology.heroBadge')}
        title={t('technology.heroTitle')}
        titleAccent={t('technology.heroAccent')}
        subtitle={t('technology.heroSubtitle')}
        primaryCTA={{ label: t('technology.ctaAccessDocs'), to: '/developers' }}
        secondaryCTA={{ label: t('technology.ctaContactEng'), to: '/contact' }}
      />

      {/* Matching Engine */}
      <section className="py-24 bg-btx-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label={t('technology.engineLabel')}
            title={t('technology.engineTitle')}
            subtitle={t('technology.engineSubtitle')}
          />
          <div className="mt-14 grid sm:grid-cols-3 gap-6">
            {engineFeatures.map((f, i) => (
              <FeatureCard key={f.titleKey} icon={f.icon} title={t(f.titleKey)} description={t(f.descriptionKey)} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Market Creation */}
      <section className="py-24 bg-btx-800/30 border-y border-btx-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label={t('technology.marketLabel')}
            title={t('technology.marketTitle')}
            subtitle={t('technology.marketSubtitle')}
          />
          <div className="mt-14 grid sm:grid-cols-3 gap-6">
            {marketFeatures.map((f, i) => (
              <FeatureCard key={f.titleKey} icon={f.icon} title={t(f.titleKey)} description={t(f.descriptionKey)} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* APIs */}
      <section className="py-24 bg-btx-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeader
                label={t('technology.apiLabel')}
                title={t('technology.apiTitle')}
                subtitle={t('technology.apiSubtitle')}
              />
              <div className="mt-8">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="bg-btx-700/50 border border-btx-500/30 rounded-xl p-6 font-mono text-sm"
                >
                  <div className="text-btx-300 mb-1">// gRPC — Place a limit order</div>
                  <div>
                    <span className="text-accent-cyan">rpc</span>{' '}
                    <span className="text-btx-100">PlaceOrder</span>
                    <span className="text-btx-300">(</span>
                    <span className="text-accent">PlaceOrderRequest</span>
                    <span className="text-btx-300">)</span>
                  </div>
                  <div className="mt-3 text-btx-200">
                    {`{`}
                    <br />
                    {'  '}<span className="text-accent">"market_id"</span>: <span className="text-accent-cyan">"cricket_ipl_match_odds"</span>,
                    <br />
                    {'  '}<span className="text-accent">"side"</span>: <span className="text-accent-cyan">"back"</span>,
                    <br />
                    {'  '}<span className="text-accent">"price"</span>: <span className="text-accent-light">2.50</span>,
                    <br />
                    {'  '}<span className="text-accent">"size"</span>: <span className="text-accent-light">1000</span>,
                    <br />
                    {'  '}<span className="text-accent">"type"</span>: <span className="text-accent-cyan">"limit"</span>
                    <br />
                    {`}`}
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="space-y-4">
              {apiCapabilities.map((cap, i) => (
                <motion.div
                  key={cap.labelKey}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-4 p-4 rounded-lg bg-btx-700/30 border border-btx-500/20"
                >
                  <Code2 className="text-accent shrink-0 mt-0.5" size={18} />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-sm font-semibold text-btx-50">{t(cap.labelKey)}</h4>
                      {cap.comingSoon && <ComingSoonBadge />}
                    </div>
                    <p className="text-sm text-btx-200 mt-1">{t(cap.descriptionKey)}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="py-24 bg-btx-800/30 border-y border-btx-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label={t('technology.archLabel')}
            title={t('technology.archTitle')}
            center
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-14 bg-btx-700/30 border border-btx-500/30 rounded-xl p-8 lg:p-12"
          >
            <div className="grid lg:grid-cols-5 gap-4 items-start">
              {[
                { labelKey: 'technology.archClients', itemKeys: ['technology.archClientsItem1'], color: 'bg-accent-blue' },
                { labelKey: 'technology.archGateway', itemKeys: ['technology.archGatewayItem1', 'technology.archGatewayItem2'], color: 'bg-accent-cyan' },
                { labelKey: 'technology.archEngine', itemKeys: ['technology.archEngineItem1', 'technology.archEngineItem2', 'technology.archEngineItem3'], color: 'bg-accent' },
                { labelKey: 'technology.archBridge', itemKeys: ['technology.archBridgeItem1', 'technology.archBridgeItem2'], color: 'bg-accent' },
                { labelKey: 'technology.archData', itemKeys: ['technology.archDataItem1', 'technology.archDataItem2'], color: 'bg-accent-cyan' },
              ].map((block, i) => (
                <div key={block.labelKey}>
                  <div className="text-center mb-3">
                    <span className={`inline-block w-2 h-2 rounded-full ${block.color} mr-2`} />
                    <span className="text-xs font-semibold text-btx-100 uppercase tracking-wider">{t(block.labelKey)}</span>
                  </div>
                  <div className="space-y-2">
                    {block.itemKeys.map((itemKey) => (
                      <div key={itemKey} className="bg-btx-600/50 border border-btx-500/30 rounded-md px-3 py-2.5 text-center text-xs text-btx-200 font-medium">
                        {t(itemKey)}
                      </div>
                    ))}
                  </div>
                  {i < 4 && (
                    <div className="hidden lg:flex justify-center mt-3">
                      <span className="text-btx-400 text-lg">→</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection
        title={t('technology.ctaTitle')}
        subtitle={t('technology.ctaSubtitle')}
        primaryCTA={{ label: t('technology.ctaGetAccess'), to: '/developers' }}
        secondaryCTA={{ label: t('technology.ctaTalkEng'), to: '/contact' }}
      />
    </>
  )
}
