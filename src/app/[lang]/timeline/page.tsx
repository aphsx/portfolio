"use client";
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Grid2x2, Rows3 } from 'lucide-react'
import { TimelineList, TimelineLayout } from '@/components/timeline'
import { ImageBanner } from '@/components/media'
import { PageContainer, SegmentedControl, SegmentedOption } from '@/components/ui'
import { TimelineRepository } from '@/data'
import { usePersistentState } from '@/hooks'

const isTimelineLayout = (val: string): val is TimelineLayout =>
  val === 'rows' || val === 'grid'

const TimelinePage = () => {
  const { t } = useTranslation()

  const entries = TimelineRepository.getAll()
  const bannerSlides = TimelineRepository.getBannerSlides()

  const [layout, setLayout] = usePersistentState<TimelineLayout>(
    'portfolio_timeline_layout',
    'rows',
    isTimelineLayout,
  )

  const layoutOptions: SegmentedOption<TimelineLayout>[] = [
    {
      id: 'rows',
      label: t('layout.rows'),
      icon: Rows3,
    },
    {
      id: 'grid',
      label: t('layout.grid'),
      icon: Grid2x2,
    },
  ]

  return (
    <PageContainer>
      <ImageBanner slides={bannerSlides} />

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

          {entries.length > 0 && (
            <SegmentedControl
              options={layoutOptions}
              value={layout}
              onChange={setLayout}
              layoutId="activeTimelinePageLayout"
              ariaLabel="Timeline layout"
              className="self-start sm:self-end"
            />
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
    </PageContainer>
  )
}

export default TimelinePage
