import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiArrowRight } from 'react-icons/hi'
import { TimelineEntry } from '../../types'
import { useLocalizedData } from '../../hooks'
import { useTranslation } from 'react-i18next'
import { typeBadgeClass, typeBadgeStyles, typeDotStyles } from './timelineStyles'

interface TimelineListProps {
  entries: TimelineEntry[]
}

const TimelineList = ({ entries }: TimelineListProps) => {
  const { getLocalized, language } = useLocalizedData()
  const { t } = useTranslation()
  const defaultImage = '/images/CSI00138.jpg'

  return (
    <div className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute left-[11px] top-3 bottom-3 w-px bg-gradient-to-b from-teal-500/60 via-gray-200 to-transparent dark:via-gray-700"
      />

      <div className="space-y-10">
        {entries.map((entry, index) => (
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
              {entry.image && (
                <div className="relative aspect-[16/9] overflow-hidden bg-gray-100 dark:bg-gray-900">
                  <img
                    src={entry.image}
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

              <div className="p-5 sm:p-6">
                {!entry.image && (
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <time className="text-xs font-semibold tracking-wide text-teal-600 dark:text-teal-400">
                      {entry.date}
                    </time>
                    <span className={`${typeBadgeClass} ${typeBadgeStyles[entry.type]}`}>
                      {t(`timeline.type.${entry.type}`)}
                    </span>
                  </div>
                )}

                <h2 className="mb-2 text-xl font-bold leading-snug text-gray-900 transition-colors group-hover:text-teal-600 dark:text-gray-100 dark:group-hover:text-teal-400">
                  {getLocalized(entry.title)}
                </h2>

                <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                  {getLocalized(entry.excerpt)}
                </p>

                {entry.tags && entry.tags.length > 0 && (
                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {entry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-gray-100 px-2 py-0.5 text-[11px] font-medium text-gray-500 dark:bg-gray-700/80 dark:text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-600 transition-all group-hover:gap-2 dark:text-teal-400">
                  {t('timeline.readMore')}
                  <HiArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </div>
  )
}

export default TimelineList
