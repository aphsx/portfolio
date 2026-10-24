import { ReactNode } from 'react'

interface PageContainerProps {
  children: ReactNode
  className?: string
  innerClassName?: string
}

export function PageContainer({
  children,
  className = '',
  innerClassName = 'max-w-2xl mx-auto px-6 pb-16',
}: PageContainerProps) {
  return (
    <div
      className={`min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors pt-[100px] ${className}`}
    >
      <div className={innerClassName}>{children}</div>
    </div>
  )
}
