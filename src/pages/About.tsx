import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
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
    yearKey: 'about.timelineFoundation',
    titleKey: 'about.timelineFoundationTitle',
    descriptionKey: 'about.timelineFoundationDesc',
  },
  {
    yearKey: 'about.timelineEvolution',
    titleKey: 'about.timelineEvolutionTitle',
    descriptionKey: 'about.timelineEvolutionDesc',
  },
  {
    yearKey: 'about.timelineToday',
    titleKey: 'about.timelineTodayTitle',
    descriptionKey: 'about.timelineTodayDesc',
  },
]

const groupStructure = [
  {
    icon: Database,
    titleKey: 'about.groupData',
    descriptionKey: 'about.groupDataDesc',
    highlightKey: 'about.groupDataHighlight',
  },
  {
    icon: Cpu,
    titleKey: 'about.groupTech',
    descriptionKey: 'about.groupTechDesc',
    highlightKey: 'about.groupTechHighlight',
  },
  {
    icon: Layers,
    titleKey: 'about.groupEngine',
    descriptionKey: 'about.groupEngineDesc',
    highlightKey: 'about.groupEngineHighlight',
  },
]

const values = [
  {
    icon: Shield,
    titleKey: 'about.valueIntegrity',
    descriptionKey: 'about.valueIntegrityDesc',
  },
  {
    icon: Zap,
    titleKey: 'about.valuePerformance',
    descriptionKey: 'about.valuePerformanceDesc',
  },
  {
    icon: TrendingUp,
    titleKey: 'about.valueInnovation',
    descriptionKey: 'about.valueInnovationDesc',
  },
  {
    icon: Globe,
    titleKey: 'about.valueGlobal',
    descriptionKey: 'about.valueGlobalDesc',
  },
]

export default function About() {
  const { t } = useTranslation()
  useDocumentTitle('about.pageTitle')
  return (
    <>
      <Hero
        badge={t('about.heroBadge')}
        title={t('about.heroTitle')}
        titleAccent={t('about.heroAccent')}
        subtitle={t('about.heroSubtitle')}
        compact
      />

      {/* Mission */}
      <section className="py-24 bg-btx-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                label={t('about.missionLabel')}
                title={t('about.missionTitle')}
                subtitle={t('about.missionSubtitle')}
              />
              <div className="mt-8 flex items-start gap-4 p-5 rounded-xl bg-btx-700/40 border border-btx-500/30">
                <Target className="text-accent shrink-0 mt-1" size={22} />
                <div>
                  <h4 className="font-semibold text-btx-50 mb-1">{t('about.visionTitle')}</h4>
                  <p className="text-sm text-btx-200 leading-relaxed">
                    {t('about.visionDesc')}
                  </p>
                </div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-3 gap-4"
            >
              {[
                { value: '20+', labelKey: 'about.statYears' },
                { value: '15+', labelKey: 'about.statTypes' },
                { value: '99.9%', labelKey: 'about.statUptime' },
              ].map((stat) => (
                <div
                  key={stat.labelKey}
                  className="p-6 rounded-xl bg-btx-700/50 border border-btx-500/30 text-center"
                >
                  <div className="text-3xl font-bold text-accent">{stat.value}</div>
                  <div className="text-xs text-btx-300 uppercase tracking-wider mt-2">{t(stat.labelKey)}</div>
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
            label={t('about.journeyLabel')}
            title={t('about.journeyTitle')}
            center
          />
          <div className="mt-16 max-w-3xl mx-auto space-y-0">
            {timeline.map((item, i) => (
              <motion.div
                key={item.yearKey}
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
                  {t(item.yearKey)}
                </div>
                <h3 className="text-xl font-bold text-btx-50 mb-2">{t(item.titleKey)}</h3>
                <p className="text-sm text-btx-200 leading-relaxed">{t(item.descriptionKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Group Structure */}
      <section className="py-24 bg-btx-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label={t('about.groupLabel')}
            title={t('about.groupTitle')}
            subtitle={t('about.groupSubtitle')}
            center
          />
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {groupStructure.map((pillar, i) => (
              <motion.div
                key={pillar.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 lg:p-8 rounded-xl border border-btx-500/30 bg-btx-700/40 hover:border-accent/20 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent/15 transition-colors">
                  <pillar.icon className="text-accent" size={24} />
                </div>
                <h3 className="text-lg font-bold text-btx-50 mb-2">{t(pillar.titleKey)}</h3>
                <p className="text-sm text-btx-200 leading-relaxed mb-4">{t(pillar.descriptionKey)}</p>
                <span className="inline-block px-3 py-1 rounded-md bg-accent/5 border border-accent/15 text-xs text-accent font-medium">
                  {t(pillar.highlightKey)}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-btx-800/30 border-y border-btx-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label={t('about.valuesLabel')} title={t('about.valuesTitle')} center />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-accent" size={24} />
                </div>
                <h3 className="font-semibold text-btx-50 mb-2">{t(value.titleKey)}</h3>
                <p className="text-sm text-btx-200 leading-relaxed">{t(value.descriptionKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={t('about.ctaTitle')}
        subtitle={t('about.ctaSubtitle')}
        primaryCTA={{ label: t('about.ctaContact'), to: '/contact' }}
        secondaryCTA={{ label: t('about.ctaViewTech'), to: '/technology' }}
      />
    </>
  )
}
