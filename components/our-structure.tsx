export default function OurStructure() {
  const structures = [
    {
      title: "CORP",
      description:
        "We are building a series of small startup brands, as portfolio companies operating under a single economic entity, serving as revenue streams from a pipeline of digital products and tangible goods.",
    },
    {
      title: "MGMT",
      description:
        "We offer brand management and hybrid consulting services, focusing on personal brands, business brands, and public organisations. We utilise a bespoke method of brand alchemy, deploying strategies that transforms the ordinary into the refined.",
    },
    {
      title: "FOUNDATION",
      description:
        "We are involved in philanthropic advocacy and field work revolving around passion projects and social impact initiatives that are in alignment with our purpose and mission.",
    },
  ];

  return (
    <section className="w-full py-4 md:py-4 bg-gradient-to-b from-background to-muted/30 px-5 sm:px-8 lg:px-[92px]">
      <div>
        <div className="text-left mb-4">
          <h2 className="text-lg font-bold tracking-tighter md:text-md mb-2">
            Our Structure
          </h2>
          <p className="text-muted-foreground md:text-2xl">
            Our organisation is structured into three operational arms, each
            with a distinct focus but united by our common mission.
          </p>
        </div>

        <div className="">
          {structures.map((structure, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-start mb-2 ${
                index % 2 === 1
                  ? "md:flex-row-reverse sm:text-right text-left"
                  : ""
              }`}
            >
              <div
                className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}
              >
                <div className="relative">
                  <h3 className="text-2xl font-bold mt-6 mb-2">
                    {structure.title}
                  </h3>
                  <p className="text-muted-foreground text-lg mb-4">
                    {structure.description}
                  </p>
                </div>
              </div>
              <div
                className={`hidden md:block w-1/2 h-62 ${
                  index % 2 === 0 ? "bg-gradient-to-r" : "bg-gradient-to-l"
                } from-background to-muted/50 rounded-lg mt-6`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
