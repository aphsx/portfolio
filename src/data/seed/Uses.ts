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
    SiApple,
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import { MdPhoneIphone, MdChair, MdVideocam } from 'react-icons/md'
import { FaMicrophone, FaKeyboard, FaDesktop, FaMouse, FaHeadset, FaBox, FaDatabase } from 'react-icons/fa'
import { UsesCategory } from '../../types'

// ---------------------------------------------------------------------------
// Source-of-truth for the "Uses" page — gear, software, and tools.
// ---------------------------------------------------------------------------

export const usesCategoriesSeed: UsesCategory[] = [
    {
        id: 'uses-cat-workstation',
        name: { en: 'Workstation', th: 'Workstation' },
        isActive: true,
        order: 1,
        items: [
            {
                id: 'uses-mic-maono',
                name: { en: 'Maono PD200X Microphone', th: 'Maono PD200X Microphone' },
                icon: FaMicrophone,
                isActive: true,
                order: 1,
            },
            {
                id: 'uses-keyboard-aula',
                name: { en: 'Aula Hero 60HE Keyboard', th: 'Aula Hero 60HE Keyboard' },
                icon: FaKeyboard,
                isActive: true,
                order: 2,
            },
            {
                id: 'uses-keyboard-ganss',
                name: { en: 'Ganss G61 MAG Keyboard', th: 'Ganss G61 MAG Keyboard' },
                icon: FaKeyboard,
                isActive: true,
                order: 3,
            },
            {
                id: 'uses-mouse-atk-air9',
                name: { en: 'ATK Air9 Ultimate+ Mouse', th: 'ATK Air9 Ultimate+ Mouse' },
                icon: FaMouse,
                isActive: true,
                order: 4,
            },
            {
                id: 'uses-mouse-kysona',
                name: { en: 'Kysona Mercury Mouse', th: 'Kysona Mercury Mouse' },
                icon: FaMouse,
                isActive: true,
                order: 5,
            },
            {
                id: 'uses-headset-atk',
                name: { en: 'ATK Neptune N9 Pro Headset', th: 'ATK Neptune N9 Pro Headset' },
                icon: FaHeadset,
                isActive: true,
                order: 6,
            },
            {
                id: 'uses-monitor-lenovo-27q10',
                name: { en: 'Lenovo 27Q10 Monitor', th: 'Lenovo 27Q10 Monitor' },
                icon: FaDesktop,
                isActive: true,
                order: 7,
            },
            {
                id: 'uses-monitor-acer',
                name: { en: 'ACER Nitro QG241Y Monitor', th: 'ACER Nitro QG241Y Monitor' },
                icon: FaDesktop,
                isActive: true,
                order: 8,
            },
            {
                id: 'uses-chair-xpanse',
                name: { en: 'Xpanse X-Flex Chair', th: 'Xpanse X-Flex Chair' },
                icon: MdChair,
                isActive: true,
                order: 9,
            },
            {
                id: 'uses-macbook',
                name: { en: 'MacBook Air M5', th: 'MacBook Air M5' },
                icon: SiApple,
                isActive: true,
                order: 10,
            },
        ],
    },
    {
        id: 'uses-cat-software-productivity',
        name: { en: 'Software & Productivity', th: 'Software & Productivity' },
        isActive: true,
        order: 2,
        items: [
            { id: 'uses-vscode', name: { en: 'Visual Studio Code', th: 'Visual Studio Code' }, icon: VscVscode, isActive: true, order: 1 },
            { id: 'uses-docker', name: { en: 'Docker', th: 'Docker' }, icon: SiDocker, isActive: true, order: 2 },
            { id: 'uses-rust', name: { en: 'Rust', th: 'Rust' }, icon: SiRust, isActive: true, order: 3 },
            { id: 'uses-cargo', name: { en: 'Cargo', th: 'Cargo' }, icon: FaBox, isActive: true, order: 4 },
            { id: 'uses-ubuntu', name: { en: 'Ubuntu', th: 'Ubuntu' }, icon: SiUbuntu, isActive: true, order: 5 },
            { id: 'uses-postman', name: { en: 'Postman', th: 'Postman' }, icon: SiPostman, isActive: true, order: 6 },
            { id: 'uses-git', name: { en: 'Git', th: 'Git' }, icon: SiGit, isActive: true, order: 7 },
            { id: 'uses-warp', name: { en: 'Warp', th: 'Warp' }, icon: SiWarp, isActive: true, order: 8 },
            { id: 'uses-tableplus', name: { en: 'TablePlus', th: 'TablePlus' }, icon: FaDatabase, isActive: true, order: 9 },
            { id: 'uses-arc', name: { en: 'Arc Browser', th: 'Arc Browser' }, icon: SiArc, isActive: true, order: 10 },
            { id: 'uses-figma', name: { en: 'Figma', th: 'Figma' }, icon: SiFigma, isActive: true, order: 11 },
            { id: 'uses-notion', name: { en: 'Notion', th: 'Notion' }, icon: SiNotion, isActive: true, order: 12 },
            { id: 'uses-discord', name: { en: 'Discord', th: 'Discord' }, icon: SiDiscord, isActive: true, order: 13 },
            { id: 'uses-spotify', name: { en: 'Spotify', th: 'Spotify' }, icon: SiSpotify, isActive: true, order: 14 },
        ],
    },
    {
        id: 'uses-cat-photo-video',
        name: { en: 'Photography & Video', th: 'Photography & Video' },
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
            {
                id: 'uses-osmo-action-6',
                name: { en: 'DJI Osmo Action 6', th: 'DJI Osmo Action 6' },
                icon: MdVideocam,
                isActive: true,
                order: 2,
            },
        ],
    },
]
