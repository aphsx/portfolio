"use client";
import React, { useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import '../../i18n/config'
import { SITE_CONFIG, type SupportedLanguage } from '../../config/site'

function isSupportedLanguage(lang: string | undefined): lang is SupportedLanguage {
    return !!lang && (SITE_CONFIG.supportedLanguages as readonly string[]).includes(lang)
}

const LanguageWrapper = ({ children }: { children: React.ReactNode }) => {
    const params = useParams()
    const lang = params?.lang as string
    const { i18n } = useTranslation()
    const router = useRouter()

    const currentI18nLang = (i18n.language || '').split(/[-_]/)[0].toLowerCase()
    if (isSupportedLanguage(lang) && lang !== currentI18nLang) {
        i18n.changeLanguage(lang)
    }

    useEffect(() => {
        // Invalid or missing lang → send to home in a supported language
        if (!isSupportedLanguage(lang)) {
            const detectedLang = i18n.language?.split('-')[0] || SITE_CONFIG.defaultLanguage
            const finalLang = isSupportedLanguage(detectedLang) ? detectedLang : SITE_CONFIG.defaultLanguage
            router.replace(`/${finalLang}`)
        }
    }, [lang, i18n, router])

    return <>{children}</>
}

export default LanguageWrapper
