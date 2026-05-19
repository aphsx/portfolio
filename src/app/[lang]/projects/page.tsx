"use client";
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ProjectList } from '../../../components/projects'
import { ProjectRepository } from '../../../data'

const PortfolioPage = () => {
  const { t } = useTranslation()
  const certiProjects = ProjectRepository.getByCategory('certi')
  const workProjects = ProjectRepository.getByCategory('works')
  const collaborationProjects = ProjectRepository.getByCategory('collaborations')
  const oldProjects = ProjectRepository.getByCategory('old')

  return (
    <div
      className="min-h-screen bg-gray-50 dark:bg-gray-900"
      style={{ paddingTop: "100px" }}
    >
      <div className="max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3">
            {t('portfolio.title')}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-sm max-w-2xl mx-auto">
            {t('portfolio.subtitle')}
          </p>
        </motion.div>

        {certiProjects.length > 0 && (
          <ProjectList
            title={t('portfolio.category.certi')}
            projects={certiProjects}
          />
        )}

        <ProjectList
          title={t('portfolio.works.main')}
          projects={workProjects}
          showDivider={certiProjects.length > 0}
        />

        <ProjectList
          title={t('portfolio.works.collaborations')}
          projects={collaborationProjects}
          showDivider={true}
        />

        <ProjectList
          title={t('portfolio.works.old')}
          projects={oldProjects}
          showDivider={true}
        />
      </div>
    </div>
  )
}

export default PortfolioPage
