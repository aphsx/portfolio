"use client";
import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiChevronLeft, HiChevronRight, HiX } from 'react-icons/hi'
import { LightboxState } from '@/hooks/useLightbox'

interface LightboxProps {
  state: LightboxState | null
  onClose: () => void
  onStep: (delta: number) => void
}

export function Lightbox({ state, onClose, onStep }: LightboxProps) {
  const touchStartX = useRef(0)

  const activeImage = state ? state.images[state.index] : null
  const canNavigate = (state?.images.length ?? 0) > 1

  useEffect(() => {
    if (!state) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') onStep(-1)
      if (event.key === 'ArrowRight') onStep(1)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [state, onClose, onStep])

  return (
    <AnimatePresence>
      {activeImage && state && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-10"
          onClick={onClose}
        >
          <motion.button
            type="button"
            aria-label="Close lightbox"
            className="absolute top-6 right-6 z-10 text-white/70 hover:text-white p-2 bg-white/10 rounded-full backdrop-blur-md border border-white/20 transition-all hover:scale-110"
            whileHover={{ rotate: 90 }}
            onClick={onClose}
          >
            <HiX size={24} />
          </motion.button>

          {canNavigate && (
            <>
              <button
                type="button"
                aria-label="Previous image"
                className="absolute left-3 md:left-6 z-10 text-white/80 hover:text-white p-2 bg-white/10 rounded-full backdrop-blur-md border border-white/20"
                onClick={(e) => {
                  e.stopPropagation()
                  onStep(-1)
                }}
              >
                <HiChevronLeft size={28} />
              </button>
              <button
                type="button"
                aria-label="Next image"
                className="absolute right-3 md:right-6 z-10 text-white/80 hover:text-white p-2 bg-white/10 rounded-full backdrop-blur-md border border-white/20"
                onClick={(e) => {
                  e.stopPropagation()
                  onStep(1)
                }}
              >
                <HiChevronRight size={28} />
              </button>
            </>
          )}

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative max-w-5xl w-full max-h-[90dvh] flex flex-col items-center justify-center gap-3"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={(e) => {
              touchStartX.current = e.changedTouches[0].clientX
            }}
            onTouchEnd={(e) => {
              const delta = e.changedTouches[0].clientX - touchStartX.current
              if (Math.abs(delta) < 40) return
              onStep(delta > 0 ? -1 : 1)
            }}
          >
            <img
              src={activeImage}
              alt="Enlarged view"
              className="max-w-full max-h-[82dvh] object-contain rounded-lg shadow-2xl"
            />
            {canNavigate && (
              <p className="text-white/70 text-sm">
                {state.index + 1} / {state.images.length}
              </p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
