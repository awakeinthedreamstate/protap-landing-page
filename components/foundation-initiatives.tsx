import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function FoundationInitiatives() {
  const initiatives = [
    {
      name: "PROJECT MAYI",
      description:
        "A humanitarian initiative advocating for women empowerment and gender equity, prioritising awareness and inclusivity. Our maiden campaign is called Project Feedy; a local delicacies focused chain of sustainable restaurants, operated from recycled plastic kiosks in rural low-income areas across Nigeria.",
      icon: "👩‍👧‍👧",
    },
    {
      name: "PROJECT PURPLE",
      description:
        "A mental health advocacy and neuroscientific research initiative that offers therapeutic nurturing and holistic learning for neurodivergents; individuals medically identified as autistic, schizophrenic, and ADHD-diagnosed.",
      icon: "🧠",
    },
    {
      name: "PROJECT MAYA",
      description:
        "An environmental and sustainable development initiative, focusing on ocean conservation, plastic recycling, and the preservation of nature. We advocate for green consumerism, environmental clean-ups and climate change, promoting ethical living and eco-consciousness.",
      icon: "🌍",
    },
    {
      name: "THE ENUWA LEARNING CENTER",
      description:
        "An institution that offers STEM Education and interdisciplinary learning for children. We seek to provide alternative learning systems that can compliment conventional education, for the purpose of building the next generation of leaders and the advancement of collective human consciousness.",
      icon: "🎓",
    },
    {
      name: "PROTAP CREATIVE TALENT FUND",
      description:
        "A creative industries support initiative that seeks to offer socioeconomic empowerment to African design artists, supporting them with financial backing, representation, mentorship, operational resources and access to global opportunities.",
      icon: "🎨",
    },
  ];

  return (
    <section className="w-full py-4 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-4">
          <p className="text-gray-800 md:text-lg">
            We are committed to creating positive change through these key
            initiatives.
          </p>
        </div>

        <div className="mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {initiatives.map((initiative, index) => (
            <div key={index}>
              <Card
                style={{
                  backgroundImage: "url('/protap-bg.png')",
                  backgroundRepeat: "repeat",
                  backgroundSize: "100% auto",
                }}
                className=" flex flex-col h-full overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl">{initiative.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription className="text-base text-gray-800">
                    {initiative.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
