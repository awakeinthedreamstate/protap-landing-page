import Header from "@/components/header";
import Hero from "@/components/hero";
import OurStructure from "@/components/our-structure";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <img
          src="./back-blob-circle.png"
          className="absolute right-0 top-20 z-0"
        />
        <Hero />
        <OurStructure />
      </main>
      <Footer />
    </div>
  );
}
