"use client";
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Rows3, Grid2x2 } from 'lucide-react'
import { ProjectList, ProjectLayout } from '../../../components/projects'
import { ProjectRepository } from '../../../data'
import { useLocalizedData } from '../../../hooks'

const LAYOUT_OPTIONS = [
  {
    id: 'rows' as const,
    label: { en: 'Horizontal row list (Default)', th: 'รายการแบบแถว (ค่าเริ่มต้น)' },
    icon: Rows3,
  },
  {
    id: 'grid' as const,
    label: { en: 'Multi-column cards grid', th: 'หลายกล่องในแถว (Grid)' },
    icon: Grid2x2,
  },
]

const PortfolioPage = () => {
  const { t } = useTranslation()
  const { language } = useLocalizedData()

  // ดึงข้อมูลโปรเจกต์แยกตามหมวดหมู่แบบเดิม
  const certiProjects = ProjectRepository.getByCategory('certi')
  const workProjects = ProjectRepository.getByCategory('works')
  const collaborationProjects = ProjectRepository.getByCategory('collaborations')
  const oldProjects = ProjectRepository.getByCategory('old')
  const totalCount = certiProjects.length + workProjects.length + collaborationProjects.length + oldProjects.length

  // Layout แบบเดิมเป็นหลัก (rows เป็น default)
  const [layout, setLayout] = useState<ProjectLayout>('rows')

  useEffect(() => {
    try {
      const saved = localStorage.getItem('portfolio_projects_layout') as ProjectLayout
      if (saved === 'rows' || saved === 'grid') {
        setLayout(saved)
      }
    } catch {
      // Ignore localStorage availability issues
    }
  }, [])

  const handleLayoutChange = (newLayout: ProjectLayout) => {
    setLayout(newLayout)
    try {
      localStorage.setItem('portfolio_projects_layout', newLayout)
    } catch {
      // Ignore
    }
  }

  return (
    <div
      className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors"
      style={{ paddingTop: '100px' }}
    >
      <div className="max-w-2xl mx-auto px-6 pb-16">
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-12"
        >
          {/* Header Row: Title & Description on left, Layout switcher on right */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6">
            <div className="space-y-1.5 max-w-md sm:max-w-lg">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                {t('portfolio.title')}
              </h1>
              <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                {t('portfolio.subtitle')}
              </p>
            </div>

            {/* Layout switcher: Rows (แบบเดิม) vs Grid */}
            {totalCount > 0 && (
              <div
                role="group"
                aria-label="Projects layout"
                className="flex items-center self-start sm:self-end rounded-xl bg-gray-100/90 p-1 ring-1 ring-black/5 dark:bg-gray-800/80 dark:ring-white/10 shrink-0"
              >
                {LAYOUT_OPTIONS.map((opt) => {
                  const isActive = layout === opt.id
                  const Icon = opt.icon
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => handleLayoutChange(opt.id)}
                      title={opt.label[language === 'th' ? 'th' : 'en']}
                      aria-label={opt.label[language === 'th' ? 'th' : 'en']}
                      className={`relative flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${
                        isActive
                          ? 'text-gray-900 dark:text-white'
                          : 'text-gray-400 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="activeProjectsLayout"
                          className="absolute inset-0 rounded-lg bg-white shadow-xs dark:bg-gray-700"
                          transition={{ type: 'spring', bounce: 0.15, duration: 0.35 }}
                        />
                      )}
                      <Icon size={16} className="relative z-10 shrink-0" />
                    </button>
                  )
                })}
              </div>
            )}
          </div>
        </motion.header>

        {/* หมวดหมู่โปรเจกต์ตามโครงสร้างเดิมทั้งหมด */}
        {totalCount > 0 ? (
          <div className="space-y-4">
            {certiProjects.length > 0 && (
              <ProjectList
                title={t('portfolio.category.certi')}
                projects={certiProjects}
                layout={layout}
              />
            )}

            {workProjects.length > 0 && (
              <ProjectList
                title={t('portfolio.works.main')}
                projects={workProjects}
                layout={layout}
              />
            )}

            {collaborationProjects.length > 0 && (
              <ProjectList
                title={t('portfolio.works.collaborations')}
                projects={collaborationProjects}
                layout={layout}
              />
            )}

            {oldProjects.length > 0 && (
              <ProjectList
                title={t('portfolio.works.old')}
                projects={oldProjects}
                layout={layout}
              />
            )}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-gray-200 py-16 text-center dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {language === 'th' ? 'ไม่มีรายการผลงาน' : 'No projects found'}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default PortfolioPage
