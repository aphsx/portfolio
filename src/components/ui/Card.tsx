import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface CardProps {
    children: ReactNode
    className?: string
    hover?: boolean
}

const Card = ({ children, className = '', hover = true }: CardProps) => {
    return (
        <motion.div
            whileHover={hover ? { y: -4 } : {}}
            className={`bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow ${className}`}
        >
            {children}
        </motion.div>
    )
}

export default Card
