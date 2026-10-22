"use client";
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Project } from '../../types'
import { useLocalizedData } from '../../hooks'

interface ProjectBannerProps {
  projects: Project[]
  max?: number
  interval?: number
}

const ProjectBanner = ({ projects, max = 6, interval = 4000 }: ProjectBannerProps) => {
  const { getLocalized, language } = useLocalizedData()

  // เลือกโปรเจกต์ที่มีรูปจริง (ไม่เอา placeholder หรือรูปเกียรติบัตร)
  const slides = projects
    .filter((p) => p.category !== 'certi' && p.image && !p.image.includes('placehold.co'))
    .slice(0, max)

  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    if (paused || slides.length < 2) return
    const timer = setInterval(() => {
      setDirection(1)
      setIndex((i) => (i + 1) % slides.length)
    }, interval)
    return () => clearInterval(timer)
  }, [paused, slides.length, interval])

  if (slides.length === 0) return null

  const project = slides[index]

  const goTo = (i: number) => {
    setDirection(i > index ? 1 : -1)
    setIndex(i)
  }

  const prev = () => {
    setDirection(-1)
    setIndex((i) => (i - 1 + slides.length) % slides.length)
  }

  const next = () => {
    setDirection(1)
    setIndex((i) => (i + 1) % slides.length)
  }

  return (
    <div
      className="relative mb-8 aspect-[21/8] w-full overflow-hidden rounded-2xl bg-gray-200 shadow-xs ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={project.id}
          custom={direction}
          initial={{ x: direction > 0 ? '100%' : '-100%', opacity: 0.6 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction > 0 ? '-100%' : '100%', opacity: 0.6 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <Link href={`/${language}/projects/${project.id}`} className="block h-full w-full">
            <img
              src={project.image}
              alt={getLocalized(project.title)}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <p className="absolute bottom-8 left-4 right-4 line-clamp-1 text-sm font-semibold text-white drop-shadow sm:left-6 sm:text-base">
              {getLocalized(project.title)}
            </p>
          </Link>
        </motion.div>
      </AnimatePresence>

      {/* Arrows */}
      {slides.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous slide"
            onClick={prev}
            className="absolute left-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur-sm transition hover:bg-black/60"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={next}
            className="absolute right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur-sm transition hover:bg-black/60"
          >
            <ChevronRight size={18} />
          </button>
        </>
      )}

      {/* Pagination dots */}
      <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5">
        {slides.map((s, i) => (
          <button
            key={s.id}
            type="button"
            aria-label={`Slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? 'w-5 bg-white' : 'w-1.5 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default ProjectBanner
