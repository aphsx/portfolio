import {
    SiGo,
    SiCplusplus,
    SiJavascript,
    SiTypescript,
    SiPython,
    SiReact,
    SiNextdotjs,
    SiExpress,
    SiNodedotjs,
    SiGit,
    SiDocker,
    SiFigma,
    SiAdobephotoshop,
    SiMysql,
    SiPostman,
    SiRust,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { SkillCategory } from '../../types'

// ---------------------------------------------------------------------------
// Source-of-truth for skill categories and their skill items.
// Each skill has a stable id for future DB persistence.
// ---------------------------------------------------------------------------

export const skillCategoriesSeed: SkillCategory[] = [
    {
        id: 'cat-lang-frameworks',
        name: { en: '', th: 'ภาษาและเฟรมเวิร์ก', ja: '' },
        isActive: true,
        order: 1,
        skills: [
            { id: 'skill-go', name: 'Go', color: 'bg-gradient-to-br from-teal-500 to-cyan-600', icon: SiGo, category: 'Languages & Frameworks', isActive: true, order: 1 },
            { id: 'skill-js', name: 'JavaScript', color: 'bg-gradient-to-br from-teal-400 to-cyan-500', icon: SiJavascript, category: 'Languages & Frameworks', isActive: true, order: 2 },
            { id: 'skill-ts', name: 'TypeScript', color: 'bg-gradient-to-br from-teal-600 to-cyan-700', icon: SiTypescript, category: 'Languages & Frameworks', isActive: true, order: 3 },
            { id: 'skill-python', name: 'Python', color: 'bg-gradient-to-br from-teal-500 to-cyan-600', icon: SiPython, category: 'Languages & Frameworks', isActive: true, order: 4 },
            { id: 'skill-java', name: 'Java', color: 'bg-gradient-to-br from-teal-400 to-cyan-500', icon: FaJava, category: 'Languages & Frameworks', isActive: true, order: 5 },
            { id: 'skill-cpp', name: 'C++', color: 'bg-gradient-to-br from-teal-600 to-cyan-700', icon: SiCplusplus, category: 'Languages & Frameworks', isActive: true, order: 6 },
            { id: 'skill-react', name: 'React', color: 'bg-gradient-to-br from-teal-500 to-cyan-600', icon: SiReact, category: 'Languages & Frameworks', isActive: true, order: 7 },
            { id: 'skill-nextjs', name: 'Next.js', color: 'bg-gradient-to-br from-teal-700 to-cyan-800', icon: SiNextdotjs, category: 'Languages & Frameworks', isActive: true, order: 8 },
            { id: 'skill-express', name: 'Express', color: 'bg-gradient-to-br from-teal-600 to-cyan-700', icon: SiExpress, category: 'Languages & Frameworks', isActive: true, order: 9 },
            { id: 'skill-nodejs', name: 'Node.js', color: 'bg-gradient-to-br from-teal-400 to-cyan-500', icon: SiNodedotjs, category: 'Languages & Frameworks', isActive: true, order: 10 },
            { id: 'skill-rust', name: 'Rust', color: 'bg-gradient-to-br from-teal-500 to-cyan-600', icon: SiRust, category: 'Languages & Frameworks', isActive: true, order: 11 },
        ],
    },
    {
        id: 'cat-tools-design',
        name: { en: '', th: 'เครื่องมือและดีไซน์', ja: '' },
        isActive: true,
        order: 2,
        skills: [
            { id: 'skill-git', name: 'Git', color: 'bg-gradient-to-br from-teal-500 to-cyan-600', icon: SiGit, category: 'Tools & Design', isActive: true, order: 1 },
            { id: 'skill-docker', name: 'Docker', color: 'bg-gradient-to-br from-teal-600 to-cyan-700', icon: SiDocker, category: 'Tools & Design', isActive: true, order: 2 },
            { id: 'skill-postman', name: 'Postman', color: 'bg-gradient-to-br from-teal-400 to-cyan-500', icon: SiPostman, category: 'Tools & Design', isActive: true, order: 3 },
            { id: 'skill-figma', name: 'Figma', color: 'bg-gradient-to-br from-teal-500 to-cyan-600', icon: SiFigma, category: 'Tools & Design', isActive: true, order: 4 },
            { id: 'skill-photoshop', name: 'Photoshop', color: 'bg-gradient-to-br from-teal-600 to-cyan-700', icon: SiAdobephotoshop, category: 'Tools & Design', isActive: true, order: 5 },
        ],
    },
    {
        id: 'cat-database',
        name: { en: '', th: 'ฐานข้อมูล', ja: '' },
        isActive: true,
        order: 3,
        skills: [
            { id: 'skill-mysql', name: 'MySQL', color: 'bg-gradient-to-br from-teal-500 to-cyan-600', icon: SiMysql, category: 'Database', isActive: true, order: 1 },
        ],
    },
]
