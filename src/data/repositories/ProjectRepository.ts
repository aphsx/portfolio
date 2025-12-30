import { Project, ProjectCategory } from '../../types'
import { projectsSeed } from '../seed/projects'

// ---------------------------------------------------------------------------
// ProjectRepository
//
// Single access point for project data with filtering helpers.
// DB equivalent pattern: SELECT * FROM projects WHERE ... ORDER BY ...
// ---------------------------------------------------------------------------

export const ProjectRepository = {
    /**
     * Returns ALL active projects sorted by order.
     */
    getAll(): Project[] {
        return projectsSeed
            .filter((p) => p.isActive)
            .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
    },

    /**
     * Returns a single project by its stable slug.
     * DB equivalent: SELECT * FROM projects WHERE slug = $1 LIMIT 1
     */
    getBySlug(slug: string): Project | undefined {
        return projectsSeed.find((p) => p.slug === slug && p.isActive)
    },

    /**
     * Returns a single project by its id.
     * DB equivalent: SELECT * FROM projects WHERE id = $1 LIMIT 1
     */
    getById(id: string): Project | undefined {
        return projectsSeed.find((p) => p.id === id && p.isActive)
    },

    /**
     * Returns projects filtered by category.
     * DB equivalent: SELECT * FROM projects WHERE category = $1 AND is_active = true ORDER BY order ASC
     */
    getByCategory(category: ProjectCategory): Project[] {
        return projectsSeed
            .filter((p) => p.isActive && p.category === category)
            .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
    },

    /**
     * Returns only featured projects.
     * DB equivalent: SELECT * FROM projects WHERE featured = true AND is_active = true ORDER BY order ASC
     */
    getFeatured(): Project[] {
        return projectsSeed
            .filter((p) => p.isActive && p.featured)
            .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
    },

    /**
     * Returns all unique categories that have at least one active project.
     */
    getActiveCategories(): ProjectCategory[] {
        const categories = new Set(
            projectsSeed.filter((p) => p.isActive).map((p) => p.category)
        )
        return Array.from(categories)
    },
}
