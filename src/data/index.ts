// ============================================================
// Public Data API
//
// Components should ONLY import from this file (or from types/).
// Do NOT import directly from seed/ or repositories/ in components.
//
// When migrating to a database, only the repository files change.
// This public API surface stays the same.
// ============================================================

export { PersonalRepository } from './repositories/PersonalRepository'
export { CertificateRepository } from './repositories/CertificateRepository'
export { ProjectRepository } from './repositories/ProjectRepository'
export { SkillRepository } from './repositories/SkillRepository'
export { SocialRepository } from './repositories/SocialRepository'
export { UsesRepository } from './repositories/UsesRepository'