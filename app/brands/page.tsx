import Header from "@/components/header"
import Footer from "@/components/footer"
import BrandsHero from "@/components/brands-hero"
import BrandsGrid from "@/components/brands-grid"

export default function BrandsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <BrandsHero />
        <BrandsGrid />
      </main>
      <Footer />
    </div>
  )
}

