"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowLeft, HiChevronLeft, HiChevronRight, HiExternalLink, HiX } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";
import Link from "next/link";
import { ProjectRepository } from "../../../../data";
import { useTranslation } from 'react-i18next';
import { useLocalizedData } from '../../../../hooks';
import MarkdownRenderer from '../../../../components/common/MarkdownRenderer';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const { t } = useTranslation();
  const { getLocalized, language } = useLocalizedData();
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null);
  const touchStartX = useRef(0);

  const project = ProjectRepository.getById((projectId as string) ?? '');
  const router = useRouter();
  const galleryImages = project?.images?.map((image) => image.url) ?? [];
  const lightboxImage = lightbox ? lightbox.images[lightbox.index] : null;
  const canNavigate = (lightbox?.images.length ?? 0) > 1;

  const openLightbox = (images: string[], url: string) => {
    const index = images.indexOf(url);
    setLightbox({ images, index: index < 0 ? 0 : index });
  };

  const goLightbox = (delta: number) => {
    setLightbox((current) => {
      if (!current || current.images.length < 2) return current;
      const next = (current.index + delta + current.images.length) % current.images.length;
      return { ...current, index: next };
    });
  };

  useEffect(() => {
    if (!project) {
      router.replace(`/${language}/projects`);
    }
  }, [project, router, language]);

  useEffect(() => {
    if (!lightbox) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setLightbox(null);
      if (event.key === 'ArrowLeft') goLightbox(-1);
      if (event.key === 'ArrowRight') goLightbox(1);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightbox]);

  if (!project) {
    return null;
  }

  const isDocument = Boolean(project.fileUrl);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900" style={{ paddingTop: "100px" }}>
      <div className="max-w-2xl mx-auto px-6">
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
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
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
            onClick={() => openLightbox([project.image], project.image)}
          >
            <img
              src={project.image}
              alt={getLocalized(project.title)}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-medium border border-white/30">
                Click to Expand
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
                  href={project.link || "#"}
                  target={project.link ? "_blank" : "_self"}
                  rel={project.link ? "noopener noreferrer" : ""}
                  whileHover={{ scale: project.link ? 1.05 : 1 }}
                  whileTap={{ scale: project.link ? 0.95 : 1 }}
                  className={`inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium transition-colors ${project.link
                    ? "bg-teal-500 hover:bg-teal-600 text-white"
                    : "bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed"
                    }`}
                  onClick={(e) => {
                    if (!project.link) e.preventDefault();
                  }}
                >
                  <HiExternalLink size={16} />
                  {project.link ? t('project.visit') : t('project.coming_soon')}
                </motion.a>

                <motion.a
                  href={project.github || "#"}
                  target={project.github ? "_blank" : "_self"}
                  rel={project.github ? "noopener noreferrer" : ""}
                  whileHover={{ scale: project.github ? 1.05 : 1 }}
                  whileTap={{ scale: project.github ? 0.95 : 1 }}
                  className={`inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium transition-colors border ${project.github
                    ? "bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
                    : "bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed border-gray-400 dark:border-gray-600"
                    }`}
                  onClick={(e) => {
                    if (!project.github) e.preventDefault();
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

        {project.galleryLayout === 'photos' && project.images && project.images.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
            className="mb-16"
          >
            <div className="columns-2 gap-3">
              {project.images.map((image, index) => (
                  <button
                    key={image.url}
                    type="button"
                    className="mb-3 block w-full break-inside-avoid overflow-hidden rounded-lg bg-transparent p-0 border-0 cursor-zoom-in"
                    onClick={() => openLightbox(galleryImages, image.url)}
                  >
                  <img
                    src={image.url}
                    alt={`${getLocalized(project.title)} - ${index + 1}`}
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        )}

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

        {project.galleryLayout !== 'photos' && project.images && project.images.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mb-16"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-8">
              {t('project.gallery')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.images.map((image, index) => (
                <div
                  key={image.url}
                  className="flex flex-col gap-3"
                >
                  <div
                    className="aspect-video rounded-lg overflow-hidden bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-800 shadow-sm cursor-zoom-in group relative"
                    onClick={() => openLightbox(galleryImages, image.url)}
                  >
                    <img
                      src={image.url}
                      alt={image.caption ? getLocalized(image.caption) : `${getLocalized(project.title)} - Image ${index + 1}`}
                      className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                  {image.caption && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium px-1">
                      {getLocalized(image.caption)}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
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
                    event.stopPropagation();
                    goLightbox(-1);
                  }}
                >
                  <HiChevronLeft size={28} />
                </button>
                <button
                  type="button"
                  aria-label="Next image"
                  className="absolute right-3 md:right-6 z-10 text-white/80 hover:text-white p-2 bg-white/10 rounded-full backdrop-blur-md border border-white/20"
                  onClick={(event) => {
                    event.stopPropagation();
                    goLightbox(1);
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
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center gap-3"
              onClick={(event) => event.stopPropagation()}
              onTouchStart={(event) => {
                touchStartX.current = event.changedTouches[0].clientX;
              }}
              onTouchEnd={(event) => {
                const delta = event.changedTouches[0].clientX - touchStartX.current;
                if (Math.abs(delta) < 40) return;
                goLightbox(delta > 0 ? -1 : 1);
              }}
            >
              <img
                src={lightboxImage}
                alt="Enlarged project view"
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
  );
};

export default ProjectDetail;
