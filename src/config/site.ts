export const SITE_CONFIG = {
    name: 'Aphisit Portfolio',
    url: 'https://www.aphsx.site',
    supportedLanguages: ['en', 'th'] as const,
    defaultLanguage: 'th' as const,
}

export type SupportedLanguage = typeof SITE_CONFIG.supportedLanguages[number]
