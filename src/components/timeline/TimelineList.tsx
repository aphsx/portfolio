import { motion } from 'framer-motion'
import Link from 'next/link'
import { TimelineEntry } from '../../types'
import { useLocalizedData } from '../../hooks'
import { useTranslation } from 'react-i18next'

interface TimelineListProps {
  entries: TimelineEntry[]
}

const typeBadgeClass =
  'inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold tracking-wide uppercase'

const typeBadgeStyles: Record<TimelineEntry['type'], string> = {
  activity: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
  participation: 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300',
  award: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
  event: 'bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300',
}

const TimelineList = ({ entries }: TimelineListProps) => {
  const { getLocalized, language } = useLocalizedData()
  const { t } = useTranslation()
  const defaultImage = '/images/CSI00138.jpg'

  return (
    <div className="relative space-y-8 before:absolute before:left-[5.5rem] before:top-2 before:bottom-2 before:w-px before:bg-gray-200 dark:before:bg-gray-700 md:before:left-[6.5rem]">
      {entries.map((entry, index) => (
        <motion.article
          key={entry.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + index * 0.08, duration: 0.5 }}
          className="relative grid grid-cols-1 gap-4 md:grid-cols-[6.5rem_1fr]"
        >
          <div className="md:pt-1">
            <time className="text-sm font-semibold text-teal-500">{entry.date}</time>
          </div>

          <Link
            href={`/${language}/timeline/${entry.id}`}
            className="group rounded-xl border border-gray-100 bg-white p-4 transition-all duration-300 hover:border-teal-200 hover:shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:hover:border-teal-800 sm:p-5"
          >
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className={`${typeBadgeClass} ${typeBadgeStyles[entry.type]}`}>
                {t(`timeline.type.${entry.type}`)}
              </span>
              {entry.tags?.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600 dark:bg-gray-700 dark:text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              {entry.image && (
                <div className="h-28 w-full shrink-0 overflow-hidden rounded-lg sm:h-24 sm:w-36">
                  <img
                    src={entry.image}
                    alt={getLocalized(entry.title)}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = defaultImage
                    }}
                  />
                </div>
              )}

              <div className="min-w-0 flex-1">
                <h2 className="mb-2 text-lg font-semibold text-gray-900 transition-colors group-hover:text-teal-600 dark:text-gray-100 dark:group-hover:text-teal-400">
                  {getLocalized(entry.title)}
                </h2>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {getLocalized(entry.excerpt)}
                </p>
                <span className="mt-3 inline-block text-xs font-medium text-teal-600 dark:text-teal-400">
                  {t('timeline.readMore')} →
                </span>
              </div>
            </div>
          </Link>
        </motion.article>
      ))}
    </div>
  )
}

export default TimelineList
