import { MdViewTimeline } from 'react-icons/md'
import type { ReactNode } from 'react'
import { Section } from '../ui'
import { PersonalRepository } from '../../data'
import { useTranslation } from 'react-i18next'
import { useLocalizedData } from '../../hooks'
import { BioTimelineItem } from '../../types'

type LocalizedLink = NonNullable<BioTimelineItem['links']>[number]

const renderLinkedText = (
  text: string,
  links: LocalizedLink[] | undefined,
  getLocalized: (text: LocalizedLink['label']) => string
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
      .filter((match): match is { index: number; label: string; link: LocalizedLink } => Boolean(match))
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

const BioSection = () => {
  const { t } = useTranslation()
  const { getLocalized } = useLocalizedData()
  const bioTimeline = PersonalRepository.getBioTimeline()

  return (
    <Section
      title={t('home.bio')}
      icon={<MdViewTimeline />}
      delay={0.3}
    >
      <div className="space-y-2">
        {bioTimeline.map((item, index) => (
          <div key={index} className="flex gap-4">
            <span className="text-teal-500 font-semibold text-sm w-[110px] shrink-0">
              {item.year}
            </span>
            <span className="text-gray-600 dark:text-gray-300 text-sm">
              {renderLinkedText(getLocalized(item.event), item.links, getLocalized)}
            </span>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default BioSection