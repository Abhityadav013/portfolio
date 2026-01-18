"use client";
import ContactSection from "./components/ContactSection";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import { FooterSection } from "./components/FooterSection";
import ParticleBackground from "./components/ParticleBackground";
import { SkillSection } from "./components/SkillSection";
import { motion } from "framer-motion";
import NavigationSection from "./components/NavigationSection";
import { useNavigationSections } from "./hooks/useNavigationSections";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import { ProjectSection } from "./components/ProjectSection";
export default function Home() {
  const { mousePosition } = useNavigationSections();
  return (
    <>
      <ParticleBackground />
      <motion.div
        className="fixed w-96 h-96 rounded-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)",
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      <NavigationSection />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectSection />
      <SkillSection />
      <EducationSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
