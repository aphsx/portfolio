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
                image: 'https://down-th.img.susercontent.com/file/cn-11134207-7qukw-ljib1odq27zo4d',
                isActive: true,
                order: 1,
            },
            {
                id: 'uses-keyboard-aula',
                name: { en: 'Aula Hero 60HE Keyboard', th: 'คีย์บอร์ด Aula Hero 60HE' },
                image: 'https://laz-img-sg.alicdn.com/p/dea2818a7572c569953de86fb8c3e49f.jpg',
                isActive: true,
                order: 2,
            },
            {
                id: 'uses-monitor-acer',
                name: { en: 'ACER Nitro QG241Y Monitor', th: 'จอมอนิเตอร์ ACER Nitro QG241Y' },
                image: 'https://media-cdn.bnn.in.th/356023/acer-nitro-gq241y-s3bmiipx-1-square_medium.jpg',
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
            { id: 'uses-vscode', name: { en: 'VSCode' }, image: 'https://img.shields.io/badge/Visual_Studio_Code-0078d7?style=for-the-badge&logo=visualstudiocode&logoColor=white', isActive: true, order: 1 },
            { id: 'uses-figma', name: { en: 'Figma' }, image: 'https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white', isActive: true, order: 2 },
            { id: 'uses-notion', name: { en: 'Notion' }, image: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png', isActive: true, order: 3 },
            { id: 'uses-spotify', name: { en: 'Spotify' }, image: 'https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png', isActive: true, order: 4 },
            { id: 'uses-discord', name: { en: 'Discord' }, image: 'https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png', isActive: true, order: 5 },
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
                image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692895706264',
                isActive: true,
                order: 1,
            },
        ],
    },
]
