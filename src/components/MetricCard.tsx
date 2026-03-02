import { motion } from 'framer-motion'

interface MetricCardProps {
  value: string
  label: string
  index?: number
}

export default function MetricCard({ value, label, index = 0 }: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center p-6 lg:p-8"
    >
      <div className="text-4xl lg:text-5xl font-bold text-accent tracking-tight">{value}</div>
      <div className="mt-2 text-sm text-btx-200 uppercase tracking-wider font-medium">{label}</div>
    </motion.div>
  )
}
