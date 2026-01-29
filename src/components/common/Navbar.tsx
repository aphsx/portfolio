import { useState } from 'react'
"use client";
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { HiMenu, HiX } from 'react-icons/hi'
import { FiCheck, FiGithub, FiMoon, FiSun } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../../contexts'
import { useTranslation } from 'react-i18next'

const languages = [
  { code: 'en', name: 'EN', fullName: 'English', flag: '🇺🇸' },
  { code: 'th', name: 'TH', fullName: 'ไทย', flag: '🇹🇭' },
  { code: 'ja', name: 'JA', fullName: '日本語', flag: '🇯🇵' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()
  const { t, i18n } = useTranslation()
  const navigate = useRouter();
  const pathname = usePathname();

  // Normalize language code (e.g., ja-JP -> ja, ja_JP -> ja)
  const language = (i18n.language || 'en').split(/[-_]/)[0].toLowerCase()

  const currentLang = languages.find(l => l.code === language) || languages.find(l => l.code === 'th') || languages[0]

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
    setIsLangOpen(false)
  }

  const navItems = [
    { name: t('nav.projects'), path: `/${language}/projects` },
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
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-teal-500 transition-colors duration-200"
              >
                <FiGithub size={16} />
                <span className="text-sm">{t('nav.github')}</span>
              </a>
            </div>

            <div className="h-4 w-[1px] bg-gray-200 dark:bg-gray-700 mx-2" />

            <div className="flex items-center space-x-2">
              <div className="relative">
                <button
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="text-gray-700 dark:text-gray-300 hover:text-teal-500 transition-colors duration-200 p-2 flex items-center gap-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                  title="Select Language"
                >
                  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  <span className="text-xs font-bold uppercase tracking-wider">{currentLang.name}</span>
                </button>

                <AnimatePresence>
                  {isLangOpen && (
                    <>
                      <div
                        className="fixed inset-0 z-10"
                        onClick={() => setIsLangOpen(false)}
                      />
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        className="absolute right-0 mt-2 w-40 py-2 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 z-20 overflow-hidden"
                      >
                        <div className="px-3 py-1 mb-1">
                          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Select Language</span>
                        </div>
                        {languages.map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => setLanguage(lang.code)}
                            className={`w-full px-4 py-2.5 flex items-center justify-between transition-colors text-sm
                              ${language === lang.code
                                ? 'text-teal-600 dark:text-teal-400 bg-teal-50/30 dark:bg-teal-900/20 font-semibold'
                                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                              }`}
                          >
                            <div className="flex items-center gap-3">
                              <span className="text-base">{lang.flag}</span>
                              <span>{lang.fullName}</span>
                            </div>
                            {language === lang.code && (
                              <FiCheck size={14} className="text-teal-500" />
                            )}
                          </button>
                        ))}
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
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
                <div className="grid grid-cols-3 gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code)
                        setIsOpen(false)
                      }}
                      className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all
                        ${language === lang.code
                          ? 'bg-teal-50 dark:bg-teal-900/20 border-teal-200 dark:border-teal-800 text-teal-600 dark:text-teal-400'
                          : 'bg-gray-50 dark:bg-gray-800/50 border-gray-100 dark:border-gray-700 text-gray-600 dark:text-gray-400'
                        }`}
                    >
                      <span className="text-xl mb-1">{lang.flag}</span>
                      <span className="text-[10px] font-bold">{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block text-sm font-medium transition-colors duration-200 ${isActive(item.path)
                    ? 'text-teal-500'
                    : 'text-gray-700 dark:text-gray-300 hover:text-teal-500'
                    }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-teal-500 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                <FiGithub size={20} />
                <span className="text-sm font-medium">{t('nav.github')}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar