import { TimelineEntryType } from '../../types'

export const typeBadgeClass =
  'inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-[0.12em] uppercase'

export const typeBadgeStyles: Record<TimelineEntryType, string> = {
  activity: 'bg-blue-500/10 text-blue-600 ring-1 ring-blue-500/20 dark:text-blue-300',
  participation: 'bg-teal-500/10 text-teal-600 ring-1 ring-teal-500/20 dark:text-teal-300',
  award: 'bg-amber-500/10 text-amber-700 ring-1 ring-amber-500/20 dark:text-amber-300',
  event: 'bg-violet-500/10 text-violet-600 ring-1 ring-violet-500/20 dark:text-violet-300',
}

export const typeDotStyles: Record<TimelineEntryType, string> = {
  activity: 'bg-blue-500 shadow-[0_0_0_4px_rgba(59,130,246,0.15)]',
  participation: 'bg-teal-500 shadow-[0_0_0_4px_rgba(20,184,166,0.15)]',
  award: 'bg-amber-500 shadow-[0_0_0_4px_rgba(245,158,11,0.15)]',
  event: 'bg-violet-500 shadow-[0_0_0_4px_rgba(139,92,246,0.15)]',
}
