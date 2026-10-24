"use client";
import { useCallback, useState } from 'react'

export interface LightboxState {
  images: string[]
  index: number
}

export function useLightbox() {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null)

  const openLightbox = useCallback((images: string[], activeUrl: string) => {
    const index = images.indexOf(activeUrl)
    setLightbox({ images, index: index < 0 ? 0 : index })
  }, [])

  const closeLightbox = useCallback(() => {
    setLightbox(null)
  }, [])

  const stepLightbox = useCallback((delta: number) => {
    setLightbox((current) => {
      if (!current || current.images.length < 2) return current
      const next = (current.index + delta + current.images.length) % current.images.length
      return { ...current, index: next }
    })
  }, [])

  return {
    lightbox,
    openLightbox,
    closeLightbox,
    stepLightbox,
  }
}
