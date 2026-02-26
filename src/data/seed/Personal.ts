import { BioTimelineItem, PersonalInfo } from '../../types'

// ---------------------------------------------------------------------------
// Source-of-truth for personal information.
// When you migrate to a database, this data will be the initial seed rows.
// ---------------------------------------------------------------------------

export const personalInfoSeed: PersonalInfo = {
    name: { en: 'Aphisit Danchaodang', th: 'อภิสิทธิ์ ด่านเจ้าแดง' },
    title: { en: 'FullStack Web Developer', th: 'นักพัฒนา Full-Stack' },
    greeting: {
        en: 'Hi, I am Aphisit Danchaodang',
        th: 'สวัสดีครับ ผมนาย อภิสิทธิ์ ด่านเจ้าแดง',
    },
    profileImage: '/images/CSI00139.jpg',
    email: 'aphisit.danchaodang@example.com',
}

export const bioTimelineSeed: BioTimelineItem[] = [
    {
        id: 'bio-2025',
        year: '2025',
        isActive: true,
        order: 1,
        event: {
            en: 'Work as a FullStack developer at the Center of Specialty Innovation (CoSI) - research lab under Bangkok University',
            th: 'ทำงานเป็นนักพัฒนา FullStack ที่ศูนย์นวัตกรรมเฉพาะทาง (CoSI) - ห้องปฏิบัติการวิจัยภายใต้มหาวิทยาลัยกรุงเทพ',
        },
    },
    {
        id: 'bio-2024',
        year: '2024',
        isActive: true,
        order: 2,
        event: {
            en: 'Joined the Center of Specialty Innovation (CoSI) - research lab under Bangkok University',
            th: 'เข้าร่วมศูนย์นวัตกรรมเฉพาะทาง (CoSI) - ห้องปฏิบัติการวิจัยภายใต้มหาวิทยาลัยกรุงเทพ',
        },
    },
    {
        id: 'bio-2023',
        year: '2023',
        isActive: true,
        order: 3,
        event: {
            en: 'Currently studying Computer Science at Bangkok University',
            th: 'กำลังศึกษาวิทยาการคอมพิวเตอร์ที่มหาวิทยาลัยกรุงเทพ',
        },
    },
    {
        id: 'bio-2018',
        year: '2018',
        isActive: true,
        order: 4,
        event: {
            en: 'Successfully completed secondary education at Matthayomwatmaikrongtong School (Grade 7-12)',
            th: 'จบการศึกษาระดับมัธยมศึกษาตอนปลายจากโรงเรียนมัธยมวัดใหม่กรองทอง (ม.1-6)',
        },
    },
    {
        id: 'bio-2012',
        year: '2012',
        isActive: true,
        order: 5,
        event: {
            en: 'Completed lower secondary education at Banthaicharoen School (Grade 1-6)',
            th: 'จบการศึกษาระดับประถมศึกษาจากโรงเรียนบ้านไทยเจริญ (ป.1-6)',
        },
    },
]
