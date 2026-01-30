"use client";
import React, { useEffect } from 'react'
import { useParams, useRouter, usePathname } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import '../../i18n/config'
import { SITE_CONFIG } from '../../config/site'

const LanguageWrapper = ({ children }: { children: React.ReactNode }) => {
    const params = useParams()
    const lang = params?.lang as string
    const { i18n } = useTranslation()
    const router = useRouter()
    const pathname = usePathname()
    const supportedLangs = SITE_CONFIG.supportedLanguages

    const currentI18nLang = (i18n.language || '').split(/[-_]/)[0].toLowerCase()
    if (lang && supportedLangs.includes(lang as any) && lang !== currentI18nLang) {
        i18n.changeLanguage(lang)
    }

    useEffect(() => {
        // If no lang prefix, or invalid lang prefix, redirect to detected language or default
        if (!lang || !supportedLangs.includes(lang as any)) {
            const detectedLang = i18n.language?.split('-')[0] || SITE_CONFIG.defaultLanguage
            const finalLang = supportedLangs.includes(detectedLang as any) ? detectedLang : SITE_CONFIG.defaultLanguage
            const newPath = pathname === '/' ? `/${finalLang}` : `/${finalLang}${pathname}`
            router.replace(newPath)
            return
        }
    }, [lang, i18n, router, pathname, supportedLangs])

    return <>{children}</>
}

export default LanguageWrapper
