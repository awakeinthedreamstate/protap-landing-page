import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function MissionVision() {
  return (
    <section className="w-full py-16 md:py-24 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">Mission & Vision</h2>
          <p className="text-muted-foreground md:text-lg">
            Our guiding principles that shape everything we do at Protap & Partners.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <Card className="flex flex-col h-full overflow-hidden border-none shadow-lg bg-gradient-to-br from-background to-background/80">
            <CardHeader className="pb-4 pt-8">
              <div className="w-12 h-1 bg-primary mb-4"></div>
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-muted-foreground">
                Our mission is to be a force for good and a tool for positive change, implementing business practices
                that aim to serve the human collective and the environment. Motivated by values that foster economic,
                spiritual, and social impact.
              </p>
            </CardContent>
          </Card>
          <Card className="flex flex-col h-full overflow-hidden border-none shadow-lg bg-gradient-to-br from-background to-background/80">
            <CardHeader className="pb-4 pt-8">
              <div className="w-12 h-1 bg-primary mb-4"></div>
              <CardTitle className="text-2xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-muted-foreground">
                Our vision is to be a socially conscious multinational corporation with a venture fund that is focused
                on impact-investing, prioritising innovative founders and early-stage startups, whilst offering
                financial backing and structural support to African design artists through our foundation, amongst its
                other philanthropic projects.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

