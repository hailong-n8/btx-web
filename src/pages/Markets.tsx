import { motion } from 'framer-motion'
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
    name: 'Cricket',
    icon: Trophy,
    tag: 'Primary Focus',
    leagues: ['IPL', 'ICC World Cup', 'The Ashes', 'Big Bash League', 'PSL', 'CPL'],
    marketTypes: ['Match Odds', 'Match Odds with Draw', 'Completed Match', 'Tied Match', 'Innings Session Total', 'Innings Total Line'],
    highlight: true,
  },
  {
    name: 'Football',
    icon: Dribbble,
    tag: 'Global Coverage',
    leagues: ['FIFA World Cup 2026', 'Premier League', 'La Liga', 'Champions League', 'Serie A', 'Bundesliga'],
    marketTypes: ['Full Time Match Odds', 'Asian Handicap', 'Asian Handicap Total Goals', 'Total Goals Over/Under', 'Correct Score'],
    highlight: true,
  },
  {
    name: 'Tennis',
    icon: Target,
    tag: 'Deep Markets',
    leagues: ['Grand Slams', 'ATP Tour', 'WTA Tour', 'Davis Cup'],
    marketTypes: ['Match Odds', 'Set Winner'],
    highlight: false,
  },
]

const marketCapabilities = [
  {
    icon: Clock,
    title: 'Real-Time In-Play',
    description: 'Sub-second updates with automated suspension during live events.',
  },
  {
    icon: BarChart3,
    title: '15+ Market Types',
    description: 'From match winner to complex session markets — diverse strategies supported.',
  },
  {
    icon: Zap,
    title: 'Fast Market Creation',
    description: 'Rapid deployment with automated pricing and settlement rules.',
  },
  {
    icon: PlusCircle,
    title: 'Custom Markets',
    description: 'Bespoke markets for prediction events, political outcomes, and niche verticals.',
  },
  {
    icon: TrendingUp,
    title: 'Dynamic Pricing',
    description: 'Algorithmic prices with real-time adjustment from market activity and data feeds.',
  },
  {
    icon: Users,
    title: 'Multi-Operator Support',
    description: 'Shared infrastructure serves multiple white-label operators with isolated risk.',
  },
]

const customMarkets = [
  { name: 'Prediction Markets', desc: 'Event-driven markets for outcomes beyond traditional sports.' },
  { name: 'Agent-Requested', desc: 'Custom markets created on demand for specific operator needs.' },
  { name: 'Political Events', desc: 'Election and political outcome markets (jurisdiction dependent).' },
  { name: 'Entertainment', desc: 'Awards, reality TV, and cultural event markets.' },
  { name: 'Esports', desc: 'Competitive gaming markets across major titles and tournaments.' },
  { name: 'Niche Sports', desc: 'Kabaddi, table tennis, darts, and emerging sports coverage.' },
]

export default function Markets() {
  useDocumentTitle('Markets & Coverage')
  return (
    <>
      <Hero
        badge="Markets & Coverage"
        title="Deep Vertical Coverage Across "
        titleAccent="Global Sports"
        subtitle="Institutional-depth markets in cricket, football, tennis, and custom verticals."
        primaryCTA={{ label: 'Access Markets', to: '/contact' }}
        secondaryCTA={{ label: 'View Technology', to: '/technology' }}
      />

      {/* Sports Markets */}
      <section className="py-24 bg-btx-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Sports Coverage"
            title="Core Sports Verticals"
            subtitle="Deep coverage across the world's most traded sports with full in-play support."
            center
          />
          <div className="mt-16 space-y-6">
            {sportsMarkets.map((sport, i) => (
              <motion.div
                key={sport.name}
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
                      <h3 className="text-xl font-bold text-btx-50">{sport.name}</h3>
                      <span className={`text-xs font-medium uppercase tracking-wider ${
                        sport.highlight ? 'text-accent' : 'text-btx-300'
                      }`}>
                        {sport.tag}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 grid sm:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-xs font-semibold text-btx-100 uppercase tracking-wider mb-3">
                        Leagues & Competitions
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
                        Market Types
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
            label="Capabilities"
            title="Market Infrastructure Features"
            subtitle="Core capabilities powering every market on the IQEX platform."
            center
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketCapabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-6 rounded-xl border border-btx-500/30 bg-btx-700/40 hover:border-accent/20 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/15 transition-colors">
                  <cap.icon className="text-accent" size={20} />
                </div>
                <h3 className="font-semibold text-btx-50 mb-2">{cap.title}</h3>
                <p className="text-sm text-btx-200 leading-relaxed">{cap.description}</p>
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
                label="Beyond Sports"
                title="Custom & Prediction Markets"
                subtitle="Custom markets for any verifiable outcome beyond traditional sports."
              />
              <div className="mt-8">
                <Globe className="text-accent mb-4" size={28} />
                <p className="text-sm text-btx-200 leading-relaxed">
                  Operators and agents request markets for any verifiable outcome, subject to jurisdictional compliance.
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {customMarkets.map((market, i) => (
                <motion.div
                  key={market.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="p-5 rounded-lg border border-btx-500/20 bg-btx-700/30"
                >
                  <h4 className="text-sm font-semibold text-btx-50 mb-1">{market.name}</h4>
                  <p className="text-xs text-btx-300 leading-relaxed">{market.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Explore IQEX Markets"
        subtitle="Discuss market coverage, custom verticals, or operator access with our team."
        primaryCTA={{ label: 'Contact Us', to: '/contact' }}
        secondaryCTA={{ label: 'API Documentation', to: '/developers' }}
      />
    </>
  )
}
