import { ReactNode } from 'react'
import { TimelineRepository } from '../../../../data'

export function generateStaticParams() {
  return TimelineRepository.getAll().map((entry) => ({
    entryId: entry.id,
  }))
}

export default function TimelineDetailLayout({
  children,
}: {
  children: ReactNode
}) {
  return children
}
