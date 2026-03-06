import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  items?: string[]
  index?: number
}

export default function FeatureCard({ icon: Icon, title, description, items, index = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-btx-700/50 border border-btx-500/30 rounded-xl p-6 lg:p-8 hover:border-accent/30 transition-all duration-300 hover:bg-btx-700/80"
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative">
        <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent/15 transition-colors">
          <Icon className="text-accent" size={24} />
        </div>
        <h3 className="text-base font-semibold text-btx-50 mb-3 line-clamp-1">{title}</h3>
        <p className="text-sm text-btx-200 leading-relaxed line-clamp-2">{description}</p>
        {items && items.length > 0 && (
          <ul className="mt-4 space-y-2">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-btx-200">
                <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  )
}
