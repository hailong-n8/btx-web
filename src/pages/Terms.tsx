import Hero from '../components/Hero'
import SectionHeader from '../components/SectionHeader'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { useTranslation } from 'react-i18next'

const sections = [
  {
    titleKey: 'terms.section1Title',
    itemKeys: ['terms.section1Item1', 'terms.section1Item2', 'terms.section1Item3'],
  },
  {
    titleKey: 'terms.section2Title',
    itemKeys: ['terms.section2Item1', 'terms.section2Item2', 'terms.section2Item3'],
  },
  {
    titleKey: 'terms.section3Title',
    itemKeys: ['terms.section3Item1', 'terms.section3Item2', 'terms.section3Item3', 'terms.section3Item4'],
  },
  {
    titleKey: 'terms.section4Title',
    itemKeys: ['terms.section4Item1', 'terms.section4Item2', 'terms.section4Item3', 'terms.section4Item4'],
  },
  {
    titleKey: 'terms.section5Title',
    itemKeys: ['terms.section5Item1', 'terms.section5Item2', 'terms.section5Item3', 'terms.section5Item4'],
  },
  {
    titleKey: 'terms.section6Title',
    itemKeys: ['terms.section6Item1', 'terms.section6Item2', 'terms.section6Item3'],
  },
  {
    titleKey: 'terms.section7Title',
    itemKeys: ['terms.section7Item1', 'terms.section7Item2', 'terms.section7Item3'],
  },
  {
    titleKey: 'terms.section8Title',
    itemKeys: ['terms.section8Item1'],
  },
  {
    titleKey: 'terms.section9Title',
    itemKeys: ['terms.section9Item1', 'terms.section9Item2', 'terms.section9Item3'],
  },
  {
    titleKey: 'terms.section10Title',
    itemKeys: ['terms.section10Item1', 'terms.section10Item2', 'terms.section10Item3'],
  },
  {
    titleKey: 'terms.section11Title',
    itemKeys: ['terms.section11Item1', 'terms.section11Item2'],
  },
]

export default function Terms() {
  const { t } = useTranslation()
  useDocumentTitle('terms.pageTitle')
  return (
    <>
      <Hero
        badge={t('terms.heroBadge')}
        title={t('terms.heroTitle')}
        titleAccent={t('terms.heroAccent')}
        subtitle={t('terms.heroSubtitle')}
        compact
      />

      <section className="py-24 bg-btx-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label={t('terms.effectiveDateLabel')}
            title={t('terms.pageTitle')}
            subtitle={t('terms.lastUpdated')}
          />

          <div className="mt-12 space-y-10">
            {sections.map((section) => (
              <div key={section.titleKey}>
                <h3 className="text-lg font-semibold text-btx-50 mb-4">{t(section.titleKey)}</h3>
                <ul className="space-y-3">
                  {section.itemKeys.map((itemKey) => (
                    <li key={itemKey} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      <span className="text-sm text-btx-200 leading-relaxed">{t(itemKey)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 p-6 rounded-xl border border-btx-500/30 bg-btx-700/40">
            <h3 className="text-sm font-semibold text-btx-50 mb-2">{t('terms.contactTitle')}</h3>
            <p className="text-sm text-btx-200">
              {t('terms.contactPrefix')}{' '}
              <a href="mailto:contact@iqex.io" className="text-accent hover:text-accent-light transition-colors">
                contact@iqex.io
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
