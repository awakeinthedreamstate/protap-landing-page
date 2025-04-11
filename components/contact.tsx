import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Get in touch with us to learn more about our venture studio, brands, or philanthropic initiatives.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-lg space-y-6 py-12">
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Input id="first-name" placeholder="First name" />
              </div>
              <div className="space-y-2">
                <Input id="last-name" placeholder="Last name" />
              </div>
            </div>
            <div className="space-y-2">
              <Input id="email" type="email" placeholder="Email" />
            </div>
            <div className="space-y-2">
              <Textarea id="message" placeholder="Your message" className="min-h-[120px]" />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

