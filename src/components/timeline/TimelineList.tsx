import { motion } from 'framer-motion'
import { TimelineEntry } from '../../types'
import { useLocalizedData } from '../../hooks'
import { useTranslation } from 'react-i18next'
import { renderLinkedText } from '../../utils'

interface TimelineListProps {
  entries: TimelineEntry[]
}

const typeBadgeClass =
  'inline-flex shrink-0 items-center rounded-full px-2.5 py-0.5 text-[10px] font-semibold tracking-wide uppercase'

const typeBadgeStyles: Record<TimelineEntry['type'], string> = {
  activity: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
  participation: 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300',
  award: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
  event: 'bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300',
}

const TimelineList = ({ entries }: TimelineListProps) => {
  const { getLocalized } = useLocalizedData()
  const { t } = useTranslation()

  return (
    <div className="relative space-y-4 pl-6 before:absolute before:left-[7px] before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-teal-500 before:via-teal-300 before:to-transparent dark:before:from-teal-600 dark:before:via-teal-800">
      {entries.map((entry, index) => (
        <motion.article
          key={entry.id}
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15 + index * 0.06, duration: 0.4 }}
          className="relative"
        >
          <span className="absolute -left-6 top-5 h-3.5 w-3.5 rounded-full border-2 border-white bg-teal-500 shadow-sm dark:border-gray-900 dark:bg-teal-400" />

          <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-5">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <time className="text-sm font-semibold text-teal-600 dark:text-teal-400">
                {entry.date}
              </time>
              <span className={`${typeBadgeClass} ${typeBadgeStyles[entry.type]}`}>
                {t(`timeline.type.${entry.type}`)}
              </span>
            </div>

            <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              {renderLinkedText(getLocalized(entry.event), entry.links, getLocalized)}
            </p>
          </div>
        </motion.article>
      ))}
    </div>
  )
}

export default TimelineList
