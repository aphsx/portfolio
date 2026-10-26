"use client";
import { useEffect } from 'react'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { HiArrowLeft } from 'react-icons/hi'
import { FiArrowUpRight } from 'react-icons/fi'
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

  const getHost = (url: string) => {
    try {
      return new URL(url).hostname.replace(/^www\./, '')
    } catch {
      return url
    }
  }

  const relatedLinks = [
    ...(entry.projectId
      ? [
          {
            key: 'project',
            href: `/${language}/projects/${entry.projectId}`,
            label: t('timeline.viewInPortfolio'),
            meta: 'portfolio',
            external: false,
          },
        ]
      : []),
    ...(entry.links ?? []).map((link) => ({
      key: link.url,
      href: link.url,
      label: getLocalized(link.label),
      meta: getHost(link.url),
      external: true,
    })),
  ]

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
      {relatedLinks.length > 0 && (
        <motion.aside
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-4"
        >
          <h2 className="mb-1 text-sm font-medium text-gray-500 dark:text-gray-400">
            {t('timeline.relatedLinks')}
          </h2>

          <ul className="divide-y divide-gray-200/80 border-y border-gray-200/80 dark:divide-gray-800 dark:border-gray-800">
            {relatedLinks.map((link) => {
              const inner = (
                <>
                  {link.external ? (
                    <img
                      src={`https://www.google.com/s2/favicons?domain=${link.meta}&sz=64`}
                      alt=""
                      width={16}
                      height={16}
                      loading="lazy"
                      className="h-4 w-4 shrink-0 rounded-sm"
                      onError={(e) => {
                        e.currentTarget.style.visibility = 'hidden'
                      }}
                    />
                  ) : (
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                    </span>
                  )}
                  <span className="min-w-0 flex-1 truncate text-[15px] text-gray-800 decoration-gray-300 underline-offset-4 group-hover:underline dark:text-gray-200 dark:decoration-gray-600">
                    {link.label}
                  </span>
                  <span className="hidden shrink-0 text-xs text-gray-400 sm:inline dark:text-gray-500">
                    {link.meta}
                  </span>
                  <FiArrowUpRight
                    size={15}
                    className={`shrink-0 text-gray-400 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gray-700 dark:group-hover:text-gray-200 ${
                      link.external ? '' : 'rotate-45'
                    }`}
                  />
                </>
              )

              const rowClass = 'group flex items-center gap-3 py-3'

              return (
                <li key={link.key}>
                  {link.external ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className={rowClass}>
                      {inner}
                    </a>
                  ) : (
                    <Link href={link.href} className={rowClass}>
                      {inner}
                    </Link>
                  )}
                </li>
              )
            })}
          </ul>
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
