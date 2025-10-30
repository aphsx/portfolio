import { motion } from 'framer-motion'
import { PiGlobeBold } from 'react-icons/pi'
import { Section } from '../ui'
import { socialLinks } from '../../data'
import { useLanguage } from '../../contexts'

const SocialLinksSection = () => {
  const { t } = useLanguage()

  return (
    <Section
      title={t('home.web')}
      icon={<PiGlobeBold />}
      delay={0.7}
    >
      <div className="space-y-2">
        {socialLinks.map((social, index) => (
          <motion.div
            key={social.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + index * 0.1 }}
          >
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-teal-500 hover:text-teal-600 transition-colors text-sm"
            >
              <social.icon size={16} />
              {social.handle}
            </a>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

export default SocialLinksSection