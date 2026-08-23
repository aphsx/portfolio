import { TimelineEntry } from '../../types'

// ---------------------------------------------------------------------------
// Personal update log — activities, awards, events, participation.
// Add one row per update. Newest entries appear first on /timeline.
// ---------------------------------------------------------------------------

export const timelineSeed: TimelineEntry[] = [
    {
        id: 'timeline-cursor-2026',
        date: 'Aug 2026',
        dateSort: '2026-08-01',
        type: 'participation',
        event: {
            en: 'Participating in Cursor community events and using Cursor for AI-assisted development.',
            th: 'เข้าร่วมกิจกรรมชุมชน Cursor และใช้ Cursor ในการพัฒนาด้วย AI',
        },
        links: [
            {
                label: { en: 'Cursor', th: 'Cursor' },
                url: 'https://cursor.com',
            },
        ],
        isActive: true,
        order: 1,
    },
]
