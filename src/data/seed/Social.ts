import { FiGithub } from 'react-icons/fi'
import { FaInstagram } from 'react-icons/fa'
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
        url: 'https://github.com/aphsix',
        handle: '@aphsix',
        isActive: true,
        order: 1,
    },
    {
        id: 'social-instagram',
        platform: 'instagram',
        name: 'Instagram',
        icon: FaInstagram,
        url: 'https://www.instagram.com/_aphsx/',
        handle: '@_aphsx',
        isActive: true,
        order: 2,
    },
    {
        id: 'social-portfolio',
        platform: 'portfolio',
        name: 'Portfolio',
        icon: FiGithub,
        url: 'https://portfolio.aphsix.com',
        handle: 'portfolio.aphsix.com',
        isActive: true,
        order: 3,
    },
]
