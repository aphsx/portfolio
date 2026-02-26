import {
    SiVisualstudiocode,
    SiFigma,
    SiNotion,
    SiSpotify,
    SiDiscord,
} from 'react-icons/si'
import { MdMic, MdKeyboard, MdMonitor, MdPhoneIphone } from 'react-icons/md'
import { UsesCategory } from '../../types'

// ---------------------------------------------------------------------------
// Source-of-truth for the "Uses" page — gear, software, and tools.
// ---------------------------------------------------------------------------

export const usesCategoriesSeed: UsesCategory[] = [
    {
        id: 'uses-cat-workstation',
        name: { en: 'Workstation', th: 'สถานีทำงาน' },
        isActive: true,
        order: 1,
        items: [
            {
                id: 'uses-mic-maono',
                name: { en: 'Maono PD200X Microphone', th: 'ไมค์ Maono PD200X' },
                icon: MdMic,
                isActive: true,
                order: 1,
            },
            {
                id: 'uses-keyboard-aula',
                name: { en: 'Aula Hero 60HE Keyboard', th: 'คีย์บอร์ด Aula Hero 60HE' },
                icon: MdKeyboard,
                isActive: true,
                order: 2,
            },
            {
                id: 'uses-monitor-acer',
                name: { en: 'ACER Nitro QG241Y Monitor', th: 'จอมอนิเตอร์ ACER Nitro QG241Y' },
                icon: MdMonitor,
                isActive: true,
                order: 3,
            },
        ],
    },
    {
        id: 'uses-cat-software-productivity',
        name: { en: 'Software & Productivity', th: 'ซอฟต์แวร์และประสิทธิภาพ' },
        isActive: true,
        order: 2,
        items: [
            { id: 'uses-vscode', name: { en: 'VSCode' }, icon: SiVisualstudiocode, isActive: true, order: 1 },
            { id: 'uses-figma', name: { en: 'Figma' }, icon: SiFigma, isActive: true, order: 2 },
            { id: 'uses-notion', name: { en: 'Notion' }, icon: SiNotion, isActive: true, order: 3 },
            { id: 'uses-spotify', name: { en: 'Spotify' }, icon: SiSpotify, isActive: true, order: 4 },
            { id: 'uses-discord', name: { en: 'Discord' }, icon: SiDiscord, isActive: true, order: 5 },
        ],
    },
    {
        id: 'uses-cat-photo-video',
        name: { en: 'Photography & Video', th: 'การถ่ายภาพและวิดีโอ' },
        isActive: true,
        order: 4,
        items: [
            {
                id: 'uses-iphone12promax',
                name: { en: 'iPhone 12 Pro Max', th: 'iPhone 12 Pro Max' },
                icon: MdPhoneIphone,
                isActive: true,
                order: 1,
            },
        ],
    },
]
