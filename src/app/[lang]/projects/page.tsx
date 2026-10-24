"use client";
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Rows3, Grid2x2 } from 'lucide-react'
import { ProjectList, ProjectLayout } from '@/components/projects'
import { ImageBanner } from '@/components/media'
import { PageContainer, SegmentedControl, SegmentedOption } from '@/components/ui'
import { ProjectRepository } from '@/data'
import { usePersistentState } from '@/hooks'

const isProjectLayout = (val: string): val is ProjectLayout =>
  val === 'rows' || val === 'grid'

const PortfolioPage = () => {
  const { t } = useTranslation()

  const workProjects = ProjectRepository.getByCategory('works')
  const certiProjects = ProjectRepository.getByCategory('certi')
  const bannerSlides = ProjectRepository.getBannerSlides()
  const totalCount = workProjects.length + certiProjects.length

  const [layout, setLayout] = usePersistentState<ProjectLayout>(
    'portfolio_projects_layout',
    'rows',
    isProjectLayout,
  )

  const layoutOptions: SegmentedOption<ProjectLayout>[] = [
    {
      id: 'rows',
      label: t('layout.rows'),
      icon: Rows3,
    },
    {
      id: 'grid',
      label: t('layout.grid'),
      icon: Grid2x2,
    },
  ]

  return (
    <PageContainer>
      <ImageBanner slides={bannerSlides} />

      <motion.header
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 sm:mb-12"
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6">
          <div className="space-y-1.5 max-w-md sm:max-w-lg">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              {t('portfolio.title')}
            </h1>
            <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
              {t('portfolio.subtitle')}
            </p>
          </div>

          {totalCount > 0 && (
            <SegmentedControl
              options={layoutOptions}
              value={layout}
              onChange={setLayout}
              layoutId="activeProjectsLayout"
              ariaLabel="Projects layout"
              className="self-start sm:self-end"
            />
          )}
        </div>
      </motion.header>

      {totalCount > 0 ? (
        <div className="space-y-10">
          {workProjects.length > 0 && (
            <ProjectList projects={workProjects} layout={layout} />
          )}

          {certiProjects.length > 0 && (
            <ProjectList
              title={t('portfolio.category.certi')}
              projects={certiProjects}
              layout={layout}
            />
          )}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-gray-200 py-16 text-center dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {t('portfolio.empty')}
          </p>
        </div>
      )}
    </PageContainer>
  )
}

export default PortfolioPage
