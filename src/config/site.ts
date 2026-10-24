export const SITE_CONFIG = {
    name: 'Aphisit Portfolio',
    url: 'https://www.aphsx.site',
    resumeUrl: '/resume.pdf',
    supportedLanguages: ['en', 'th'] as const,
    defaultLanguage: 'th' as const,
}

export type SupportedLanguage = typeof SITE_CONFIG.supportedLanguages[number]

export const LANGUAGES: { code: SupportedLanguage; label: string }[] = [
    { code: 'th', label: 'TH' },
    { code: 'en', label: 'EN' },
]
