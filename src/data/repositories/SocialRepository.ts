import { SocialLink } from '@/types'
import { socialLinksSeed } from '../seed/Social'
import { activeSorted } from './query'

// ---------------------------------------------------------------------------
// SocialRepository
// ---------------------------------------------------------------------------

export const SocialRepository = {
    /**
     * Returns all active social links sorted by order.
     * DB equivalent: SELECT * FROM social_links WHERE is_active = true ORDER BY order ASC
     */
    getAll(): SocialLink[] {
        return activeSorted(socialLinksSeed)
    },
}
