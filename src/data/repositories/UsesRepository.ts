import { UsesCategory } from '@/types'
import { usesCategoriesSeed } from '../seed/Uses'
import { activeSorted } from './query'

// ---------------------------------------------------------------------------
// UsesRepository
// ---------------------------------------------------------------------------

export const UsesRepository = {
    /**
     * Returns all active uses categories with their active items, sorted by order.
     * DB equivalent:
     *   SELECT uc.*, ui.* FROM uses_categories uc
     *   JOIN uses_items ui ON ui.category_id = uc.id
     *   WHERE uc.is_active = true AND ui.is_active = true
     *   ORDER BY uc.order ASC, ui.order ASC
     */
    getAll(): UsesCategory[] {
        return activeSorted(usesCategoriesSeed).map((cat) => ({
            ...cat,
            items: activeSorted(cat.items),
        }))
    },
}
