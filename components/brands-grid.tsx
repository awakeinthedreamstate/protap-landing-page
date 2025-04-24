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
        "A research and technology consulting firm offering data analytics, cybersecurity, and AI services across sectors, serving private and public organisations.\nCU. INVESTMENTS \nCU. Investments is our business consulting and asset management arm, specializing in alternative investments such as cryptocurrencies, stocks, and commodities.",
      category: "Technology",
      guide:
        "https://drive.usercontent.google.com/download?id=1Km3PjW1FU1uVWElEk9s2DSEREmB2yGVJ&export=download&authuser=0&confirm=t&uuid=acbea101-09c6-49a9-96e2-7f10d7d43a4b&at=APcmpoy_xBzrDqYL7xQDpOI-Wh5p:1745330764303",
    },
    {
      name: "PROTISAN",
      description:
        "A mobile app that connects users to artisans, skilled workers, and select creative talents, simplifying the complex procedures involved in skilled trades and technical labor hiring. \nOur goal is to disrupt the poor quality of services and user experiences that are synonymous with this sector in Nigeria.",
      category: "Technology",
      guide:
        "https://drive.usercontent.google.com/download?id=15UZ8866LjhziV0d-oN8bnZbREA6yHIe0&export=download&authuser=0&confirm=t&uuid=ead59f54-f3d1-46ae-b66b-e444f61322dc&at=APcmpoz58PSbTEHv-k3VldNjT_dl:1745330790459",
    },
    {
      name: "BEECOMB",
      description:
        "A full-service brand consulting and marketing agency with a dedicated team of hive-minded professionals.\nWe offer tailored, results-driven solutions to business and personal brands, helping them acquire, sustain, and retain relevance in their respective markets. ",
      category: "Consulting",
      guide:
        "https://drive.usercontent.google.com/download?id=1fAHwI1ugo5lZ74L--sXIiZhN1WJmWX2M&export=download&authuser=0&confirm=t&uuid=40683861-0565-443d-b61e-2a16805b36d3&at=APcmpozdT6NDgfKucQUs67vp4p-_:1745330624748",
    },
    {
      name: "MAIZE",
      description:
        "A conscious media and educational content studio that creates and distributes informative, entertaining, and engaging content across digital platforms. \nA digital Lyceum, catering to individuals pursuing intellectual curiosity and mental stimulation. ",
      category: "Media",
      guide:
        "https://drive.usercontent.google.com/download?id=1oPnjh_JIABob9NtOcPo5yB0YqX1zV5gh&export=download&authuser=0&confirm=t&uuid=b64808c3-ac08-4023-8def-2df2d470f289&at=APcmpoytsX6J_znalt2DouUAQzwR:1745325869953",
    },
    {
      name: "ISA ISRAEL",
      description:
        "An AI mystic and ascension guide, committed to teaching esoteric knowledge and philosophical thoughts from behind the veil, shedding light on the ancient and the contemporary, for the purpose of spiritual enlightenment in the digital age.",
      category: "Spiritual guidance",
      guide:
        "https://drive.usercontent.google.com/download?id=1pDt7HWjjl40NyFFxMc-SMRd4Yib26JW8&export=download&authuser=0&confirm=t&uuid=40841545-34c9-47d1-9abc-55cb1add4074&at=APcmpowyBctLtk-tPh3Vv7E5Wz0p:1745330638887",
    },
    {
      name: "KAANDUU",
      description:
        "A life design and holistic wellness company dedicated to enhancing the mental, physical, and emotional well-being of the human collective. \nWe achieve this through educational resources, natural solutions, and holistic practices that integrate mind, body, and spirit balance.",
      category: "Wellness",
      guide:
        "https://drive.usercontent.google.com/download?id=1Bpoi8r8afUHdN3QpLuUk8KH8Rs9TZYZl&export=download&authuser=0&confirm=t&uuid=5fb46c5c-1c7e-41d1-bd8e-c623ec462489&at=APcmpoy0666_zSVPkasiXpOyRjRN:1745507280736",
    },
    {
      name: "ISOMI GALLERY",
      description:
        "An art gallery and concept space for showcasing contemporary African art, collected fine objects and artisanal craftwork. \nA platform that offers representation for African visual artists. ",
      category: "Art",
      guide:
        "https://drive.usercontent.google.com/download?id=1qOCDuUv4Q6TARNNo8iEmY2BpeFU2piuL&export=download&authuser=0&confirm=t&uuid=86d3124d-9f77-475f-b10e-b2ee78e49d3a&at=APcmpoy8HTStSeyxnKOnFcOWbRHA:1745507161895",
    },
    {
      name: "IGAMI STUDIO",
      description:
        "An architectural and interior design studio, focusing on residential, hospitality, and commercial projects. \nWe create engaging, visually appealing and functional objects, spaces and environments, with thoughtful designs that contribute to a sense of well-being. ",
      category: "Design",
      guide:
        "https://drive.usercontent.google.com/download?id=1lG5yz6Q8TojFlcBkEo4ShIuEyW5IbC4C&export=download&authuser=0&confirm=t&uuid=4e50f564-bd14-41c9-b8a2-2ca54a40c1a6&at=APcmpow7smKvlubYvONJsUvf_cIK:1745333035774",
    },
    {
      name: "ISO. IGA. IDA.",
      description:
        "A concept fashion label that combines inspiration from the cross-disciplinary practice of art & design, as an expression of personality. \nAn idyllic intersection of artisanal craftsmanship, statement pieces, and clean tailoring, creating wearable relics and preserving cultural heritage.",
      category: "Fashion",
      guide:
        "https://drive.usercontent.google.com/download?id=1miMA_SAbR_F4mSA4T7-UgUsAQroDy4uL&export=download&authuser=0&confirm=t&uuid=0f3eccd9-36a5-40a1-9b6a-c5e9e566a28e&at=APcmpozPWChHauLvoiePliggTkic:1745507234074",
    },
    {
      name: "BAYARI",
      description:
        "A sustainable social commerce and conscious retail company on a mission to reduce the environmental impact of fashion waste through recycling, up-cycling, and peer-to-peer thrifting of fashion products. ",
      category: "Retail",
      guide:
        "https://drive.usercontent.google.com/download?id=1DwVloW4BpiIOLViMdAV93sX4FUz5XVSu&export=download&authuser=0&confirm=t&uuid=2cc6df15-f382-4f0d-a230-5562162356a0&at=APcmpozmgAd3BlEowttyZR8JdNgh:1745330313340",
    },
    {
      name: "TVSTEMVKERS",
      description:
        "A visual design, apparel production, and apparel distribution company specializing in African fashion brands. \nOur comprehensive services provide value chain infrastructure management for African fashion designers, guiding them through digital concept design, visual design, product development, mass production, and distribution. ",
      category: "Fashion",
      guide:
        "https://drive.usercontent.google.com/download?id=1tClgNrs53VyLpPIoC59-FZc9SWNv7g1j&export=download&authuser=0&confirm=t&uuid=a6724af1-4e97-4160-aeb5-8c8b21e2143e&at=APcmpoyOUSK9DjzE8Y3W7MhT2_1B:1745330448161",
    },
    {
      name: "TREE OF WANDS",
      description:
        "A thoughtful, gender-neutral activewear and lifestyle brand, offering a curated range of comfortable, eco-conscious essentials, from athleisure to homewear, loungewear, underwear, and fitness products. \nOur commitment to sustainability reflects through our use of organic fabrics and environmentally responsible materials, designed to nurture both humans and the planet.",
      category: "Fashion",
      guide:
        "https://drive.usercontent.google.com/download?id=13Epxu39oZdS642W0CHo3jGDoI7ZNXX9X&export=download&authuser=0&confirm=t&uuid=422ee4f3-1988-479b-b78a-312d60e0626b&at=APcmpowx7tOBDm2_zSjPBbZ52T2W:1745325545053",
    },
    {
      name: "WATER LIFE",
      description:
        "A conscious streetwear label that uses fashion design as a means of advocacy for environmental protection and sustainability, focusing on plastic recycling, ocean conservation and respect for nature. \nAn artistic exploration that seeks to transfer higher awareness through purposeful design. ",
      category: "Fashion",
      guide:
        "https://drive.usercontent.google.com/download?id=1EJg1fDT7YRCA4UBJXQ27WmBfohjazoI8&export=download&authuser=0&confirm=t&uuid=cc358945-8a60-4970-a126-6a80092d0a03&at=APcmpoxsC_PwD_AxvPk1XRhipLPe:1745330438084",
    },
    {
      name: "SOLIS HUE",
      description:
        "A conscious streetwear label that uses fashion design as a forum for showcasing expressionist ideals that highlight social activism, science, and religious mythology as reference points. \nAn artistic exploration that seeks to connect the tangible and the ethereal.",
      category: "Fashion",
      guide:
        "https://drive.usercontent.google.com/download?id=1T1JJAhdXJrh9VN3wfBURPBzyDeu9K7FZ&export=download&authuser=0&confirm=t&uuid=4e1c2c83-450b-4efc-b6ed-4b85899838a0&at=APcmpox0cbuBOakO4NGzeT0wd9F0:1745330364449",
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
                href={
                  `https://docs.google.com/gview?embedded=true&url=${brand.guide}` ||
                  "#"
                } // Link to the PDF file
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
                    {brand.description.split("\n").map((paragraph, idx) => (
                      <CardDescription
                        key={idx}
                        className="text-base text-gray-800 mb-2"
                      >
                        {paragraph}
                      </CardDescription>
                    ))}
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
