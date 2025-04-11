import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Foundation() {
  const initiatives = [
    {
      name: "PROJECT MAYI",
      description:
        "A humanitarian initiative advocating for women empowerment and gender equity, prioritising awareness and inclusivity. Our maiden campaign is called Project Feedy; a local delicacies focused chain of sustainable restaurants, operated from recycled plastic kiosks in rural low-income areas across Nigeria.",
    },
    {
      name: "PROJECT PURPLE",
      description:
        "A mental health advocacy and neuroscientific research initiative that offers therapeutic nurturing and holistic learning for neurodivergents; individuals medically identified as autistic, schizophrenic, and ADHD-diagnosed.",
    },
    {
      name: "PROJECT MAYA",
      description:
        "An environmental and sustainable development initiative, focusing on ocean conservation, plastic recycling, and the preservation of nature. We advocate for green consumerism, environmental clean-ups and climate change, promoting ethical living and eco-consciousness.",
    },
    {
      name: "THE ENUWA LEARNING CENTER",
      description:
        "An institution that offers STEM Education and interdisciplinary learning for children. We seek to provide alternative learning systems that can compliment conventional education, for the purpose of building the next generation of leaders and the advancement of collective human consciousness.",
    },
    {
      name: "PROTAP CREATIVE TALENT FUND",
      description:
        "A creative industries support initiative that seeks to offer socioeconomic empowerment to African design artists, supporting them with financial backing, representation, mentorship, operational resources and access to global opportunities.",
    },
  ]

  return (
    <section id="foundation" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Philanthropic Initiatives
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our foundation focuses on initiatives revolving around humanitarianism, environmentalism, education, and
              economic empowerment.
            </p>
          </div>
        </div>
        <div className="mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {initiatives.map((initiative, index) => (
            <Card key={index} className="flex flex-col h-full">
              <CardHeader>
                <CardTitle className="text-xl">{initiative.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <CardDescription className="text-base">{initiative.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

