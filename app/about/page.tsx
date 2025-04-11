import Header from "@/components/header"
import Footer from "@/components/footer"
import AboutHero from "@/components/about-hero"
import AboutContent from "@/components/about-content"
import MissionVision from "@/components/mission-vision"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <AboutHero />
        <AboutContent />
        <MissionVision />
      </main>
      <Footer />
    </div>
  )
}

