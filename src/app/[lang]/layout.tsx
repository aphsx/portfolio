import { ReactNode } from 'react'
import { ThemeProvider } from '../../contexts'
import { LanguageWrapper } from '../../components/common'
import MainLayout from '../../layouts/MainLayout'
import { SITE_CONFIG } from '../../config/site'

export function generateStaticParams() {
  return SITE_CONFIG.supportedLanguages.map((lang) => ({ lang }))
}

export default function LangLayout({
    children,
}: {
    children: ReactNode
}) {
    return (
        <ThemeProvider>
            <LanguageWrapper>
                <MainLayout>
                    {children}
                </MainLayout>
            </LanguageWrapper>
        </ThemeProvider>
    )
}
