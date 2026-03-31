import Hero from '../components/Hero'
import SectionHeader from '../components/SectionHeader'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { useTranslation } from 'react-i18next'

const sections = [
  {
    titleKey: 'privacyPolicy.section1Title',
    itemKeys: ['privacyPolicy.section1Item1', 'privacyPolicy.section1Item2', 'privacyPolicy.section1Item3', 'privacyPolicy.section1Item4'],
  },
  {
    titleKey: 'privacyPolicy.section2Title',
    itemKeys: ['privacyPolicy.section2Item1', 'privacyPolicy.section2Item2', 'privacyPolicy.section2Item3', 'privacyPolicy.section2Item4', 'privacyPolicy.section2Item5'],
  },
  {
    titleKey: 'privacyPolicy.section3Title',
    itemKeys: ['privacyPolicy.section3Item1', 'privacyPolicy.section3Item2', 'privacyPolicy.section3Item3', 'privacyPolicy.section3Item4'],
  },
  {
    titleKey: 'privacyPolicy.section4Title',
    itemKeys: ['privacyPolicy.section4Item1', 'privacyPolicy.section4Item2', 'privacyPolicy.section4Item3', 'privacyPolicy.section4Item4'],
  },
  {
    titleKey: 'privacyPolicy.section5Title',
    itemKeys: ['privacyPolicy.section5Item1', 'privacyPolicy.section5Item2', 'privacyPolicy.section5Item3'],
  },
  {
    titleKey: 'privacyPolicy.section6Title',
    itemKeys: ['privacyPolicy.section6Item1', 'privacyPolicy.section6Item2', 'privacyPolicy.section6Item3', 'privacyPolicy.section6Item4', 'privacyPolicy.section6Item5'],
  },
  {
    titleKey: 'privacyPolicy.section7Title',
    itemKeys: ['privacyPolicy.section7Item1', 'privacyPolicy.section7Item2', 'privacyPolicy.section7Item3'],
  },
  {
    titleKey: 'privacyPolicy.section8Title',
    itemKeys: ['privacyPolicy.section8Item1', 'privacyPolicy.section8Item2'],
  },
]

export default function PrivacyPolicy() {
  const { t } = useTranslation()
  useDocumentTitle('privacyPolicy.pageTitle')
  return (
    <>
      <Hero
        badge={t('privacyPolicy.heroBadge')}
        title={t('privacyPolicy.heroTitle')}
        titleAccent={t('privacyPolicy.heroAccent')}
        subtitle={t('privacyPolicy.heroSubtitle')}
        compact
      />

      <section className="py-24 bg-btx-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label={t('privacyPolicy.effectiveDateLabel')}
            title={t('privacyPolicy.pageTitle')}
            subtitle={t('privacyPolicy.lastUpdated')}
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
            <h3 className="text-sm font-semibold text-btx-50 mb-2">{t('privacyPolicy.contactTitle')}</h3>
            <p className="text-sm text-btx-200">
              {t('privacyPolicy.contactPrefix')}{' '}
              <a href="mailto:privacy@iqex.io" className="text-accent hover:text-accent-light transition-colors">
                privacy@iqex.io
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
