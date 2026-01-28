export const SITE_CONFIG = {
    name: 'Aphisit Portfolio',
    url: 'https://portfolio-aphsx.vercel.app',
    supportedLanguages: ['en', 'th', 'ja'] as const,
    defaultLanguage: 'th' as const,
}

export type SupportedLanguage = typeof SITE_CONFIG.supportedLanguages[number]
