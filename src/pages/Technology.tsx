import { motion } from 'framer-motion'
import {
  Cpu,
  ShieldCheck,
  Radio,
  Code2,
  Zap,
  RotateCcw,
  BarChart3,
  Users,
  Layers,
  Timer,
  GitBranch,
  Workflow,
} from 'lucide-react'
import Hero from '../components/Hero'
import SectionHeader from '../components/SectionHeader'
import FeatureCard from '../components/FeatureCard'
import CTASection from '../components/CTASection'
import useDocumentTitle from '../hooks/useDocumentTitle'

const engineFeatures = [
  {
    icon: Zap,
    title: 'Sub-5ms Matching Latency',
    description: 'Deterministic price-time priority matching optimised for high-throughput environments.',
  },
  {
    icon: Layers,
    title: 'Multi-Level Order Book',
    description: 'Full depth-of-market visibility with synthetic liquidity via cross-runner matching algorithms.',
  },
  {
    icon: RotateCcw,
    title: 'Crash Recovery',
    description: 'Persistent order state ensures zero order loss across system restarts and failover events.',
  },
  {
    icon: Timer,
    title: 'High Throughput',
    description: 'Engineered to handle sustained order volumes with linear performance scaling.',
  },
]

const riskFeatures = [
  {
    icon: ShieldCheck,
    title: 'Dynamic Exposure Control',
    description: 'Per-market and global exposure limits with real-time position monitoring and automated risk responses.',
  },
  {
    icon: Users,
    title: 'Customer Intelligence',
    description: 'Behavioural profiling and segmentation for sophisticated counterparty risk management.',
  },
  {
    icon: BarChart3,
    title: 'Liquidity Segmentation',
    description: 'Smart order routing with adaptive spread management based on flow quality analysis.',
  },
  {
    icon: Workflow,
    title: 'Automated Hedging',
    description: 'Real-time hedge execution via liquidity bridge with configurable strategy parameters.',
  },
]

const marketFeatures = [
  {
    icon: Radio,
    title: 'Fast In-Play Markets',
    description: 'Sub-second market updates for live event trading across all supported sports verticals.',
  },
  {
    icon: GitBranch,
    title: '15+ Market Types',
    description: 'Match odds, handicaps, over/under, correct score, and custom event markets.',
  },
  {
    icon: Cpu,
    title: 'Custom Market Creation',
    description: 'Agent-requested and programmatic market creation for niche events and prediction markets.',
  },
]

const apiCapabilities = [
  { label: 'gRPC API', description: 'High-performance binary protocol for orders, markets, and account management' },
  { label: 'WebSocket Streams', description: 'Real-time streaming for prices, order updates, and market events' },
  { label: 'Sandbox Environment', description: 'Full-featured test environment with simulated market data' },
  { label: 'Idempotency', description: 'Safe retry semantics for all mutating operations' },
  { label: 'Atomic Operations', description: 'Cancel-and-place orders in a single atomic request' },
  { label: 'Rate Limiting', description: 'Transparent, tier-based rate limits with burst capacity' },
]

export default function Technology() {
  useDocumentTitle('Exchange Technology')
  return (
    <>
      <Hero
        badge="Exchange Technology"
        title="Built for Performance. "
        titleAccent="Designed for Scale."
        subtitle="Our exchange engine delivers institutional-grade performance with deterministic matching, comprehensive risk controls, and programmable APIs designed for professional market participants."
        primaryCTA={{ label: 'Access API Documentation', to: '/developers' }}
        secondaryCTA={{ label: 'Contact Engineering', to: '/contact' }}
      />

      {/* Matching Engine */}
      <section className="py-24 bg-btx-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Matching Engine"
            title="Deterministic Order Execution"
            subtitle="Purpose-built matching engine with price-time priority, supporting complex order types and synthetic liquidity generation."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {engineFeatures.map((f, i) => (
              <FeatureCard key={f.title} {...f} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Risk & Profiling */}
      <section className="py-24 bg-btx-800/30 border-y border-btx-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Risk & Profiling Engine"
            title="Intelligent Risk Management"
            subtitle="Dynamic exposure controls, customer profiling, and automated hedging infrastructure for sophisticated risk management."
          />
          <div className="mt-14 grid sm:grid-cols-2 gap-6">
            {riskFeatures.map((f, i) => (
              <FeatureCard key={f.title} {...f} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Market Creation */}
      <section className="py-24 bg-btx-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Market Creation Engine"
            title="Flexible Market Infrastructure"
            subtitle="Fast in-play markets, extensive market type coverage, and custom market creation capabilities."
          />
          <div className="mt-14 grid sm:grid-cols-3 gap-6">
            {marketFeatures.map((f, i) => (
              <FeatureCard key={f.title} {...f} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* APIs */}
      <section className="py-24 bg-btx-800/30 border-y border-btx-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeader
                label="API Infrastructure"
                title="Programmable Market Access"
                subtitle="RESTful APIs, WebSocket streams, and sandbox environments designed for rapid integration and reliable operation."
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
                  key={cap.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-4 p-4 rounded-lg bg-btx-700/30 border border-btx-500/20"
                >
                  <Code2 className="text-accent shrink-0 mt-0.5" size={18} />
                  <div>
                    <h4 className="text-sm font-semibold text-btx-50">{cap.label}</h4>
                    <p className="text-sm text-btx-200 mt-1">{cap.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="py-24 bg-btx-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="System Architecture"
            title="End-to-End Exchange Infrastructure"
            center
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-14 bg-btx-700/30 border border-btx-500/30 rounded-xl p-8 lg:p-12"
          >
            <div className="grid lg:grid-cols-5 gap-4 items-center">
              {[
                { label: 'Clients', items: ['gRPC', 'WebSocket', 'REST'], color: 'bg-accent-blue' },
                { label: 'Gateway', items: ['Auth', 'Rate Limit', 'Routing'], color: 'bg-accent-cyan' },
                { label: 'Engine', items: ['Order Book', 'Matching', 'Risk'], color: 'bg-accent' },
                { label: 'Bridge', items: ['Aggregation', 'Hedging', 'Settlement'], color: 'bg-accent' },
                { label: 'Data', items: ['Sports Feed', 'Analytics', 'Profiling'], color: 'bg-accent-cyan' },
              ].map((block, i) => (
                <div key={block.label}>
                  <div className="text-center mb-3">
                    <span className={`inline-block w-2 h-2 rounded-full ${block.color} mr-2`} />
                    <span className="text-xs font-semibold text-btx-100 uppercase tracking-wider">{block.label}</span>
                  </div>
                  <div className="space-y-2">
                    {block.items.map((item) => (
                      <div key={item} className="bg-btx-600/50 border border-btx-500/30 rounded-md px-3 py-2.5 text-center text-xs text-btx-200 font-medium">
                        {item}
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
        title="Ready to Integrate?"
        subtitle="Get sandbox access and start building with our exchange APIs today."
        primaryCTA={{ label: 'Get API Access', to: '/developers' }}
        secondaryCTA={{ label: 'Talk to Engineering', to: '/contact' }}
      />
    </>
  )
}
