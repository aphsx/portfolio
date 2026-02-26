// ============================================================
// Public Data API
//
// Components should ONLY import from this file (or from types/).
// Do NOT import directly from seed/ or repositories/ in components.
//
// When migrating to a database, only the repository files change.
// This public API surface stays the same.
// ============================================================

export { PersonalRepository } from './repositories/personal.repository'
export { ProjectRepository } from './repositories/project.repository'
export { SkillRepository } from './repositories/skill.repository'
export { SocialRepository } from './repositories/social.repository'
export { UsesRepository } from './repositories/uses.repository'