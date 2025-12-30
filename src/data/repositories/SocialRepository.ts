import { SocialLink } from '../../types'
import { socialLinksSeed } from '../seed/social'

// ---------------------------------------------------------------------------
// SocialRepository
// ---------------------------------------------------------------------------

export const SocialRepository = {
    /**
     * Returns all active social links sorted by order.
     * DB equivalent: SELECT * FROM social_links WHERE is_active = true ORDER BY order ASC
     */
    getAll(): SocialLink[] {
        return socialLinksSeed
            .filter((link) => link.isActive)
            .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
    },

    /**
     * Returns a single social link by platform.
     * DB equivalent: SELECT * FROM social_links WHERE platform = $1 LIMIT 1
     */
    getByPlatform(platform: SocialLink['platform']): SocialLink | undefined {
        return socialLinksSeed.find((link) => link.platform === platform && link.isActive)
    },
}
