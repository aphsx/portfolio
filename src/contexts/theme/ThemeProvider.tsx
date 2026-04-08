"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

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
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const savedTheme = localStorage.getItem('theme') as Theme

      if (savedTheme && ['light', 'dark'].includes(savedTheme)) {
        return savedTheme
      }

      // Default theme is light (white)
      return 'light'
    } catch {
      return 'light'
    }
  })

  const handleSetTheme = (newTheme: Theme) => {
    try {
      setTheme(newTheme)
      localStorage.setItem('theme', newTheme)
    } catch (error) {
      console.warn('Failed to save theme preference:', error)
      setTheme(newTheme)
    }
  }

  const toggleTheme = () => {
    handleSetTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    const root = document.documentElement

    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [theme])

  return (
    <ThemeContext.Provider
      value={{
        theme,
        isDark: theme === 'dark',
        setTheme: handleSetTheme,
        toggleTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}