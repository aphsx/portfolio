import { FiGithub } from 'react-icons/fi'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import { SocialLink } from '../../types'

// ---------------------------------------------------------------------------
// Source-of-truth for social / contact links.
// ---------------------------------------------------------------------------

export const socialLinksSeed: SocialLink[] = [
    {
        id: 'social-github',
        platform: 'github',
        name: 'GitHub',
        icon: FiGithub,
        url: 'https://github.com/aphsx',
        handle: '@aphsx',
        isActive: true,
        order: 1,
    },
    {
        id: 'social-linkedin',
        platform: 'linkedin',
        name: 'LinkedIn',
        icon: FaLinkedin,
        url: 'https://www.linkedin.com/in/aphisit-danchaodang-108037358/',
        handle: 'aphisit-danchaodang',
        isActive: true,
        order: 2,
    },
    {
        id: 'social-instagram',
        platform: 'instagram',
        name: 'Instagram',
        icon: FaInstagram,
        url: 'https://www.instagram.com/_aphsx/',
        handle: '@_aphsx',
        isActive: true,
        order: 3,
    },
    {
        id: 'social-portfolio',
        platform: 'portfolio',
        name: 'Portfolio',
        icon: FiGithub,
        url: 'https://aphsx-portfolio.pages.dev/en',
        handle: 'https://aphsx-portfolio.pages.dev/en',
        isActive: true,
        order: 4,
    },
]
