import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { personalInfo } from '../../data'
import { useLanguage } from '../../contexts'
import { useLocalizedData } from '../../hooks'

const HeroSection = () => {
  const { t } = useLanguage()
  const { getLocalized } = useLocalizedData()
  const [typewriterText, setTypewriterText] = useState('')
  const targetText = t('home.greeting')

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index <= targetText.length) {
        setTypewriterText(targetText.slice(0, index))
        index++
      } else {
        clearInterval(interval)
      }
    }, 150)

    return () => clearInterval(interval)
  }, [targetText])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mb-12"
    >
      {/* Greeting Bubble */}
      <div className="flex justify-center w-full mb-6">
        <div className="relative w-full flex justify-center">
          <input
            type="text"
            value={typewriterText}
            readOnly
            className="w-full text-center px-4 py-2 rounded-full bg-gradient-to-r from-teal-500 to-cyan-400 text-white font-semibold shadow focus:outline-none"
          />
          {/* Speech bubble tail */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-full">
            <svg width="32" height="16" viewBox="0 0 32 16" fill="none">
              <polygon
                points="0,0 16,16 32,0"
                fill="url(#bubbleTailGradient)"
              />
              <defs>
                <linearGradient
                  id="bubbleTailGradient"
                  x1="0"
                  y1="0"
                  x2="32"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#14b8a6" />
                  <stop offset="1" stopColor="#22d3ee" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      {/* Profile Image and Info */}
      <div className="flex flex-col items-center gap-6 mb-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.5,
            type: 'spring',
            stiffness: 260,
            damping: 20,
          }}
          className="relative"
        >
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 p-1 transition-all duration-300 hover:scale-105 overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
            <img
              src={personalInfo.profileImage}
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="absolute -top-2 -right-2 text-yellow-400 animate-bounce">
            <div className="text-2xl transform rotate-12">👋</div>
          </div>
        </motion.div>

        <div className="text-center">
          <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-1">
            {getLocalized(personalInfo.name)}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {t('home.title')}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default HeroSection