import { useEffect } from 'react'
import { useParams, useNavigate, useLocation, Outlet } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const LanguageWrapper = () => {
    const { lang } = useParams<{ lang: string }>()
    const { i18n } = useTranslation()
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        const supportedLangs = ['en', 'th', 'ja']

        // If no lang prefix, or invalid lang prefix, redirect to detected language or default
        if (!lang || !supportedLangs.includes(lang)) {
            const detectedLang = i18n.language?.split('-')[0] || 'en'
            const finalLang = supportedLangs.includes(detectedLang) ? detectedLang : 'en'
            const newPath = location.pathname === '/' ? `/${finalLang}` : `/${finalLang}${location.pathname}`
            navigate(newPath, { replace: true })
            return
        }

        // Update i18n if language changed in URL
        if (lang !== i18n.language) {
            i18n.changeLanguage(lang)
        }
    }, [lang, i18n, navigate, location.pathname])

    return <Outlet />
}

export default LanguageWrapper
