export interface LocalizedText {
  en: string | string[]
  th?: string | string[]
}

export interface Project {
  id: string
  title: LocalizedText
  description: LocalizedText
  shortDescription?: LocalizedText
  descriptionLong?: LocalizedText
  image: string
  images?: string[]
  link?: string
  github?: string
  tags: LocalizedText
  category: ProjectCategory
  featured?: boolean
}

export type ProjectCategory = 'works' | 'collaborations' | 'old'

export interface BioTimelineItem {
  year: string
  event: LocalizedText
}

export interface Skill {
  name: string
  color: string
  icon?: React.ComponentType<{ size?: number }>
  category?: string
}

export interface SocialLink {
  name: string
  icon: React.ComponentType<{ size?: number }>
  url: string
  handle: string
  description?: string
}

export interface PersonalInfo {
  name: LocalizedText
  title: LocalizedText
  greeting: LocalizedText
  profileImage: string
  email: string
  phone?: string
  location?: LocalizedText
}

export interface UsesTool {
  name: LocalizedText
  image: string
  description?: LocalizedText
  url?: string
}

export interface UsesCategory {
  category: LocalizedText
  items: UsesTool[]
}