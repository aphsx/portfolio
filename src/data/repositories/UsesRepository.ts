import { UsesCategory } from '../../types'
import { usesCategoriesSeed } from '../seed/Uses'

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
        return usesCategoriesSeed
            .filter((cat) => cat.isActive)
            .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
            .map((cat) => ({
                ...cat,
                items: cat.items
                    .filter((item) => item.isActive)
                    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0)),
            }))
    },

    /**
     * Returns a specific uses category by id.
     */
    getCategoryById(id: string): UsesCategory | undefined {
        return usesCategoriesSeed.find((cat) => cat.id === id && cat.isActive)
    },
}
