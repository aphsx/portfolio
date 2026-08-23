"use client";
import {
  HeroSection,
  AboutWorkSection,
  BioSection,
  SkillsSection,
  SocialLinksSection,
  // ContactSection, // Uncomment to show email contact section
  FeaturedProjectsSection,
  GitHubContributionsSection,
} from '../../components/home'

const Home = () => {

  return (
    <div
      className="min-h-screen bg-gray-50 dark:bg-gray-900"
      style={{ paddingTop: '100px' }}
    >
      <div className="max-w-2xl mx-auto px-6">
        <HeroSection />
        <AboutWorkSection />
        <BioSection />
        <SkillsSection />
        <GitHubContributionsSection />
        <SocialLinksSection />
        {/* Uncomment to show email contact section */}
        {/* <ContactSection /> */}
        <FeaturedProjectsSection />
      </div>
    </div>
  )
};

export default Home;
