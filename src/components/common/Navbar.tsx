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
import { prefetchDeskSetup3D } from '../uses/prefetchDeskSetup3D'

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
                  onMouseEnter={() => {
                    if (item.path.endsWith("/uses")) prefetchDeskSetup3D();
                  }}
                  onFocus={() => {
                    if (item.path.endsWith("/uses")) prefetchDeskSetup3D();
                  }}
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 dark:text-gray-300 hover:text-teal-500 transition-colors"
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden backdrop-blur-md bg-white/90 dark:bg-gray-900/90 border-b border-gray-200 dark:border-gray-700"
          >
            <div className="px-4 py-4 space-y-4">
              <div className="space-y-2">
                <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest pl-1">
                  Language
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code)
                        setIsOpen(false)
                      }}
                      className={`flex items-center justify-center rounded-xl border px-4 py-3 transition-all
                        ${language === lang.code
                          ? 'bg-teal-50 dark:bg-teal-900/20 border-teal-200 dark:border-teal-800 text-teal-600 dark:text-teal-400'
                          : 'bg-gray-50 dark:bg-gray-800/50 border-gray-100 dark:border-gray-700 text-gray-600 dark:text-gray-400'
                        }`}
                    >
                      <span className="text-xs font-bold tracking-wider">{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={() => {
                    if (item.path.endsWith("/uses")) prefetchDeskSetup3D();
                    setIsOpen(false);
                  }}
                  className={`block text-sm font-medium transition-colors duration-200 ${isActive(item.path)
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
                className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-teal-500 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                <FiFileText size={20} />
                <span className="text-sm font-medium">{t('nav.resume')}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar