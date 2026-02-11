import { motion } from 'framer-motion'
import Link from 'next/link'
import { MdWorkspacePremium } from 'react-icons/md'
import { Certificate } from '../../types'
import { useLocalizedData } from '../../hooks'

interface CertificateListProps {
  certificates: Certificate[]
}

const CertificateList = ({ certificates }: CertificateListProps) => {
  const { getLocalized, language } = useLocalizedData()

  if (certificates.length === 0) return null

  const getTags = (cert: Certificate) => {
    if (cert.tags?.length) return cert.tags
    const tags: string[] = []
    if (cert.issuedAt) tags.push(cert.issuedAt)
    return tags
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="mb-10"
    >
      <div className="space-y-6 sm:space-y-12">
        {certificates.map((cert, index) => {
          const tags = getTags(cert)
          const description =
            cert.description ??
            (cert.issuer
              ? {
                  en: `${getLocalized(cert.issuer)}${cert.issuedAt ? ` · ${cert.issuedAt}` : ''}`,
                  th: `${getLocalized(cert.issuer)}${cert.issuedAt ? ` · ${cert.issuedAt}` : ''}`,
                }
              : undefined)

          return (
            <motion.article
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              className={`flex flex-col sm:flex-row ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'} gap-4 sm:gap-8`}
            >
              <Link
                href={`/${language}/projects/certificate/${cert.id}`}
                className="flex-1 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 rounded-xl p-4 sm:p-6 transition-colors duration-300"
              >
                <div className="flex-shrink-0 w-full sm:w-48 h-48 sm:h-32 relative overflow-hidden rounded-lg">
                  {cert.image ? (
                    <img
                      src={cert.image}
                      alt={getLocalized(cert.title)}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-teal-500 to-cyan-600">
                      <MdWorkspacePremium className="text-white/90" size={40} />
                    </div>
                  )}
                </div>

                <div className="flex-1 text-left w-full">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-slate-100 mb-1">
                    {getLocalized(cert.title)}
                  </h3>
                  {description && (
                    <p className="text-gray-600 dark:text-slate-300 text-sm leading-relaxed mb-2">
                      {getLocalized(description)}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {tags.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-slate-300 text-xs rounded-full">
                        +{tags.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </motion.article>
          )
        })}
      </div>
    </motion.section>
  )
}

export default CertificateList
