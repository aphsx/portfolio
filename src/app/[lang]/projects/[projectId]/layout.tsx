import { ReactNode } from 'react'
import { ProjectRepository } from '../../../../data'

export function generateStaticParams() {
  return ProjectRepository.getAll().map((project) => ({
    projectId: project.id,
  }))
}

export default function ProjectDetailLayout({
  children,
}: {
  children: ReactNode
}) {
  return children
}
