"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function BrandsGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const brands = [
    {
      name: "CU.CU",
      description:
        "A research and technology consulting firm offering data analytics, cybersecurity, and AI services across sectors, serving private and public organisations.",
      category: "Technology",
      guide:
        "https://drive.google.com/file/d/1VScs03jUyYb_HBO9ocQImpItoh9gM6ZB/view?usp=sharing",
    },
    {
      name: "PROTISAN",
      description:
        "A mobile app connecting users to creative talents and artisans, simplifying the complex procedures involved in creative & technical labour hiring.",
      category: "Technology",
      guide:
        "https://drive.google.com/file/d/1SkemSC3mvqmoF3ZKQFkJrsqr48m_cKlq/view?usp=sharing",
    },
    {
      name: "BEECOMB",
      description:
        "A full-service brand consulting & marketing agency offering tailored brand strategy solutions, PR, AI marketing, digital marketing, growth marketing, content & social media marketing services.",
      category: "Consulting",
      guide:
        "https://drive.google.com/file/d/1ZZk1mSONq6GjCrsYi4BT_9YVE1jIUbLW/view?usp=sharing",
    },
    {
      name: "MAIZE",
      description:
        "A conscious media and educational content studio creating and distributing informative, entertaining, and engaging content across digital platforms.",
      category: "Media",
      guide:
        "https://drive.google.com/file/d/1oPnjh_JIABob9NtOcPo5yB0YqX1zV5gh/view?usp=sharing",
    },
    {
      name: "ISA ISRAEL",
      description:
        "An AI mystic and ascension guide committed to teaching esoteric knowledge and philosophical thoughts for spiritual enlightenment in the digital age.",
      category: "Wellness",
      guide:
        "https://drive.google.com/file/d/1NXQJz0vRJcLG9xavIaNGYplqx-lL3quu/view?usp=sharing",
    },
    {
      name: "KAANDUU",
      description:
        "A life design and wellness company enhancing mental, physical, and emotional well-being through holistic practices, natural solutions, and community.",
      category: "Wellness",
      guide:
        "https://drive.google.com/file/d/1nLIT-yGG9ZscG3XDTBCpgHoSKhKVCZjc/view?usp=sharing",
    },
    {
      name: "ISOMI GALLERY",
      description:
        "An art gallery and concept space showcasing contemporary African art, collected fine objects and artisanal craftwork.",
      category: "Art",
      guide:
        "https://drive.google.com/file/d/18ioJuvuQxsffTzWrdSnicQAXMg0WycXu/view?usp=sharing",
    },
    {
      name: "IGAMI STUDIO",
      description:
        "An architectural and interior design studio focusing on residential, hospitality, and commercial projects with thoughtful designs that contribute to well-being.",
      category: "Design",
      guide:
        "https://drive.google.com/file/d/1Fyml4qprT8o3K-Snu4aIZmcUOpJ6AYEc/view?usp=sharing",
    },
    {
      name: "ISO. IGA. IDA.",
      description:
        "A concept fashion label combining inspiration from art & design as an expression of personality, creating wearable relics and preserving cultural heritage.",
      category: "Fashion",
      guide:
        "https://drive.google.com/file/d/1dahJjqlvKYhILyRWeE_NcJm3P0BtgNmf/view?usp=sharing",
    },
    {
      name: "BAYARI",
      description:
        "A sustainable social commerce and conscious retail company reducing environmental impact of fashion waste through recycling, up-cycling, and peer-to-peer thrifting.",
      category: "Retail",
      guide:
        "https://drive.google.com/file/d/14S63jUNAXZtUFw6q1-QZIMUKLajJxKz0/view?usp=sharing",
    },
    {
      name: "TVSTEMVKERS",
      description:
        "A visual design, apparel production and distribution company providing value chain infrastructure management for African fashion designers.",
      category: "Fashion",
      guide:
        "https://drive.google.com/file/d/1BlRe4AreYs8E4jHuRhcaAZEcuxKCGDdm/view?usp=sharing",
    },
    {
      name: "TREE OF WANDS",
      description:
        "A gender-neutral activewear brand designing and producing atheleisure, homewear, loungewear, and underwear using plant-based, organic fabrics and sustainable materials.",
      category: "Fashion",
      guide:
        "https://drive.google.com/file/d/13Epxu39oZdS642W0CHo3jGDoI7ZNXX9X/view?usp=sharing",
    },
    {
      name: "WATER LIFE",
      description:
        "A conscious streetwear label using fashion design as advocacy for environmental protection and sustainability, focusing on plastic recycling and ocean conservation.",
      category: "Fashion",
      guide: "",
    },
    {
      name: "SOLIS HUE",
      description:
        "A conscious streetwear label showcasing expressionist ideals highlighting social activism, science, and religious mythology as reference points.",
      category: "Fashion",
      guide:
        "https://drive.google.com/file/d/1MrHfEHfyGwrh7QdhoXnZJ-_Fj65HyvNj/view?usp=sharing",
    },
  ];

  return (
    <section className="w-full py-4 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="mx-auto grid gap-8 py-8 md:grid-cols-2 lg:grid-cols-3">
          {brands.map((brand, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Link
                key={index}
                href={brand.guide || "#"} // Link to the PDF file
                target="_blank" // Opens the PDF in a new tab
                rel="noopener noreferrer" // Security best practice for external links
                onClick={(e) => {
                  if (!brand.guide) {
                    e.preventDefault();
                  }
                }}
              >
                <Card
                  style={{
                    backgroundImage: "url('/protap-bg.png')",
                    backgroundRepeat: "repeat",
                    backgroundSize: "100% auto",
                  }}
                  className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg ring-1 ring-gray-400"
                >
                  <CardHeader className="pb-4">
                    <div className="text-xs font-medium text-muted-foreground mb-2">
                      {brand.category}
                    </div>
                    <CardTitle className="text-xl flex items-center justify-between">
                      {brand.name}
                      <ChevronRight
                        className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${
                          hoveredIndex === index ? "translate-x-1" : ""
                        }`}
                      />
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <CardDescription className="text-base text-gray-800">
                      {brand.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
