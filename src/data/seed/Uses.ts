import {
    SiVisualstudiocode,
    SiFigma,
    SiNotion,
    SiSpotify,
    SiDiscord,
} from 'react-icons/si'
import { MdPhoneIphone, MdChair } from 'react-icons/md'
import { FaMicrophone, FaKeyboard, FaDesktop, FaMouse, FaHeadset } from 'react-icons/fa'
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
                icon: FaMicrophone,
                isActive: true,
                order: 1,
            },
            {
                id: 'uses-keyboard-aula',
                name: { en: 'Aula Hero 60HE Keyboard', th: 'คีย์บอร์ด Aula Hero 60HE' },
                icon: FaKeyboard,
                isActive: true,
                order: 2,
            },
            {
                id: 'uses-keyboard-ganss',
                name: { en: 'Ganss G61 MAG Wired Mechanical Keyboard', th: 'คีย์บอร์ด Ganss G61 MAG' },
                icon: FaKeyboard,
                isActive: true,
                order: 3,
            },
            {
                id: 'uses-mouse-kysona',
                name: { en: 'Kysona Mercury Wireless Gaming Mouse', th: 'เมาส์ Kysona Mercury' },
                icon: FaMouse,
                isActive: true,
                order: 4,
            },
            {
                id: 'uses-headset-atk',
                name: { en: 'ATK Neptune N9 Pro Wireless Gaming Headset', th: 'หูฟัง ATK Neptune N9 Pro' },
                icon: FaHeadset,
                isActive: true,
                order: 5,
            },
            {
                id: 'uses-monitor-acer',
                name: { en: 'ACER Nitro QG241Y Monitor', th: 'จอมอนิเตอร์ ACER Nitro QG241Y' },
                icon: FaDesktop,
                isActive: true,
                order: 6,
            },
            {
                id: 'uses-chair-xpanse',
                name: { en: 'Xpanse X-Flex Ergonomic Gaming Chair', th: 'เก้าอี้ Xpanse X-Flex' },
                icon: MdChair,
                isActive: true,
                order: 7,
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
