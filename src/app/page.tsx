import Hero from "../../components/hero/Hero"
import FeatureCard from "../../components/ui/FeatureCard"
import TeamSection from "../../components/team/TeamSection"
import Counter from "../../components/animations/Counter"

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="grid md:grid-cols-3 gap-6 p-10">
        <FeatureCard title="Interactive Quizzes" description="Real-time learning" />
        <FeatureCard title="Smart Attendance" description="AI powered" />
        <FeatureCard title="Deep Analytics" description="Performance insights" />
      </section>

      <section className="flex justify-center gap-10 py-20">
        <Counter value={1200} />
        <Counter value={300} />
        <Counter value={98} />
      </section>

      <TeamSection />
    </>
  )
}
