import { motion } from "framer-motion";
import { usesData } from "../data";
import { useLanguage } from '../contexts';
import { getLocalizedText } from '../utils';



const Uses = () => {
  const { t, language } = useLanguage()
  const defaultImage = '/images/CSI00139.jpg'
  return (
    <div
      className="min-h-screen bg-gray-50 dark:bg-gray-900"
      style={{ paddingTop: "100px" }}
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
            Here's what tech I'm currently using for development, design, and daily productivity.
            This collection represents tools and hardware that power my creative workflow.
          </p>
        </motion.div>

        {/* Uses Sections */}
        <div className="space-y-8">
          {usesData.map((section, sectionIndex) => (
            <motion.section
              key={getLocalizedText(section.category, language) as string}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + sectionIndex * 0.1, duration: 0.6 }}
              className="mb-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                  {getLocalizedText(section.category, language)}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.3 + sectionIndex * 0.1 + itemIndex * 0.05,
                      duration: 0.4,
                    }}
                    className="flex items-center gap-4 p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700"
                  >
                    <div className="flex-shrink-0 w-12 h-12 relative overflow-hidden rounded-lg">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={getLocalizedText(item.name, language) as string}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.src = defaultImage;
                          }}
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-teal-500/20 to-cyan-500/20 dark:from-teal-600/30 dark:to-cyan-600/30 flex items-center justify-center rounded-lg">
                          <span className="text-lg font-bold text-teal-600 dark:text-teal-400">
                            {(getLocalizedText(item.name, language) as string).charAt(0)}
                          </span>
                        </div>
                      )}
                    </div>
                    <h3 className="text-gray-900 dark:text-gray-100 font-medium">
                      {getLocalizedText(item.name, language)}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Uses;
