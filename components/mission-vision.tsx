import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function MissionVision() {
  return (
    <section className="w-full pt-6 pb-6 md:px-[150px] md:py-6 bg-none">
      <div className="container px-4 md:px-0">
        <div className="max-w-3xl mx-auto text-center mb-6">
          <h2 className="text-xl font-bold tracking-tighter md:text-2xl mb-2">
            ETHOS
          </h2>
          <p className="text-gray-800 md:text-xl text-base leading-snug">
            A soul-led company, prioritising people, purpose, and planet.
          </p>
        </div>
        <div className="max-w-3xl md:px-3 mx-auto text-center mb-6">
          <h2 className="text-xl font-bold tracking-tighter md:text-2xl mb-2">
            MISSION
          </h2>
          <p className="text-gray-800 md:text-xl text-base leading-snug">
            Our mission is to be a force for good and a tool for positive
            change, implementing business practices that aim to serve the human
            collective and the environment. Motivated by values that foster
            economic, spiritual, and social impact.
          </p>
        </div>
        <div className="max-w-3xl md:px-3 mx-auto text-center mb-6">
          <h2 className="text-xl font-bold tracking-tighter md:text-2xl mb-2">
            VISION
          </h2>
          <p className="text-gray-800 md:text-xl text-base leading-snug">
            Our vision is to be a socially conscious multinational corporation
            with a venture fund that is focused on impact-investing,
            prioritising innovative founders and early-stage startups, whilst
            offering financial backing and structural support to African design
            artists through our foundation, amongst its other philanthropic
            projects.
          </p>
        </div>
      </div>
    </section>
  );
}
