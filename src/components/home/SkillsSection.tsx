import { motion } from 'framer-motion'
import { MdElectricBolt } from 'react-icons/md'
import { Section } from '../ui'
import { SkillRepository } from '../../data'
import { useTranslation } from 'react-i18next'
import { useLocalizedData } from '../../hooks'

interface SkillItemProps {
  skill: {
    name: string
    color: string
    icon?: React.ComponentType<{ size?: number }>
  }
  index: number
}

const SkillItem = ({ skill, index }: SkillItemProps) => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      delay: 0.15 + index * 0.03,
      type: 'spring',
      stiffness: 300,
      damping: 20,
    }}
    whileHover={{
      scale: 1.1,
      transition: {
        duration: 0.15,
        type: 'spring',
        stiffness: 400,
        damping: 15,
      },
    }}
    whileTap={{ scale: 0.96 }}
    className="flex flex-col items-center p-1 sm:p-1.5 rounded-md cursor-pointer"
  >
    <div
      className={`w-10 h-10 sm:w-11 sm:h-11 ${skill.color} rounded-lg flex items-center justify-center text-white font-semibold text-xs sm:text-sm transition-all duration-200 ease-out hover:opacity-90 shadow-2xs`}
    >
      {skill.icon ? (
        <skill.icon size={17} />
      ) : (
        skill.name.charAt(0)
      )}
    </div>
    <div className="mt-1.5 text-[11px] sm:text-xs text-center text-gray-600 dark:text-gray-300 leading-tight w-full truncate px-0.5" title={skill.name}>
      {skill.name}
    </div>
  </motion.div>
)

const SkillsSection = () => {
  const { t } = useTranslation()
  const { getLocalized } = useLocalizedData()
  const skillCategories = SkillRepository.getAll()

  return (
    <Section
      title={t('home.skills')}
      icon={<MdElectricBolt />}
      delay={0.5}
    >
      <div className="space-y-5 mt-3">
        {skillCategories.map((cat, catIndex) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + catIndex * 0.12 }}
          >
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                {getLocalized(cat.name)}
              </h4>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {cat.skills.length} items
              </span>
            </div>

            <div className="grid grid-cols-4 min-[420px]:grid-cols-5 sm:grid-cols-6 md:grid-cols-8 gap-1.5 sm:gap-2">
              {cat.skills.map((skill, index) => (
                <SkillItem
                  key={skill.id}
                  skill={skill}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

export default SkillsSection