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

const getImagePositionStyle = (pos?: string) => {
  if (!pos) return undefined
  if (pos === 'top') return { objectPosition: 'top' }
  if (pos === 'bottom') return { objectPosition: 'bottom' }
  if (pos === 'center') return { objectPosition: 'center' }
  return { objectPosition: pos }
}

const TimelineList = ({ entries, layout = 'grid' }: TimelineListProps) => {
  const { getLocalized, language } = useLocalizedData()
  const { t } = useTranslation()
  const defaultImage = '/images/CSI00138.jpg'

  // 1. Grid layout (หลายกล่องในแถว - ขนาดเท่ากันทุกใบเป๊ะ)
  if (layout === 'grid') {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
                className="group flex w-full flex-col overflow-hidden rounded-xl bg-white shadow-xs ring-1 ring-black/[0.04] dark:bg-gray-800/80 dark:ring-white/10"
              >
                {/* ล็อคขนาดรูปภาพ 16:10 ให้เท่ากันทุกใบ */}
                <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-gray-100 dark:bg-gray-900">
                  <img
                    src={coverImage || defaultImage}
                    alt={getLocalized(entry.title)}
                    style={posStyle}
                    className="h-full w-full object-cover"
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

                {/* เนื้อหาด้านล่าง: line-clamp-2 ตามด้วย ... และไม่มีเส้นคั่น */}
                <div className="flex flex-1 flex-col justify-between p-3.5 sm:p-4">
                  <div>
                    <h2 className="line-clamp-2 text-sm font-bold leading-snug text-gray-900 transition-colors group-hover:text-teal-600 dark:text-gray-100 dark:group-hover:text-teal-400">
                      {getLocalized(entry.title)}
                    </h2>

                    <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-gray-500 dark:text-gray-400">
                      {getLocalized(entry.excerpt)}
                    </p>
                  </div>

                  <div className="mt-3 flex items-center justify-between pt-0.5">
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

  // 2. Rows layout (แบบแถวแนวนอน)
  if (layout === 'rows') {
    return (
      <div className="flex flex-col gap-3.5">
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
                className="group flex flex-row h-[136px] sm:h-[156px] overflow-hidden rounded-xl bg-white shadow-xs ring-1 ring-black/[0.04] dark:bg-gray-800/80 dark:ring-white/10"
              >
                {/* ล็อคขนาดรูปภาพ Thumbnail ซ้ายมือ ให้กว้างและสูงเท่ากันเป๊ะ 100% ทุกใบ */}
                <div className="relative w-36 sm:w-52 h-full shrink-0 overflow-hidden bg-gray-100 dark:bg-gray-900">
                  <img
                    src={coverImage || defaultImage}
                    alt={getLocalized(entry.title)}
                    style={posStyle}
                    className="h-full w-full object-cover"
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

                <div className="flex flex-1 flex-col justify-between p-3 sm:p-3.5 min-w-0 h-full">
                  <div>
                    <div className="mb-1 hidden sm:flex flex-wrap items-center gap-1.5">
                      <time className="rounded-full bg-gray-100 px-2.5 py-0.5 text-[10px] font-semibold text-gray-700 dark:bg-gray-700/70 dark:text-gray-300">
                        {entry.date}
                      </time>
                      <span className={`${typeBadgeClass} text-[10px] ${typeBadgeStyles[entry.type]}`}>
                        {t(`timeline.type.${entry.type}`)}
                      </span>
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

  // 3. Timeline stream layout (แนวตั้งดั้งเดิม)
  return (
    <div className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute left-[11px] top-3 bottom-3 w-px bg-gradient-to-b from-teal-500/60 via-gray-200 to-transparent dark:via-gray-700"
      />

      <div className="space-y-8">
        {entries.map((entry, index) => {
          const coverImage = entry.image ?? entry.images?.[0]
          const posStyle = getImagePositionStyle(entry.imagePosition)

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
                className="group block overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/[0.04] dark:bg-gray-800/80 dark:ring-white/10"
              >
                {/* ล็อคขนาดรูป 16:9 เต็มความกว้างการ์ด เท่ากันทุกใบ */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-100 dark:bg-gray-900">
                  <img
                    src={coverImage || defaultImage}
                    alt={getLocalized(entry.title)}
                    style={posStyle}
                    className="h-full w-full object-cover"
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

                <div className="p-4 sm:p-5">
                  <h2 className="line-clamp-2 text-base sm:text-lg font-bold leading-snug text-gray-900 transition-colors group-hover:text-teal-600 dark:text-gray-100 dark:group-hover:text-teal-400">
                    {getLocalized(entry.title)}
                  </h2>

                  <p className="mt-2 line-clamp-2 sm:line-clamp-3 text-xs sm:text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                    {getLocalized(entry.excerpt)}
                  </p>

                  <div className="mt-3.5 flex items-center justify-between pt-0.5">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-600 transition-all group-hover:gap-2 dark:text-teal-400">
                      {t('timeline.readMore')}
                      <HiArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
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
