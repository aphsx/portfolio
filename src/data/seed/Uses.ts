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
        id: 'uses-cat-development',
        name: { en: 'Development', th: 'การพัฒนา' },
        isActive: true,
        order: 2,
        items: [
            { id: 'uses-js', name: { en: 'Javascript' }, image: 'https://img.shields.io/badge/Javascript-F0DB4F?style=for-the-badge&labelColor=black&logo=javascript&logoColor=F0DB4F', isActive: true, order: 1 },
            { id: 'uses-ts', name: { en: 'Typescript' }, image: 'https://img.shields.io/badge/Typescript-007acc?style=for-the-badge&labelColor=black&logo=typescript&logoColor=007acc', isActive: true, order: 2 },
            { id: 'uses-html', name: { en: 'HTML' }, image: 'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white', isActive: true, order: 3 },
            { id: 'uses-css', name: { en: 'CSS3' }, image: 'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white', isActive: true, order: 4 },
            { id: 'uses-react', name: { en: 'React' }, image: 'https://img.shields.io/badge/-React-61DBFB?style=for-the-badge&labelColor=black&logo=react&logoColor=61DBFB', isActive: true, order: 5 },
            { id: 'uses-nextjs', name: { en: 'Next.js' }, image: 'https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white', isActive: true, order: 6 },
            { id: 'uses-redux', name: { en: 'Redux' }, image: 'https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white', isActive: true, order: 7 },
            { id: 'uses-tailwind', name: { en: 'Tailwind' }, image: 'https://img.shields.io/badge/Tailwind_CSS-092749?style=for-the-badge&logo=tailwindcss&logoColor=06B6D4&labelColor=000000', isActive: true, order: 8 },
            { id: 'uses-bootstrap', name: { en: 'Bootstrap' }, image: 'https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white', isActive: true, order: 9 },
            { id: 'uses-nodejs', name: { en: 'Node.js' }, image: 'https://img.shields.io/badge/Nodejs-3C873A?style=for-the-badge&labelColor=black&logo=node.js&logoColor=3C873A', isActive: true, order: 10 },
            { id: 'uses-electron', name: { en: 'Electron' }, image: 'https://img.shields.io/badge/Electron-47848F?style=for-the-badge&logo=electron&logoColor=white', isActive: true, order: 11 },
            { id: 'uses-vite', name: { en: 'Vite' }, image: 'https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white', isActive: true, order: 12 },
            { id: 'uses-mysql', name: { en: 'MySQL' }, image: 'https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white', isActive: true, order: 13 },
            { id: 'uses-sqlite', name: { en: 'SQLite' }, image: 'https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white', isActive: true, order: 14 },
            { id: 'uses-postgresql', name: { en: 'PostgreSQL' }, image: 'https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white', isActive: true, order: 15 },
            { id: 'uses-prisma', name: { en: 'Prisma' }, image: 'https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white', isActive: true, order: 16 },
            { id: 'uses-docker', name: { en: 'Docker' }, image: 'https://img.shields.io/badge/Docker-0db7ed?style=for-the-badge&logo=docker&logoColor=white&labelColor=000000', isActive: true, order: 17 },
            { id: 'uses-postman', name: { en: 'Postman' }, image: 'https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white&labelColor=000000', isActive: true, order: 18 },
            { id: 'uses-git', name: { en: 'Git' }, image: 'https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white', isActive: true, order: 19 },
            { id: 'uses-github', name: { en: 'GitHub' }, image: 'https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white', isActive: true, order: 20 },
            { id: 'uses-phpmyadmin', name: { en: 'phpMyAdmin' }, image: 'https://www.phpmyadmin.net/static/images/logo.png', isActive: true, order: 21 },
            { id: 'uses-dbbrowser', name: { en: 'DB Browser for SQLite' }, image: 'https://sqlitebrowser.org/images/sqlitebrowser-logo.svg', isActive: true, order: 22 },
            { id: 'uses-vscode', name: { en: 'VSCode' }, image: 'https://img.shields.io/badge/Visual_Studio_Code-0078d7?style=for-the-badge&logo=visualstudiocode&logoColor=white', isActive: true, order: 23 },
        ],
    },
    {
        id: 'uses-cat-design-productivity',
        name: { en: 'Design & Productivity', th: 'ดีไซน์และประสิทธิภาพ' },
        isActive: true,
        order: 3,
        items: [
            { id: 'uses-figma', name: { en: 'Figma' }, image: 'https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white', isActive: true, order: 1 },
            { id: 'uses-notion', name: { en: 'Notion' }, image: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png', isActive: true, order: 2 },
            { id: 'uses-spotify', name: { en: 'Spotify' }, image: 'https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png', isActive: true, order: 3 },
            { id: 'uses-discord', name: { en: 'Discord' }, image: 'https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png', isActive: true, order: 4 },
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
