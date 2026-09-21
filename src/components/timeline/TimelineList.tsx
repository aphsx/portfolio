import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiArrowRight } from 'react-icons/hi'
import { TimelineEntry } from '../../types'
import { useLocalizedData } from '../../hooks'
import { useTranslation } from 'react-i18next'
import { typeBadgeClass, typeBadgeStyles, typeDotStyles } from './timelineStyles'

export type TimelineLayout = 'timeline' | 'grid' | 'rows'

interface TimelineListProps {
  entries: TimelineEntry[]
  layout?: TimelineLayout
}

const TimelineList = ({ entries, layout = 'timeline' }: TimelineListProps) => {
  const { getLocalized, language } = useLocalizedData()
  const { t } = useTranslation()
  const defaultImage = '/images/CSI00138.jpg'

  // 1. Grid layout (หลายกล่องในแถว - 2 คอลัมน์สำหรับ max-w-2xl)
  if (layout === 'grid') {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {entries.map((entry, index) => {
          const coverImage = entry.image ?? entry.images?.[0]

          return (
            <motion.article
              key={entry.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.04 + index * 0.03, duration: 0.4, ease: 'easeOut' }}
              className="h-full"
            >
              <Link
                href={`/${language}/timeline/${entry.id}`}
                className="group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-xs ring-1 ring-black/[0.04] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:ring-teal-500/20 dark:bg-gray-800/80 dark:ring-white/10 dark:hover:ring-teal-500/30"
              >
                {coverImage ? (
                  <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-gray-900">
                    <img
                      src={coverImage}
                      alt={getLocalized(entry.title)}
                      className={`h-full w-full ${
                        entry.imageFit === 'contain'
                          ? 'object-contain'
                          : 'object-cover transition-transform duration-500 group-hover:scale-[1.03]'
                      }`}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = defaultImage
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 flex flex-wrap items-center gap-1.5 p-2.5">
                      <time className="rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-gray-800 backdrop-blur-sm dark:bg-gray-900/90 dark:text-gray-100">
                        {entry.date}
                      </time>
                      <span className={`${typeBadgeClass} text-[10px] bg-white/90 backdrop-blur-sm dark:bg-gray-900/90 ${typeBadgeStyles[entry.type]}`}>
                        {t(`timeline.type.${entry.type}`)}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="p-3.5 pb-0">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <time className="text-xs font-semibold text-teal-600 dark:text-teal-400">
                        {entry.date}
                      </time>
                      <span className={`${typeBadgeClass} text-[10px] ${typeBadgeStyles[entry.type]}`}>
                        {t(`timeline.type.${entry.type}`)}
                      </span>
                    </div>
                  </div>
                )}

                <div className="flex flex-1 flex-col p-3.5 sm:p-4">
                  <h2 className="mb-1.5 text-sm font-bold leading-snug text-gray-900 transition-colors group-hover:text-teal-600 dark:text-gray-100 dark:group-hover:text-teal-400">
                    {getLocalized(entry.title)}
                  </h2>

                  <p className="mb-3 line-clamp-2 flex-1 text-xs leading-relaxed text-gray-500 dark:text-gray-400">
                    {getLocalized(entry.excerpt)}
                  </p>

                  <div className="mt-auto flex items-center justify-between pt-1">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-teal-600 transition-all group-hover:gap-1.5 dark:text-teal-400">
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

  // 2. Rows layout (แบบแถวแนวนอน พอดีกรอบ max-w-2xl)
  if (layout === 'rows') {
    return (
      <div className="flex flex-col gap-3">
        {entries.map((entry, index) => {
          const coverImage = entry.image ?? entry.images?.[0]

          return (
            <motion.article
              key={entry.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.03 + index * 0.03, duration: 0.35, ease: 'easeOut' }}
            >
              <Link
                href={`/${language}/timeline/${entry.id}`}
                className="group flex flex-col sm:flex-row overflow-hidden rounded-xl bg-white shadow-xs ring-1 ring-black/[0.04] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:ring-teal-500/20 dark:bg-gray-800/80 dark:ring-white/10 dark:hover:ring-teal-500/30"
              >
                {coverImage && (
                  <div className="relative aspect-[16/9] sm:aspect-auto sm:w-40 md:w-44 shrink-0 overflow-hidden bg-gray-100 dark:bg-gray-900">
                    <img
                      src={coverImage}
                      alt={getLocalized(entry.title)}
                      className={`h-full w-full ${
                        entry.imageFit === 'contain'
                          ? 'object-contain'
                          : 'object-cover transition-transform duration-500 group-hover:scale-[1.04]'
                      }`}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = defaultImage
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent sm:hidden" />
                    <div className="absolute bottom-2 left-2 flex items-center gap-1 sm:hidden">
                      <time className="rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-semibold text-gray-800 backdrop-blur-sm dark:bg-gray-900/90 dark:text-gray-100">
                        {entry.date}
                      </time>
                    </div>
                  </div>
                )}

                <div className="flex flex-1 flex-col justify-between p-3.5 sm:p-4">
                  <div>
                    <div className="mb-1.5 hidden sm:flex flex-wrap items-center gap-1.5">
                      <time className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-semibold text-gray-700 dark:bg-gray-700/70 dark:text-gray-300">
                        {entry.date}
                      </time>
                      <span className={`${typeBadgeClass} text-[10px] ${typeBadgeStyles[entry.type]}`}>
                        {t(`timeline.type.${entry.type}`)}
                      </span>
                    </div>

                    <h2 className="mb-1 text-sm sm:text-base font-bold leading-snug text-gray-900 transition-colors group-hover:text-teal-600 dark:text-gray-100 dark:group-hover:text-teal-400">
                      {getLocalized(entry.title)}
                    </h2>

                    <p className="line-clamp-2 text-xs leading-relaxed text-gray-500 dark:text-gray-400">
                      {getLocalized(entry.excerpt)}
                    </p>
                  </div>

                  <div className="mt-2.5 flex items-center justify-between pt-0.5">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-teal-600 transition-all group-hover:gap-1.5 dark:text-teal-400">
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

  // 3. Timeline stream layout (แนวตั้งดั้งเดิม)
  return (
    <div className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute left-[11px] top-3 bottom-3 w-px bg-gradient-to-b from-teal-500/60 via-gray-200 to-transparent dark:via-gray-700"
      />

      <div className="space-y-10">
        {entries.map((entry, index) => {
          const coverImage = entry.image ?? entry.images?.[0]

          return (
            <motion.article
              key={entry.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 + index * 0.08, duration: 0.55, ease: 'easeOut' }}
              className="relative pl-9"
            >
              <span
                aria-hidden
                className={`absolute left-0 top-6 h-6 w-6 rounded-full border-[3px] border-gray-50 dark:border-gray-900 ${typeDotStyles[entry.type]}`}
              />

              <Link
                href={`/${language}/timeline/${entry.id}`}
                className="group block overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/[0.04] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:ring-teal-500/20 dark:bg-gray-800/80 dark:ring-white/10 dark:hover:ring-teal-500/30"
              >
                {coverImage && (
                  <div className="relative aspect-[16/9] overflow-hidden bg-gray-100 dark:bg-gray-900">
                    <img
                      src={coverImage}
                      alt={getLocalized(entry.title)}
                      className={`h-full w-full ${
                        entry.imageFit === 'contain'
                          ? 'object-contain'
                          : 'object-cover transition-transform duration-700 group-hover:scale-[1.03]'
                      }`}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = defaultImage
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 flex flex-wrap items-center gap-2 p-4">
                      <time className="rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-gray-800 backdrop-blur-sm dark:bg-gray-900/90 dark:text-gray-100">
                        {entry.date}
                      </time>
                      <span className={`${typeBadgeClass} bg-white/90 backdrop-blur-sm dark:bg-gray-900/90 ${typeBadgeStyles[entry.type]}`}>
                        {t(`timeline.type.${entry.type}`)}
                      </span>
                    </div>
                  </div>
                )}

                <div className="p-4 sm:p-5">
                  {!coverImage && (
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <time className="text-xs font-semibold tracking-wide text-teal-600 dark:text-teal-400">
                        {entry.date}
                      </time>
                      <span className={`${typeBadgeClass} ${typeBadgeStyles[entry.type]}`}>
                        {t(`timeline.type.${entry.type}`)}
                      </span>
                    </div>
                  )}

                  <h2 className="mb-1.5 text-lg font-bold leading-snug text-gray-900 transition-colors group-hover:text-teal-600 dark:text-gray-100 dark:group-hover:text-teal-400">
                    {getLocalized(entry.title)}
                  </h2>

                  <p className="mb-3 line-clamp-3 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                    {getLocalized(entry.excerpt)}
                  </p>

                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-600 transition-all group-hover:gap-2 dark:text-teal-400">
                    {t('timeline.readMore')}
                    <HiArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </motion.article>
          )
        })}
      </div>
    </div>
  )
}

export default TimelineList
