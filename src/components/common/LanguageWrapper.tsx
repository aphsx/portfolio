import { useEffect } from 'react'
import { useParams, useNavigate, useLocation, Outlet } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { SITE_CONFIG } from '../../config/site'

const LanguageWrapper = () => {
    const { lang } = useParams<{ lang: string }>()
    const { i18n } = useTranslation()
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        const supportedLangs = SITE_CONFIG.supportedLanguages

        // If no lang prefix, or invalid lang prefix, redirect to detected language or default
        if (!lang || !supportedLangs.includes(lang as any)) {
            const detectedLang = i18n.language?.split('-')[0] || SITE_CONFIG.defaultLanguage
            const finalLang = supportedLangs.includes(detectedLang as any) ? detectedLang : SITE_CONFIG.defaultLanguage
            const newPath = location.pathname === '/' ? `/${finalLang}` : `/${finalLang}${location.pathname}`
            navigate(newPath, { replace: true })
            return
        }

        // Update i18n if language changed in URL
        const currentI18nLang = (i18n.language || '').split(/[-_]/)[0].toLowerCase()
        if (lang !== currentI18nLang) {
            i18n.changeLanguage(lang)
        }
    }, [lang, i18n, navigate, location.pathname])

    return <Outlet />
}

export default LanguageWrapper
