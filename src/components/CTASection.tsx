import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface CTASectionProps {
  title: string
  subtitle: string
  primaryCTA: { label: string; to: string }
  secondaryCTA?: { label: string; to: string }
}

export default function CTASection({ title, subtitle, primaryCTA, secondaryCTA }: CTASectionProps) {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-accent-blue/5 to-accent/10" />
      <div className="absolute inset-0 bg-btx-800/80" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/10 rounded-full blur-[100px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">{title}</h2>
        <p className="mt-4 text-lg text-btx-200 max-w-2xl mx-auto">{subtitle}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to={primaryCTA.to}
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-light text-btx-900 font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-accent/20 group"
          >
            {primaryCTA.label}
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
          {secondaryCTA && (
            <Link
              to={secondaryCTA.to}
              className="inline-flex items-center gap-2 px-6 py-3 border border-btx-400 hover:border-btx-300 text-btx-100 font-medium rounded-lg transition-all hover:bg-btx-600/50"
            >
              {secondaryCTA.label}
            </Link>
          )}
        </div>
      </motion.div>
    </section>
  )
}
