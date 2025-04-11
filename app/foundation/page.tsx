import Header from "@/components/header"
import Footer from "@/components/footer"
import FoundationHero from "@/components/foundation-hero"
import FoundationInitiatives from "@/components/foundation-initiatives"

export default function FoundationPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <FoundationHero />
        <FoundationInitiatives />
      </main>
      <Footer />
    </div>
  )
}

