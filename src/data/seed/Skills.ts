import {
    SiGo,
    SiCplusplus,
    SiJavascript,
    SiTypescript,
    SiPython,
    SiDart,
    SiFlutter,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiExpress,
    SiNodedotjs,
    SiBun,
    SiGit,
    SiDocker,
    SiFigma,
    SiMysql,
    SiPostgresql,
    SiRedis,
    SiSqlite,
    SiPostman,
    SiRust,
} from 'react-icons/si'
import { DiMsqlServer } from 'react-icons/di'
import { FaJava, FaPaintBrush } from 'react-icons/fa'
import { SkillCategory } from '../../types'

// ---------------------------------------------------------------------------
// Source-of-truth for skill categories and their skill items.
// Each skill has a stable id for future DB persistence.
// ---------------------------------------------------------------------------

export const skillCategoriesSeed: SkillCategory[] = [
    {
        id: 'cat-lang-frameworks',
        name: { en: 'Languages & Frameworks', th: 'Languages & Frameworks' },
        isActive: true,
        order: 1,
        skills: [
            { id: 'skill-go', name: 'Go', color: 'bg-gradient-to-br from-teal-500 to-cyan-600', icon: SiGo, category: 'Languages & Frameworks', isActive: true, order: 1 },
            { id: 'skill-ts', name: 'TypeScript', color: 'bg-gradient-to-br from-teal-600 to-cyan-700', icon: SiTypescript, category: 'Languages & Frameworks', isActive: true, order: 2 },
            { id: 'skill-js', name: 'JavaScript', color: 'bg-gradient-to-br from-teal-400 to-cyan-500', icon: SiJavascript, category: 'Languages & Frameworks', isActive: true, order: 3 },
            { id: 'skill-python', name: 'Python', color: 'bg-gradient-to-br from-teal-500 to-cyan-600', icon: SiPython, category: 'Languages & Frameworks', isActive: true, order: 4 },
            { id: 'skill-dart', name: 'Dart', color: 'bg-gradient-to-br from-teal-500 to-cyan-600', icon: SiDart, category: 'Languages & Frameworks', isActive: true, order: 5 },
            { id: 'skill-flutter', name: 'Flutter', color: 'bg-gradient-to-br from-teal-400 to-cyan-500', icon: SiFlutter, category: 'Languages & Frameworks', isActive: true, order: 6 },
            { id: 'skill-react', name: 'React', color: 'bg-gradient-to-br from-teal-500 to-cyan-600', icon: SiReact, category: 'Languages & Frameworks', isActive: true, order: 7 },
            { id: 'skill-nextjs', name: 'Next.js', color: 'bg-gradient-to-br from-teal-700 to-cyan-800', icon: SiNextdotjs, category: 'Languages & Frameworks', isActive: true, order: 8 },
            { id: 'skill-tailwind', name: 'Tailwind CSS', color: 'bg-gradient-to-br from-teal-500 to-cyan-600', icon: SiTailwindcss, category: 'Languages & Frameworks', isActive: true, order: 9 },
            { id: 'skill-nodejs', name: 'Node.js', color: 'bg-gradient-to-br from-teal-400 to-cyan-500', icon: SiNodedotjs, category: 'Languages & Frameworks', isActive: true, order: 10 },
            { id: 'skill-bun', name: 'Bun', color: 'bg-gradient-to-br from-teal-600 to-cyan-700', icon: SiBun, category: 'Languages & Frameworks', isActive: true, order: 11 },
            { id: 'skill-express', name: 'Express', color: 'bg-gradient-to-br from-teal-600 to-cyan-700', icon: SiExpress, category: 'Languages & Frameworks', isActive: true, order: 12 },
            { id: 'skill-java', name: 'Java', color: 'bg-gradient-to-br from-teal-400 to-cyan-500', icon: FaJava, category: 'Languages & Frameworks', isActive: true, order: 13 },
            { id: 'skill-cpp', name: 'C++', color: 'bg-gradient-to-br from-teal-600 to-cyan-700', icon: SiCplusplus, category: 'Languages & Frameworks', isActive: true, order: 14 },
            { id: 'skill-rust', name: 'Rust', color: 'bg-gradient-to-br from-teal-500 to-cyan-600', icon: SiRust, category: 'Languages & Frameworks', isActive: true, order: 15 },
        ],
    },
    {
        id: 'cat-database',
        name: { en: 'Databases & Caching', th: 'Databases & Caching' },
        isActive: true,
        order: 2,
        skills: [
            { id: 'skill-postgresql', name: 'PostgreSQL', color: 'bg-gradient-to-br from-teal-600 to-cyan-700', icon: SiPostgresql, category: 'Databases & Caching', isActive: true, order: 1 },
            { id: 'skill-mssql', name: 'MSSQL', color: 'bg-gradient-to-br from-teal-500 to-cyan-600', icon: DiMsqlServer, category: 'Databases & Caching', isActive: true, order: 2 },
            { id: 'skill-mysql', name: 'MySQL', color: 'bg-gradient-to-br from-teal-500 to-cyan-600', icon: SiMysql, category: 'Databases & Caching', isActive: true, order: 3 },
            { id: 'skill-redis', name: 'Redis', color: 'bg-gradient-to-br from-teal-600 to-cyan-700', icon: SiRedis, category: 'Databases & Caching', isActive: true, order: 4 },
            { id: 'skill-sqlite', name: 'SQLite', color: 'bg-gradient-to-br from-teal-400 to-cyan-500', icon: SiSqlite, category: 'Databases & Caching', isActive: true, order: 5 },
        ],
    },
    {
        id: 'cat-tools-design',
        name: { en: 'Tools & Architecture', th: 'Tools & Architecture' },
        isActive: true,
        order: 3,
        skills: [
            { id: 'skill-git', name: 'Git', color: 'bg-gradient-to-br from-teal-500 to-cyan-600', icon: SiGit, category: 'Tools & Architecture', isActive: true, order: 1 },
            { id: 'skill-docker', name: 'Docker', color: 'bg-gradient-to-br from-teal-600 to-cyan-700', icon: SiDocker, category: 'Tools & Architecture', isActive: true, order: 2 },
            { id: 'skill-postman', name: 'Postman', color: 'bg-gradient-to-br from-teal-400 to-cyan-500', icon: SiPostman, category: 'Tools & Architecture', isActive: true, order: 3 },
            { id: 'skill-figma', name: 'Figma', color: 'bg-gradient-to-br from-teal-500 to-cyan-600', icon: SiFigma, category: 'Tools & Architecture', isActive: true, order: 4 },
            { id: 'skill-photoshop', name: 'Photoshop', color: 'bg-gradient-to-br from-teal-600 to-cyan-700', icon: FaPaintBrush, category: 'Tools & Architecture', isActive: true, order: 5 },
        ],
    },
]
