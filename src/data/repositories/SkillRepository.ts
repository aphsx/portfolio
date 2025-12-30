import { SkillCategory } from '../../types'
import { skillCategoriesSeed } from '../seed/Skills'

// ---------------------------------------------------------------------------
// SkillRepository
// ---------------------------------------------------------------------------

export const SkillRepository = {
    /**
     * Returns all active skill categories with their active skills, sorted by order.
     * DB equivalent:
     *   SELECT sc.*, s.* FROM skill_categories sc
     *   JOIN skills s ON s.category_id = sc.id
     *   WHERE sc.is_active = true AND s.is_active = true
     *   ORDER BY sc.order ASC, s.order ASC
     */
    getAll(): SkillCategory[] {
        return skillCategoriesSeed
            .filter((cat) => cat.isActive)
            .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
            .map((cat) => ({
                ...cat,
                skills: cat.skills
                    .filter((s) => s.isActive)
                    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0)),
            }))
    },

    /**
     * Returns a flat list of all active skills across all categories.
     */
    getAllSkillsFlat() {
        return SkillRepository.getAll().flatMap((cat) => cat.skills)
    },

    /**
     * Returns a specific category by id.
     */
    getCategoryById(id: string): SkillCategory | undefined {
        return skillCategoriesSeed.find((cat) => cat.id === id && cat.isActive)
    },
}
