import { motion } from 'framer-motion'
import Link from 'next/link'
import { MdOutlineWork } from 'react-icons/md'
import { HiArrowRight } from 'react-icons/hi'
import { Section } from '../ui'
import { ProjectRepository } from '../../data'
import { useTranslation } from 'react-i18next'
import { useLocalizedData } from '../../hooks'

const FeaturedProjectsSection = () => {
  const { t } = useTranslation()
  const { getLocalized, language } = useLocalizedData()

  const featuredProjects = ProjectRepository.getFeatured()
    .filter((project) => !project.image.includes('placehold.co'))
    .slice(0, 2)

  return (
    <Section
      title={t('home.featured')}
      icon={<MdOutlineWork />}
      delay={0.9}
    >
      <div className="space-y-5">
        {featuredProjects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 + index * 0.1 }}
          >
            <Link
              href={`/${language}/projects/${project.id}`}
              className="group block overflow-hidden rounded-3xl bg-gradient-to-br from-white via-teal-50/60 to-white p-1 ring-1 ring-gray-200/80 transition-all duration-300 hover:-translate-y-1 hover:ring-teal-300 dark:from-gray-800 dark:via-teal-950/20 dark:to-gray-800 dark:ring-gray-700"
            >
              <div className="rounded-[1.25rem] bg-white/80 p-4 backdrop-blur dark:bg-gray-900/35">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                  <div className="relative sm:w-56 sm:shrink-0">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 dark:bg-gray-900 dark:ring-white/10">
                      <img
                        src={project.image}
                        alt={getLocalized(project.title)}
                        className={`h-full w-full transition-transform duration-500 group-hover:scale-105 ${project.category === 'certi' ? 'object-contain p-3' : 'object-cover'}`}
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="min-w-0 flex-1 text-left">
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-teal-500 px-2.5 py-1 text-[11px] font-semibold text-white">
                        {project.category === 'certi'
                          ? t('portfolio.category.certi')
                          : t('portfolio.works.main')}
                      </span>
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        {project.year}
                      </span>
                    </div>

                    <h4 className="mb-2 text-xl font-bold leading-snug text-gray-900 transition-colors group-hover:text-teal-500 dark:text-gray-100">
                      {getLocalized(project.title)}
                    </h4>

                    <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                      {getLocalized(project.shortDescription || project.description)}
                    </p>

                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags
                          .slice(0, 3)
                          .map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="rounded-full bg-white px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:ring-gray-700"
                            >
                              {tag}
                            </span>
                          ))}
                      </div>

                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-teal-600 transition-colors group-hover:text-teal-500 dark:text-teal-400">
                        {language === 'th' ? 'ดูรายละเอียด' : 'View details'}
                        <HiArrowRight
                          className="transition-transform group-hover:translate-x-1"
                          size={15}
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}

export default FeaturedProjectsSection