"use client";
import { useState } from 'react'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { HiMenu, HiX } from 'react-icons/hi'
import { FiFileText, FiMoon, FiSun } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../../contexts'
import { SITE_CONFIG } from '../../config/site'
import { useTranslation } from 'react-i18next'
import { useLocalizedData } from '../../hooks'

const languages = [
  { code: 'th', name: 'TH' },
  { code: 'en', name: 'EN' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()
  const { t } = useTranslation()
  const { language } = useLocalizedData()
  const navigate = useRouter();
  const pathname = usePathname();

  const setLanguage = (newLang: string) => {
    // Replace current language in URL with new language
    const pathParts = pathname.split('/')
    if (pathParts[1] && languages.some(l => l.code === pathParts[1])) {
      pathParts[1] = newLang
    } else {
      // If first part is not a language code, prepend it
      pathParts.splice(1, 0, newLang)
    }
    const newPath = pathParts.join('/')
    navigate.push(newPath)
  }

  const navItems = [
    { name: t('nav.portfolio'), path: `/${language}/projects` },
    { name: t('nav.timeline'), path: `/${language}/timeline` },
    { name: t('nav.uses'), path: `/${language}/uses` },
  ]

  const isActive = (path: string) => pathname === path

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-gray-50 dark:bg-gray-900/80  ">
      <div className="max-w-2xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <Link
            href={`/${language}`}
            className="text-xl font-bold text-gray-900 dark:text-gray-100 hover:text-teal-500 transition-colors"
          >
            <span className="bg-gradient-to-r from-teal-500 to-cyan-400 bg-clip-text text-transparent">
              aphsx
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <div className="flex items-center space-x-6 lg:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`text-sm font-medium transition-colors duration-200 ${isActive(item.path)
                    ? 'text-teal-500'
                    : 'text-gray-700 dark:text-gray-300 hover:text-teal-500'
                    }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href={SITE_CONFIG.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-teal-500 transition-colors duration-200"
              >
                <FiFileText size={16} />
                <span className="text-sm">{t('nav.resume')}</span>
              </a>
            </div>

            <div className="h-4 w-[1px] bg-gray-200 dark:bg-gray-700 mx-2" />

            <div className="flex items-center space-x-2">
              <div className="flex items-center rounded-full bg-gray-100 p-1 dark:bg-gray-800">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`rounded-full px-2.5 py-1 text-[11px] font-bold transition-colors ${
                      language === lang.code
                        ? 'bg-white text-teal-600 dark:bg-gray-700 dark:text-teal-300'
                        : 'text-gray-500 hover:text-teal-500 dark:text-gray-400'
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
              <button
                onClick={toggleTheme}
                className="text-gray-700 dark:text-gray-300 hover:text-teal-500 transition-colors duration-200 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
              </button>
            </div>
          </div>

          {/* Mobile Controls (Theme Toggle & Menu Button) */}
          <div className="flex items-center gap-1 md:hidden">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-xl text-gray-700 dark:text-gray-300 hover:text-teal-500 hover:bg-gray-200/60 dark:hover:bg-gray-800/60 transition-colors"
            >
              {isDark ? <FiSun size={19} /> : <FiMoon size={19} />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="p-2 rounded-xl text-gray-700 dark:text-gray-300 hover:text-teal-500 hover:bg-gray-200/60 dark:hover:bg-gray-800/60 transition-colors"
            >
              {isOpen ? <HiX size={22} /> : <HiMenu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden border-b border-gray-200/80 dark:border-gray-800/80 bg-gray-50/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg"
          >
            <div className="max-w-2xl mx-auto px-6 py-4 space-y-3">
              {/* Navigation Links */}
              <div className="space-y-1">
                {navItems.map((item) => {
                  const active = isActive(item.path)
                  return (
                    <Link
                      key={item.name}
                      href={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                        active
                          ? 'bg-teal-50 text-teal-600 dark:bg-teal-900/25 dark:text-teal-400 font-semibold'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200/60 dark:hover:bg-gray-800/60 hover:text-teal-500'
                      }`}
                    >
                      <span>{item.name}</span>
                      {active && (
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                      )}
                    </Link>
                  )
                })}

                {/* Resume Link */}
                <a
                  href={SITE_CONFIG.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200/60 dark:hover:bg-gray-800/60 hover:text-teal-500 transition-all"
                >
                  <span>{t('nav.resume')}</span>
                  <span className="text-[10px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                    PDF
                  </span>
                </a>
              </div>

              {/* Divider */}
              <div className="h-px bg-gray-200/80 dark:bg-gray-800" />

              {/* Bottom Controls Row: Language Switcher */}
              <div className="flex items-center justify-between pt-1">
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                  {language === 'th' ? 'ภาษา / Language' : 'Language'}
                </span>

                <div className="flex items-center rounded-full bg-gray-200/70 p-1 dark:bg-gray-800 ring-1 ring-black/5 dark:ring-white/5">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code)
                        setIsOpen(false)
                      }}
                      className={`rounded-full px-3 py-1 text-xs font-bold transition-all ${
                        language === lang.code
                          ? 'bg-white text-teal-600 shadow-xs dark:bg-gray-700 dark:text-teal-300'
                          : 'text-gray-500 hover:text-teal-500 dark:text-gray-400'
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar