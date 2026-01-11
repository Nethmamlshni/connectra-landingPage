import Hero from "../../components/hero/Hero"
import TeamSection from "../../components/team/TeamSection"
import Footer from "../../components/footer/Footer";
import DownloadPage from "../../components/downloadPage/Download";
import UnifiedLearningPage from "../../components/unified-learning/page";
import TailoredExperiencePage from "../../components/tailored-experience/page";

export default function HomePage() {
  return (
    <>
      <Hero />
      <UnifiedLearningPage />
      <TailoredExperiencePage />
      <DownloadPage />
      <TeamSection />
      <Footer/>
    </>
  )
}
