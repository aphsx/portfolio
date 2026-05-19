import { Certificate } from '../../types'

// ---------------------------------------------------------------------------
// Source-of-truth for certificates (PDFs live in /public/certificates).
// ---------------------------------------------------------------------------

export const certificatesSeed: Certificate[] = [
    {
        id: 'cert-hkt-ntu',
        title: {
            en: 'HKT Certificate — NTU',
            th: 'ใบประกาศนียบัตร HKT — NTU',
        },
        issuer: {
            en: 'Nanyang Technological University (NTU)',
            th: 'Nanyang Technological University (NTU)',
        },
        issuedAt: '2026',
        fileUrl: '/certificates/certi-hkt-ntu.pdf',
        isActive: true,
        order: 1,
    },
]
