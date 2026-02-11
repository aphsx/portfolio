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
        description: {
            en: 'Certificate of participation from the HKT program at Nanyang Technological University (NTU).',
            th: 'ใบประกาศนียบัตรจากโปรแกรม HKT ณ Nanyang Technological University (NTU)',
        },
        descriptionLong: {
            en: 'Awarded for participation in the HKT program hosted by Nanyang Technological University (NTU), Singapore.',
            th: 'ได้รับใบประกาศนียบัตรจากการเข้าร่วมโปรแกรม HKT จัดโดย Nanyang Technological University (NTU) ประเทศสิงคโปร์',
        },
        issuer: {
            en: 'Nanyang Technological University (NTU)',
            th: 'Nanyang Technological University (NTU)',
        },
        issuedAt: '2026',
        image: '/certificates/certi-hkt-ntu-thumb.jpg',
        tags: ['NTU', 'HKT', '2026'],
        fileUrl: '/certificates/certi-hkt-ntu.pdf',
        isActive: true,
        order: 1,
    },
]
