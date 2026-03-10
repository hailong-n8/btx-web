import { motion } from 'framer-motion'
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
    title: 'Transparent Fee Model',
    description: 'No hidden costs. Competitive rates designed for professional volume.',
  },
  {
    icon: BarChart3,
    title: 'Volume-Based Tiers',
    description: 'Progressive fee reduction as monthly volumes increase.',
  },
  {
    icon: Award,
    title: 'Incentive Programs',
    description: 'Fee rebates and participation incentives for qualifying providers.',
  },
]

const infraFeatures = [
  {
    icon: Server,
    title: 'Co-Location Ready',
    description: 'Low-latency connectivity for fastest execution and data delivery.',
  },
  {
    icon: Timer,
    title: 'Low-Latency Matching',
    description: 'Consistent performance and fast execution under high volume.',
  },
  {
    icon: ListOrdered,
    title: 'Advanced Order Types',
    description: 'Limit, market, and cancel-and-replace operations.',
  },
]

const tiers = [
  { tier: 'Standard', volume: '< £1M / month', makerFee: '0.10%', takerFee: '0.20%' },
  { tier: 'Professional', volume: '£1M – £10M', makerFee: '0.06%', takerFee: '0.15%' },
  { tier: 'Institutional', volume: '£10M – £50M', makerFee: '0.03%', takerFee: '0.10%' },
  { tier: 'Market Maker', volume: '> £50M', makerFee: 'Custom', takerFee: 'Custom' },
]

export default function Liquidity() {
  useDocumentTitle('Liquidity & Market Making')
  return (
    <>
      <Hero
        badge="Liquidity & Market Making"
        title="Built for Professional "
        titleAccent="Liquidity Providers"
        subtitle="Deep order books, transparent fees, and performance infrastructure for professional market makers."
        primaryCTA={{ label: 'Apply as Liquidity Partner', to: '/contact' }}
        secondaryCTA={{ label: 'View API Docs', to: '/developers' }}
      />

      {/* Fee Model */}
      <section className="py-24 bg-btx-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Fee Model"
            title="Competitive & Transparent Pricing"
            subtitle="Clear maker/taker fees with volume tiers and performance incentives."
          />
          <div className="mt-14 grid sm:grid-cols-3 gap-6">
            {feeFeatures.map((f, i) => (
              <FeatureCard key={f.title} {...f} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Fee Tiers Table */}
      <section className="py-24 bg-btx-800/30 border-y border-btx-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Volume Tiers"
            title="Fee Schedule"
            subtitle="Higher volumes unlock lower fees."
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
                  <th className="text-left px-6 py-4 text-sm font-semibold text-btx-100 uppercase tracking-wider">Tier</th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-btx-100 uppercase tracking-wider">Monthly Volume</th>
                  <th className="text-center px-6 py-4 text-sm font-semibold text-btx-100 uppercase tracking-wider">Maker Fee</th>
                  <th className="text-center px-6 py-4 text-sm font-semibold text-btx-100 uppercase tracking-wider">Taker Fee</th>
                </tr>
              </thead>
              <tbody>
                {tiers.map((t, i) => (
                  <tr
                    key={t.tier}
                    className={`border-t border-btx-500/20 ${i === tiers.length - 1 ? 'bg-accent/5' : 'bg-btx-800/50'}`}
                  >
                    <td className="px-6 py-4 text-sm font-medium text-btx-50">{t.tier}</td>
                    <td className="px-6 py-4 text-sm text-btx-200">{t.volume}</td>
                    <td className="px-6 py-4 text-sm text-accent text-center font-mono">{t.makerFee}</td>
                    <td className="px-6 py-4 text-sm text-btx-100 text-center font-mono">{t.takerFee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
          <p className="mt-4 text-xs text-btx-300 text-center">
            Custom pricing available for qualifying market makers. Contact us for details.
          </p>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-24 bg-btx-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Infrastructure"
            title="Performance-Grade Trading Infrastructure"
            subtitle="Built for algorithmic trading, market making, and high-frequency strategies."
          />
          <div className="mt-14 grid sm:grid-cols-3 gap-6">
            {infraFeatures.map((f, i) => (
              <FeatureCard key={f.title} {...f} index={i} />
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
                label="Incentive Programs"
                title="Rewarding Market Excellence"
                subtitle="Structured rewards for providers meeting performance benchmarks."
              />
              <div className="mt-8 space-y-6">
                {[
                  {
                    icon: Target,
                    title: 'Performance Rebates',
                    desc: 'Fee rebates based on quoting quality, uptime, and spread metrics.',
                  },
                  {
                    icon: TrendingUp,
                    title: 'Volume Incentives',
                    desc: 'Additional rewards for consistent monthly volume targets.',
                  },
                  {
                    icon: Award,
                    title: 'Network Participation',
                    desc: 'Equity participation for qualifying infrastructure partners.',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                      <item.icon className="text-accent" size={18} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-btx-50 text-sm">{item.title}</h4>
                      <p className="text-sm text-btx-200 mt-1">{item.desc}</p>
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
              <h3 className="text-xl font-bold text-btx-50 mb-4">Become a Liquidity Partner</h3>
              <p className="text-sm text-btx-200 leading-relaxed mb-6">
                Join our network for preferential fees, dedicated support, and co-location options.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  'Dedicated account management',
                  'Custom fee negotiation',
                  'Priority API support',
                  'Early access to new markets',
                ].map((perk) => (
                  <div key={perk} className="flex items-center gap-2 text-sm text-btx-200">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {perk}
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-light text-accent-fg font-semibold rounded-lg transition-all w-full justify-center group"
              >
                Apply Now
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection
        title="Start Providing Liquidity"
        subtitle="Discuss fee structures, technical requirements, and onboarding with our partnerships team."
        primaryCTA={{ label: 'Contact Partnerships', to: '/contact' }}
        secondaryCTA={{ label: 'Explore Technology', to: '/technology' }}
      />
    </>
  )
}
