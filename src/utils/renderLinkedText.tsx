import type { ReactNode } from 'react'
import { LocalizedText } from '../types'

export type LinkedTextItem = {
  label: LocalizedText
  url: string
}

export const renderLinkedText = (
  text: string,
  links: LinkedTextItem[] | undefined,
  getLocalized: (text: LocalizedText) => string
): ReactNode[] => {
  if (!links?.length) return [text]

  const sortedLinks = [...links].sort(
    (a, b) => getLocalized(b.label).length - getLocalized(a.label).length
  )

  const parts: ReactNode[] = []
  let remaining = text
  let key = 0

  while (remaining) {
    const nextMatch = sortedLinks
      .map((link) => {
        const label = getLocalized(link.label)
        const index = remaining.indexOf(label)

        return index === -1 ? null : { index, label, link }
      })
      .filter((match): match is { index: number; label: string; link: LinkedTextItem } => Boolean(match))
      .sort((a, b) => a.index - b.index)[0]

    if (!nextMatch) {
      parts.push(remaining)
      break
    }

    if (nextMatch.index > 0) {
      parts.push(remaining.slice(0, nextMatch.index))
    }

    parts.push(
      <a
        key={`${nextMatch.link.url}-${key}`}
        href={nextMatch.link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-teal-600 transition-colors hover:text-teal-500 dark:text-teal-400 dark:hover:text-teal-300"
      >
        {nextMatch.label}
      </a>
    )

    key += 1
    remaining = remaining.slice(nextMatch.index + nextMatch.label.length)
  }

  return parts
}
