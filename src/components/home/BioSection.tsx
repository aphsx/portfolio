import { MdViewTimeline } from 'react-icons/md'
import { Section } from '../ui'
import { PersonalRepository } from '../../data'
import { useTranslation } from 'react-i18next'
import { useLocalizedData } from '../../hooks'

const BioSection = () => {
  const { t } = useTranslation()
  const { getLocalized } = useLocalizedData()
  const bioTimeline = PersonalRepository.getBioTimeline()

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