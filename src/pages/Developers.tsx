import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import {
  Terminal,
  BookOpen,
  TestTube2,
  Activity,
  ArrowRight,
  Copy,
  Zap,
} from 'lucide-react'
import Hero from '../components/Hero'
import SectionHeader from '../components/SectionHeader'
import CTASection from '../components/CTASection'
import ComingSoonBadge from '../components/ComingSoonBadge'
import useDocumentTitle from '../hooks/useDocumentTitle'

const apiFeatures = [
  {
    icon: Zap,
    titleKey: 'developers.apiGrpcTitle',
    descriptionKey: 'developers.apiGrpcDesc',
  },
  {
    icon: TestTube2,
    titleKey: 'developers.apiSandboxTitle',
    descriptionKey: 'developers.apiSandboxDesc',
    comingSoon: true,
  },
]

const resources = [
  {
    icon: BookOpen,
    titleKey: 'developers.resApiDocs',
    descriptionKey: 'developers.resApiDocsDesc',
    tag: 'docs.iqex.io',
  },
  {
    icon: Terminal,
    titleKey: 'developers.resCodeSamples',
    descriptionKey: 'developers.resCodeSamplesDesc',
    tag: 'GitHub',
  },
  {
    icon: Activity,
    titleKey: 'developers.resStatus',
    descriptionKey: 'developers.resStatusDesc',
    tag: 'status.iqex.io',
  },
]

const grpcExample = `// IQEX gRPC — Place a limit order (Python)
import iqex_pb2, iqex_pb2_grpc
import grpc

channel = grpc.secure_channel(
    'api.iqex.io:443',
    grpc.ssl_channel_credentials()
)
stub = iqex_pb2_grpc.OrderServiceStub(channel)

response = stub.PlaceOrder(iqex_pb2.PlaceOrderRequest(
    market_id='cricket_ipl_match_odds',
    side='back',
    price=2.50,
    size=1000,
    order_type='limit'
))
# response.order_id → "ord_abc123"`

const apiCapabilities = [
  { labelKey: 'developers.specAuthLabel', valueKey: 'developers.specAuthValue' },
  { labelKey: 'developers.specProtocolLabel', valueKey: 'developers.specProtocolValue' },
  { labelKey: 'developers.specIdempotencyLabel', valueKey: 'developers.specIdempotencyValue' },
  { labelKey: 'developers.specOrderTypesLabel', valueKey: 'developers.specOrderTypesValue' },
  { labelKey: 'developers.specDataFormatLabel', valueKey: 'developers.specDataFormatValue' },
  { labelKey: 'developers.specEnvironmentsLabel', valueKey: 'developers.specEnvironmentsValue', comingSoon: ['developers.specEnvironmentsComingSoon'] },
  { labelKey: 'developers.specSlaLabel', valueKey: 'developers.specSlaValue' },
]

export default function Developers() {
  const { t } = useTranslation()
  useDocumentTitle('developers.pageTitle')
  return (
    <>
      <Hero
        badge={t('developers.heroBadge')}
        title={t('developers.heroTitle')}
        titleAccent={t('developers.heroAccent')}
        subtitle={t('developers.heroSubtitle')}
        primaryCTA={{ label: t('developers.ctaGetAccess'), to: '/contact' }}
        secondaryCTA={{ label: t('developers.ctaViewTech'), to: '/technology' }}
        compact
      />

      {/* API Features */}
      <section className="py-24 bg-btx-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label={t('developers.apiLabel')}
            title={t('developers.apiTitle')}
            subtitle={t('developers.apiSubtitle')}
            center
          />
          <div className="mt-16 grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {apiFeatures.map((feature, i) => (
              <motion.div
                key={feature.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`p-6 rounded-xl border transition-colors group relative ${
                  feature.comingSoon
                    ? 'border-btx-500/20 bg-btx-700/20 opacity-60'
                    : 'border-btx-500/30 bg-btx-700/40 hover:border-accent/20'
                }`}
              >
                <div className={`w-10 h-10 rounded-lg border flex items-center justify-center mb-4 transition-colors ${
                  feature.comingSoon
                    ? 'bg-btx-600/20 border-btx-500/20'
                    : 'bg-accent/10 border-accent/20 group-hover:bg-accent/15'
                }`}>
                  <feature.icon className={feature.comingSoon ? 'text-btx-400' : 'text-accent'} size={20} />
                </div>
                <div className="flex items-center gap-1.5 mb-2">
                  <h3 className="font-semibold text-btx-50">{t(feature.titleKey)}</h3>
                  {feature.comingSoon && <ComingSoonBadge />}
                </div>
                <p className="text-sm text-btx-200 leading-relaxed">{t(feature.descriptionKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-24 bg-btx-800/30 border-y border-btx-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label={t('developers.quickLabel')}
            title={t('developers.quickTitle')}
            subtitle={t('developers.quickSubtitle')}
            center
          />
          <div className="mt-16 max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl border border-btx-500/30 overflow-hidden"
            >
              <div className="flex items-center justify-between px-4 py-3 bg-btx-700/80 border-b border-btx-500/30">
                <div className="flex items-center gap-2">
                  <Terminal size={14} className="text-accent" />
                  <span className="text-xs font-medium text-btx-200">{t('developers.codeSampleLabel')}</span>
                </div>
                <button className="text-btx-300 hover:text-btx-100 transition-colors">
                  <Copy size={14} />
                </button>
              </div>
              <pre className="p-5 bg-btx-800/80 text-sm leading-relaxed overflow-x-auto">
                <code className="text-btx-200 font-mono text-xs">{grpcExample}</code>
              </pre>
            </motion.div>
          </div>
        </div>
      </section>

      {/* API Specifications */}
      <section className="py-24 bg-btx-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeader
                label={t('developers.specLabel')}
                title={t('developers.specTitle')}
                subtitle={t('developers.specSubtitle')}
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mt-8 bg-btx-700/50 border border-btx-500/30 rounded-xl overflow-hidden"
              >
                {apiCapabilities.map((cap) => (
                  <div
                    key={cap.labelKey}
                    className="flex items-center justify-between px-6 py-4 border-b border-btx-500/20 last:border-0"
                  >
                    <span className="text-sm text-btx-300">{t(cap.labelKey)}</span>
                    <div className="flex items-center gap-3 flex-wrap justify-end">
                      <span className="text-sm text-btx-100 font-medium font-mono">{t(cap.valueKey)}</span>
                      {cap.comingSoon && cap.comingSoon.map((item) => (
                        <span key={item} className="flex items-center gap-1">
                          <span className="text-sm text-btx-100 font-medium font-mono">{t(item)}</span>
                          <ComingSoonBadge />
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            <div>
              <SectionHeader
                label={t('developers.resLabel')}
                title={t('developers.resTitle')}
                subtitle={t('developers.resSubtitle')}
              />
              <div className="mt-8 space-y-4">
                {resources.map((resource, i) => (
                  <motion.div
                    key={resource.titleKey}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-start gap-4 p-5 rounded-xl border border-btx-500/30 bg-btx-700/40 hover:border-accent/20 transition-colors group cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent/15 transition-colors">
                      <resource.icon className="text-accent" size={18} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-btx-50 text-sm">{t(resource.titleKey)}</h3>
                        <span className="px-2 py-0.5 rounded bg-btx-600/80 text-[10px] text-btx-300 font-mono">
                          {resource.tag}
                        </span>
                      </div>
                      <p className="text-xs text-btx-200 leading-relaxed">{t(resource.descriptionKey)}</p>
                    </div>
                    <ArrowRight size={14} className="text-btx-400 group-hover:text-accent shrink-0 mt-1 transition-colors" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title={t('developers.ctaTitle')}
        subtitle={t('developers.ctaSubtitle')}
        primaryCTA={{ label: t('developers.ctaGetAccess2'), to: '/contact' }}
        secondaryCTA={{ label: t('developers.ctaViewTech'), to: '/technology' }}
      />
    </>
  )
}
