import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'
import { Certificate } from '../../types'
import { useTranslation } from 'react-i18next'
import { useLocalizedData } from '../../hooks'

interface CertificateListProps {
  certificates: Certificate[]
}

const CertificateList = ({ certificates }: CertificateListProps) => {
  const { t } = useTranslation()
  const { getLocalized } = useLocalizedData()

  if (certificates.length === 0) return null

  return (
    <div className="space-y-3 mb-10">
      {certificates.map((cert, index) => (
        <motion.a
          key={cert.id}
          href={cert.fileUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 + index * 0.05, duration: 0.4 }}
          className="group flex items-start justify-between gap-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 transition-colors hover:border-teal-400 dark:hover:border-teal-500"
        >
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 group-hover:text-teal-600 dark:group-hover:text-teal-400">
              {getLocalized(cert.title)}
            </p>
            {cert.issuer && (
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                {getLocalized(cert.issuer)}
                {cert.issuedAt ? ` · ${cert.issuedAt}` : ''}
              </p>
            )}
            <p className="mt-2 text-xs text-teal-600 dark:text-teal-400">
              {t('portfolio.certificates.view')}
            </p>
          </div>
          <FiExternalLink
            size={16}
            className="mt-0.5 shrink-0 text-gray-400 group-hover:text-teal-500"
            aria-hidden
          />
        </motion.a>
      ))}
    </div>
  )
}

export default CertificateList
