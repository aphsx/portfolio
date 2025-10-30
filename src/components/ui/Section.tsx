import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  title?: string
  icon?: ReactNode
  delay?: number
  className?: string
  id?: string
}

const Section = ({
  children,
  title,
  icon,
  delay = 0,
  className = '',
  id
}: SectionProps) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className={`mb-12 ${className}`}
    >
      {title && (
        <div className="flex items-center gap-3 mb-6">
          {icon && <div className="text-lg text-gray-700 dark:text-gray-300">{icon}</div>}
          <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">
            {title}
          </h2>
        </div>
      )}
      {children}
    </motion.section>
  )
}

export default Section