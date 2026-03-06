import { BioTimelineItem, PersonalInfo } from '../../types'

// ---------------------------------------------------------------------------
// Source-of-truth for personal information.
// When you migrate to a database, this data will be the initial seed rows.
// ---------------------------------------------------------------------------

export const personalInfoSeed: PersonalInfo = {
    name: { en: 'Aphisit Danchaodang', th: 'อภิสิทธิ์ ด่านเจ้าแดง' },
    title: { en: 'Software Engineer', th: 'Software Engineer' },
    greeting: {
        en: 'Hello, I\'m Mr. Aphisit Danchaodang',
        th: 'สวัสดีครับ ผมนาย อภิสิทธิ์ ด่านเจ้าแดง',
    },
    profileImage: 'https://res.cloudinary.com/dw5zfbigt/image/upload/v1772253337/CSI00138Crop_c0g98s.jpg',
    email: 'aphisit.danchaodang@example.com',
}

export const bioTimelineSeed: BioTimelineItem[] = [
    {
        id: 'bio-2026',
        year: '2026 - Present',
        isActive: true,
        order: 1,
        event: {
            en: 'Working as a Software Engineer at AUGUST TEN DIGITAL DEVELOPMENT COMPANY LIMITED while continuing Computer Science studies at Bangkok University, including summer coursework.',
            th: 'Software Engineer ที่ AUGUST TEN DIGITAL DEVELOPMENT COMPANY LIMITED ควบคู่กับการเรียนสาขาวิชาวิทยาการคอมพิวเตอร์ที่มหาวิทยาลัยกรุงเทพ รวมถึงการเรียนภาคฤดูร้อน',
        },
    },
    {
        id: 'bio-2026-ml',
        year: '2026',
        isActive: true,
        order: 2,
        event: {
            en: 'Completed a capstone ML prediction project in collaboration with 1moby company as part of Computer Science studies at Bangkok University.',
            th: 'จัดทำโปรเจคจบสาขาวิชา ML Prediction ร่วมกับบริษัท 1moby เป็นส่วนหนึ่งของการศึกษาสาขาวิชาวิทยาการคอมพิวเตอร์ที่มหาวิทยาลัยกรุงเทพ',
        },
    },
    {
        id: 'bio-2025',
        year: '2025 - 2026',
        isActive: true,
        order: 3,
        event: {
            en: 'Worked as a research assistant and Software Engineer at Center of Specialty Innovation (CoSI) while studying as a junior Computer Science student at Bangkok University.',
            th: 'เป็นผู้ช่วยนักวิจัยและ Software Engineer ที่ศูนย์นวัตกรรมเฉพาะทาง Center of Specialty Innovation (CoSI) ควบคู่กับการเรียนชั้นปีที่ 3 สาขาวิชาวิทยาการคอมพิวเตอร์ที่มหาวิทยาลัยกรุงเทพ',
        },
    },
    {
        id: 'bio-2024',
        year: '2024',
        isActive: true,
        order: 4,
        event: {
            en: 'Joined Center of Specialty Innovation (CoSI) as an intern while studying as a sophomore Computer Science student at Bangkok University.',
            th: 'เข้าร่วมเป็นนักศึกษาฝึกงานที่ Center of Specialty Innovation (CoSI) ควบคู่กับการเรียนชั้นปีที่ 2 สาขาวิชาวิทยาการคอมพิวเตอร์ที่มหาวิทยาลัยกรุงเทพ',
        },
    },
    {
        id: 'bio-2023',
        year: '2023',
        isActive: true,
        order: 5,
        event: {
            en: 'Started the first year of Computer Science at Bangkok University.',
            th: 'เริ่มเรียนชั้นปีที่ 1 สาขาวิชาวิทยาการคอมพิวเตอร์ที่มหาวิทยาลัยกรุงเทพ',
        },
    },
    {
        id: 'bio-2018',
        year: '2018',
        isActive: true,
        order: 6,
        event: {
            en: 'Graduated from Mattayom Wat Mai Krong Thong School (Grade 7-12).',
            th: 'จบการศึกษาระดับมัธยมศึกษาตอนปลายจากโรงเรียนมัธยมวัดใหม่กรองทอง (ม.1-6)',
        },
    },
    {
        id: 'bio-2012',
        year: '2012',
        isActive: true,
        order: 7,
        event: {
            en: 'Graduated from Ban Thai Charoen School (Grade 1-6).',
            th: 'จบการศึกษาระดับประถมศึกษาจากโรงเรียนบ้านไทยเจริญ (ป.1-6)',
        },
    },
]
