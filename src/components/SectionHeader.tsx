import { motion } from 'framer-motion'

interface SectionHeaderProps {
  label?: string
  title: string
  subtitle?: string
  center?: boolean
  light?: boolean
}

export default function SectionHeader({ label, title, subtitle, center = false, light = false }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className={center ? 'text-center' : ''}
    >
      {label && (
        <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-3">{label}</p>
      )}
      <h2 className={`text-3xl lg:text-4xl font-bold tracking-tight ${light ? 'text-btx-900' : 'text-btx-50'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg leading-relaxed ${center ? 'max-w-2xl mx-auto' : 'max-w-3xl'} ${light ? 'text-btx-400' : 'text-btx-200'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
