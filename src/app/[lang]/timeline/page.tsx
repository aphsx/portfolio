"use client";
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { TimelineList } from '../../../components/timeline'
import { TimelineRepository } from '../../../data'

const TimelinePage = () => {
  const { t } = useTranslation()
  const entries = TimelineRepository.getAll()

  return (
    <div
      className="min-h-screen bg-gray-50 dark:bg-gray-900"
      style={{ paddingTop: '100px' }}
    >
      <div className="max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3">
            {t('timeline.title')}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-sm max-w-2xl mx-auto">
            {t('timeline.subtitle')}
          </p>
        </motion.div>

        {entries.length > 0 ? (
          <TimelineList entries={entries} />
        ) : (
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            {t('timeline.empty')}
          </p>
        )}
      </div>
    </div>
  )
}

export default TimelinePage
