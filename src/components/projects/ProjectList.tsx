import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiArrowRight } from 'react-icons/hi'
import { Project } from '../../types'
import { useLocalizedData } from '../../hooks'
import { useTranslation } from 'react-i18next'

export type ProjectLayout = 'rows' | 'grid'

interface ProjectListProps {
  title?: string
  projects: Project[]
  layout?: ProjectLayout
  showDivider?: boolean
}

const ProjectList = ({ title, projects, layout = 'rows' }: ProjectListProps) => {
  const { getLocalized, language } = useLocalizedData()
  const { t } = useTranslation()
  const defaultImage = '/images/CSI00138.jpg'

  if (projects.length === 0) return null

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12 last:mb-0"
    >
      {/* Section Title & Count Badge */}
      {title && (
        <div className="flex items-center gap-2 mb-5">
          <h2 className="text-lg sm:text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            {title}
          </h2>
          <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400">
            {projects.length}
          </span>
        </div>
      )}

      {/* 1. Rows layout (แบบเดิมเป็นหลัก - แถวแนวนอน จัดวางสวยงาม สัดส่วนเท่ากัน) */}
      {layout === 'rows' ? (
        <div className="space-y-4">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.04 + index * 0.03, duration: 0.4, ease: 'easeOut' }}
            >
              <Link
                href={`/${language}/projects/${project.id}`}
                className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 rounded-2xl p-3 sm:p-4 bg-white dark:bg-gray-800/80 shadow-xs ring-1 ring-black/[0.04] dark:ring-white/10"
              >
                {/* Thumbnail: Fixed 16:10 aspect ratio */}
                <div className="relative w-full sm:w-48 sm:h-32 h-44 shrink-0 overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-900 ring-1 ring-black/5 dark:ring-white/10">
                  <img
                    src={project.image || defaultImage}
                    alt={getLocalized(project.title)}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = defaultImage
                    }}
                  />
                  {project.year && (
                    <div className="absolute top-2 left-2">
                      <span className="rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-semibold text-gray-800 backdrop-blur-sm dark:bg-gray-900/90 dark:text-gray-100 shadow-xs">
                        {project.year}
                      </span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="flex flex-1 flex-col justify-between w-full min-w-0">
                  <div>
                    <h3 className="line-clamp-1 text-base sm:text-lg font-bold text-gray-900 transition-colors group-hover:text-teal-600 dark:text-gray-100 dark:group-hover:text-teal-400">
                      {getLocalized(project.title)}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-xs sm:text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                      {getLocalized(project.shortDescription || project.description)}
                    </p>
                  </div>

                  <div className="mt-3 flex items-center justify-between pt-1">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="rounded-md bg-gray-100 px-2 py-0.5 text-[11px] font-medium text-gray-600 dark:bg-gray-700/60 dark:text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="text-[11px] text-gray-400 dark:text-gray-500">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>

                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-teal-600 transition-all group-hover:gap-1.5 dark:text-teal-400 shrink-0">
                      {t('portfolio.viewProject')}
                      <HiArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      ) : (
        /* 2. Grid layout (หลายกล่องในแถว - 2 คอลัมน์ทุกหน้าจอ) */
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.04 + index * 0.03, duration: 0.4, ease: 'easeOut' }}
              className="flex h-full"
            >
              <Link
                href={`/${language}/projects/${project.id}`}
                className="group flex w-full flex-col overflow-hidden rounded-xl bg-white shadow-xs ring-1 ring-black/[0.04] dark:bg-gray-800/80 dark:ring-white/10"
              >
                <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-gray-100 dark:bg-gray-900">
                  <img
                    src={project.image || defaultImage}
                    alt={getLocalized(project.title)}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = defaultImage
                    }}
                  />
                  {project.year && (
                    <div className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2">
                      <span className="rounded-full bg-white/90 px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] font-semibold text-gray-800 backdrop-blur-sm dark:bg-gray-900/90 dark:text-gray-100 shadow-xs">
                        {project.year}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col justify-between p-2.5 sm:p-4">
                  <div>
                    <h3 className="line-clamp-1 text-xs sm:text-sm font-bold leading-snug text-gray-900 transition-colors group-hover:text-teal-600 dark:text-gray-100 dark:group-hover:text-teal-400">
                      {getLocalized(project.title)}
                    </h3>

                    <p className="mt-1 line-clamp-2 text-[11px] sm:text-xs leading-relaxed text-gray-500 dark:text-gray-400">
                      {getLocalized(project.shortDescription || project.description)}
                    </p>
                  </div>

                  <div className="mt-2.5 sm:mt-3.5 flex flex-wrap items-center justify-between gap-1 pt-0.5">
                    <div className="flex flex-wrap items-center gap-1">
                      {project.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="rounded-md bg-gray-100 px-1 sm:px-1.5 py-0.5 text-[9px] sm:text-[10px] font-medium text-gray-600 dark:bg-gray-700/60 dark:text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 2 && (
                        <span className="text-[9px] sm:text-[10px] text-gray-400 dark:text-gray-500">
                          +{project.tags.length - 2}
                        </span>
                      )}
                    </div>

                    <span className="inline-flex items-center gap-0.5 sm:gap-1 text-[10px] sm:text-[11px] font-semibold text-teal-600 transition-all group-hover:gap-1.5 dark:text-teal-400 shrink-0">
                      {t('portfolio.viewProject')}
                      <HiArrowRight size={11} className="transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      )}
    </motion.section>
  )
}

export default ProjectList