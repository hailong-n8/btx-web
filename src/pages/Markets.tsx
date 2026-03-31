import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import {
  Trophy,
  Dribbble,
  Target,
  Globe,
  TrendingUp,
  Users,
  Clock,
  BarChart3,
  Zap,
  PlusCircle,
} from 'lucide-react'
import useDocumentTitle from '../hooks/useDocumentTitle'
import Hero from '../components/Hero'
import SectionHeader from '../components/SectionHeader'
import CTASection from '../components/CTASection'

const sportsMarkets = [
  {
    nameKey: 'markets.cricket',
    icon: Trophy,
    tagKey: 'markets.cricketTag',
    leagues: ['IPL', 'ICC World Cup', 'The Ashes', 'Big Bash League', 'PSL', 'CPL'],
    marketTypes: ['Match Odds', 'Match Odds with Draw', 'Completed Match', 'Tied Match', 'Innings Session Total', 'Innings Total Line'],
    highlight: true,
  },
  {
    nameKey: 'markets.football',
    icon: Dribbble,
    tagKey: 'markets.footballTag',
    leagues: ['FIFA World Cup 2026', 'Premier League', 'La Liga', 'Champions League', 'Serie A', 'Bundesliga'],
    marketTypes: ['Full Time Match Odds', 'Asian Handicap', 'Asian Handicap Total Goals', 'Total Goals Over/Under', 'Correct Score'],
    highlight: true,
  },
  {
    nameKey: 'markets.tennis',
    icon: Target,
    tagKey: 'markets.tennisTag',
    leagues: ['Grand Slams', 'ATP Tour', 'WTA Tour', 'Davis Cup'],
    marketTypes: ['Match Odds', 'Set Winner'],
    highlight: false,
  },
]

const marketCapabilities = [
  {
    icon: Clock,
    titleKey: 'markets.capInPlay',
    descriptionKey: 'markets.capInPlayDesc',
  },
  {
    icon: BarChart3,
    titleKey: 'markets.capTypes',
    descriptionKey: 'markets.capTypesDesc',
  },
  {
    icon: Zap,
    titleKey: 'markets.capFast',
    descriptionKey: 'markets.capFastDesc',
  },
  {
    icon: PlusCircle,
    titleKey: 'markets.capCustom',
    descriptionKey: 'markets.capCustomDesc',
  },
  {
    icon: TrendingUp,
    titleKey: 'markets.capPricing',
    descriptionKey: 'markets.capPricingDesc',
  },
  {
    icon: Users,
    titleKey: 'markets.capMultiOp',
    descriptionKey: 'markets.capMultiOpDesc',
  },
]

const customMarkets = [
  { nameKey: 'markets.customPrediction', descKey: 'markets.customPredictionDesc' },
  { nameKey: 'markets.customAgent', descKey: 'markets.customAgentDesc' },
  { nameKey: 'markets.customPolitical', descKey: 'markets.customPoliticalDesc' },
  { nameKey: 'markets.customEntertainment', descKey: 'markets.customEntertainmentDesc' },
  { nameKey: 'markets.customEsports', descKey: 'markets.customEsportsDesc' },
  { nameKey: 'markets.customNiche', descKey: 'markets.customNicheDesc' },
]

export default function Markets() {
  const { t } = useTranslation()
  useDocumentTitle('markets.pageTitle')
  return (
    <>
      <Hero
        badge={t('markets.heroBadge')}
        title={t('markets.heroTitle')}
        titleAccent={t('markets.heroAccent')}
        subtitle={t('markets.heroSubtitle')}
        primaryCTA={{ label: t('markets.ctaAccess'), to: '/contact' }}
        secondaryCTA={{ label: t('markets.ctaViewTech'), to: '/technology' }}
      />

      {/* Sports Markets */}
      <section className="py-24 bg-btx-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label={t('markets.sportsLabel')}
            title={t('markets.sportsTitle')}
            subtitle={t('markets.sportsSubtitle')}
            center
          />
          <div className="mt-16 space-y-6">
            {sportsMarkets.map((sport, i) => (
              <motion.div
                key={sport.nameKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-xl border p-6 lg:p-8 ${
                  sport.highlight
                    ? 'border-accent/30 bg-btx-700/60'
                    : 'border-btx-500/30 bg-btx-700/40'
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex items-center gap-4 lg:min-w-[200px]">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      sport.highlight ? 'bg-accent/15 border border-accent/30' : 'bg-btx-600/50 border border-btx-500/30'
                    }`}>
                      <sport.icon className={sport.highlight ? 'text-accent' : 'text-btx-200'} size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-btx-50">{t(sport.nameKey)}</h3>
                      <span className={`text-xs font-medium uppercase tracking-wider ${
                        sport.highlight ? 'text-accent' : 'text-btx-300'
                      }`}>
                        {t(sport.tagKey)}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 grid sm:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-xs font-semibold text-btx-100 uppercase tracking-wider mb-3">
                        {t('markets.leaguesTitle')}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {sport.leagues.map((league) => (
                          <span
                            key={league}
                            className="px-3 py-1 rounded-md bg-btx-600/50 border border-btx-500/30 text-xs text-btx-200"
                          >
                            {league}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-btx-100 uppercase tracking-wider mb-3">
                        {t('markets.marketTypesTitle')}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {sport.marketTypes.map((mt) => (
                          <span
                            key={mt}
                            className="px-3 py-1 rounded-md bg-accent/5 border border-accent/15 text-xs text-accent"
                          >
                            {mt}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Capabilities */}
      <section className="py-24 bg-btx-800/30 border-y border-btx-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label={t('markets.capLabel')}
            title={t('markets.capTitle')}
            subtitle={t('markets.capSubtitle')}
            center
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketCapabilities.map((cap, i) => (
              <motion.div
                key={cap.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-6 rounded-xl border border-btx-500/30 bg-btx-700/40 hover:border-accent/20 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/15 transition-colors">
                  <cap.icon className="text-accent" size={20} />
                </div>
                <h3 className="font-semibold text-btx-50 mb-2">{t(cap.titleKey)}</h3>
                <p className="text-sm text-btx-200 leading-relaxed">{t(cap.descriptionKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Markets */}
      <section className="py-24 bg-btx-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeader
                label={t('markets.customLabel')}
                title={t('markets.customTitle')}
                subtitle={t('markets.customSubtitle')}
              />
              <div className="mt-8">
                <Globe className="text-accent mb-4" size={28} />
                <p className="text-sm text-btx-200 leading-relaxed">
                  {t('markets.customDesc')}
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {customMarkets.map((market, i) => (
                <motion.div
                  key={market.nameKey}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="p-5 rounded-lg border border-btx-500/20 bg-btx-700/30"
                >
                  <h4 className="text-sm font-semibold text-btx-50 mb-1">{t(market.nameKey)}</h4>
                  <p className="text-xs text-btx-300 leading-relaxed">{t(market.descKey)}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title={t('markets.ctaTitle')}
        subtitle={t('markets.ctaSubtitle')}
        primaryCTA={{ label: t('markets.ctaContact'), to: '/contact' }}
        secondaryCTA={{ label: t('markets.ctaDocs'), to: '/developers' }}
      />
    </>
  )
}
