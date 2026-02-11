"use client";
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import {
  ProjectList,
  CertificateList,
  CategoryHeading,
} from '../../../components/projects'
import { ProjectRepository, CertificateRepository } from '../../../data'

const PortfolioPage = () => {
  const { t } = useTranslation()
  const certificates = CertificateRepository.getAll()
  const workProjects = ProjectRepository.getByCategory('works')
  const collaborationProjects = ProjectRepository.getByCategory('collaborations')
  const oldProjects = ProjectRepository.getByCategory('old')

  return (
    <motion.div
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

        <CategoryHeading title={t('portfolio.category.certi')} delay={0.1} />
        <CertificateList certificates={certificates} />

        <CategoryHeading title={t('portfolio.category.works')} delay={0.2} />
        <ProjectList
          title={t('portfolio.works.main')}
          projects={workProjects}
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
    </motion.div>
  )
}

export default PortfolioPage
