import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Project } from '../../types'
import { useLocalizedData } from '../../hooks'

interface WorkSectionProps {
  title: string
  projects: Project[]
  showDivider?: boolean
}

const WorkSection = ({ title, projects, showDivider = false }: WorkSectionProps) => {
  const { getLocalized, getLocalizedArray } = useLocalizedData()
  // กำหนด default image
  const defaultImage = '/images/CSI00138.jpg'

  return (
    <>
      {showDivider && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="my-8"
        >
          {/* <hr className="border-gray-300 dark:border-gray-700 mb-6" /> */}
        </motion.div>
      )}

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mb-10"
      >
        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-6">
          {title}
        </h3>

        <div className="space-y-6 sm:space-y-12">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              className={`flex flex-col sm:flex-row ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'} gap-4 sm:gap-8`}
            >
              <Link
                to={`/projects/${project.id}`}
                className="flex-1 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 rounded-xl p-4 sm:p-6 transition-colors duration-300 "
              >
                <div className="flex-shrink-0 w-full sm:w-48 h-48 sm:h-32 relative overflow-hidden rounded-lg">
                  <img
                    src={project.image || defaultImage}
                    alt={getLocalized(project.title)}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="flex-1 text-left w-full">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-slate-100 mb-1 ">
                    {getLocalized(project.title)}
                  </h3>
                  <p className="text-gray-600 dark:text-slate-300 text-sm leading-relaxed mb-2">
                    {getLocalized(project.shortDescription || project.description)}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {getLocalizedArray(project.tags).slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {getLocalizedArray(project.tags).length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-slate-300 text-xs rounded-full">
                        +{getLocalizedArray(project.tags).length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </motion.section>
    </>
  )
}

export default WorkSection