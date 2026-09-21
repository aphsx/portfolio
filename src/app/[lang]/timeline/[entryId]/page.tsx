"use client";
import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { HiArrowLeft, HiChevronLeft, HiChevronRight, HiExternalLink, HiX } from 'react-icons/hi'
import { Columns2, Columns3, Rows3 } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import MarkdownRenderer from '../../../../components/common/MarkdownRenderer'
import { typeBadgeClass, typeBadgeStyles } from '../../../../components/timeline/timelineStyles'
import { TimelineRepository } from '../../../../data'
import { useLocalizedData } from '../../../../hooks'

type GalleryLayout = 'single' | 'columns-2' | 'columns-3'

const LAYOUT_OPTIONS = [
  {
    id: 'single' as const,
    name: { en: 'Feed', th: 'แนวตั้ง' },
    label: { en: '1 photo per row (vertical feed)', th: '1 รูปต่อแถว (แนวตั้งขนาดใหญ่)' },
    icon: Rows3,
  },
  {
    id: 'columns-2' as const,
    name: { en: '2 Cols', th: '2 คอลัมน์' },
    label: { en: '2 columns (masonry)', th: '2 คอลัมน์ (Masonry)' },
    icon: Columns2,
  },
  {
    id: 'columns-3' as const,
    name: { en: '3 Cols', th: '3 คอลัมน์' },
    label: { en: '3 columns (compact grid)', th: '3 คอลัมน์ (หลายกล่องในแถว)' },
    icon: Columns3,
  },
]

const TimelineDetailPage = () => {
  const { entryId } = useParams()
  const router = useRouter()
  const { t } = useTranslation()
  const { getLocalized, language } = useLocalizedData()

  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null)
  const [galleryLayout, setGalleryLayout] = useState<GalleryLayout>('columns-2')
  const touchStartX = useRef(0)

  useEffect(() => {
    try {
      const saved = localStorage.getItem('portfolio_gallery_layout') as GalleryLayout
      if (saved === 'single' || saved === 'columns-2' || saved === 'columns-3') {
        setGalleryLayout(saved)
      }
    } catch {
      // Ignore localStorage availability issues
    }
  }, [])

  const handleLayoutChange = (layout: GalleryLayout) => {
    setGalleryLayout(layout)
    try {
      localStorage.setItem('portfolio_gallery_layout', layout)
    } catch {
      // Ignore
    }
  }

  const entry = TimelineRepository.getById((entryId as string) ?? '')

  const heroImage = entry?.image ?? entry?.images?.[0]
  const allImages = Array.from(
    new Set([heroImage, ...(entry?.images ?? [])].filter(Boolean))
  ) as string[]
  const galleryImages = entry?.images ?? []

  const lightboxImage = lightbox ? lightbox.images[lightbox.index] : null
  const canNavigate = (lightbox?.images.length ?? 0) > 1

  const openLightbox = (images: string[], url: string) => {
    const index = images.indexOf(url)
    setLightbox({ images, index: index < 0 ? 0 : index })
  }

  const goLightbox = (delta: number) => {
    setLightbox((current) => {
      if (!current || current.images.length < 2) return current
      const next = (current.index + delta + current.images.length) % current.images.length
      return { ...current, index: next }
    })
  }

  useEffect(() => {
    if (!entry) {
      router.replace(`/${language}/timeline`)
    }
  }, [entry, router, language])

  useEffect(() => {
    if (!lightbox) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setLightbox(null)
      if (event.key === 'ArrowLeft') goLightbox(-1)
      if (event.key === 'ArrowRight') goLightbox(1)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [lightbox])

  if (!entry) {
    return null
  }

  const primaryLink = entry.links?.[0]
  const otherLinks = entry.links?.slice(1) ?? []

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900" style={{ paddingTop: '100px' }}>
      <div className="max-w-2xl mx-auto px-4 pb-16 sm:px-5">
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
              <span className={`${typeBadgeClass} bg-white/90 backdrop-blur-sm dark:bg-gray-900/90 ${typeBadgeStyles[entry.type]}`}>
                {t(`timeline.type.${entry.type}`)}
              </span>
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
              <span className="text-gray-300 dark:text-gray-600">·</span>
              <span className={`${typeBadgeClass} ${typeBadgeStyles[entry.type]}`}>
                {t(`timeline.type.${entry.type}`)}
              </span>
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

        {galleryImages.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.5 }}
            className="mb-12"
          >
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 sm:text-lg">
                  {language === 'th' ? 'รูปเพิ่มเติม' : 'More photos'}
                </h3>
                <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                  {galleryImages.length}
                </span>
              </div>

              {/* Layout switcher */}
              <div className="flex items-center rounded-lg bg-gray-100/90 p-1 ring-1 ring-black/5 dark:bg-gray-800/80 dark:ring-white/10">
                {LAYOUT_OPTIONS.map((opt) => {
                  const isActive = galleryLayout === opt.id
                  const Icon = opt.icon
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => handleLayoutChange(opt.id)}
                      title={opt.label[language === 'th' ? 'th' : 'en']}
                      aria-label={opt.label[language === 'th' ? 'th' : 'en']}
                      className={`relative flex h-7 w-7 items-center justify-center rounded-md text-xs font-medium transition-colors ${
                        isActive
                          ? 'text-gray-900 dark:text-white'
                          : 'text-gray-400 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="activeGalleryLayout"
                          className="absolute inset-0 rounded-md bg-white shadow-xs dark:bg-gray-700"
                          transition={{ type: 'spring', bounce: 0.15, duration: 0.35 }}
                        />
                      )}
                      <Icon size={15} className="relative z-10 shrink-0" />
                    </button>
                  )
                })}
              </div>
            </div>

            {galleryLayout === 'single' && (
              <div className="flex flex-col gap-4">
                {galleryImages.map((url, index) => (
                  <button
                    key={url}
                    type="button"
                    className="group relative block w-full overflow-hidden rounded-xl border border-black/5 bg-gray-100 p-0 cursor-zoom-in dark:border-white/10 dark:bg-gray-800/60"
                    onClick={() => openLightbox(allImages, url)}
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100 dark:bg-gray-900">
                      <img
                        src={url}
                        alt={`${getLocalized(entry.title)} - ${index + 1}`}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                        loading="lazy"
                      />
                    </div>
                  </button>
                ))}
              </div>
            )}

            {galleryLayout === 'columns-2' && (
              <div className="grid grid-cols-2 gap-3">
                {galleryImages.map((url, index) => (
                  <button
                    key={url}
                    type="button"
                    className="group block w-full overflow-hidden rounded-lg border border-black/5 bg-gray-100 p-0 cursor-zoom-in dark:border-white/10 dark:bg-gray-800/60"
                    onClick={() => openLightbox(allImages, url)}
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100 dark:bg-gray-900">
                      <img
                        src={url}
                        alt={`${getLocalized(entry.title)} - ${index + 1}`}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                    </div>
                  </button>
                ))}
              </div>
            )}

            {galleryLayout === 'columns-3' && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {galleryImages.map((url, index) => (
                  <button
                    key={url}
                    type="button"
                    className="group block w-full overflow-hidden rounded-lg border border-black/5 bg-gray-100 p-0 cursor-zoom-in dark:border-white/10 dark:bg-gray-800/60"
                    onClick={() => openLightbox(allImages, url)}
                  >
                    <div className="relative aspect-square w-full overflow-hidden bg-gray-100 dark:bg-gray-900">
                      <img
                        src={url}
                        alt={`${getLocalized(entry.title)} - ${index + 1}`}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                        loading="lazy"
                      />
                    </div>
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        )}

        {(entry.projectId || primaryLink || otherLinks.length > 0) && (
          <motion.aside
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-3 border-t border-gray-200 pt-6 dark:border-gray-700"
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

      <AnimatePresence>
        {lightboxImage && lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-10"
            onClick={() => setLightbox(null)}
          >
            <motion.button
              type="button"
              className="absolute top-6 right-6 z-10 text-white/70 hover:text-white p-2 bg-white/10 rounded-full backdrop-blur-md border border-white/20 transition-all hover:scale-110"
              whileHover={{ rotate: 90 }}
              onClick={() => setLightbox(null)}
            >
              <HiX size={24} />
            </motion.button>

            {canNavigate && (
              <>
                <button
                  type="button"
                  aria-label="Previous image"
                  className="absolute left-3 md:left-6 z-10 text-white/80 hover:text-white p-2 bg-white/10 rounded-full backdrop-blur-md border border-white/20"
                  onClick={(event) => {
                    event.stopPropagation()
                    goLightbox(-1)
                  }}
                >
                  <HiChevronLeft size={28} />
                </button>
                <button
                  type="button"
                  aria-label="Next image"
                  className="absolute right-3 md:right-6 z-10 text-white/80 hover:text-white p-2 bg-white/10 rounded-full backdrop-blur-md border border-white/20"
                  onClick={(event) => {
                    event.stopPropagation()
                    goLightbox(1)
                  }}
                >
                  <HiChevronRight size={28} />
                </button>
              </>
            )}

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center gap-3"
              onClick={(event) => event.stopPropagation()}
              onTouchStart={(event) => {
                touchStartX.current = event.changedTouches[0].clientX
              }}
              onTouchEnd={(event) => {
                const delta = event.changedTouches[0].clientX - touchStartX.current
                if (Math.abs(delta) < 40) return
                goLightbox(delta > 0 ? -1 : 1)
              }}
            >
              <img
                src={lightboxImage}
                alt="Enlarged view"
                className="max-w-full max-h-[82vh] object-contain rounded-lg shadow-2xl"
              />
              {canNavigate && (
                <p className="text-white/70 text-sm">
                  {lightbox.index + 1} / {lightbox.images.length}
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default TimelineDetailPage
