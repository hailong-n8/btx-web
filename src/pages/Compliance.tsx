import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
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
    titleKey: 'compliance.pillarJurisdiction',
    descriptionKey: 'compliance.pillarJurisdictionDesc',
  },
  {
    icon: UserCheck,
    titleKey: 'compliance.pillarKyc',
    descriptionKey: 'compliance.pillarKycDesc',
  },
  {
    icon: Eye,
    titleKey: 'compliance.pillarSurveillance',
    descriptionKey: 'compliance.pillarSurveillanceDesc',
  },
  {
    icon: Shield,
    titleKey: 'compliance.pillarResponsible',
    descriptionKey: 'compliance.pillarResponsibleDesc',
  },
]

const frameworks = [
  {
    icon: FileCheck,
    titleKey: 'compliance.capMonitoring',
    descriptionKey: 'compliance.capMonitoringDesc',
  },
  {
    icon: AlertTriangle,
    titleKey: 'compliance.capSar',
    descriptionKey: 'compliance.capSarDesc',
  },
  {
    icon: Globe,
    titleKey: 'compliance.capMultiJuris',
    descriptionKey: 'compliance.capMultiJurisDesc',
  },
  {
    icon: Lock,
    titleKey: 'compliance.capDataProtection',
    descriptionKey: 'compliance.capDataProtectionDesc',
  },
  {
    icon: BookOpen,
    titleKey: 'compliance.capAudit',
    descriptionKey: 'compliance.capAuditDesc',
  },
  {
    icon: UserCheck,
    titleKey: 'compliance.capIdentity',
    descriptionKey: 'compliance.capIdentityDesc',
  },
]

const commitments = [
  'compliance.commit1',
  'compliance.commit2',
  'compliance.commit3',
  'compliance.commit4',
  'compliance.commit5',
  'compliance.commit6',
  'compliance.commit7',
  'compliance.commit8',
]

export default function Compliance() {
  const { t } = useTranslation()
  useDocumentTitle('compliance.pageTitle')
  return (
    <>
      <Hero
        badge={t('compliance.heroBadge')}
        title={t('compliance.heroTitle')}
        titleAccent={t('compliance.heroAccent')}
        subtitle={t('compliance.heroSubtitle')}
        compact
      />

      {/* Core Pillars */}
      <section className="py-24 bg-btx-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label={t('compliance.frameworkLabel')}
            title={t('compliance.frameworkTitle')}
            subtitle={t('compliance.frameworkSubtitle')}
            center
          />
          <div className="mt-16 grid md:grid-cols-2 gap-6">
            {compliancePillars.map((pillar, i) => (
              <FeatureCard key={pillar.titleKey} icon={pillar.icon} title={t(pillar.titleKey)} description={t(pillar.descriptionKey)} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Frameworks */}
      <section className="py-24 bg-btx-800/30 border-y border-btx-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label={t('compliance.capLabel')}
            title={t('compliance.capTitle')}
            subtitle={t('compliance.capSubtitle')}
            center
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {frameworks.map((fw, i) => (
              <motion.div
                key={fw.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-6 rounded-xl border border-btx-500/30 bg-btx-700/40 hover:border-accent/20 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/15 transition-colors">
                  <fw.icon className="text-accent" size={20} />
                </div>
                <h3 className="font-semibold text-btx-50 mb-2">{t(fw.titleKey)}</h3>
                <p className="text-sm text-btx-200 leading-relaxed">{t(fw.descriptionKey)}</p>
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
                label={t('compliance.commitLabel')}
                title={t('compliance.commitTitle')}
                subtitle={t('compliance.commitSubtitle')}
              />
              <p className="mt-4 text-sm text-btx-200 leading-relaxed">
                {t('compliance.commitDesc')}
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-btx-700/50 border border-btx-500/30 rounded-xl p-8"
            >
              <h3 className="text-lg font-semibold mb-6 text-btx-100">{t('compliance.commitListTitle')}</h3>
              <div className="space-y-3">
                {commitments.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-btx-200">{t(item)}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection
        title={t('compliance.ctaTitle')}
        subtitle={t('compliance.ctaSubtitle')}
        primaryCTA={{ label: t('compliance.ctaContact'), to: '/contact' }}
        secondaryCTA={{ label: t('compliance.ctaAbout'), to: '/about' }}
      />
    </>
  )
}
