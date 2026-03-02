import { motion } from 'framer-motion'
import {
  Target,
  Database,
  Cpu,
  Layers,
  Globe,
  Shield,
  Zap,
  TrendingUp,
} from 'lucide-react'
import Hero from '../components/Hero'
import SectionHeader from '../components/SectionHeader'
import CTASection from '../components/CTASection'
import useDocumentTitle from '../hooks/useDocumentTitle'

const timeline = [
  {
    year: 'Foundation',
    title: '10+ Years Exchange Trading DNA',
    description:
      'Built on over a decade of exchange trading experience, BTX was founded to bring institutional-grade infrastructure to the sports trading market.',
  },
  {
    year: 'Evolution',
    title: 'Deep Sports Data Expertise',
    description:
      'Integration with comprehensive sports data sources — pricing models, real-time feeds, and predictive analytics powering accurate market creation.',
  },
  {
    year: 'Today',
    title: 'Proven White-Label Infrastructure',
    description:
      'A mature platform serving operators globally with reliable matching, settlement, and risk management — continuously refined through production use.',
  },
]

const groupStructure = [
  {
    icon: Database,
    title: 'Data',
    description:
      'Deep sports data integration and analytics. Real-time feeds, historical databases, and predictive modelling capabilities.',
    highlight: 'Decimal Sports Data',
  },
  {
    icon: Cpu,
    title: 'Technology',
    description:
      'Purpose-built exchange infrastructure. Matching engine, risk systems, API platform, and operational tooling.',
    highlight: 'BTX Matching Engine & APIs',
  },
  {
    icon: Layers,
    title: 'Exchange Engine',
    description:
      'Core trading infrastructure. Liquidity bridge, settlement engine, risk controls, and market creation tools.',
    highlight: 'Liquidity Bridge & Settlement',
  },
]

const values = [
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We operate with transparency and accountability. Our systems are designed for fair, auditable markets.',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Sub-millisecond matters. We obsess over latency, throughput, and reliability in everything we build.',
  },
  {
    icon: TrendingUp,
    title: 'Innovation',
    description: 'We continuously evolve our technology to stay ahead of market demands and operator requirements.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Built for multi-region deployment with localisation, compliance, and infrastructure flexibility.',
  },
]

export default function About() {
  useDocumentTitle('About BTX')
  return (
    <>
      <Hero
        badge="About BTX"
        title="Build the Engine That Powers Global "
        titleAccent="Event Markets"
        subtitle="BTX is market infrastructure — not another betting exchange. We provide the technology, liquidity, and operational backbone that powers professional sports trading exchanges worldwide."
        compact
      />

      {/* Mission */}
      <section className="py-24 bg-btx-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                label="Our Mission"
                title="Powering the Future of Sports Trading"
                subtitle="We exist to provide the critical infrastructure that enables professional participants to create, access, and trade sports markets with institutional-grade tools and deep liquidity."
              />
              <div className="mt-8 flex items-start gap-4 p-5 rounded-xl bg-btx-700/40 border border-btx-500/30">
                <Target className="text-accent shrink-0 mt-1" size={22} />
                <div>
                  <h4 className="font-semibold text-btx-50 mb-1">Strategic Vision</h4>
                  <p className="text-sm text-btx-200 leading-relaxed">
                    To be the exchange that powers exchanges — providing the underlying technology and liquidity
                    layer that enables operators worldwide to build and scale their trading platforms.
                  </p>
                </div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: '10+', label: 'Years Trading DNA' },
                { value: '15+', label: 'Market Types' },
                { value: '<5ms', label: 'Execution Latency' },
                { value: '99.9%', label: 'Platform Uptime' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 rounded-xl bg-btx-700/50 border border-btx-500/30 text-center"
                >
                  <div className="text-3xl font-bold text-accent">{stat.value}</div>
                  <div className="text-xs text-btx-300 uppercase tracking-wider mt-2">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-24 bg-btx-800/30 border-y border-btx-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Our Journey"
            title="From Trading Expertise to Market Infrastructure"
            center
          />
          <div className="mt-16 max-w-3xl mx-auto space-y-0">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-12 pb-12 last:pb-0"
              >
                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                </div>
                {i < timeline.length - 1 && (
                  <div className="absolute left-[15px] top-8 w-px h-full bg-btx-500/30" />
                )}
                <div className="text-accent text-xs font-semibold uppercase tracking-wider mb-2">
                  {item.year}
                </div>
                <h3 className="text-xl font-bold text-btx-50 mb-2">{item.title}</h3>
                <p className="text-sm text-btx-200 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Group Structure */}
      <section className="py-24 bg-btx-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Group Structure"
            title="Three Pillars of Infrastructure"
            subtitle="BTX operates across three integrated verticals, each contributing to a cohesive exchange infrastructure platform."
            center
          />
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {groupStructure.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 lg:p-8 rounded-xl border border-btx-500/30 bg-btx-700/40 hover:border-accent/20 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent/15 transition-colors">
                  <pillar.icon className="text-accent" size={24} />
                </div>
                <h3 className="text-lg font-bold text-btx-50 mb-2">{pillar.title}</h3>
                <p className="text-sm text-btx-200 leading-relaxed mb-4">{pillar.description}</p>
                <span className="inline-block px-3 py-1 rounded-md bg-accent/5 border border-accent/15 text-xs text-accent font-medium">
                  {pillar.highlight}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-btx-800/30 border-y border-btx-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Our Values" title="What Drives Us" center />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-accent" size={24} />
                </div>
                <h3 className="font-semibold text-btx-50 mb-2">{value.title}</h3>
                <p className="text-sm text-btx-200 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Partner with BTX"
        subtitle="Explore how BTX infrastructure can power your exchange, trading operations, or market making activity."
        primaryCTA={{ label: 'Contact Us', to: '/contact' }}
        secondaryCTA={{ label: 'View Technology', to: '/technology' }}
      />
    </>
  )
}
