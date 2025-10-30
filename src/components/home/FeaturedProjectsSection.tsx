import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MdOutlineWork } from 'react-icons/md'
import { Section } from '../ui'
import { projects } from '../../data'
import { useLanguage } from '../../contexts'
import { useLocalizedData } from '../../hooks'

const FeaturedProjectsSection = () => {
  const { t } = useLanguage()
  const { getLocalized, getLocalizedArray } = useLocalizedData()

  const featuredProjects = projects
    .filter((p) => p.category === 'collaborations')
    .slice(0, 2)

  return (
    <Section
      title={t('home.featured')}
      icon={<MdOutlineWork />}
      delay={0.9}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featuredProjects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.0 + index * 0.1 }}
            className="group rounded-xl overflow-hidden transition-shadow"
          >
            <Link
              to={`/projects/${project.id}`}
              className="flex flex-col h-full transition-colors duration-300"
            >
              {/* Project Image */}
              <div className="w-full h-40 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={getLocalized(project.title)}
                  className="w-full h-full object-cover transition-transform duration-300 "
                  loading="lazy"
                />
                <div className="absolute inset-0 duration-300" />
              </div>

              {/* Project Content */}
              <div className="flex-1 text-left p-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-teal-500 transition-colors">
                  {getLocalized(project.title)}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-3">
                  {getLocalized(project.shortDescription || project.description)}
                </p>
                <div className="flex flex-wrap gap-1">
                  {getLocalizedArray(project.tags)
                    .slice(0, 3)
                    .map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
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