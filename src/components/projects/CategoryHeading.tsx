import { motion } from 'framer-motion'

interface CategoryHeadingProps {
  title: string
  delay?: number
}

const CategoryHeading = ({ title, delay = 0 }: CategoryHeadingProps) => (
  <motion.h2
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="text-sm font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400 mb-6"
  >
    {title}
  </motion.h2>
)

export default CategoryHeading
