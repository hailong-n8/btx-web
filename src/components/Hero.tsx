import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface HeroProps {
  badge?: string
  title: string
  titleAccent?: string
  subtitle: string
  primaryCTA?: { label: string; to: string }
  secondaryCTA?: { label: string; to: string }
  compact?: boolean
}

export default function Hero({
  badge,
  title,
  titleAccent,
  subtitle,
  primaryCTA,
  secondaryCTA,
  compact = false,
}: HeroProps) {
  return (
    <section
      className={`relative overflow-hidden ${compact ? 'pt-28 pb-16' : 'pt-32 pb-24 lg:pt-44 lg:pb-32'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-btx-700/40 via-btx-900/95 to-btx-900" />
      <div className="absolute inset-0">
        <div className="absolute -top-20 left-1/3 -translate-x-1/2 w-[900px] h-[700px] bg-accent/8 rounded-full blur-[140px]" />
        <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-accent-blue/6 rounded-full blur-[120px]" />
      </div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={compact ? 'max-w-3xl' : 'max-w-4xl'}
        >
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              {badge}
            </motion.div>
          )}

          <h1
            className={`font-bold tracking-tight leading-tight text-white ${
              compact ? 'text-3xl lg:text-5xl' : 'text-4xl lg:text-6xl xl:text-7xl'
            }`}
          >
            {title}
            {titleAccent && <span className="text-accent">{titleAccent}</span>}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={`mt-6 text-btx-100 leading-relaxed ${
              compact ? 'text-base lg:text-lg max-w-2xl' : 'text-lg lg:text-xl max-w-3xl'
            }`}
          >
            {subtitle}
          </motion.p>

          {(primaryCTA || secondaryCTA) && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              {primaryCTA && (
                <Link
                  to={primaryCTA.to}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-light text-btx-900 font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-accent/20 group"
                >
                  {primaryCTA.label}
                  <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              )}
              {secondaryCTA && (
                <Link
                  to={secondaryCTA.to}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-btx-400 hover:border-btx-300 text-btx-100 font-medium rounded-lg transition-all hover:bg-btx-600/50"
                >
                  {secondaryCTA.label}
                </Link>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
