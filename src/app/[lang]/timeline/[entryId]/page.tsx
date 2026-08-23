"use client";
import { useEffect } from 'react'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { HiArrowLeft, HiArrowRight, HiExternalLink } from 'react-icons/hi'
import { useTranslation } from 'react-i18next'
import MarkdownRenderer from '../../../../components/common/MarkdownRenderer'
import { typeBadgeClass, typeBadgeStyles } from '../../../../components/timeline/timelineStyles'
import { TimelineRepository } from '../../../../data'
import { useLocalizedData } from '../../../../hooks'

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
      <div className="max-w-2xl mx-auto px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <Link
            href={`/${language}/timeline`}
            className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-sm font-medium text-gray-600 ring-1 ring-gray-200 transition-colors hover:text-teal-600 hover:ring-teal-500/30 dark:bg-gray-800 dark:text-gray-300 dark:ring-gray-700 dark:hover:text-teal-400"
          >
            <HiArrowLeft size={14} />
            {t('timeline.back')}
          </Link>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.6 }}
          className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/[0.04] dark:bg-gray-800/80 dark:ring-white/10"
        >
          {entry.image && (
            <div className="relative aspect-[16/9] overflow-hidden bg-gray-100 dark:bg-gray-900">
              <img
                src={entry.image}
                alt={getLocalized(entry.title)}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <time className="text-xs font-semibold tracking-wide text-white/90">
                    {entry.date}
                  </time>
                  <span className={`${typeBadgeClass} bg-white/15 text-white ring-white/20 backdrop-blur-sm`}>
                    {t(`timeline.type.${entry.type}`)}
                  </span>
                </div>
                <h1 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                  {getLocalized(entry.title)}
                </h1>
              </div>
            </div>
          )}

          <div className="p-6 sm:p-8">
            {!entry.image && (
              <header className="mb-6 border-b border-gray-100 pb-6 dark:border-gray-700">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <time className="text-xs font-semibold tracking-wide text-teal-600 dark:text-teal-400">
                    {entry.date}
                  </time>
                  <span className={`${typeBadgeClass} ${typeBadgeStyles[entry.type]}`}>
                    {t(`timeline.type.${entry.type}`)}
                  </span>
                </div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 sm:text-3xl">
                  {getLocalized(entry.title)}
                </h1>
              </header>
            )}

            <p className="mb-6 text-base leading-relaxed text-gray-600 dark:text-gray-400">
              {getLocalized(entry.excerpt)}
            </p>

            {entry.tags && entry.tags.length > 0 && (
              <div className="mb-8 flex flex-wrap gap-2">
                {entry.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="prose-timeline rounded-xl bg-gray-50 p-5 sm:p-6 dark:bg-gray-900/50">
              <MarkdownRenderer content={getLocalized(entry.content)} />
            </div>

            {entry.links && entry.links.length > 0 && (
              <div className="mt-8 flex flex-col gap-3 border-t border-gray-100 pt-8 dark:border-gray-700 sm:flex-row sm:flex-wrap">
                {entry.links.map((link, index) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all ${
                      index === 0
                        ? 'bg-teal-500 text-white shadow-sm hover:bg-teal-600'
                        : 'bg-white text-gray-800 ring-1 ring-gray-200 hover:ring-teal-500/30 dark:bg-gray-900 dark:text-gray-100 dark:ring-gray-600'
                    }`}
                  >
                    {index === 0 ? <HiArrowRight size={16} /> : <HiExternalLink size={16} />}
                    {getLocalized(link.label)}
                  </a>
                ))}
              </div>
            )}
          </div>
        </motion.article>
      </div>
    </div>
  )
}

export default TimelineDetailPage
