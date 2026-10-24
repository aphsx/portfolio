"use client";
import {
  HeroSection,
  AboutWorkSection,
  BioSection,
  SkillsSection,
  SocialLinksSection,
  FeaturedProjectsSection,
  GitHubContributionsSection,
} from '@/components/home'
import { PageContainer } from '@/components/ui'

const Home = () => {
  return (
    <PageContainer innerClassName="max-w-2xl mx-auto px-6">
      <HeroSection />
      <AboutWorkSection />
      <BioSection />
      <SkillsSection />
      <GitHubContributionsSection />
      <SocialLinksSection />
      <FeaturedProjectsSection />
    </PageContainer>
  )
}

export default Home
