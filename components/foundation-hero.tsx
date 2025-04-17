export default function FoundationHero() {
  return (
    <section className="relative w-full py-14 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl font-bold tracking-tighter md:text-5xl mb-6">
            OUR FOUNDATION
          </h1>
          <p className="text-base text-gray-800 leading-tight">
            Our philanthropic initiatives revolving around humanitarianism,
            environmentalism, education, and economic empowerment.
          </p>
        </div>
      </div>
      {/* <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div> */}
    </section>
  );
}
