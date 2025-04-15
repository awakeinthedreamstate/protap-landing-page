export default function ContactHero() {
  return (
    <section className="relative w-full py-20 md:py-28 bg-muted overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl mb-6">
            GET IN TOUCH
          </h1>
          <p className="text-xl text-muted-foreground">
            Contact us to learn more about our venture studio, brands, or
            philanthropic initiatives.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
