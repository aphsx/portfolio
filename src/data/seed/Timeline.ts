import { TimelineEntry } from '../../types'

// ---------------------------------------------------------------------------
// Source-of-truth for timeline / activity blog entries.
// Add new rows here — list page and detail pages pick them up automatically.
// ---------------------------------------------------------------------------

export const timelineSeed: TimelineEntry[] = [
    {
        id: 'timeline-cursor-2026',
        slug: 'cursor-community-2026',
        title: {
            en: 'Joined the Cursor Community',
            th: 'เข้าร่วมชุมชน Cursor',
        },
        excerpt: {
            en: 'Started participating in Cursor events and exploring AI-assisted development workflows.',
            th: 'เริ่มเข้าร่วมกิจกรรมของ Cursor และสำรวจการทำงานพัฒนาซอฟต์แวร์ด้วย AI',
        },
        content: {
            en: `## Why Cursor

I've been using **Cursor** as part of my daily development workflow — from building this portfolio to shipping features at work. The mix of a familiar editor and AI-assisted coding fits how I like to work: fast iteration, clear diffs, and staying in flow.

## What I'm doing

- Joining community events and sessions hosted by Cursor
- Sharing how I use AI tools in real projects (not just demos)
- Learning from other builders in the ecosystem

## What's next

I'll update this post with notes, takeaways, and links as I join more activities. If you're also using Cursor — or curious about AI-native dev tools — feel free to reach out.`,
            th: `## ทำไมถึงใช้ Cursor

ผมใช้ **Cursor** เป็นส่วนหนึ่งของ workflow การพัฒนาประจำวัน — ตั้งแต่ทำ portfolio นี้ไปจนถึงส่งฟีเจอร์ในงานจริง การได้ editor ที่คุ้นเคยผสมกับ AI ช่วยเขียนโค้ดเข้ากับสไตล์การทำงานของผม: ลองเร็ว diff ชัด และไม่หลุดโฟกัส

## สิ่งที่กำลังทำ

- เข้าร่วมกิจกรรมและ session ที่ Cursor จัด
- แชร์วิธีใช้ AI ในโปรเจกต์จริง (ไม่ใช่แค่ demo)
- เรียนรู้จากคนอื่นใน ecosystem

## ต่อไป

จะอัปเดตโพสต์นี้ด้วยบันทึก สิ่งที่ได้เรียนรู้ และลิงก์ต่างๆ เมื่อเข้าร่วมกิจกรรมเพิ่ม ถ้าคุณใช้ Cursor อยู่ — หรืออยากรู้เรื่อง AI dev tools — ทักมาได้ครับ`,
        },
        type: 'participation',
        date: 'Aug 2026',
        dateSort: '2026-08-01',
        tags: ['Cursor', 'AI', 'Community'],
        links: [
            {
                label: { en: 'Cursor', th: 'Cursor' },
                url: 'https://cursor.com',
            },
        ],
        isActive: true,
        order: 1,
        createdAt: '2026-08-23',
    },
]
