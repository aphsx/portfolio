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
      <div className="divide-y divide-gray-200/80 dark:divide-gray-700/80">
        {featuredProjects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 + index * 0.08, duration: 0.5 }}
            className="py-5 first:pt-0 last:pb-0"
          >
            <Link
              href={`/${language}/projects/${project.id}`}
              className="group flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6"
            >
              <div className="relative w-full overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-black/[0.04] sm:w-44 sm:shrink-0 dark:bg-gray-900 dark:ring-white/10">
                <div className="aspect-[16/10]">
                  <img
                    src={project.image}
                    alt={getLocalized(project.title)}
                    className={`h-full w-full transition-transform duration-500 group-hover:scale-[1.02] ${
                      project.category === 'certi'
                        ? 'object-contain p-2'
                        : 'object-cover'
                    }`}
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="min-w-0 flex-1 text-left">
                {project.year && (
                  <p className="mb-1 text-[11px] font-medium tracking-[0.14em] text-gray-400 uppercase dark:text-gray-500">
                    {project.year}
                  </p>
                )}

                <h4 className="mb-1.5 text-base font-semibold leading-snug text-gray-900 transition-colors group-hover:text-teal-600 dark:text-gray-100 dark:group-hover:text-teal-400">
                  {getLocalized(project.title)}
                </h4>

                <p className="mb-3 line-clamp-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                  {getLocalized(project.shortDescription || project.description)}
                </p>

                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-teal-600/90 transition-colors group-hover:text-teal-500 dark:text-teal-400">
                  {language === 'th' ? 'ดูรายละเอียด' : 'View details'}
                  <HiArrowRight
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                    size={12}
                  />
                </span>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}

export default FeaturedProjectsSection
