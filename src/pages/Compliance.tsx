import { motion } from 'framer-motion'
import {
  Shield,
  Scale,
  UserCheck,
  Eye,
  FileCheck,
  AlertTriangle,
  Globe,
  Lock,
  CheckCircle2,
  BookOpen,
} from 'lucide-react'
import Hero from '../components/Hero'
import SectionHeader from '../components/SectionHeader'
import FeatureCard from '../components/FeatureCard'
import CTASection from '../components/CTASection'
import useDocumentTitle from '../hooks/useDocumentTitle'

const compliancePillars = [
  {
    icon: Scale,
    title: 'Jurisdictional Structure',
    description: 'Multi-jurisdictional framework with localised compliance and global operational standards.',
  },
  {
    icon: UserCheck,
    title: 'KYC / AML Standards',
    description: 'Identity verification and AML protocols at every layer, tiered by risk.',
  },
  {
    icon: Eye,
    title: 'Market Integrity & Surveillance',
    description: 'Real-time detection of manipulation with automated alerts for compliance teams.',
  },
  {
    icon: Shield,
    title: 'Responsible Market Operations',
    description: 'Exposure limits, cooling-off, and self-exclusion tools for regulated markets.',
  },
]

const frameworks = [
  {
    icon: FileCheck,
    title: 'Transaction Monitoring',
    description: 'Automated screening of all transactions against sanctions and PEP databases.',
  },
  {
    icon: AlertTriangle,
    title: 'Suspicious Activity Reporting',
    description: 'SAR workflows with escalation protocols and regulatory filing support.',
  },
  {
    icon: Globe,
    title: 'Multi-Jurisdiction Support',
    description: 'Per-jurisdiction rules with geo-fencing and localised reporting.',
  },
  {
    icon: Lock,
    title: 'Data Protection',
    description: 'GDPR-compliant handling with encryption and data residency controls.',
  },
  {
    icon: BookOpen,
    title: 'Audit Trail',
    description: 'Immutable audit logs with regulatory-ready reporting.',
  },
  {
    icon: UserCheck,
    title: 'Identity Verification',
    description: 'Multi-tier KYC with document, biometric, and ongoing due diligence.',
  },
]

const commitments = [
  'Licensed or licensable framework across target jurisdictions',
  'Independent security audits and penetration testing',
  'Regular compliance programme reviews and updates',
  'Dedicated compliance officer and regulatory liaison',
  'Staff training on AML, responsible trading, and data protection',
  'Transparent reporting to regulators and operators',
  'Cooperation with law enforcement and integrity bodies',
  'Continuous improvement based on regulatory developments',
]

export default function Compliance() {
  useDocumentTitle('Regulatory & Compliance')
  return (
    <>
      <Hero
        badge="Regulatory & Compliance"
        title="Built on Trust, "
        titleAccent="Governed by Standards"
        subtitle="Regulatory rigour built for institutional-grade market infrastructure."
        compact
      />

      {/* Core Pillars */}
      <section className="py-24 bg-btx-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Compliance Framework"
            title="Four Pillars of Regulatory Assurance"
            subtitle="Full-spectrum compliance for exchange infrastructure."
            center
          />
          <div className="mt-16 grid md:grid-cols-2 gap-6">
            {compliancePillars.map((pillar, i) => (
              <FeatureCard key={pillar.title} {...pillar} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Frameworks */}
      <section className="py-24 bg-btx-800/30 border-y border-btx-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Capabilities"
            title="Compliance Infrastructure"
            subtitle="Integrated tools for regulatory adherence across all operations."
            center
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {frameworks.map((fw, i) => (
              <motion.div
                key={fw.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-6 rounded-xl border border-btx-500/30 bg-btx-700/40 hover:border-accent/20 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/15 transition-colors">
                  <fw.icon className="text-accent" size={20} />
                </div>
                <h3 className="font-semibold text-btx-50 mb-2">{fw.title}</h3>
                <p className="text-sm text-btx-200 leading-relaxed">{fw.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="py-24 bg-btx-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                label="Our Commitment"
                title="Regulatory Excellence"
                subtitle="Operating at the highest standards of compliance and market integrity."
              />
              <p className="mt-4 text-sm text-btx-200 leading-relaxed">
                Strong compliance is a competitive advantage. Partners choose BTX for governance, security, and regulatory posture.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-btx-700/50 border border-btx-500/30 rounded-xl p-8"
            >
              <h3 className="text-lg font-semibold mb-6 text-btx-100">Our Commitments</h3>
              <div className="space-y-3">
                {commitments.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-btx-200">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection
        title="Compliance Enquiries"
        subtitle="For regulatory questions, compliance documentation, or partnership discussions."
        primaryCTA={{ label: 'Contact Compliance', to: '/contact' }}
        secondaryCTA={{ label: 'About BTX', to: '/about' }}
      />
    </>
  )
}
