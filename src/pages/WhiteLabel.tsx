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
    description:
      'Deploy a complete trading interface with your brand identity — logo, colours, domain, and custom styling applied across all touchpoints.',
  },
  {
    icon: ShieldCheck,
    title: 'Risk Management Suite',
    description:
      'Dynamic exposure controls, customer profiling, and automated hedging infrastructure included out of the box.',
  },
  {
    icon: BarChart3,
    title: 'Settlement Engine',
    description:
      'Automated settlement with multi-currency support, real-time reconciliation, and comprehensive audit trails.',
  },
  {
    icon: Settings,
    title: 'Commission Splitting',
    description:
      'Flexible revenue-sharing structures with configurable commission models, tiered partner programs, and transparent reporting.',
  },
]

const integration = [
  {
    icon: Plug,
    title: 'API Access',
    description: 'Full REST & WebSocket API access for deep integration with your existing systems and workflows.',
  },
  {
    icon: LayoutDashboard,
    title: 'Admin Dashboard',
    description: 'Comprehensive back-office tools for user management, market configuration, and operational oversight.',
  },
  {
    icon: LineChart,
    title: 'Real-Time Reporting',
    description: 'Live dashboards with trading volumes, P&L analytics, customer activity, and risk exposure metrics.',
  },
]

const targetClients = [
  {
    icon: Globe,
    title: 'Regional Operators',
    description: 'Launch a localised exchange for your market with region-specific sports, languages, and payment methods.',
  },
  {
    icon: Users,
    title: 'Affiliates & Networks',
    description: 'Convert your audience into active traders with a fully managed exchange platform under your brand.',
  },
  {
    icon: Gamepad2,
    title: 'Sports Communities',
    description: 'Engage sports fans with professional-grade prediction markets tailored to your community interests.',
  },
  {
    icon: Coins,
    title: 'Crypto & Web3 Platforms',
    description: 'Add sports trading to your crypto offering with seamless stablecoin integration and hybrid settlement.',
  },
]

const steps = [
  { step: '01', title: 'Consultation', desc: 'Define scope, markets, branding, and commercial structure.' },
  { step: '02', title: 'Configuration', desc: 'Platform setup, branding, risk parameters, and API integration.' },
  { step: '03', title: 'Testing', desc: 'Sandbox environment for UAT, stress testing, and compliance review.' },
  { step: '04', title: 'Launch', desc: 'Go live with full support, monitoring, and ongoing optimisation.' },
]

export default function WhiteLabel() {
  useDocumentTitle('White Label Solutions')
  return (
    <>
      <Hero
        badge="White Label Solutions"
        title="Launch Your Own Exchange "
        titleAccent="in Weeks"
        subtitle="Deploy a fully branded, exchange-grade trading platform powered by BTX infrastructure. From matching engine to settlement — everything you need to operate a professional sports exchange."
        primaryCTA={{ label: 'Request a Demo', to: '/contact' }}
        secondaryCTA={{ label: 'View Technology', to: '/technology' }}
      />

      {/* What's Included */}
      <section className="py-24 bg-btx-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Platform Components"
            title="Everything You Need to Operate"
            subtitle="A complete exchange stack — from front-end UI to back-end settlement — fully managed and continuously updated."
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
            subtitle="Our structured deployment process ensures a smooth, predictable launch timeline."
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
            subtitle="Deep integration capabilities to connect BTX with your existing infrastructure."
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
            subtitle="Whether you're a regional operator, sports community, or Web3 platform — BTX white-label gives you the infrastructure to compete."
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
                subtitle="BTX white-label is not a template — it's a live exchange infrastructure backed by institutional-grade technology."
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
