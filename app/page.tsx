import Header from "@/components/header";
import Hero from "@/components/hero";
import OurStructure from "@/components/our-structure";
import Footer from "@/components/footer";
import MissionVision from "@/components/mission-vision";
import BrandsHome from "@/components/brands-home";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
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
        <div className="flex flex-col gap-5">
          <Button
            asChild
            size="lg"
            className="flex w-[70%] md:w-[30%] mx-auto h-10 px-8 text-base group btn-hover-effect  rounded-md"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
