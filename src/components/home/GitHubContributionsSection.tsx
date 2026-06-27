'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'
import { Section } from '../ui'

const GITHUB_USERNAME = 'aphsx'

const MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
]
// Weekday labels — only odd rows are shown (Mon / Wed / Fri), GitHub-style.
const WEEKDAYS = ['', 'Mon', '', 'Wed', '', 'Fri', '']

interface ContributionDay {
  date: string
  count: number
  level: 0 | 1 | 2 | 3 | 4
}

interface ApiResponse {
  total: Record<string, number>
  contributions: ContributionDay[]
}

// Group a flat list of days into week-columns (each column = 7 days, Sun→Sat).
const buildWeeks = (days: ContributionDay[]): (ContributionDay | null)[][] => {
  if (days.length === 0) return []
  const weeks: (ContributionDay | null)[][] = []
  let current: (ContributionDay | null)[] = []

  // Pad the first week so the first day lands on its real weekday.
  const firstWeekday = new Date(days[0].date).getDay()
  for (let i = 0; i < firstWeekday; i++) current.push(null)

  for (const day of days) {
    current.push(day)
    if (current.length === 7) {
      weeks.push(current)
      current = []
    }
  }
  if (current.length > 0) {
    while (current.length < 7) current.push(null)
    weeks.push(current)
  }
  return weeks
}

const GitHubContributionsSection = () => {
  const { t } = useTranslation()
  const [data, setData] = useState<ContributionDay[] | null>(null)
  const [total, setTotal] = useState<number | null>(null)
  const [error, setError] = useState(false)
  const graphScrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let cancelled = false
    fetch(
      `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`,
    )
      .then((res) => {
        if (!res.ok) throw new Error('Request failed')
        return res.json() as Promise<ApiResponse>
      })
      .then((json) => {
        if (cancelled) return
        setData(json.contributions)
        const totals = Object.values(json.total ?? {})
        setTotal(totals.length ? totals[totals.length - 1] : null)
      })
      .catch(() => {
        if (!cancelled) setError(true)
      })
    return () => {
      cancelled = true
    }
  }, [])

  const weeks = useMemo(() => buildWeeks(data ?? []), [data])

  useEffect(() => {
    const scrollEl = graphScrollRef.current
    if (!scrollEl || weeks.length === 0) return

    const frame = requestAnimationFrame(() => {
      scrollEl.scrollLeft = scrollEl.scrollWidth - scrollEl.clientWidth
    })

    return () => cancelAnimationFrame(frame)
  }, [weeks])

  // One label per week column; non-empty on the week that contains the 1st.
  const monthLabels = useMemo(() => {
    return weeks.map((week, i) => {
      const monthStart = week.find((day) => {
        if (!day) return false
        return new Date(day.date).getDate() === 1
      })
      if (monthStart) return MONTHS[new Date(monthStart.date).getMonth()]

      const firstDay = week.find((day) => day)
      return i === 0 && firstDay ? MONTHS[new Date(firstDay.date).getMonth()] : ''
    })
  }, [weeks])

  return (
    <Section title={t('home.github')} icon={<FiGithub />} delay={0.55}>
      <div>
        <div className="w-full overflow-hidden rounded-xl bg-white/90 p-4 shadow-sm dark:bg-gray-800/80">
          {error ? (
            <p className="text-sm text-gray-500 dark:text-gray-400 py-6 text-center">
              {t('common.error')}
            </p>
          ) : !data ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <div className="h-4 w-40 rounded bg-gray-100 animate-pulse dark:bg-gray-700" />
                <div className="h-4 w-20 rounded bg-gray-100 animate-pulse dark:bg-gray-700" />
              </div>
              <div className="overflow-hidden p-3">
                <div className="flex flex-wrap gap-[3px]">
                  {Array.from({ length: 371 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-[11px] w-[11px] animate-pulse rounded-[2px] bg-gray-100 dark:bg-gray-700"
                    />
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  {total !== null ? (
                    <>
                      <span className="font-semibold text-teal-600 dark:text-teal-400">
                        {total.toLocaleString()}
                      </span>{' '}
                      {t('home.github.count')}
                    </>
                  ) : (
                    t('home.github')
                  )}
                </div>
                <a
                  href={`https://github.com/${GITHUB_USERNAME}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-teal-600 transition-colors hover:text-teal-500 dark:text-teal-400"
                >
                  <FiGithub size={14} />
                  @{GITHUB_USERNAME}
                </a>
              </div>

              <div className="p-3">
                <div className="flex gap-[3px]">
                  <div className="flex w-6 shrink-0 flex-col gap-[3px] pt-[14px] text-[9px] text-gray-500 dark:text-gray-400">
                    {WEEKDAYS.map((label, i) => (
                      <div
                        key={i}
                        className="h-[11px] pr-1 text-right leading-[11px]"
                      >
                        {label}
                      </div>
                    ))}
                  </div>

                  <div ref={graphScrollRef} className="min-w-0 overflow-x-auto pb-1">
                    <div className="inline-flex min-w-max flex-col gap-[3px]">
                      {/* Month labels row */}
                      <div className="flex h-[11px] gap-[3px] text-[9px] text-gray-500 dark:text-gray-400">
                        {monthLabels.map((label, i) => (
                          <div key={i} className="relative w-[11px]">
                            {label && (
                              <span className="absolute left-0 whitespace-nowrap">
                                {label}
                              </span>
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Contribution grid */}
                      <div className="flex gap-[3px]">
                        {weeks.map((week, wi) => (
                          <div key={wi} className="flex flex-col gap-[3px]">
                            {week.map((day, di) => (
                              <motion.div
                                key={di}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: Math.min(wi * 0.006, 0.6) }}
                                title={
                                  day
                                    ? `${day.count} contributions on ${day.date}`
                                    : undefined
                                }
                                className={`relative h-[11px] w-[11px] rounded-[2px] ring-1 ring-black/[0.03] dark:ring-white/[0.04] ${
                                  day
                                    ? 'cursor-pointer transition-transform duration-75 ease-out hover:z-10 hover:scale-[1.8]'
                                    : ''
                                }`}
                                style={{
                                  backgroundColor: day
                                    ? `var(--gh-level-${day.level})`
                                    : 'transparent',
                                }}
                              />
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-end gap-1.5 text-[11px] text-gray-500 dark:text-gray-400">
                <span className="mr-1">{t('home.github.less')}</span>
                {[0, 1, 2, 3, 4].map((lvl) => (
                  <span
                    key={lvl}
                    className="inline-block h-[11px] w-[11px] rounded-[2px] ring-1 ring-black/[0.03] dark:ring-white/[0.04]"
                    style={{ backgroundColor: `var(--gh-level-${lvl})` }}
                  />
                ))}
                <span className="ml-1">{t('home.github.more')}</span>
              </div>
            </>
          )}
        </div>
      </div>
    </Section>
  )
}

export default GitHubContributionsSection
