"use client";
import { useEffect } from 'react'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { HiArrowLeft, HiExternalLink } from 'react-icons/hi'
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

  const primaryLink = entry.links?.[0]
  const otherLinks = entry.links?.slice(1) ?? []

  const galleryImages = entry.images?.length ? entry.images : entry.image ? [entry.image] : []

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900" style={{ paddingTop: '100px' }}>
      <div className="max-w-2xl mx-auto px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href={`/${language}/timeline`}
            className="inline-flex items-center gap-2 text-sm text-teal-500 transition-colors hover:text-teal-600"
          >
            <HiArrowLeft size={16} />
            {t('timeline.back')}
          </Link>
        </motion.div>

        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.5 }}
          className="mb-8"
        >
          <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
            <time className="font-semibold text-teal-500">{entry.date}</time>
            <span className="text-gray-300 dark:text-gray-600">·</span>
            <span className={`${typeBadgeClass} ${typeBadgeStyles[entry.type]}`}>
              {t(`timeline.type.${entry.type}`)}
            </span>
          </div>

          <h1 className="mb-4 text-3xl font-bold leading-tight text-gray-900 dark:text-gray-100 md:text-4xl">
            {getLocalized(entry.title)}
          </h1>

          <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400 md:text-lg">
            {getLocalized(entry.excerpt)}
          </p>

          {entry.tags && entry.tags.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {entry.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-teal-500/10 px-3 py-1 text-xs font-medium text-teal-700 dark:text-teal-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </motion.header>

        {galleryImages.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mb-10"
          >
            {galleryImages.length === 1 ? (
              <div className="overflow-hidden rounded-xl ring-1 ring-black/[0.04] dark:ring-white/10">
                <img
                  src={galleryImages[0]}
                  alt={getLocalized(entry.title)}
                  className={`aspect-[4/3] w-full sm:aspect-[16/10] ${
                    entry.imageFit === 'contain'
                      ? 'object-contain bg-gray-100 dark:bg-gray-900'
                      : 'object-cover'
                  }`}
                />
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {galleryImages.map((url, index) => (
                  <div
                    key={url}
                    className={`overflow-hidden rounded-xl ring-1 ring-black/[0.04] dark:ring-white/10 ${
                      index === 0 ? 'sm:col-span-2' : ''
                    }`}
                  >
                    <img
                      src={url}
                      alt={`${getLocalized(entry.title)} ${index + 1}`}
                      className={`w-full object-cover ${
                        index === 0 ? 'aspect-[16/9]' : 'aspect-[4/3]'
                      }`}
                    />
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mb-12"
        >
          <MarkdownRenderer content={getLocalized(entry.content)} />
        </motion.div>

        {(entry.projectId || primaryLink || otherLinks.length > 0) && (
          <motion.aside
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-3 border-t border-gray-200 pt-8 dark:border-gray-700"
          >
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-gray-400 dark:text-gray-500">
              {language === 'th' ? 'ลิงก์ที่เกี่ยวข้อง' : 'Related links'}
            </p>

            {entry.projectId && (
              <Link
                href={`/${language}/projects/${entry.projectId}`}
                className="group flex items-center justify-between gap-4 rounded-xl border border-teal-200 bg-teal-50/80 px-5 py-4 transition-colors hover:border-teal-300 hover:bg-teal-50 dark:border-teal-800/60 dark:bg-teal-950/30 dark:hover:border-teal-700"
              >
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100">
                    {language === 'th' ? 'ดูใน portfolio' : 'View in portfolio'}
                  </p>
                  <p className="mt-0.5 truncate text-xs text-gray-500 dark:text-gray-400">
                    /{language}/projects/{entry.projectId}
                  </p>
                </div>
                <HiArrowLeft size={18} className="shrink-0 rotate-180 text-teal-600 transition-transform group-hover:translate-x-0.5 dark:text-teal-400" />
              </Link>
            )}

            {primaryLink && (
              <a
                href={primaryLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 rounded-xl border border-teal-200 bg-teal-50/80 px-5 py-4 transition-colors hover:border-teal-300 hover:bg-teal-50 dark:border-teal-800/60 dark:bg-teal-950/30 dark:hover:border-teal-700"
              >
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100">
                    {getLocalized(primaryLink.label)}
                  </p>
                  <p className="mt-0.5 truncate text-xs text-gray-500 dark:text-gray-400">
                    {primaryLink.url.replace(/^https?:\/\//, '')}
                  </p>
                </div>
                <HiExternalLink
                  size={18}
                  className="shrink-0 text-teal-600 transition-transform group-hover:translate-x-0.5 dark:text-teal-400"
                />
              </a>
            )}

            {otherLinks.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 rounded-xl px-1 py-2 text-sm text-gray-600 transition-colors hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-400"
              >
                <span>{getLocalized(link.label)}</span>
                <HiExternalLink size={14} className="shrink-0 opacity-50 group-hover:opacity-100" />
              </a>
            ))}
          </motion.aside>
        )}
      </div>
    </div>
  )
}

export default TimelineDetailPage
