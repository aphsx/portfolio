import { TimelineEntry } from '../../types'

const CURSOR_BUILD_SALAYA_URL =
    'https://cursorthailand.com/build-salaya/thank-you?referrer=luma&utm_source=luma'

const COSI_PEOPLE_URL = 'https://cosi.bu.ac.th/people'

const NTU_HACKATHON_IMAGES = [
    '/images/ntu-hackathon-opening.jpg',
    '/images/ntu-hackathon-venue.jpg',
    '/images/ntu-hackathon-prototype.jpg',
    '/images/ntu-hackathon-team.jpg',
]

const NTU_HACKATHON_HERO = '/images/ntu-hackathon-workspace-hero.jpg'

const WAT_AMERICA_HERO = '/images/wat-america-kitchen.jpg'
const WAT_AMERICA_IMAGES = [
    '/images/wat-america-passport.jpg',
    '/images/wat-america-luggage.jpg',
    '/images/wat-america-street.jpg',
    '/images/wat-america-kitchen-break.jpg',
    '/images/wat-america-clock-in.jpg',
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
            en: 'NTU Hackathon: Innovating Functional Recovery',
            th: 'NTU Hackathon: Innovating Functional Recovery',
        },
        excerpt: {
            en: 'Joined NTU Singapore’s hackathon on stroke rehabilitation — 2 days of prototyping at KMUTT (Bang Mod), Thonburi.',
            th: 'เข้าร่วม hackathon ของ NTU สิงคโปร์ เรื่องฟื้นฟูผู้ป่วย stroke — ลงมือ build prototype 2 วัน ที่ มจธ. บางมด ธนบุรี',
        },
        content: {
            en: `## NTU Hackathon: Innovating Functional Recovery

On **2–3 May 2026**, I took part in **NTU Hackathon: Innovating Functional Recovery** at the **College of Management and Innovation, King Mongkut's University of Technology Thonburi (KMUTT)** — Bang Mod campus, Thonburi, Bangkok.

Organized by **Nanyang Technological University (NTU) Singapore** with Thai partners, the hackathon focused on **stroke patient rehabilitation** through technology and game design. Teams worked on prototypes that encourage safe, engaging physical movement and recovery exercises.

Received a **Certificate of Participation** from NTU. Photos below are from the hackathon sessions at KMUTT.

## Portfolio

The certificate PDF and more details are on the project page.`,
            th: `## NTU Hackathon: Innovating Functional Recovery

วันที่ **2–3 พฤษภาคม 2026** ผมเข้าร่วม **NTU Hackathon: Innovating Functional Recovery** ณ **บัณฑิตวิทยาลัยการจัดการและนวัตกรรม มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี (มจธ.)** วิทยาเขตบางมด ธนบุรี กรุงเทพฯ

จัดโดย **Nanyang Technological University (NTU) สิงคโปร์** ร่วมกับภาคีเครือข่ายในประเทศไทย งานเน้น **การฟื้นฟูผู้ป่วยโรคหลอดเลือดสมอง (stroke)** ด้วยเทคโนโลยีและ game design — ทีมต่างๆ ลงมือทำ prototype ที่ช่วยกระตุ้นการเคลื่อนไหวและแบบฝึกหัดฟื้นฟูอย่างปลอดภัยและน่าสนใจ

ได้รับ **ใบประกาศนียบัตร (Certificate of Participation)** จาก NTU รูปด้านล่างจากช่วง hackathon ที่ มจธ.

## Portfolio

ไฟล์ใบประกาศและรายละเอียดเพิ่มเติม อยู่ในหน้าโปรเจกต์`,
        },
        type: 'event',
        date: '2–3 May 2026',
        dateSort: '2026-05-02',
        image: NTU_HACKATHON_HERO,
        images: NTU_HACKATHON_IMAGES,
        projectId: 'cert-hkt-ntu',
        tags: ['NTU', 'Hackathon', 'KMUTT'],
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
        createdAt: '2026-05-02',
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
    {
        id: 'timeline-wat-america-2025',
        slug: 'work-and-travel-america-2025',
        title: {
            en: 'Work and Travel America',
            th: 'Work and Travel America',
        },
        excerpt: {
            en: 'Work and Travel in the U.S. (16 May – 8 Aug 2025) — language training, work, and life abroad.',
            th: 'Work and Travel อเมริกา (16 พ.ค. – 8 ส.ค. 2025) — ฝึกภาษา ทำงาน และใช้ชีวิตต่างประเทศ',
        },
        content: {
            en: `## Work and Travel America

Joined the **Work and Travel** program in the United States from **16 May to 8 August 2025**.

The program combines **language training**, **work**, and **travel** — building English in an immersive setting while working shifts and experiencing everyday life abroad.

## Highlights

- Language classes and daily conversation as part of the program
- Work at a food-service job — clocking in, kitchen prep, team shifts
- Travel and moments in between — photos below from the trip`,
            th: `## Work and Travel America

เข้าร่วมโครงการ **Work and Travel** ในสหรัฐอเมริกา **16 พฤษภาคม – 8 สิงหาคม 2025**

โครงการรวม **ฝึกภาษา ทำงาน และเที่ยว** — เรียนภาษาในบรรยากาศจริง พร้อมลงมือทำงานและใช้ชีวิตต่างประเทศไปพร้อมกัน

## ไฮไลท์

- ฝึกภาษา — เรียนและใช้ภาษาอังกฤษในชีวิตประจำวัน เป็นส่วนหนึ่งของโปรแกรม
- ทำงาน — ลงมือทำงานในร้านอาหาร ลงเวลา เตรียมครัว ทำงานเป็นทีม
- เที่ยว & ช่วงระหว่างทาง — รูปด้านล่างจากช่วงต่างๆ ในโครงการ`,
        },
        type: 'participation',
        date: '16 May – 8 Aug 2025',
        dateSort: '2025-05-16',
        image: WAT_AMERICA_HERO,
        images: WAT_AMERICA_IMAGES,
        tags: ['Work and Travel', 'USA', 'English'],
        isActive: true,
        order: 2,
        createdAt: '2025-05-16',
    },
]
