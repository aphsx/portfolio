import { MdOutlineWork } from 'react-icons/md'
import { Section } from '../ui'
import { useLanguage } from '../../contexts'

const AboutWorkSection = () => {
  const { t } = useLanguage()

  return (
    <Section
      title={t('home.work')}
      icon={<MdOutlineWork />}
      delay={0.2}
    >
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
        {t('home.work.description')}
      </p>
    </Section>
  )
}

export default AboutWorkSection