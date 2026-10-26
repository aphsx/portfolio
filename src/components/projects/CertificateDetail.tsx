"use client";
import Link from 'next/link'
import { motion } from 'framer-motion'
import { HiArrowLeft } from 'react-icons/hi'
import { FiArrowUpRight, FiDownload } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'
import { Project } from '@/types'
import { useLightbox, useLocalizedData } from '@/hooks'
import { ImageGallery, Lightbox } from '@/components/media'
import { PageContainer } from '@/components/ui'

interface CertificateDetailProps {
  project: Project
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.45 },
})

export function CertificateDetail({ project }: CertificateDetailProps) {
  const { t } = useTranslation()
  const { getLocalized, language } = useLocalizedData()
  const { lightbox, openLightbox, closeLightbox, stepLightbox } = useLightbox()

  const title = getLocalized(project.title)
  const body = getLocalized(project.descriptionLong || project.description)
  const photos = project.images ?? []
  const photoUrls = photos.map((img) => img.url)

  const formattedGallery = photos.map((img, idx) => ({
    url: img.url,
    alt: img.caption ? getLocalized(img.caption) : `${title} - ${idx + 1}`,
  }))

  const meta = [t('project.certificate'), project.year ? String(project.year) : null]
    .filter(Boolean)
    .join(' · ')

  return (
    <PageContainer innerClassName="max-w-2xl mx-auto px-4 pb-16 sm:px-5">
      <motion.div {...fadeUp(0)} className="mb-6">
        <Link
          href={`/${language}/projects`}
          className="inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
        >
          <HiArrowLeft size={15} />
          {t('project.back')}
        </Link>
      </motion.div>

      <motion.header {...fadeUp(0.05)} className="mb-6">
        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">{meta}</p>
        <h1 className="break-words text-2xl font-bold leading-snug text-gray-900 dark:text-gray-100 sm:text-3xl">
          {title}
        </h1>
      </motion.header>

      {/* The certificate itself — shown whole, never cropped */}
      {project.image && (
        <motion.figure {...fadeUp(0.1)} className="mb-3">
          <button
            type="button"
            onClick={() => openLightbox([project.image], project.image)}
            className="block w-full cursor-zoom-in rounded-md bg-white p-2 shadow-[0_1px_2px_rgba(0,0,0,0.06),0_8px_24px_-12px_rgba(0,0,0,0.18)] ring-1 ring-black/[0.06] transition-shadow hover:shadow-[0_1px_2px_rgba(0,0,0,0.08),0_16px_32px_-12px_rgba(0,0,0,0.25)] dark:ring-white/10 sm:p-3"
            aria-label={t('project.clickToExpand')}
          >
            <img src={project.image} alt={title} className="block h-auto w-full" />
          </button>
        </motion.figure>
      )}

      {project.fileUrl && (
        <motion.div
          {...fadeUp(0.15)}
          className="mb-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm"
        >
          <a
            href={project.fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-gray-700 underline decoration-gray-300 underline-offset-4 transition-colors hover:text-gray-900 hover:decoration-gray-500 dark:text-gray-300 dark:decoration-gray-600 dark:hover:text-white"
          >
            {t('project.viewPdf')}
            <FiArrowUpRight
              size={14}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
          <a
            href={project.fileUrl}
            download
            className="inline-flex items-center gap-1.5 text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            <FiDownload size={14} />
            {t('project.download')}
          </a>
        </motion.div>
      )}

      <motion.section {...fadeUp(0.2)} className="mb-10">
        <p className="break-words text-[15px] leading-7 text-gray-700 dark:text-gray-300">{body}</p>

        {project.tags.length > 0 && (
          <p className="mt-4 text-sm text-gray-400 dark:text-gray-500">
            {project.tags.join(' · ')}
          </p>
        )}
      </motion.section>

      {formattedGallery.length > 0 && (
        <div className="border-t border-gray-200/80 pt-8 dark:border-gray-800">
          <ImageGallery
            images={formattedGallery}
            title={t('project.eventPhotos')}
            delay={0.25}
            layoutId="certificateGalleryLayout"
            labels={{
              single: t('layout.single'),
              columns2: t('layout.columns2'),
              columns3: t('layout.columns3'),
            }}
            onImageClick={(url) => openLightbox(photoUrls, url)}
          />
        </div>
      )}

      <Lightbox state={lightbox} onClose={closeLightbox} onStep={stepLightbox} />
    </PageContainer>
  )
}

export default CertificateDetail
