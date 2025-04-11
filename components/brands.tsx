import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Brands() {
  const brands = [
    {
      name: "CU.CU",
      description:
        "A research and technology consulting firm offering data analytics, cybersecurity, and AI services across sectors, serving private and public organisations.",
    },
    {
      name: "PROTISAN",
      description:
        "A mobile app connecting users to creative talents and artisans, simplifying the complex procedures involved in creative & technical labour hiring.",
    },
    {
      name: "BEECOMB",
      description:
        "A full-service brand consulting & marketing agency offering tailored brand strategy solutions, PR, AI marketing, digital marketing, growth marketing, content & social media marketing services.",
    },
    {
      name: "MAIZE",
      description:
        "A conscious media and educational content studio creating and distributing informative, entertaining, and engaging content across digital platforms.",
    },
    {
      name: "ISA ISRAEL",
      description:
        "An AI mystic and ascension guide committed to teaching esoteric knowledge and philosophical thoughts for spiritual enlightenment in the digital age.",
    },
    {
      name: "KAANDUU",
      description:
        "A life design and wellness company enhancing mental, physical, and emotional well-being through holistic practices, natural solutions, and community.",
    },
    {
      name: "ISOMI GALLERY",
      description:
        "An art gallery and concept space showcasing contemporary African art, collected fine objects and artisanal craftwork.",
    },
    {
      name: "IGAMI STUDIO",
      description:
        "An architectural and interior design studio focusing on residential, hospitality, and commercial projects with thoughtful designs that contribute to well-being.",
    },
    {
      name: "ISO. IGA. IDA.",
      description:
        "A concept fashion label combining inspiration from art & design as an expression of personality, creating wearable relics and preserving cultural heritage.",
    },
    {
      name: "BAYARI",
      description:
        "A sustainable social commerce and conscious retail company reducing environmental impact of fashion waste through recycling, up-cycling, and peer-to-peer thrifting.",
    },
    {
      name: "TVSTEMVKERS",
      description:
        "A visual design, apparel production and distribution company providing value chain infrastructure management for African fashion designers.",
    },
    {
      name: "TREE OF WANDS",
      description:
        "A gender-neutral activewear brand designing and producing atheleisure, homewear, loungewear, and underwear using plant-based, organic fabrics and sustainable materials.",
    },
    {
      name: "WATER LIFE",
      description:
        "A conscious streetwear label using fashion design as advocacy for environmental protection and sustainability, focusing on plastic recycling and ocean conservation.",
    },
    {
      name: "SOLIS HUE",
      description:
        "A conscious streetwear label showcasing expressionist ideals highlighting social activism, science, and religious mythology as reference points.",
    },
  ]

  return (
    <section id="brands" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Brands</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our group of portfolio brands simultaneously and harmoniously serves our internal organisational needs and
              target market.
            </p>
          </div>
        </div>
        <div className="mx-auto grid gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {brands.map((brand, index) => (
            <Card key={index} className="flex flex-col h-full">
              <CardHeader>
                <CardTitle className="text-xl">{brand.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <CardDescription className="text-base">{brand.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

