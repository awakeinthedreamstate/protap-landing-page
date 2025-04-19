import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 md:py-16 ">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="hidden md:block items-start gap-2">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-3xl font-rude font-bold">
                P<span className="text-primary">+</span>P
              </span>
            </Link>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Navigation</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                className="text-sm text-gray-800 hover:text-foreground transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm text-gray-800hover:text-foreground transition-colors"
              >
                About
              </Link>
              <Link
                href="/brands"
                className="text-sm text-gray-800 hover:text-foreground transition-colors"
              >
                Brands
              </Link>
              <Link
                href="/foundation"
                className="text-sm text-gray-800 hover:text-foreground transition-colors"
              >
                Foundation
              </Link>
              <Link
                href="/contact"
                className="text-sm text-gray-800 hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium">Legal</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="#"
                className="text-sm text-gray-800 hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-800 hover:text-foreground transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-800 hover:text-foreground transition-colors"
              >
                Cookie Policy
              </Link>
            </nav>
          </div>

          <div className="space-y-4 ">
            <h3 className="text-sm font-medium">Connect</h3>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/protapandpartners?igsh=cmlsYTljYmtsZmg0 "
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>

              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
            {/* <p className="text-sm text-gray-800 dev-border">
              Email: info@protapandpartners.com
            </p> */}
          </div>
        </div>

        <div className="mt-10 border-t pt-6">
          <p className="text-center text-xs text-gray-800">
            © {currentYear} Protap & Partners. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
