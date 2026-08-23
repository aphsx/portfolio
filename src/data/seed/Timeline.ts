import { TimelineEntry } from '../../types'

const CURSOR_BUILD_SALAYA_URL =
    'https://cursorthailand.com/build-salaya/thank-you?referrer=luma&utm_source=luma'

const COSI_PEOPLE_URL = 'https://cosi.bu.ac.th/people'

const NTU_HACKATHON_IMAGES = [
    '/images/ntu-hackathon-opening.jpg',
    '/images/ntu-hackathon-venue.jpg',
    '/images/ntu-hackathon-workspace.jpg',
    '/images/ntu-hackathon-prototype.jpg',
    '/images/ntu-hackathon-team.jpg',
]

// ---------------------------------------------------------------------------
// Source-of-truth for timeline / activity blog entries.
// Add new rows here — list page and detail pages pick them up automatically.
// ---------------------------------------------------------------------------

export const timelineSeed: TimelineEntry[] = [
    {
        id: 'timeline-cursor-build-salaya-2026',
        slug: 'cursor-build-salaya-2026',
        title: {
            en: 'Cursor Build Salaya',
            th: 'Cursor Build Salaya',
        },
        excerpt: {
            en: 'Joined a Cursor hackathon in Salaya — 104 builders, 22 teams, one afternoon of AI-assisted building at Clay.',
            th: 'เข้าร่วม Cursor hackathon ที่ศาลายา — 104 คน 22 ทีม สร้างโปรเจกต์ด้วย AI ตลอดบ่ายเดียวที่ Clay',
        },
        content: {
            en: `## Cursor Build Salaya

On **23 August 2026**, I took part in [Cursor Build Salaya](${CURSOR_BUILD_SALAYA_URL}) — a community hackathon organised by Cursor Thailand at Clay, Salaya.

104 people showed up. 22 teams built in one afternoon. The energy in the room was intense — everyone leaning into Cursor to ship something real within a few hours.

## Highlights

- **104 participants** and **22 teams** building live
- Winners: Dearly · Teletubbies · June, Please
- Judges' Picks: Lovedrop · Free Food · Team Freshers
- Organised by Luis (Cursor Ambassador and Regional Lead, ASEAN)

## Read more

Luis shared a full thank-you note with event results, honest reflections on what worked and what didn't, and what's planned for the next Salaya event.

[Read the full post on cursorthailand.com →](${CURSOR_BUILD_SALAYA_URL})`,
            th: `## Cursor Build Salaya

วันที่ **23 สิงหาคม 2026** ผมเข้าร่วม [Cursor Build Salaya](${CURSOR_BUILD_SALAYA_URL}) — hackathon จากชุมชน Cursor Thailand ที่ Clay ศาลายา

มีคนมาร่วม 104 คน 22 ทีมลงมือ build ในบ่ายเดียว พลังงานในงานสูงมาก — ทุกคนใช้ Cursor สร้างของจริงภายในไม่กี่ชั่วโมง

## ไฮไลท์

- **104 คน** และ **22 ทีม** build สดในงาน
- ทีมชนะ: Dearly · Teletubbies · June, Please
- Judges' Picks: Lovedrop · Free Food · Team Freshers
- จัดโดย Luis (Cursor Ambassador and Regional Lead, ASEAN)

## อ่านเพิ่มเติม

Luis เขียนบันทึกขอบคุณพร้อมผลงาน สิ่งที่ได้เรียนรู้จากงาน และแผนสำหรับ event ครั้งถัดไปที่ศาลายา

[อ่านบทความเต็มที่ cursorthailand.com →](${CURSOR_BUILD_SALAYA_URL})`,
        },
        type: 'event',
        date: '23 Aug 2026',
        dateSort: '2026-08-23',
        image: '/images/cursor-build-salaya.jpg',
        tags: ['Cursor', 'Hackathon', 'Salaya'],
        links: [
            {
                label: { en: 'Read full post', th: 'อ่านบทความเต็ม' },
                url: CURSOR_BUILD_SALAYA_URL,
            },
            {
                label: { en: 'Cursor Thailand', th: 'Cursor Thailand' },
                url: 'https://cursorthailand.com',
            },
        ],
        isActive: true,
        order: 1,
        createdAt: '2026-08-23',
    },
    {
        id: 'timeline-cert-hkt-ntu-2026',
        slug: 'cert-hkt-ntu-2026',
        title: {
            en: 'HKT Program — NTU',
            th: 'โปรแกรม HKT — NTU',
        },
        excerpt: {
            en: 'Joined the HKT program at Nanyang Technological University (NTU), Singapore — hackathon sessions, building, and hands-on innovation.',
            th: 'เข้าร่วมโปรแกรม HKT ที่ Nanyang Technological University (NTU) ประเทศสิงคโปร์ — hackathon ลงมือ build และทำนวัตกรรมจริง',
        },
        content: {
            en: `## HKT at NTU

Joined the **HKT program** hosted by **Nanyang Technological University (NTU)**, Singapore — working through hackathon sessions, prototyping, and team collaboration on campus.

Received a certificate of participation after the program. Photos below are from the NTU sessions.

## Portfolio

More details and the certificate PDF are on the project page.`,
            th: `## HKT ที่ NTU

เข้าร่วม **โปรแกรม HKT** จัดโดย **Nanyang Technological University (NTU)** ประเทศสิงคโปร์ — ลงมือ hackathon build prototype และทำงานเป็นทีมในมหาวิทยาลัย

ได้รับใบประกาศนียบัตรหลังจบโปรแกรม รูปด้านล่างจากช่วงงานที่ NTU

## Portfolio

รายละเอียดและไฟล์ใบประกาศ อยู่ในหน้าโปรเจกต์`,
        },
        type: 'event',
        date: '2026',
        dateSort: '2026-03-01',
        image: NTU_HACKATHON_IMAGES[0],
        images: NTU_HACKATHON_IMAGES,
        projectId: 'cert-hkt-ntu',
        tags: ['NTU', 'HKT', 'Singapore'],
        links: [
            {
                label: { en: 'Facebook photo', th: 'รูปจาก Facebook' },
                url: 'https://www.facebook.com/photo?fbid=1575652114567458&set=a.385741086891906',
            },
            {
                label: { en: 'Certificate PDF', th: 'ไฟล์ใบประกาศ' },
                url: '/certificates/certi-hkt-ntu.pdf',
            },
        ],
        isActive: true,
        order: 3,
        createdAt: '2026-03-01',
    },
    {
        id: 'timeline-cosi-2024',
        slug: 'cosi-2024',
        title: {
            en: 'Joined Center of Specialty Innovation (CoSI)',
            th: 'เข้าร่วมศูนย์นวัตกรรมเฉพาะทาง (CoSI)',
        },
        excerpt: {
            en: 'Started at CoSI, Bangkok University — a research center focused on specialty innovation and applied software projects.',
            th: 'เริ่มเข้าร่วม CoSI มหาวิทยาลัยกรุงเทพ — ศูนย์วิจัยด้านนวัตกรรมเฉพาะทางและโปรเจกต์ซอฟต์แวร์เชิงประยุกต์',
        },
        content: {
            en: `## Center of Specialty Innovation (CoSI)

On **23 June 2024**, I joined [Center of Specialty Innovation (CoSI)](${COSI_PEOPLE_URL}) at Bangkok University as an intern while studying Computer Science.

CoSI is where I got hands-on experience building real systems — internal tools, ERP platforms, and research projects that ship beyond the classroom.

## Learn more

See the CoSI team and people at Bangkok University.

[View CoSI people →](${COSI_PEOPLE_URL})`,
            th: `## ศูนย์นวัตกรรมเฉพาะทาง (CoSI)

วันที่ **23 มิถุนายน 2024** ผมเข้าร่วม [ศูนย์นวัตกรรมเฉพาะทาง (CoSI)](${COSI_PEOPLE_URL}) มหาวิทยาลัยกรุงเทพในฐานะนักศึกษาฝึกงาน ขณะเรียนสาขาวิทยาการคอมพิวเตอร์

CoSI เป็นที่ที่ผมได้ลงมือ build ระบบจริง — ทั้งระบบภายใน แพลตฟอร์ม ERP และโครงการวิจัยที่นำไปใช้งานได้จริง

## ดูเพิ่มเติม

ดูทีมและบุคลากร CoSI ได้ที่เว็บไซต์มหาวิทยาลัยกรุงเทพ

[ดู CoSI people →](${COSI_PEOPLE_URL})`,
        },
        type: 'participation',
        date: '23 Jun 2024',
        dateSort: '2024-06-23',
        image: '/images/cosi-aphisit.jpg',
        imageFit: 'contain',
        tags: ['CoSI', 'Bangkok University', 'Research'],
        links: [
            {
                label: { en: 'CoSI people', th: 'CoSI people' },
                url: COSI_PEOPLE_URL,
            },
            {
                label: { en: 'CoSI website', th: 'เว็บ CoSI' },
                url: 'https://cosi.bu.ac.th/',
            },
        ],
        isActive: true,
        order: 4,
        createdAt: '2024-06-23',
    },
]
