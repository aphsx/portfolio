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

      {/* 1. Rows layout */}
      {layout === 'rows' ? (
        <div className="flex flex-col gap-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.02 + index * 0.02, duration: 0.3, ease: 'easeOut' }}
            >
              <Link
                href={`/${language}/projects/${project.id}`}
                className="group flex flex-row h-28 sm:h-32 overflow-hidden rounded-xl bg-white shadow-xs ring-1 ring-black/[0.04] transition-all hover:shadow-sm dark:bg-gray-800/80 dark:ring-white/10"
              >
                {/* Thumbnail */}
                <div className="relative w-32 sm:w-44 h-full shrink-0 overflow-hidden bg-gray-100 dark:bg-gray-900">
                  <img
                    src={project.image || defaultImage}
                    alt={getLocalized(project.title)}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = defaultImage
                    }}
                  />
                </div>

                {/* Info */}
                <div className="flex flex-1 flex-col justify-between p-3 sm:p-3.5 min-w-0 h-full">
                  <div>
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="line-clamp-1 text-sm sm:text-base font-semibold text-gray-900 transition-colors group-hover:text-teal-600 dark:text-gray-100 dark:group-hover:text-teal-400">
                        {getLocalized(project.title)}
                      </h3>
                      {project.year && (
                        <span className="text-[11px] sm:text-xs text-gray-400 dark:text-gray-500 tabular-nums shrink-0">
                          {project.year}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-gray-500 dark:text-gray-400">
                      {getLocalized(project.shortDescription || project.description)}
                    </p>
                  </div>

                  {/* Minimal footer */}
                  <div className="flex items-center justify-between gap-2 pt-1">
                    <div className="flex items-center gap-1.5 overflow-hidden text-[11px] text-gray-400 dark:text-gray-500">
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span key={tagIndex} className="inline-flex items-center">
                          {tagIndex > 0 && <span className="mr-1.5 text-gray-300 dark:text-gray-600">·</span>}
                          <span className="truncate">{tag}</span>
                        </span>
                      ))}
                    </div>

                    <HiArrowRight
                      size={13}
                      className="text-gray-300 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-teal-600 dark:text-gray-600 dark:group-hover:text-teal-400 shrink-0"
                    />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      ) : (
        /* 2. Grid layout */
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.03 + index * 0.02, duration: 0.35, ease: 'easeOut' }}
              className="flex h-full"
            >
              <Link
                href={`/${language}/projects/${project.id}`}
                className="group flex w-full flex-col overflow-hidden rounded-xl bg-white shadow-xs ring-1 ring-black/[0.04] transition-all hover:shadow-sm dark:bg-gray-800/80 dark:ring-white/10"
              >
                <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-gray-100 dark:bg-gray-900">
                  <img
                    src={project.image || defaultImage}
                    alt={getLocalized(project.title)}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = defaultImage
                    }}
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between p-3 sm:p-3.5">
                  <div>
                    <div className="flex items-baseline justify-between gap-1.5">
                      <h3 className="line-clamp-1 text-xs sm:text-sm font-semibold text-gray-900 transition-colors group-hover:text-teal-600 dark:text-gray-100 dark:group-hover:text-teal-400">
                        {getLocalized(project.title)}
                      </h3>
                      {project.year && (
                        <span className="text-[10px] sm:text-[11px] text-gray-400 dark:text-gray-500 tabular-nums shrink-0">
                          {project.year}
                        </span>
                      )}
                    </div>

                    <p className="mt-1 line-clamp-2 text-[11px] sm:text-xs leading-relaxed text-gray-500 dark:text-gray-400">
                      {getLocalized(project.shortDescription || project.description)}
                    </p>
                  </div>

                  <div className="mt-2.5 flex items-center justify-between gap-1.5 pt-0.5">
                    <div className="flex items-center gap-1 overflow-hidden text-[10px] text-gray-400 dark:text-gray-500">
                      {project.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span key={tagIndex} className="inline-flex items-center">
                          {tagIndex > 0 && <span className="mr-1 text-gray-300 dark:text-gray-600">·</span>}
                          <span className="truncate">{tag}</span>
                        </span>
                      ))}
                    </div>

                    <HiArrowRight
                      size={11}
                      className="text-gray-300 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-teal-600 dark:text-gray-600 dark:group-hover:text-teal-400 shrink-0"
                    />
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