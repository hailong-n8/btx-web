import { motion } from 'framer-motion'
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
    title: 'Stablecoin Deposits & Withdrawals',
    description:
      'Accept and settle in USDT, USDC, and other major stablecoins. Fast onboarding with global reach and minimal friction.',
  },
  {
    icon: Zap,
    title: 'Fast Global Settlement',
    description:
      'Near-instant settlement across borders without traditional banking delays. 24/7 availability with finality guarantees.',
  },
  {
    icon: Shield,
    title: 'Institutional-Grade Custody',
    description:
      'Enterprise security controls with multi-signature wallets, cold storage, and comprehensive audit trails for institutional compliance.',
  },
  {
    icon: Eye,
    title: 'Optional On-Chain Transparency',
    description:
      'Provable fairness with optional on-chain settlement records. Verifiable market outcomes without compromising performance.',
  },
]

const benefits = [
  {
    icon: Wallet,
    title: 'Multi-Currency Support',
    description: 'Fiat and crypto rails in a unified settlement layer. Operators choose their preferred payment mix.',
  },
  {
    icon: Globe,
    title: 'Borderless Access',
    description: 'Reach traders globally without complex banking integrations. Crypto-native onboarding for underserved markets.',
  },
  {
    icon: Lock,
    title: 'Regulatory Compliant',
    description: 'Built with compliance-first design. KYC/AML integration, transaction monitoring, and jurisdictional controls.',
  },
  {
    icon: RefreshCw,
    title: 'Hybrid Architecture',
    description: 'Best of both worlds — traditional fiat processing combined with Web3 settlement where it adds value.',
  },
]

const techSpecs = [
  { label: 'Supported Chains', value: 'Ethereum, Tron, Polygon, BSC' },
  { label: 'Stablecoins', value: 'USDT, USDC, DAI' },
  { label: 'Settlement Time', value: 'Near-instant (block confirmation)' },
  { label: 'Custody Model', value: 'Multi-sig + Cold Storage' },
  { label: 'Compliance', value: 'Built-in KYC/AML hooks' },
  { label: 'API Integration', value: 'REST & Webhook callbacks' },
]

export default function Web3() {
  useDocumentTitle('Web3 & Payments')
  return (
    <>
      <Hero
        badge="Web3 & Payments"
        title="Hybrid Web2/Web3 "
        titleAccent="Payment Rails"
        subtitle="Bridge traditional finance and crypto with institutional-grade settlement infrastructure. Stablecoin deposits, fast global settlement, and optional on-chain transparency."
        primaryCTA={{ label: 'Discuss Integration', to: '/contact' }}
        secondaryCTA={{ label: 'View Technology', to: '/technology' }}
        compact
      />

      {/* Core Features */}
      <section className="py-24 bg-btx-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Infrastructure"
            title="Payment Infrastructure Built for Scale"
            subtitle="Purpose-built settlement layer that combines the speed of crypto with the reliability of traditional finance."
            center
          />
          <div className="mt-16 grid md:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <FeatureCard key={feature.title} {...feature} index={i} />
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
                label="Architecture"
                title="Designed for Institutional Requirements"
                subtitle="Our hybrid payment architecture provides the flexibility operators need while maintaining the security institutions demand."
              />
              <div className="mt-8 space-y-4">
                {[
                  'Unified settlement API for fiat and crypto',
                  'Automated conversion and reconciliation',
                  'Hot/warm/cold wallet management',
                  'Real-time balance tracking and reporting',
                  'Configurable withdrawal approval workflows',
                  'Transaction monitoring and AML screening',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent shrink-0 mt-0.5" size={18} />
                    <span className="text-sm text-btx-200">{item}</span>
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
              <h3 className="text-lg font-semibold mb-6 text-btx-100">Technical Specifications</h3>
              <div className="space-y-0">
                {techSpecs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex items-start justify-between py-4 border-b border-btx-500/20 last:border-0 gap-4"
                  >
                    <span className="text-sm text-btx-300 shrink-0">{spec.label}</span>
                    <span className="text-sm text-btx-100 font-medium text-right">{spec.value}</span>
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
            label="Benefits"
            title="Why Hybrid Payment Rails"
            subtitle="Combine the best of traditional and crypto payment infrastructure."
            center
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-6 rounded-xl border border-btx-500/20 bg-btx-700/30 hover:border-accent/20 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/15 transition-colors">
                  <benefit.icon className="text-accent" size={22} />
                </div>
                <h3 className="font-semibold text-btx-50 mb-2">{benefit.title}</h3>
                <p className="text-sm text-btx-200 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Integrate Web3 Payment Rails"
        subtitle="Connect with our team to explore stablecoin settlement and hybrid payment infrastructure."
        primaryCTA={{ label: 'Contact Us', to: '/contact' }}
        secondaryCTA={{ label: 'View API Docs', to: '/developers' }}
      />
    </>
  )
}
