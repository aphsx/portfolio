import { PersonalInfo, BioTimelineItem } from '../../types'
import { personalInfoSeed, bioTimelineSeed } from '../seed/Personal'

// ---------------------------------------------------------------------------
// PersonalRepository
//
// This is the single access point for personal info data.
// When you migrate to a database, replace the seed imports with API calls
// (e.g. fetch('/api/personal')) — components stay untouched.
// ---------------------------------------------------------------------------

export const PersonalRepository = {
    /**
     * Returns the owner's personal information.
     * DB equivalent: SELECT * FROM personal_info LIMIT 1
     */
    getPersonalInfo(): PersonalInfo {
        return personalInfoSeed
    },

    /**
     * Returns bio timeline items sorted by order (ascending).
     * DB equivalent: SELECT * FROM bio_timeline WHERE is_active = true ORDER BY order ASC
     */
    getBioTimeline(): BioTimelineItem[] {
        return bioTimelineSeed
            .filter((item) => item.isActive)
            .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
    },
}
