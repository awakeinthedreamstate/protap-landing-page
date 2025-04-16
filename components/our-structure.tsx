export default function OurStructure() {
  const structures = [
    {
      title: "CORP.",
      description:
        "We are building a series of small startup brands, as portfolio companies operating under a single economic entity, serving as revenue streams from a pipeline of digital products and tangible goods.",
    },
    {
      title: "MGMT.",
      description:
        "We offer brand management and hybrid consulting services, focusing on personal brands, business brands, and public organisations. We utilise a bespoke method of brand alchemy, deploying strategies that transforms the ordinary into the refined.",
    },
    {
      title: "FOUNDATION.",
      description:
        "We are involved in philanthropic advocacy and field work revolving around passion projects and social impact initiatives that are in alignment with our purpose and mission.",
    },
  ];

  return (
    <section className="w-full py-4 md:py-4 px-5 sm:px-8 lg:px-[150px]">
      <div>
        <div className="text-left mb-4">
          <h2 className="text-xl md:text-2xl text-center font-bold tracking-tighter mb-2">
            ABOUT US
          </h2>
          <p className="text-gray-800 md:leading-tight text-center md:text-xl md:px-20">
            Protap is a venture studio and social entrepreneurship platform that
            aims to improve the human condition through the bridging of art &
            design with holistic developments, products, and technology, using
            ethical capitalism with philanthropic work as conduits for realising
            our mission. Our organisation is structured into three operational
            arms:
          </p>
        </div>

        <div className="">
          {structures.map((structure, index) => (
            <div
              key={index}
              className={`flex flex-col text-center md:flex-row justify-center items-center`}
            >
              <div className={`w-full md:px-40`}>
                <div className="relative">
                  <h3 className="text-xl md:text-2xl font-bold mt-4 mb-2">
                    {structure.title}
                  </h3>
                  <p className="text-gray-800 md:text-xl text-lg mb-4 leading-snug">
                    {structure.description}
                  </p>
                </div>
              </div>
              {/* <div
                className={`hidden md:block w-1/2 h-62 ${
                  index % 2 === 0 ? "bg-gradient-to-r" : "bg-gradient-to-l"
                } from-background to-muted/50 rounded-lg mt-6`}
              ></div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
