import {
  Palette,
  ShieldCheck,
  BarChart3,
  Settings,
  Plug,
  LayoutDashboard,
  LineChart,
  Globe,
  Users,
  Gamepad2,
  Coins,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'
import Hero from '../components/Hero'
import SectionHeader from '../components/SectionHeader'
import FeatureCard from '../components/FeatureCard'
import CTASection from '../components/CTASection'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import useDocumentTitle from '../hooks/useDocumentTitle'

const included = [
  {
    icon: Palette,
    title: 'Fully Branded UI',
    description: 'Your brand identity across the full trading interface — logo, colours, and domain.',
  },
  {
    icon: ShieldCheck,
    title: 'Risk Management Suite',
    description: 'Position monitoring, market controls, and operational risk tools — out of the box.',
  },
  {
    icon: BarChart3,
    title: 'Settlement Engine',
    description: 'Automated multi-currency settlement with real-time reconciliation.',
  },
  {
    icon: Settings,
    title: 'Commission Splitting',
    description: 'Configurable commission models and transparent revenue sharing.',
  },
]

const integration = [
  {
    icon: Plug,
    title: 'API Access',
    description: 'Full gRPC API access for your systems and workflows.',
  },
  {
    icon: LayoutDashboard,
    title: 'Admin Dashboard',
    description: 'Back-office tools for user management, market config, and operations.',
  },
  {
    icon: LineChart,
    title: 'Real-Time Reporting',
    description: 'Live dashboards for volumes, P&L, customer activity, and risk.',
  },
]

const targetClients = [
  {
    icon: Globe,
    title: 'Regional Operators',
    description: 'Localised exchange with region-specific sports, languages, and payments.',
  },
  {
    icon: Users,
    title: 'Affiliates & Networks',
    description: 'Turn your audience into active traders under your brand.',
  },
  {
    icon: Gamepad2,
    title: 'Sports Communities',
    description: 'Professional prediction markets tailored to your community.',
  },
  {
    icon: Coins,
    title: 'Crypto & Web3 Platforms',
    description: 'Sports trading with stablecoin integration and hybrid settlement.',
  },
]

const steps = [
  { step: '01', title: 'Consultation', desc: 'Define scope, markets, branding, and commercial structure.' },
  { step: '02', title: 'Configuration', desc: 'Platform setup, branding, risk parameters, and API integration.' },
  { step: '03', title: 'Testing', desc: 'UAT, stress testing, and compliance review.' },
  { step: '04', title: 'Launch', desc: 'Go live with full support and ongoing optimisation.' },
]

export default function WhiteLabel() {
  useDocumentTitle('White Label Solutions')
  return (
    <>
      <Hero
        badge="White Label Solutions"
        title="Launch Your Own Exchange "
        titleAccent="in Weeks"
        subtitle="Fully branded, exchange-grade platform powered by BTX. Matching engine to settlement — included."
        primaryCTA={{ label: 'Request a Demo', to: '/contact' }}
        secondaryCTA={{ label: 'View Technology', to: '/technology' }}
      />

      {/* What's Included */}
      <section className="py-24 bg-btx-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Platform Components"
            title="Everything You Need to Operate"
            subtitle="Complete exchange stack — front-end to settlement — fully managed."
            center
          />
          <div className="mt-16 grid md:grid-cols-2 gap-6">
            {included.map((item, i) => (
              <FeatureCard key={item.title} {...item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Deployment Timeline */}
      <section className="py-24 bg-btx-800/30 border-y border-btx-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Deployment Process"
            title="From Concept to Live Exchange"
            subtitle="Structured process for a smooth, predictable launch."
            center
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative p-6 rounded-xl border border-btx-500/30 bg-btx-700/40"
              >
                <div className="text-4xl font-bold text-accent/20 mb-4">{s.step}</div>
                <h3 className="text-lg font-semibold text-btx-50 mb-2">{s.title}</h3>
                <p className="text-sm text-btx-200 leading-relaxed">{s.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 text-btx-500">
                    <ArrowRight size={16} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className="py-24 bg-btx-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Integration"
            title="Seamless Technical Integration"
            subtitle="Connect BTX with your existing infrastructure."
            center
          />
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {integration.map((item, i) => (
              <FeatureCard key={item.title} {...item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-24 bg-btx-800/30 border-y border-btx-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Target Partners"
            title="Built for Ambitious Operators"
            subtitle="Regional operator, sports community, or Web3 platform — BTX gives you the infrastructure to compete."
            center
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetClients.map((client, i) => (
              <motion.div
                key={client.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-xl border border-btx-500/20 bg-btx-700/30 hover:border-accent/20 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/15 transition-colors">
                  <client.icon className="text-accent" size={22} />
                </div>
                <h3 className="font-semibold text-btx-50 mb-2">{client.title}</h3>
                <p className="text-sm text-btx-200 leading-relaxed">{client.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why BTX */}
      <section className="py-24 bg-btx-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                label="Why BTX"
                title="The Operator's Advantage"
                subtitle="Live exchange infrastructure backed by institutional-grade technology."
              />
              <div className="mt-8 space-y-4">
                {[
                  'No development team required — fully managed platform',
                  'Continuous updates to matching engine and risk systems',
                  'Access to BTX liquidity pool and market maker network',
                  'Flexible commercial terms with transparent revenue sharing',
                  'Dedicated account management and technical support',
                  'Full regulatory and compliance framework support',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent shrink-0 mt-0.5" size={18} />
                    <span className="text-sm text-btx-200">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-accent hover:bg-accent-light text-accent-fg font-semibold rounded-lg transition-all group"
              >
                Discuss Your Requirements
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-btx-700/50 border border-btx-500/30 rounded-xl p-8"
            >
              <h3 className="text-lg font-semibold mb-6 text-btx-100">Typical Deployment Includes</h3>
              <div className="space-y-3">
                {[
                  'Branded trading UI (web & mobile-responsive)',
                  'Full order book & matching engine access',
                  'Risk management dashboard',
                  'Customer management & KYC tools',
                  'Settlement & reconciliation engine',
                  'Reporting & analytics suite',
                  'API access for third-party integrations',
                  'Sandbox environment for testing',
                ].map((item, i) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 py-2 border-b border-btx-500/20 last:border-0"
                  >
                    <span className="text-accent text-xs font-mono">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-sm text-btx-200">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Launch Your Exchange?"
        subtitle="Get in touch with our partnerships team to discuss your white-label requirements."
        primaryCTA={{ label: 'Contact Partnerships', to: '/contact' }}
        secondaryCTA={{ label: 'Explore Technology', to: '/technology' }}
      />
    </>
  )
}
