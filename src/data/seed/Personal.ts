import { BioTimelineItem, PersonalInfo } from '../../types'

// ---------------------------------------------------------------------------
// Source-of-truth for personal information.
// When you migrate to a database, this data will be the initial seed rows.
// ---------------------------------------------------------------------------

export const personalInfoSeed: PersonalInfo = {
    name: { en: '', th: 'อภิสิทธิ์ ด่านเจ้าแดง', ja: '' },
    title: { en: '', th: 'นักพัฒนา FullStack', ja: '' },
    greeting: {
        en: '',
        th: 'สวัสดีครับ ผมนาย อภิสิทธิ์ ด่านเจ้าแดง',
        ja: '',
    },
    profileImage: 'https://res.cloudinary.com/dw5zfbigt/image/upload/v1772253337/CSI00138Crop_c0g98s.jpg',
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
            en: '',
            th: 'จบการศึกษาระดับมัธยมศึกษาตอนปลายจากโรงเรียนมัธยมวัดใหม่กรองทอง (ม.1-6)',
            ja: '',
        },
    },
    {
        id: 'bio-2012',
        year: '2012',
        isActive: true,
        order: 5,
        event: {
            en: '',
            th: 'จบการศึกษาระดับประถมศึกษาจากโรงเรียนบ้านไทยเจริญ (ป.1-6)',
            ja: '',
        },
    },
]
