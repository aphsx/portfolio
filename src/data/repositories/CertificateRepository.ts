import { Certificate } from '../../types'
import { certificatesSeed } from '../seed/Certificates'

// ---------------------------------------------------------------------------
// CertificateRepository
// ---------------------------------------------------------------------------

export const CertificateRepository = {
    getAll(): Certificate[] {
        return certificatesSeed
            .filter((item) => item.isActive)
            .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
    },

    getById(id: string): Certificate | undefined {
        return certificatesSeed.find((item) => item.id === id && item.isActive)
    },
}
