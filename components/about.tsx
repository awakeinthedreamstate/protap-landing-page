export default function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">About Us</h2>
            <p className="text-muted-foreground md:text-lg">
              Protap is a venture studio and social entrepreneurship platform that aims to improve the human condition
              through the bridging of art & design with holistic developments, products, and technology, using ethical
              capitalism with philanthropic work as conduits for realising our mission.
            </p>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Our Structure</h3>
              <p className="text-muted-foreground">Our organisation is structured into three operational arms:</p>
            </div>
          </div>
          <div className="grid gap-6">
            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-xl font-bold mb-2">Protap Corp</h3>
              <p className="text-muted-foreground">
                We are building a series of small startup brands, as portfolio companies operating under a single
                economic entity, serving as revenue streams from a pipeline of digital products and tangible goods.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-xl font-bold mb-2">Protap Mgmt</h3>
              <p className="text-muted-foreground">
                We offer brand management and hybrid consulting services, focusing on personal brands, business brands,
                and public organisations. We utilise a bespoke method of brand alchemy, deploying strategies that
                transforms the ordinary into the refined.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-xl font-bold mb-2">Protap Foundation</h3>
              <p className="text-muted-foreground">
                We are involved in philanthropic advocacy and field work revolving around passion projects and social
                impact initiatives that are in alignment with our purpose and mission.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

