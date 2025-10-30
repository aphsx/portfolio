import { motion } from 'framer-motion'
import { ProjectList } from '../components/projects'
import { projects } from '../data'
import { useLanguage } from '../contexts'

const Projects = () => {
  const { t } = useLanguage()
  const workProjects = projects.filter(project => project.category === 'works')
  const collaborationProjects = projects.filter(project => project.category === 'collaborations')
  const oldProjects = projects.filter(project => project.category === 'old')

  return (
    <div
      className="min-h-screen bg-gray-50 dark:bg-gray-900"
      style={{ paddingTop: "100px" }}
    >
      <div className="max-w-2xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3">
            {t('projects.title')}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-sm max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        {/* Works Sections */}
        <ProjectList
          title={t('projects.main')}
          projects={workProjects}
        />

        <ProjectList
          title={t('projects.collaborations')}
          projects={collaborationProjects}
          showDivider={true}
        />

        <ProjectList
          title={t('projects.old')}
          projects={oldProjects}
          showDivider={true}
        />
      </div>
    </div>
  )
}

export default Projects