import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
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
    title: 'Deep Liquidity Access',
    description: 'Tight spreads and deep order books from professional market makers and institutional sources.',
  },
  {
    icon: Cpu,
    title: 'Exchange-Grade Technology',
    description: 'Deterministic matching engine with low-latency execution and real-time risk controls.',
  },
  {
    icon: Blocks,
    title: 'Modular White-Label Infrastructure',
    description: 'Deploy a branded exchange in weeks — UI, settlement, risk tools, and commissions included.',
  },
]

const audiences = [
  {
    icon: TrendingUp,
    title: 'Professional Market Makers',
    description: 'High-performance APIs, competitive fee tiers, and co-location ready.',
  },
  {
    icon: Building2,
    title: 'Exchanges & Operators',
    description: 'Full branding control, settlement, and risk management.',
  },
  {
    icon: Database,
    title: 'Sports Data Partners',
    description: 'Sports data integration, real-time feeds, and predictive analytics.',
  },
  {
    icon: Users,
    title: 'Institutional Traders',
    description: 'Professional execution, advanced order types, and transparent access.',
  },
]

const metrics = [
  { value: '15+', label: 'Market Types' },
  { value: '20+', label: 'Years Exchange DNA' },
  { value: '99.9%', label: 'Uptime SLA' },
]

export default function Home() {
  useDocumentTitle('Market Infrastructure for Global Sports')
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
              Market Infrastructure for Sports Exchanges
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] text-btx-50">
              The Infrastructure Layer
              <br />
              for Global Sports
              <br />
              <span className="text-accent">Markets</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 text-lg lg:text-xl text-btx-200 leading-relaxed max-w-2xl"
            >
              Exchange technology, professional liquidity, and programmable APIs for next-generation sports trading.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                to="/developers"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent hover:bg-accent-light text-accent-fg font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-accent/25 group"
              >
                Access the API
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                to="/liquidity"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-btx-400 hover:border-btx-300 text-btx-100 font-medium rounded-lg transition-all hover:bg-btx-600/50"
              >
                Become a Liquidity Partner
              </Link>
              <Link
                to="/white-label"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-btx-500/50 hover:border-btx-400 text-btx-200 font-medium rounded-lg transition-all hover:bg-btx-600/30"
              >
                Explore White Label
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
              { icon: Globe, label: 'Global Markets', value: 'Multi-Region' },
              { icon: BarChart3, label: 'Market Types', value: '15+' },
              { icon: Clock, label: 'Platform Uptime', value: '99.9%' },
            ].map((stat) => (
              <div key={stat.label} className="bg-btx-800/80 backdrop-blur-sm p-5 lg:p-6 flex items-center gap-4">
                <stat.icon className="text-accent shrink-0" size={20} />
                <div>
                  <div className="text-lg font-bold text-btx-50">{stat.value}</div>
                  <div className="text-xs text-btx-300 uppercase tracking-wider">{stat.label}</div>
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
            label="Core Infrastructure"
            title="Enterprise-Grade Exchange Technology"
            subtitle="Purpose-built for professional market participants and exchange operators worldwide."
            center
          />
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => (
              <FeatureCard key={pillar.title} {...pillar} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-20 bg-btx-800/50 border-y border-btx-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 divide-x divide-btx-500/30">
            {metrics.map((metric, i) => (
              <MetricCard key={metric.label} {...metric} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-24 bg-btx-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Our Clients"
            title="Built for Professional Market Participants"
            subtitle="Exchange-grade infrastructure, deep liquidity, and programmable access for institutions and professionals."
            center
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {audiences.map((audience, i) => (
              <motion.div
                key={audience.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-6 rounded-xl border border-btx-500/20 bg-btx-700/30 hover:border-accent/20 transition-colors group"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/15 transition-colors">
                  <audience.icon className="text-accent" size={24} />
                </div>
                <h3 className="font-semibold text-btx-50 mb-2">{audience.title}</h3>
                <p className="text-sm text-btx-200 leading-relaxed">{audience.description}</p>
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
                label="Technology"
                title="Exchange Engine Architecture"
                subtitle="Deterministic execution with crash recovery and zero order loss."
              />
              <div className="mt-8 space-y-4">
                {[
                  'Low-latency order book with price-time priority',
                  'Synthetic liquidity via cross-runner matching',
                  'Real-time risk controls and position management',
                  'gRPC API with full market and order access',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center mt-0.5 shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    </div>
                    <span className="text-btx-200 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/technology"
                className="inline-flex items-center gap-2 mt-8 text-accent hover:text-accent-light font-medium text-sm transition-colors group"
              >
                Explore our technology
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
                  { label: 'Client Layer', items: ['gRPC API'], color: '#0ea5e9' },
                  { label: 'Matching Engine', items: ['Order Book', 'Price Engine', 'Risk Check'], color: '#00d4aa' },
                  { label: 'Liquidity Bridge', items: ['Aggregation', 'Settlement'], color: '#00d4aa' },
                  { label: 'Data Layer', items: ['Sports Data', 'Analytics'], color: '#22d3ee' },
                ].map((layer, i) => (
                  <div key={layer.label}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: layer.color }} />
                      <span className="text-xs font-semibold text-btx-100 uppercase tracking-wider">
                        {layer.label}
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
        title="Ready to Build on IQEX?"
        subtitle="Explore API access, liquidity partnerships, or white-label deployment with our team."
        primaryCTA={{ label: 'Contact Us', to: '/contact' }}
        secondaryCTA={{ label: 'View API Documentation', to: '/developers' }}
      />
    </>
  )
}
