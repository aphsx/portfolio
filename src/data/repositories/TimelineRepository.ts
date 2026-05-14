import { TimelineEntry, TimelineEntryType } from '../../types'
import { timelineSeed } from '../seed/Timeline'

export const TimelineRepository = {
    getAll(): TimelineEntry[] {
        return timelineSeed
            .filter((entry) => entry.isActive)
            .sort((a, b) => b.dateSort.localeCompare(a.dateSort) || (a.order ?? 0) - (b.order ?? 0))
    },

    getById(id: string): TimelineEntry | undefined {
        return timelineSeed.find((entry) => entry.id === id && entry.isActive)
    },

    getByType(type: TimelineEntryType): TimelineEntry[] {
        return TimelineRepository.getAll().filter((entry) => entry.type === type)
    },
}
