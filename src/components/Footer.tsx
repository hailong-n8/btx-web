import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import BrandLogo from './BrandLogo'

const footerSections = [
  {
    titleKey: 'footer.solutions',
    links: [
      { labelKey: 'footer.exchangeTechnology', to: '/technology' },
      { labelKey: 'footer.liquidityAccess', to: '/liquidity' },
      { labelKey: 'footer.whiteLabel', to: '/white-label' },
      { labelKey: 'footer.web3Rails', to: '/web3' },
    ],
  },
  {
    titleKey: 'footer.markets',
    links: [
      { labelKey: 'footer.cricket', to: '/markets' },
      { labelKey: 'footer.football', to: '/markets' },
      { labelKey: 'footer.tennis', to: '/markets' },
      { labelKey: 'footer.customMarkets', to: '/markets' },
    ],
  },
  {
    titleKey: 'footer.company',
    links: [
      { labelKey: 'footer.aboutBtx', to: '/about' },
      { labelKey: 'footer.compliance', to: '/compliance' },
      { labelKey: 'footer.contact', to: '/contact' },
    ],
  },
]

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-btx-800 border-t border-btx-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-3 lg:col-span-1 mb-4 lg:mb-0">
            <Link to="/" className="mb-4 inline-flex">
              <BrandLogo />
            </Link>
            <p className="text-sm text-btx-200 leading-relaxed max-w-xs">
              {t('footer.tagline')}
            </p>
          </div>

          {footerSections.map((section) => (
            <div key={section.titleKey}>
              <h4 className="text-sm font-semibold text-btx-50 uppercase tracking-wider mb-4">
                {t(section.titleKey)}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.labelKey}>
                    <Link
                      to={link.to}
                      className="text-sm text-btx-200 hover:text-accent transition-colors flex items-center gap-1 group"
                    >
                      {t(link.labelKey)}
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="py-6 border-t border-btx-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-btx-300">
            {t('footer.copyright', { year: new Date().getFullYear() })}
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-xs text-btx-300 hover:text-btx-100 transition-colors">
              {t('footer.privacyPolicy')}
            </Link>
            <Link to="/terms" className="text-xs text-btx-300 hover:text-btx-100 transition-colors">
              {t('footer.termsOfService')}
            </Link>
            <Link to="/compliance" className="text-xs text-btx-300 hover:text-btx-100 transition-colors">
              {t('footer.regulatory')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
