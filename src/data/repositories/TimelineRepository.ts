import { BannerSlide, TimelineEntry } from '@/types'
import { timelineSeed } from '../seed/Timeline'
import { activeSorted, byOrder, findActive, pickBannerItems } from './query'

/** Newest first, then by `order`. */
const byDateDesc = (a: TimelineEntry, b: TimelineEntry) =>
    b.dateSort.localeCompare(a.dateSort) || byOrder(a, b)

/** Hero image, falling back to the first gallery image. */
export const getTimelineCover = (entry: TimelineEntry): string | undefined =>
    entry.image ?? entry.images?.[0]

export const TimelineRepository = {
    getAll(): TimelineEntry[] {
        return activeSorted(timelineSeed, byDateDesc)
    },

    getById(id: string): TimelineEntry | undefined {
        return findActive(timelineSeed, (entry) => entry.id === id)
    },

    /**
     * Slides for the timeline-page hero banner (see `TimelineEntry.banner`).
     */
    getBannerSlides(max = 6): BannerSlide[] {
        const candidates = TimelineRepository.getAll().filter((e) => getTimelineCover(e))
        return pickBannerItems(candidates, max).map((e) => ({
            id: e.id,
            path: `/timeline/${e.id}`,
            image: getTimelineCover(e) as string,
            title: e.title,
            position: e.banner?.position ?? e.imagePosition,
        }))
    },
}
