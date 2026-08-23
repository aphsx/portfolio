'use client'

import { useEffect } from 'react'
import { SITE_CONFIG } from '../config/site'

export default function RootPage() {
  useEffect(() => {
    window.location.replace(`/${SITE_CONFIG.defaultLanguage}`)
  }, [])

  return null
}
