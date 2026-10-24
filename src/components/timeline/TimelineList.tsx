import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiArrowRight } from 'react-icons/hi'
import { TimelineEntry } from '@/types'
import { useLocalizedData } from '@/hooks'
import { useTranslation } from 'react-i18next'

export type TimelineLayout = 'rows' | 'grid'

interface TimelineListProps {
  entries: TimelineEntry[]
  layout?: TimelineLayout
}

const getImagePositionStyle = (pos?: string) => {
  if (!pos) return undefined
  if (pos === 'top') return { objectPosition: 'top' }
  if (pos === 'bottom') return { objectPosition: 'bottom' }
  if (pos === 'center') return { objectPosition: 'center' }
  return { objectPosition: pos }
}

const TimelineList = ({ entries, layout = 'rows' }: TimelineListProps) => {
  const { getLocalized, language } = useLocalizedData()
  const { t } = useTranslation()
  const defaultImage = '/images/CSI00138.jpg'

  // 1. Grid layout (หลายกล่องในแถว)
  if (layout === 'grid') {
    return (
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {entries.map((entry, index) => {
          const coverImage = entry.image ?? entry.images?.[0]
          const posStyle = getImagePositionStyle(entry.imagePosition)

          return (
            <motion.article
              key={entry.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.04 + index * 0.03, duration: 0.4, ease: 'easeOut' }}
              className="flex h-full"
            >
              <Link
                href={`/${language}/timeline/${entry.id}`}
                className="group flex w-full flex-col overflow-hidden rounded-xl bg-white shadow-xs ring-1 ring-black/[0.04] transition-all hover:shadow-sm dark:bg-gray-800/80 dark:ring-white/10"
              >
                <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-gray-100 dark:bg-gray-900">
                  <img
                    src={coverImage || defaultImage}
                    alt={getLocalized(entry.title)}
                    style={posStyle}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = defaultImage
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 flex flex-wrap items-center gap-1 sm:gap-1.5 p-1.5 sm:p-2.5">
                    <time className="rounded-full bg-white/90 px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] font-semibold tracking-wide text-gray-800 backdrop-blur-sm dark:bg-gray-900/90 dark:text-gray-100">
                      {entry.date}
                    </time>
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between p-2.5 sm:p-4">
                  <div>
                    <h2 className="line-clamp-2 text-xs sm:text-sm font-bold leading-snug text-gray-900 transition-colors group-hover:text-teal-600 dark:text-gray-100 dark:group-hover:text-teal-400">
                      {getLocalized(entry.title)}
                    </h2>

                    <p className="mt-1 line-clamp-2 text-[11px] sm:text-xs leading-relaxed text-gray-500 dark:text-gray-400">
                      {getLocalized(entry.excerpt)}
                    </p>
                  </div>

                  <div className="mt-2.5 sm:mt-3 flex items-center justify-between pt-0.5">
                    <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold text-teal-600 transition-all group-hover:gap-1.5 dark:text-teal-400">
                      {t('timeline.readMore')}
                      <HiArrowRight size={11} className="transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          )
        })}
      </div>
    )
  }

  // 2. Rows layout (แบบแถวแนวนอน: รูปซ้าย ข้อความขวา - Default)
  return (
    <div className="flex flex-col gap-3">
      {entries.map((entry, index) => {
        const coverImage = entry.image ?? entry.images?.[0]
        const posStyle = getImagePositionStyle(entry.imagePosition)

        return (
          <motion.article
            key={entry.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.03 + index * 0.03, duration: 0.35, ease: 'easeOut' }}
          >
            <Link
              href={`/${language}/timeline/${entry.id}`}
              className="group flex flex-row h-[136px] sm:h-[156px] overflow-hidden rounded-xl bg-white shadow-xs ring-1 ring-black/[0.04] transition-all hover:shadow-sm dark:bg-gray-800/80 dark:ring-white/10"
            >
              {/* Thumbnail ด้านซ้าย */}
              <div className="relative w-36 sm:w-52 h-full shrink-0 overflow-hidden bg-gray-100 dark:bg-gray-900">
                <img
                  src={coverImage || defaultImage}
                  alt={getLocalized(entry.title)}
                  style={posStyle}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = defaultImage
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent sm:hidden" />
                <div className="absolute bottom-1.5 left-1.5 flex items-center gap-1 sm:hidden">
                  <time className="rounded-full bg-white/90 px-1.5 py-0.5 text-[9px] font-semibold text-gray-800 backdrop-blur-sm dark:bg-gray-900/90 dark:text-gray-100">
                    {entry.date}
                  </time>
                </div>
              </div>

              {/* ข้อความด้านขวา */}
              <div className="flex flex-1 flex-col justify-between p-3 sm:p-3.5 min-w-0 h-full">
                <div>
                  <div className="mb-1 hidden sm:flex flex-wrap items-center gap-1.5">
                    <time className="rounded-full bg-gray-100 px-2.5 py-0.5 text-[10px] font-semibold text-gray-700 dark:bg-gray-700/70 dark:text-gray-300">
                      {entry.date}
                    </time>
                  </div>

                  <h2 className="line-clamp-2 text-xs sm:text-base font-bold leading-snug text-gray-900 transition-colors group-hover:text-teal-600 dark:text-gray-100 dark:group-hover:text-teal-400">
                    {getLocalized(entry.title)}
                  </h2>

                  <p className="mt-1 line-clamp-2 text-[11px] sm:text-xs leading-relaxed text-gray-500 dark:text-gray-400">
                    {getLocalized(entry.excerpt)}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold text-teal-600 transition-all group-hover:gap-1.5 dark:text-teal-400">
                    {t('timeline.readMore')}
                    <HiArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.article>
        )
      })}
    </div>
  )
}

export default TimelineList
