import { motion } from 'framer-motion'
import { MdElectricBolt } from 'react-icons/md'
import { Section } from '../ui'
import { skills } from '../../data'
import { useLanguage } from '../../contexts'

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
      scale: 1.12,
      transition: {
        duration: 0.15,
        type: 'spring',
        stiffness: 400,
        damping: 15,
      },
    }}
    whileTap={{ scale: 0.96 }}
    className="flex flex-col items-center p-2 rounded-md cursor-pointer"
  >
    <div
      className={`w-12 h-12 ${skill.color} rounded-md flex items-center justify-center text-white font-semibold text-sm transition-all duration-200 ease-out hover:opacity-90`}
    >
      {skill.icon ? (
        <skill.icon size={18} />
      ) : (
        skill.name.charAt(0)
      )}
    </div>
    <div className="mt-2 text-xs text-center text-gray-600 dark:text-gray-300">
      {skill.name}
    </div>
  </motion.div>
)

const SkillsSection = () => {
  const { t } = useLanguage()

  return (
    <Section
      title={t('home.skills')}
      icon={<MdElectricBolt />}
      delay={0.5}
    >
      <div className="space-y-6 mt-4">
        {Object.entries(skills).map(([category, items], catIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + catIndex * 0.12 }}
          >
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                {category}
              </h4>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {items.length} items
              </span>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
              {items.map((skill, index) => (
                <SkillItem
                  key={skill.name}
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