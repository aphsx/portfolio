import { BannerSlide, Project, ProjectCategory } from '@/types'
import { projectsSeed } from '../seed/Projects'
import { activeSorted, findActive, pickBannerItems } from './query'

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
        return activeSorted(projectsSeed)
    },

    /**
     * Returns a single project by its id.
     * DB equivalent: SELECT * FROM projects WHERE id = $1 LIMIT 1
     */
    getById(id: string): Project | undefined {
        return findActive(projectsSeed, (p) => p.id === id)
    },

    /**
     * Returns projects filtered by category.
     * DB equivalent: SELECT * FROM projects WHERE category = $1 AND is_active = true ORDER BY order ASC
     */
    getByCategory(category: ProjectCategory): Project[] {
        return activeSorted(projectsSeed.filter((p) => p.category === category))
    },

    /**
     * Returns only featured projects.
     * DB equivalent: SELECT * FROM projects WHERE featured = true AND is_active = true ORDER BY order ASC
     */
    getFeatured(): Project[] {
        return activeSorted(projectsSeed.filter((p) => p.featured))
    },

    /**
     * Slides for the projects-page hero banner (works only; see `Project.banner`).
     */
    getBannerSlides(max = 6): BannerSlide[] {
        const candidates = ProjectRepository.getByCategory('works').filter((p) => p.image)
        return pickBannerItems(candidates, max).map((p) => ({
            id: p.id,
            path: `/projects/${p.id}`,
            image: p.image,
            title: p.title,
            position: p.banner?.position,
        }))
    },
}
