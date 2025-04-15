import Header from "@/components/header";
import Hero from "@/components/hero";
import OurStructure from "@/components/our-structure";
import Footer from "@/components/footer";
import MissionVision from "@/components/mission-vision";
import BrandsHome from "@/components/brands-home";
import ContactFormHome from "@/components/contact-form-home";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <Hero />
        <OurStructure />
        <MissionVision />
        <BrandsHome />
        <ContactFormHome />
      </main>
      <Footer />
    </div>
  );
}
