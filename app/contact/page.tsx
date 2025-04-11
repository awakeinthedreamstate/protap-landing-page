import Header from "@/components/header"
import Footer from "@/components/footer"
import ContactHero from "@/components/contact-hero"
import ContactForm from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <ContactHero />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

