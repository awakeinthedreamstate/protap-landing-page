"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Brands", href: "/brands" },
    { name: "Foundation", href: "/foundation" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed w-full top-0 left-0 right-0 z-50">
      <div
        className={`container mx-auto px-4 py-4 bg-[url('/protap-bg.png')] bg-repeat sm:bg-[length:50%_auto] bg-[length:100%_auto]`}
      >
        <nav className="flex items-center justify-between relative">
          {/* Logo on the left for mobile */}
          <Link href="/" className="flex md:hidden items-center space-x-2 z-50">
            <span className="text-2xl font-bold font-rude tracking-tight">
              P<span className="text-primary">+</span>P
            </span>
          </Link>

          {/* Logo on the left for desktop */}
          <Link href="/" className="hidden md:flex items-center space-x-2">
            <Image
              src="/protap-symbol.png"
              alt="Protap & Partners Logo"
              width={50}
              height={50}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-md font-medium transition-colors hover:text-primary relative py-2",
                  pathname === item.href
                    ? "text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary"
                    : "text-gray-800"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Button (Desktop) */}
          <div className="hidden md:block">
            <Button asChild size="sm" className="btn-hover-effect">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Centered Logo for Mobile */}
          <div className="absolute left-1/2 transform -translate-x-1/2 md:hidden">
            <Link href="/" className="flex items-center justify-center">
              <Image
                src="/protap-symbol.png"
                alt="Protap & Partners Logo"
                width={50}
                height={50}
                priority
              />
            </Link>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          style={{
            backgroundImage: "url('/protap-bg.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "100% auto",
          }}
          className="md:hidden h-auto fixed inset-0 top-16 z-40"
        >
          <nav className="container flex flex-col gap-6 p-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-lg font-medium transition-colors hover:text-primary uppercase",
                  pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
                onClick={toggleMenu}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="mt-4 btn-hover-effect">
              <Link href="/contact" onClick={toggleMenu}>
                Get in Touch
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
