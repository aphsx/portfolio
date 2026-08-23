"use client";
import { useEffect } from 'react'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { HiArrowLeft, HiExternalLink } from 'react-icons/hi'
import { useTranslation } from 'react-i18next'
import MarkdownRenderer from '../../../../components/common/MarkdownRenderer'
import { TimelineRepository } from '../../../../data'
import { useLocalizedData } from '../../../../hooks'
import { TimelineEntry } from '../../../../types'

const typeBadgeClass =
  'inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold tracking-wide uppercase'

const typeBadgeStyles: Record<TimelineEntry['type'], string> = {
  activity: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
  participation: 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300',
  award: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
  event: 'bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300',
}

const TimelineDetailPage = () => {
  const { entryId } = useParams()
  const router = useRouter()
  const { t } = useTranslation()
  const { getLocalized, language } = useLocalizedData()

  const entry = TimelineRepository.getById((entryId as string) ?? '')

  useEffect(() => {
    if (!entry) {
      router.replace(`/${language}/timeline`)
    }
  }, [entry, router, language])

  if (!entry) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900" style={{ paddingTop: '100px' }}>
      <div className="max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <Link
            href={`/${language}/timeline`}
            className="inline-flex items-center gap-2 text-teal-500 hover:text-teal-600 transition-colors text-sm"
          >
            <HiArrowLeft size={16} />
            {t('timeline.back')}
          </Link>
        </motion.div>

        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-8"
        >
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <time className="text-sm font-semibold text-teal-500">{entry.date}</time>
            <span className={`${typeBadgeClass} ${typeBadgeStyles[entry.type]}`}>
              {t(`timeline.type.${entry.type}`)}
            </span>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {getLocalized(entry.title)}
          </h1>

          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            {getLocalized(entry.excerpt)}
          </p>
        </motion.header>

        {entry.image && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-10 overflow-hidden rounded-lg"
          >
            <img
              src={entry.image}
              alt={getLocalized(entry.title)}
              className="aspect-video w-full object-cover"
            />
          </motion.div>
        )}

        {entry.tags && entry.tags.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mb-8 flex flex-wrap gap-2"
          >
            {entry.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-teal-100 px-3 py-1 text-sm text-teal-700 dark:bg-teal-900/30 dark:text-teal-300"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-10"
        >
          <MarkdownRenderer content={getLocalized(entry.content)} />
        </motion.div>

        {entry.links && entry.links.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-16 flex flex-wrap gap-3"
          >
            {entry.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
              >
                <HiExternalLink size={16} />
                {getLocalized(link.label)}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default TimelineDetailPage
