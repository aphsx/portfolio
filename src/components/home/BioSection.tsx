import { MdViewTimeline } from 'react-icons/md'
import { Section } from '../ui'
import { bioTimeline } from '../../data'
import { useLanguage } from '../../contexts'
import { useLocalizedData } from '../../hooks'

const BioSection = () => {
  const { t } = useLanguage()
  const { getLocalized } = useLocalizedData()

  return (
    <Section
      title={t('home.bio')}
      icon={<MdViewTimeline />}
      delay={0.3}
    >
      <div className="space-y-2">
        {bioTimeline.map((item, index) => (
          <div key={index} className="flex gap-4">
            <span className="text-teal-500 font-semibold text-sm min-w-[70px]">
              {item.year}
            </span>
            <span className="text-gray-600 dark:text-gray-300 text-sm">
              {getLocalized(item.event)}
            </span>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default BioSection