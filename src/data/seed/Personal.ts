import { BioTimelineItem, PersonalInfo } from '../../types'

// ---------------------------------------------------------------------------
// Source-of-truth for personal information.
// When you migrate to a database, this data will be the initial seed rows.
// ---------------------------------------------------------------------------

export const personalInfoSeed: PersonalInfo = {
    name: { en: 'Aphisit Danchaodang', th: 'อภิสิทธิ์ ด่านเจ้าแดง', ja: 'Aphisit Danchaodang' },
    title: { en: 'FullStack Developer', th: 'นักพัฒนา FullStack', ja: 'フルスタック開発者' },
    greeting: {
        en: 'Hi, I am Aphisit Danchaodang',
        th: 'สวัสดีครับ ผมนาย อภิสิทธิ์ ด่านเจ้าแดง',
        ja: 'こんにちは、Aphisit Danchaodang です',
    },
    profileImage: '/images/CSI00139.jpg',
    email: 'aphisit.danchaodang@example.com',
}

export const bioTimelineSeed: BioTimelineItem[] = [
    {
        id: 'bio-2025',
        year: '2025 - Present',
        isActive: true,
        order: 1,
        event: {
            en: '',
            th: 'ทำงานเป็นนักพัฒนา FullStack ที่ศูนย์นวัตกรรมเฉพาะทาง Center of Specialty Innovation (CoSI) ได้ร่วมพัฒนาและมีผลงานหลากหลายผลงาน จนถึงปัจจุบัน',
            ja: '',
        },
    },
    {
        id: 'bio-2024',
        year: '2024',
        isActive: true,
        order: 2,
        event: {
            en: '',
            th: 'เข้าร่วมเป็นนักศึกษาฝึกงานที่ Center of Specialty Innovation (CoSI) - ห้องปฏิบัติการวิจัยภายใต้มหาวิทยาลัยกรุงเทพ',
            ja: '',
        },
    },
    {
        id: 'bio-2023',
        year: '2023',
        isActive: true,
        order: 3,
        event: {
            en: '',
            th: 'เข้าศึกษาในสาขาวิชาวิทยาการคอมพิวเตอร์ที่มหาวิทยาลัยกรุงเทพ',
            ja: '',
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
            ja: 'Matthayomwatmaikrongtong 学校にて中等教育を修了 (第7-12学年)',
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
            ja: 'Banthaicharoen 学校にて初等教育を修了 (第1-6学年)',
        },
    },
]
