"use client";
import { useEffect } from 'react'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { HiArrowLeft, HiExternalLink } from 'react-icons/hi'
import { useTranslation } from 'react-i18next'
import MarkdownRenderer from '@/components/common/MarkdownRenderer'
import { ImageGallery, Lightbox } from '@/components/media'
import { PageContainer } from '@/components/ui'
import { TimelineRepository, getTimelineCover } from '@/data'
import { useLightbox, useLocalizedData } from '@/hooks'

const TimelineDetailPage = () => {
  const { entryId } = useParams()
  const router = useRouter()
  const { t } = useTranslation()
  const { getLocalized, language } = useLocalizedData()
  const { lightbox, openLightbox, closeLightbox, stepLightbox } = useLightbox()

  const entry = TimelineRepository.getById((entryId as string) ?? '')

  useEffect(() => {
    if (!entry) {
      router.replace(`/${language}/timeline`)
    }
  }, [entry, router, language])

  if (!entry) {
    return null
  }

  const heroImage = getTimelineCover(entry)
  const allImages = Array.from(
    new Set([heroImage, ...(entry.images ?? [])].filter(Boolean)),
  ) as string[]
  const galleryImages = entry.images ?? []

  const formattedGallery = galleryImages.map((url, index) => ({
    url,
    alt: `${getLocalized(entry.title)} - ${index + 1}`,
  }))

  const galleryLabels = {
    single: t('layout.single'),
    columns2: t('layout.columns2'),
    columns3: t('layout.columns3'),
  }

  const primaryLink = entry.links?.[0]
  const otherLinks = entry.links?.slice(1) ?? []

  return (
    <PageContainer innerClassName="max-w-2xl mx-auto px-4 pb-16 sm:px-5">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-5"
      >
        <Link
          href={`/${language}/timeline`}
          className="inline-flex items-center gap-2 text-sm text-teal-500 transition-colors hover:text-teal-600"
        >
          <HiArrowLeft size={16} />
          {t('timeline.back')}
        </Link>
      </motion.div>

      {heroImage && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.5 }}
          className="relative mb-5 overflow-hidden rounded-xl ring-1 ring-black/[0.04] dark:ring-white/10 cursor-zoom-in group"
          onClick={() => openLightbox(allImages, heroImage)}
        >
          <img
            src={heroImage}
            alt={getLocalized(entry.title)}
            style={entry.imagePosition ? { objectPosition: entry.imagePosition } : undefined}
            className={`aspect-[16/9] w-full ${
              entry.imageFit === 'contain'
                ? 'object-contain bg-gray-100 dark:bg-gray-900'
                : 'object-cover'
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
          <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
          <div className="absolute bottom-0 left-0 right-0 flex flex-wrap items-center gap-2 p-3">
            <time className="rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-gray-800 backdrop-blur-sm dark:bg-gray-900/90 dark:text-gray-100">
              {entry.date}
            </time>
          </div>
        </motion.div>
      )}

      <motion.header
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08, duration: 0.5 }}
        className="mb-5"
      >
        {!heroImage && (
          <div className="mb-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs">
            <time className="font-semibold text-teal-500">{entry.date}</time>
          </div>
        )}

        <h1 className="mb-2 text-xl font-bold leading-snug text-gray-900 dark:text-gray-100 sm:text-2xl">
          {getLocalized(entry.title)}
        </h1>

        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          {getLocalized(entry.excerpt)}
        </p>
      </motion.header>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="mb-8"
      >
        <MarkdownRenderer content={getLocalized(entry.content)} className="timeline-markdown" />
      </motion.div>

      {/* Gallery */}
      <ImageGallery
        images={formattedGallery}
        title={t('common.morePhotos')}
        delay={0.12}
        layoutId="timelineDetailGalleryLayout"
        labels={galleryLabels}
        onImageClick={(url) => openLightbox(allImages, url)}
      />

      {/* Related links */}
      {(entry.projectId || primaryLink || otherLinks.length > 0) && (
        <motion.aside
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="space-y-3 border-t border-gray-200 pt-6 dark:border-gray-700"
        >
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-gray-400 dark:text-gray-500">
            {t('timeline.relatedLinks')}
          </p>

          {entry.projectId && (
            <Link
              href={`/${language}/projects/${entry.projectId}`}
              className="group flex items-center justify-between gap-4 rounded-xl border border-teal-200 bg-teal-50/80 px-5 py-4 transition-colors hover:border-teal-300 hover:bg-teal-50 dark:border-teal-800/60 dark:bg-teal-950/30 dark:hover:border-teal-700"
            >
              <div className="min-w-0">
                <p className="font-semibold text-gray-900 dark:text-gray-100">
                  {t('timeline.viewInPortfolio')}
                </p>
                <p className="mt-0.5 truncate text-xs text-gray-500 dark:text-gray-400">
                  /{language}/projects/{entry.projectId}
                </p>
              </div>
              <HiArrowLeft
                size={18}
                className="shrink-0 rotate-180 text-teal-600 transition-transform group-hover:translate-x-0.5 dark:text-teal-400"
              />
            </Link>
          )}

          {primaryLink && (
            <a
              href={primaryLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 rounded-xl border border-teal-200 bg-teal-50/80 px-5 py-4 transition-colors hover:border-teal-300 hover:bg-teal-50 dark:border-teal-800/60 dark:bg-teal-950/30 dark:hover:border-teal-700"
            >
              <div className="min-w-0">
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
              <span className="min-w-0 break-words">{getLocalized(link.label)}</span>
              <HiExternalLink size={14} className="shrink-0 opacity-50 group-hover:opacity-100" />
            </a>
          ))}
        </motion.aside>
      )}

      {/* Lightbox Modal */}
      <Lightbox
        state={lightbox}
        onClose={closeLightbox}
        onStep={stepLightbox}
      />
    </PageContainer>
  )
}

export default TimelineDetailPage
