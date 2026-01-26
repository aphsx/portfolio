import {
    SiFigma,
    SiNotion,
    SiSpotify,
    SiDiscord,
    SiDocker,
    SiPostman,
    SiGit,
    SiWarp,
    SiArc,
    SiRust,
    SiUbuntu,
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import { MdPhoneIphone, MdChair } from 'react-icons/md'
import { FaMicrophone, FaKeyboard, FaDesktop, FaMouse, FaHeadset, FaBox, FaDatabase } from 'react-icons/fa'
import { UsesCategory } from '../../types'

// ---------------------------------------------------------------------------
// Source-of-truth for the "Uses" page — gear, software, and tools.
// ---------------------------------------------------------------------------

export const usesCategoriesSeed: UsesCategory[] = [
    {
        id: 'uses-cat-workstation',
        name: { en: '', th: 'สถานีทำงาน', ja: '' },
        isActive: true,
        order: 1,
        items: [
            {
                id: 'uses-mic-maono',
                name: { en: '', th: 'ไมค์ Maono PD200X', ja: '' },
                icon: FaMicrophone,
                isActive: true,
                order: 1,
            },
            {
                id: 'uses-keyboard-aula',
                name: { en: '', th: 'คีย์บอร์ด Aula Hero 60HE', ja: '' },
                icon: FaKeyboard,
                isActive: true,
                order: 2,
            },
            {
                id: 'uses-keyboard-ganss',
                name: { en: '', th: 'คีย์บอร์ด Ganss G61 MAG', ja: '' },
                icon: FaKeyboard,
                isActive: true,
                order: 3,
            },
            {
                id: 'uses-mouse-kysona',
                name: { en: '', th: 'เมาส์ Kysona Mercury', ja: '' },
                icon: FaMouse,
                isActive: true,
                order: 4,
            },
            {
                id: 'uses-headset-atk',
                name: { en: '', th: 'หูฟัง ATK Neptune N9 Pro', ja: '' },
                icon: FaHeadset,
                isActive: true,
                order: 5,
            },
            {
                id: 'uses-monitor-acer',
                name: { en: '', th: 'จอมอนิเตอร์ ACER Nitro QG241Y', ja: '' },
                icon: FaDesktop,
                isActive: true,
                order: 6,
            },
            {
                id: 'uses-chair-xpanse',
                name: { en: '', th: 'เก้าอี้ Xpanse X-Flex', ja: '' },
                icon: MdChair,
                isActive: true,
                order: 7,
            },
        ],
    },
    {
        id: 'uses-cat-software-productivity',
        name: { en: '', th: 'ซอฟต์แวร์และประสิทธิภาพ', ja: '' },
        isActive: true,
        order: 2,
        items: [
            { id: 'uses-vscode', name: { en: '', ja: '' }, icon: VscVscode, isActive: true, order: 1 },
            { id: 'uses-docker', name: { en: '', ja: '' }, icon: SiDocker, isActive: true, order: 2 },
            { id: 'uses-rust', name: { en: '', th: 'ภาษา Rust', ja: '' }, icon: SiRust, isActive: true, order: 3 },
            { id: 'uses-cargo', name: { en: '', th: 'Cargo (Rust PM)', ja: '' }, icon: FaBox, isActive: true, order: 4 },
            { id: 'uses-ubuntu', name: { en: '', th: 'Ubuntu (Linux)', ja: '' }, icon: SiUbuntu, isActive: true, order: 5 },
            { id: 'uses-postman', name: { en: '', ja: '' }, icon: SiPostman, isActive: true, order: 6 },
            { id: 'uses-git', name: { en: '', ja: '' }, icon: SiGit, isActive: true, order: 7 },
            { id: 'uses-warp', name: { en: '', ja: '' }, icon: SiWarp, isActive: true, order: 8 },
            { id: 'uses-tableplus', name: { en: '', ja: '' }, icon: FaDatabase, isActive: true, order: 9 },
            { id: 'uses-arc', name: { en: '', ja: '' }, icon: SiArc, isActive: true, order: 10 },
            { id: 'uses-figma', name: { en: '', ja: '' }, icon: SiFigma, isActive: true, order: 11 },
            { id: 'uses-notion', name: { en: '', ja: '' }, icon: SiNotion, isActive: true, order: 12 },
            { id: 'uses-discord', name: { en: '', ja: '' }, icon: SiDiscord, isActive: true, order: 13 },
            { id: 'uses-spotify', name: { en: '', ja: '' }, icon: SiSpotify, isActive: true, order: 14 },
        ],
    },
    {
        id: 'uses-cat-photo-video',
        name: { en: '', th: 'การถ่ายภาพและวิดีโอ', ja: '' },
        isActive: true,
        order: 4,
        items: [
            {
                id: 'uses-iphone12promax',
                name: { en: '', th: 'iPhone 12 Pro Max', ja: '' },
                icon: MdPhoneIphone,
                isActive: true,
                order: 1,
            },
        ],
    },
]
