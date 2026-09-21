"use client";
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { GitCommitVertical, LayoutGrid, List } from 'lucide-react'
import { TimelineList, TimelineLayout } from '../../../components/timeline'
import { TimelineRepository } from '../../../data'
import { useLocalizedData } from '../../../hooks'

const LAYOUT_OPTIONS = [
  {
    id: 'timeline' as const,
    name: { en: 'Timeline', th: 'แนวตั้ง' },
    label: { en: 'Vertical timeline stream', th: 'ไทม์ไลน์แนวตั้ง' },
    icon: GitCommitVertical,
  },
  {
    id: 'grid' as const,
    name: { en: 'Grid', th: 'หลายกล่อง' },
    label: { en: 'Multi-column cards grid', th: 'หลายกล่องในแถว (Grid)' },
    icon: LayoutGrid,
  },
  {
    id: 'rows' as const,
    name: { en: 'Rows', th: 'แบบแถว' },
    label: { en: 'Horizontal row list', th: 'รายการแบบแถว' },
    icon: List,
  },
]

const TimelinePage = () => {
  const { t } = useTranslation()
  const { language } = useLocalizedData()
  const entries = TimelineRepository.getAll()

  const [layout, setLayout] = useState<TimelineLayout>('timeline')

  useEffect(() => {
    try {
      const saved = localStorage.getItem('portfolio_timeline_layout') as TimelineLayout
      if (saved === 'timeline' || saved === 'grid' || saved === 'rows') {
        setLayout(saved)
      }
    } catch {
      // Ignore localStorage availability issues
    }
  }, [])

  const handleLayoutChange = (newLayout: TimelineLayout) => {
    setLayout(newLayout)
    try {
      localStorage.setItem('portfolio_timeline_layout', newLayout)
    } catch {
      // Ignore
    }
  }

  return (
    <div
      className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors"
      style={{ paddingTop: '100px' }}
    >
      <div className="max-w-2xl mx-auto px-6 pb-16">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="mb-2 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">
                {t('timeline.title')}
              </h1>
              <p className="max-w-lg text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                {t('timeline.subtitle')}
              </p>

              {entries.length > 0 && (
                <p className="mt-3 text-xs font-medium text-gray-400 dark:text-gray-500">
                  {entries.length} {language === 'th' ? 'รายการ' : entries.length === 1 ? 'entry' : 'entries'}
                </p>
              )}
            </div>

            {/* Layout switcher */}
            {entries.length > 0 && (
              <div className="flex items-center self-start sm:self-auto rounded-xl bg-gray-100/90 p-1 ring-1 ring-black/5 dark:bg-gray-800/80 dark:ring-white/10">
                {LAYOUT_OPTIONS.map((opt) => {
                  const isActive = layout === opt.id
                  const Icon = opt.icon
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => handleLayoutChange(opt.id)}
                      title={opt.label[language === 'th' ? 'th' : 'en']}
                      aria-label={opt.label[language === 'th' ? 'th' : 'en']}
                      className={`relative flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                        isActive
                          ? 'text-gray-900 dark:text-white'
                          : 'text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200'
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="activeTimelinePageLayout"
                          className="absolute inset-0 rounded-lg bg-white shadow-xs dark:bg-gray-700"
                          transition={{ type: 'spring', bounce: 0.15, duration: 0.35 }}
                        />
                      )}
                      <span className="relative z-10 flex items-center gap-1.5">
                        <Icon size={14} className="shrink-0" />
                        <span>{opt.name[language === 'th' ? 'th' : 'en']}</span>
                      </span>
                    </button>
                  )
                })}
              </div>
            )}
          </div>
        </motion.header>

        {entries.length > 0 ? (
          <TimelineList entries={entries} layout={layout} />
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

