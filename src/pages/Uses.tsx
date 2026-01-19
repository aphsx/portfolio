import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { UsesRepository } from '../data'
import { useLocalizedData } from '../hooks'

const Uses = () => {
  const { t } = useTranslation()
  const { getLocalized } = useLocalizedData()
  const defaultImage = '/images/CSI00139.jpg'
  const usesCategories = UsesRepository.getAll()

  return (
    <div
      className="min-h-screen bg-gray-50 dark:bg-gray-900"
      style={{ paddingTop: '100px' }}
    >
      <div className="max-w-2xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3">
            {t('uses.title')}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-sm max-w-2xl mx-auto leading-relaxed">
            {t('uses.description')}
          </p>
        </motion.div>

        {/* Uses Sections */}
        <div className="space-y-8">
          {usesCategories.map((section, sectionIndex) => (
            <motion.section
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + sectionIndex * 0.1, duration: 0.6 }}
              className="mb-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                  {getLocalized(section.name)}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.3 + sectionIndex * 0.1 + itemIndex * 0.05,
                      duration: 0.4,
                    }}
                    className="flex items-center gap-4 p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700"
                  >
                    <div className="flex-shrink-0 w-12 h-12 relative overflow-hidden rounded-lg flex items-center justify-center bg-gray-100 dark:bg-gray-700">
                      {item.icon ? (
                        <item.icon size={24} className="text-teal-600 dark:text-teal-400" />
                      ) : item.image ? (
                        <img
                          src={item.image}
                          alt={getLocalized(item.name)}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.src = defaultImage
                          }}
                        />
                      ) : (
                        <span className="text-lg font-bold text-teal-600 dark:text-teal-400">
                          {getLocalized(item.name).charAt(0)}
                        </span>
                      )}
                    </div>
                    <h3 className="text-gray-900 dark:text-gray-100 font-medium">
                      {getLocalized(item.name)}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Uses
