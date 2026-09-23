"use client";
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { GitCommitVertical, Grid2x2, Rows3 } from 'lucide-react'
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
    icon: Grid2x2,
  },
  {
    id: 'rows' as const,
    name: { en: 'Rows', th: 'แบบแถว' },
    label: { en: 'Horizontal row list', th: 'รายการแบบแถว' },
    icon: Rows3,
  },
]

const TimelinePage = () => {
  const { t } = useTranslation()
  const { language } = useLocalizedData()
  const entries = TimelineRepository.getAll()

  const [layout, setLayout] = useState<TimelineLayout>('grid')

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
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-10"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6">
            <div className="space-y-1.5 max-w-md sm:max-w-lg">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                {t('timeline.title')}
              </h1>
              <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                {t('timeline.subtitle')}
              </p>
            </div>

            {/* Layout switcher: icon-only */}
            {entries.length > 0 && (
              <div
                role="group"
                aria-label="Timeline layout"
                className="flex items-center self-start sm:self-end rounded-xl bg-gray-100/90 p-1 ring-1 ring-black/5 dark:bg-gray-800/80 dark:ring-white/10 shrink-0"
              >
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
                      className={`relative flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${
                        isActive
                          ? 'text-gray-900 dark:text-white'
                          : 'text-gray-400 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="activeTimelinePageLayout"
                          className="absolute inset-0 rounded-lg bg-white shadow-xs dark:bg-gray-700"
                          transition={{ type: 'spring', bounce: 0.15, duration: 0.35 }}
                        />
                      )}
                      <Icon size={16} className="relative z-10 shrink-0" />
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

