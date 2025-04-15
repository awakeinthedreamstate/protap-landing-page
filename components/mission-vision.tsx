import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function MissionVision() {
  return (
    <section className="w-full pt-12 pb-6 md:py-24 bg-none">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-6">
          <h2 className="text-2xl font-bold tracking-tighter md:text-4xl mb-2">
            ETHOS
          </h2>
          <p className="text-gray-800 md:text-lg">
            A soul-led company, prioritising people, purpose, and planet.
          </p>
        </div>
        <div className="max-w-3xl mx-auto text-center mb-6">
          <h2 className="text-2xl font-bold tracking-tighter md:text-4xl mb-2">
            MISSION
          </h2>
          <p className="text-gray-800 md:text-lg">
            Our mission is to be a force for good and a tool for positive
            change, implementing business practices that aim to serve the human
            collective and the environment. Motivated by values that foster
            economic, spiritual, and social impact.
          </p>
        </div>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl font-bold tracking-tighter md:text-4xl mb-2">
            VISION
          </h2>
          <p className="text-gray-800 md:text-lg">
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
