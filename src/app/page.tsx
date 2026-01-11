import Hero from "../../components/hero/Hero"
import TeamSection from "../../components/team/TeamSection"
import Footer from "../../components/footer/Footer";
import Download from "../../components/downloads/Download";
import UnifiedLearningPage from "../../components/unified-learning/page";
import TailoredExperiencePage from "../../components/tailored-experience/page";
import Features from "../../components/features/Features";
import ContactPage from "../../components/contact/Contactpage";
export default function HomePage() {
  return (
    <>
      <Hero />
      <UnifiedLearningPage />
      <TailoredExperiencePage />
      <Download/>
      <Features />
      <ContactPage/>
      <TeamSection />
      <Footer/>
    </>
  )
}
