"use client";
import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react'

export type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  isDark: boolean
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    try {
      if (typeof window !== 'undefined') {
        const savedTheme = localStorage.getItem('theme') as Theme
        if (savedTheme && ['light', 'dark'].includes(savedTheme)) {
          return savedTheme
        }
        if (document.documentElement.classList.contains('dark')) {
          return 'dark'
        }
      }
      return 'light'
    } catch {
      return 'light'
    }
  })

  const applyTheme = useCallback((newTheme: Theme) => {
    const root = document.documentElement
    if (newTheme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [])

  const handleSetTheme = useCallback((newTheme: Theme) => {
    try {
      setThemeState(newTheme)
      applyTheme(newTheme)
      localStorage.setItem('theme', newTheme)
    } catch (error) {
      console.warn('Failed to save theme preference:', error)
      setThemeState(newTheme)
      applyTheme(newTheme)
    }
  }, [applyTheme])

  const toggleTheme = useCallback(() => {
    handleSetTheme(theme === 'light' ? 'dark' : 'light')
  }, [theme, handleSetTheme])

  useEffect(() => {
    applyTheme(theme)
  }, [theme, applyTheme])

  return (
    <ThemeContext.Provider
      value={{
        theme,
        isDark: theme === 'dark',
        setTheme: handleSetTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}