"use client";
import { motion } from 'framer-motion'
import { MdOutlineTimeline } from 'react-icons/md'
import { useTranslation } from 'react-i18next'
import { TimelineList } from '../../../components/timeline'
import { TimelineRepository } from '../../../data'
import { useLocalizedData } from '../../../hooks'

const TimelinePage = () => {
  const { t } = useTranslation()
  const { language } = useLocalizedData()
  const entries = TimelineRepository.getAll()

  return (
    <div
      className="min-h-screen bg-gray-50 dark:bg-gray-900"
      style={{ paddingTop: '100px' }}
    >
      <div className="max-w-2xl mx-auto px-6 pb-16">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-teal-500/10 px-3 py-1 text-teal-600 ring-1 ring-teal-500/20 dark:text-teal-400">
            <MdOutlineTimeline size={16} />
            <span className="text-[11px] font-bold uppercase tracking-[0.14em]">
              {t('timeline.title')}
            </span>
          </div>

          <h1 className="mb-3 text-2xl font-bold text-gray-900 dark:text-gray-100">
            {t('timeline.title')}
          </h1>
          <p className="max-w-lg text-sm leading-relaxed text-gray-500 dark:text-gray-400">
            {t('timeline.subtitle')}
          </p>

          {entries.length > 0 && (
            <p className="mt-4 text-xs font-medium text-gray-400 dark:text-gray-500">
              {entries.length} {language === 'th' ? 'รายการ' : entries.length === 1 ? 'entry' : 'entries'}
            </p>
          )}
        </motion.header>

        {entries.length > 0 ? (
          <TimelineList entries={entries} />
        ) : (
          <div className="rounded-2xl border border-dashed border-gray-200 py-16 text-center dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {t('timeline.empty')}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default TimelinePage
