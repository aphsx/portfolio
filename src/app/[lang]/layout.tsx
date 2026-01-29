import { ReactNode } from 'react'
import { ThemeProvider } from '../../contexts'
import { LanguageWrapper } from '../../components/common'
import MainLayout from '../../layouts/MainLayout'

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
