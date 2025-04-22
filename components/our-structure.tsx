import { ChevronRight } from "lucide-react";

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
      title: "FOUNDATION",
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
            our mission.
          </p>
          <p className="text-gray-800 md:leading-tight text-center md:text-xl md:px-20">
            Our organisation is structured into three operational arms:
          </p>
        </div>

        <div className="">
          {structures.map((structure, index) => (
            <div
              key={index}
              className={`flex flex-col text-center md:flex-row justify-center items-center`}
            >
              <div className={`w-full md:px-40`}>
                <div className="relative flex flex-col items-center">
                  <h3 className="text-xl md:text-2xl font-bold mt-4 mb-2">
                    {structure.title}
                  </h3>
                  <p
                    className={`text-gray-800 md:text-xl ${
                      index === 2 ? "" : "mb-4"
                    } text-base leading-snug`}
                  >
                    {structure.description}
                  </p>
                  {index === 2 ? (
                    <a
                      href="https://docs.google.com/gview?embedded=true&url=https://drive.usercontent.google.com/download?id=1YEOmdZkt02d-GHb0ZICR1BMTIhAvOqg4&export=download&authuser=0&confirm=t&uuid=e4ee8dc6-2a99-4542-a97d-d29c237bb79b&at=APcmpozbnvDWtq5xen7365e_0BX4:1745333105428"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-center w-[40%] py-2 text-black text-sm font-medium"
                    >
                      Learn More{" "}
                      <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </a>
                  ) : (
                    <></>
                  )}
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
