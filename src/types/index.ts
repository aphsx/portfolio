// ============================================================
// Core Localization
// ============================================================

export interface LocalizedText {
  en: string
  th?: string
}

export interface LocalizedStringArray {
  en: string[]
  th?: string[]
}

// ============================================================
// Shared Base Fields (mirrors what a DB table would have)
// ============================================================

export interface BaseEntity {
  id: string
  order?: number
  isActive: boolean
  createdAt?: string // ISO 8601 date string
}

/** Controls how an entry appears in a page's hero banner carousel. */
export interface BannerOptions {
  /** Exclude from the banner (e.g. placeholder or unsuitable cover image). */
  hidden?: boolean
  /** Show before non-pinned entries. */
  pinned?: boolean
  /** CSS object-position override for the banner crop only. */
  position?: string
}

/** A single slide in an ImageBanner carousel (language-agnostic). */
export interface BannerSlide {
  id: string
  /** Path without the language prefix, e.g. `/projects/proj-001`. */
  path: string
  image: string
  title: LocalizedText
  position?: string
}

// ============================================================
// Personal Info
// ============================================================

export interface PersonalInfo {
  name: LocalizedText
  title: LocalizedText
  greeting: LocalizedText
  profileImage: string
  email: string
  phone?: string
  location?: LocalizedText
  bio?: LocalizedText
}

export interface BioTimelineItem extends BaseEntity {
  year: string
  event: LocalizedText
  links?: {
    label: LocalizedText
    url: string
  }[]
}

// ============================================================
// Projects
// ============================================================

export type ProjectCategory = 'certi' | 'works' | 'collaborations' | 'old'
export type ProjectStatus = 'completed' | 'in-progress' | 'archived'

export interface ProjectImage {
  url: string
  caption?: LocalizedText
  isPrimary?: boolean
}

export interface Project extends BaseEntity {
  slug: string
  title: LocalizedText
  description: LocalizedText
  shortDescription?: LocalizedText
  descriptionLong?: LocalizedText
  image: string
  images?: ProjectImage[]
  galleryLayout?: 'grid' | 'photos'
  link?: string
  github?: string
  fileUrl?: string
  tags: string[]          // Plain string array — localized tags go in translations
  category: ProjectCategory
  status?: ProjectStatus
  featured?: boolean
  year?: number
  banner?: BannerOptions
}

// ============================================================
// Skills
// ============================================================

export interface Skill extends BaseEntity {
  name: string
  color: string
  icon?: React.ComponentType<{ size?: number }>
  category: string
}

export interface SkillCategory extends BaseEntity {
  name: LocalizedText
  skills: Skill[]
}

// ============================================================
// Social Links
// ============================================================

export type SocialPlatform = 'github' | 'instagram' | 'linkedin' | 'twitter' | 'youtube' | 'portfolio' | 'other'

export interface SocialLink extends BaseEntity {
  platform: SocialPlatform
  name: string
  icon: React.ComponentType<{ size?: number }>
  url: string
  handle: string
  description?: LocalizedText
}

// ============================================================
// Uses / Gear
// ============================================================

export interface UsesTool extends BaseEntity {
  name: LocalizedText
  image?: string
  icon?: React.ComponentType<{ size?: number; className?: string }>
  description?: LocalizedText
  url?: string
}

export interface UsesCategory extends BaseEntity {
  name: LocalizedText
  items: UsesTool[]
}

// ============================================================
// Timeline / Activity Blog
// ============================================================

export type TimelineEntryType = 'activity' | 'award' | 'participation' | 'event'

export interface TimelineEntry extends BaseEntity {
  slug: string
  title: LocalizedText
  excerpt: LocalizedText
  content: LocalizedText
  type: TimelineEntryType
  date: string
  dateSort: string
  image?: string
  images?: string[]
  imageFit?: 'cover' | 'contain'
  imagePosition?: string
  projectId?: string
  tags?: string[]
  links?: {
    label: LocalizedText
    url: string
  }[]
  banner?: BannerOptions
}