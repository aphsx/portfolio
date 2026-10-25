"use client";
import { useParams, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiArrowLeft, HiExternalLink } from 'react-icons/hi'
import { FiGithub } from 'react-icons/fi'
import Link from 'next/link'
import { ProjectRepository } from '@/data'
import { useTranslation } from 'react-i18next'
import { useLightbox, useLocalizedData } from '@/hooks'
import MarkdownRenderer from '@/components/common/MarkdownRenderer'
import { ImageGallery, Lightbox } from '@/components/media'
import { PageContainer } from '@/components/ui'

const ProjectDetail = () => {
  const { projectId } = useParams()
  const { t } = useTranslation()
  const { getLocalized, language } = useLocalizedData()
  const router = useRouter()

  const project = ProjectRepository.getById((projectId as string) ?? '')
  const { lightbox, openLightbox, closeLightbox, stepLightbox } = useLightbox()

  const galleryImages = project?.images?.map((image) => image.url) ?? []
  const allImages = project?.image ? [project.image, ...galleryImages] : galleryImages

  useEffect(() => {
    if (!project) {
      router.replace(`/${language}/projects`)
    }
  }, [project, router, language])

  if (!project) {
    return null
  }

  const isDocument = Boolean(project.fileUrl)

  const formattedGallery = (project.images ?? []).map((img, idx) => ({
    url: img.url,
    alt: img.caption
      ? getLocalized(img.caption)
      : `${getLocalized(project.title)} - ${idx + 1}`,
  }))

  const galleryLabels = {
    single: t('layout.single'),
    columns2: t('layout.columns2'),
    columns3: t('layout.columns3'),
  }

  return (
    <PageContainer>
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        <Link
          href={`/${language}/projects`}
          className="inline-flex items-center gap-2 text-teal-500 hover:text-teal-600 transition-colors text-sm"
        >
          <HiArrowLeft size={16} />
          {t('project.back')}
        </Link>
      </motion.div>

      {/* Project Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mb-10"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6 break-words">
          {getLocalized(project.title)}
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
          {getLocalized(project.description)}
        </p>
      </motion.div>

      {/* Project Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mb-10"
      >
        <div
          className="aspect-video rounded-lg overflow-hidden bg-white dark:bg-gray-800 cursor-zoom-in group relative"
          onClick={() => openLightbox(allImages, project.image)}
        >
          <img
            src={project.image}
            alt={getLocalized(project.title)}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-medium border border-white/30">
              {t('project.clickToExpand')}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Project Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mb-10"
      >
        {/* Tags */}
        {project.tags.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              {t('project.technologies')}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Action Links */}
        <div className="flex flex-wrap gap-4">
          {isDocument ? (
            <motion.a
              href={project.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium transition-colors bg-teal-500 hover:bg-teal-600 text-white"
            >
              <HiExternalLink size={16} />
              {t('project.viewPdf')}
            </motion.a>
          ) : (
            <>
              <motion.a
                href={project.link || '#'}
                target={project.link ? '_blank' : '_self'}
                rel={project.link ? 'noopener noreferrer' : ''}
                whileHover={{ scale: project.link ? 1.05 : 1 }}
                whileTap={{ scale: project.link ? 0.95 : 1 }}
                className={`inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
                  project.link
                    ? 'bg-teal-500 hover:bg-teal-600 text-white'
                    : 'bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed'
                }`}
                onClick={(e) => {
                  if (!project.link) e.preventDefault()
                }}
              >
                <HiExternalLink size={16} />
                {project.link ? t('project.visit') : t('project.coming_soon')}
              </motion.a>

              <motion.a
                href={project.github || '#'}
                target={project.github ? '_blank' : '_self'}
                rel={project.github ? 'noopener noreferrer' : ''}
                whileHover={{ scale: project.github ? 1.05 : 1 }}
                whileTap={{ scale: project.github ? 0.95 : 1 }}
                className={`inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium transition-colors border ${
                  project.github
                    ? 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600'
                    : 'bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed border-gray-400 dark:border-gray-600'
                }`}
                onClick={(e) => {
                  if (!project.github) e.preventDefault()
                }}
              >
                <FiGithub size={16} />
                {project.github ? t('project.code') : t('project.private')}
              </motion.a>
            </>
          )}
        </div>
      </motion.div>

      {/* Project Details */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="mb-16"
      >
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-6">
          {t('project.about')}
        </h3>
        <MarkdownRenderer
          content={getLocalized(project.descriptionLong || project.description)}
        />
      </motion.div>

      {/* Gallery (rendered before document if layout is 'photos') */}
      {project.galleryLayout === 'photos' && (
        <ImageGallery
          images={formattedGallery}
          title={t('common.morePhotos')}
          delay={0.75}
          layoutId="projectDetailGalleryLayout"
          labels={galleryLabels}
          onImageClick={(url) => openLightbox(galleryImages, url)}
        />
      )}

      {/* Document PDF Embed */}
      {project.fileUrl && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-6">
            {t('project.document')}
          </h3>
          <div className="aspect-[3/4] sm:aspect-video rounded-lg overflow-hidden bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-800 shadow-sm">
            <iframe
              src={project.fileUrl}
              title={getLocalized(project.title)}
              className="h-full w-full"
            />
          </div>
        </motion.div>
      )}

      {/* Gallery (default placement) */}
      {project.galleryLayout !== 'photos' && (
        <ImageGallery
          images={formattedGallery}
          title={t('common.morePhotos')}
          delay={0.8}
          layoutId="projectDetailGalleryLayout"
          labels={galleryLabels}
          onImageClick={(url) => openLightbox(galleryImages, url)}
        />
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

export default ProjectDetail
