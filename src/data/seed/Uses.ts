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
        name: { en: 'Workstation', th: 'สถานีทำงาน', ja: 'ワークステーション' },
        isActive: true,
        order: 1,
        items: [
            {
                id: 'uses-mic-maono',
                name: { en: 'Maono PD200X Microphone', th: 'ไมค์ Maono PD200X', ja: 'Maono PD200X Microphone' },
                icon: FaMicrophone,
                isActive: true,
                order: 1,
            },
            {
                id: 'uses-keyboard-aula',
                name: { en: 'Aula Hero 60HE Keyboard', th: 'คีย์บอร์ด Aula Hero 60HE', ja: 'Aula Hero 60HE Keyboard' },
                icon: FaKeyboard,
                isActive: true,
                order: 2,
            },
            {
                id: 'uses-keyboard-ganss',
                name: { en: 'Ganss G61 MAG Wired Mechanical Keyboard', th: 'คีย์บอร์ด Ganss G61 MAG', ja: 'Ganss G61 MAG Wired Mechanical Keyboard' },
                icon: FaKeyboard,
                isActive: true,
                order: 3,
            },
            {
                id: 'uses-mouse-kysona',
                name: { en: 'Kysona Mercury Wireless Gaming Mouse', th: 'เมาส์ Kysona Mercury', ja: 'Kysona Mercury Wireless Gaming Mouse' },
                icon: FaMouse,
                isActive: true,
                order: 4,
            },
            {
                id: 'uses-headset-atk',
                name: { en: 'ATK Neptune N9 Pro Wireless Gaming Headset', th: 'หูฟัง ATK Neptune N9 Pro', ja: 'ATK Neptune N9 Pro Wireless Gaming Headset' },
                icon: FaHeadset,
                isActive: true,
                order: 5,
            },
            {
                id: 'uses-monitor-acer',
                name: { en: 'ACER Nitro QG241Y Monitor', th: 'จอมอนิเตอร์ ACER Nitro QG241Y', ja: 'ACER Nitro QG241Y Monitor' },
                icon: FaDesktop,
                isActive: true,
                order: 6,
            },
            {
                id: 'uses-chair-xpanse',
                name: { en: 'Xpanse X-Flex Ergonomic Gaming Chair', th: 'เก้าอี้ Xpanse X-Flex', ja: 'Xpanse X-Flex Ergonomic Gaming Chair' },
                icon: MdChair,
                isActive: true,
                order: 7,
            },
        ],
    },
    {
        id: 'uses-cat-software-productivity',
        name: { en: 'Software & Productivity', th: 'ซอฟต์แวร์และประสิทธิภาพ', ja: 'ソフトウェア ＆ 生産性' },
        isActive: true,
        order: 2,
        items: [
            { id: 'uses-vscode', name: { en: 'VSCode', ja: 'VSCode' }, icon: VscVscode, isActive: true, order: 1 },
            { id: 'uses-docker', name: { en: 'Docker', ja: 'Docker' }, icon: SiDocker, isActive: true, order: 2 },
            { id: 'uses-rust', name: { en: 'Rust', th: 'ภาษา Rust', ja: 'Rust' }, icon: SiRust, isActive: true, order: 3 },
            { id: 'uses-cargo', name: { en: 'Cargo', th: 'Cargo (Rust PM)', ja: 'Cargo' }, icon: FaBox, isActive: true, order: 4 },
            { id: 'uses-ubuntu', name: { en: 'Ubuntu (WSL/Linux)', th: 'Ubuntu (Linux)', ja: 'Ubuntu (WSL/Linux)' }, icon: SiUbuntu, isActive: true, order: 5 },
            { id: 'uses-postman', name: { en: 'Postman', ja: 'Postman' }, icon: SiPostman, isActive: true, order: 6 },
            { id: 'uses-git', name: { en: 'Git', ja: 'Git' }, icon: SiGit, isActive: true, order: 7 },
            { id: 'uses-warp', name: { en: 'Warp Terminal', ja: 'Warp ターミナル' }, icon: SiWarp, isActive: true, order: 8 },
            { id: 'uses-tableplus', name: { en: 'TablePlus', ja: 'TablePlus' }, icon: FaDatabase, isActive: true, order: 9 },
            { id: 'uses-arc', name: { en: 'Arc Browser', ja: 'Arc ブラウザ' }, icon: SiArc, isActive: true, order: 10 },
            { id: 'uses-figma', name: { en: 'Figma', ja: 'Figma' }, icon: SiFigma, isActive: true, order: 11 },
            { id: 'uses-notion', name: { en: 'Notion', ja: 'Notion' }, icon: SiNotion, isActive: true, order: 12 },
            { id: 'uses-discord', name: { en: 'Discord', ja: 'Discord' }, icon: SiDiscord, isActive: true, order: 13 },
            { id: 'uses-spotify', name: { en: 'Spotify', ja: 'Spotify' }, icon: SiSpotify, isActive: true, order: 14 },
        ],
    },
    {
        id: 'uses-cat-photo-video',
        name: { en: 'Photography & Video', th: 'การถ่ายภาพและวิดีโอ', ja: '写真 ＆ ビデオ' },
        isActive: true,
        order: 4,
        items: [
            {
                id: 'uses-iphone12promax',
                name: { en: 'iPhone 12 Pro Max', th: 'iPhone 12 Pro Max', ja: 'iPhone 12 Pro Max' },
                icon: MdPhoneIphone,
                isActive: true,
                order: 1,
            },
        ],
    },
]
