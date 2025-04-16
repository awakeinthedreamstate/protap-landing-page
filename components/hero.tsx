"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative w-full pt-16 h-[50vh] md:h-[50vh] lg:h-[70vh] flex items-center 
    overflow-hidden"
    >
      <div className="container relative px-5 sm:px-8 lg:px-[92px] z-10 ">
        <div className="flex flex-col space-y-8">
          <div className="space-y-4">
            {/*<div>
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">
                Venture Studio & Social Entrepreneurship
              </span>
            </div>*/}
            <h1 className="text-[2.2rem] font-rude font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl leading-none">
              PROTAP & PARTNERS
            </h1>
            <p className="max-w-[700px] text-lg text-gray-800 md:text-xl leading-snug">
              Improving the human condition through the bridging of art & design
              with holistic developments, products, and technology.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {/* <button className="h-8 w-40 rounded-sm bg-black text-white">
              Contact Us
            </button> */}
            {/* <Button
              asChild
              size="lg"
              className="flex h-10 px-8 text-base group btn-hover-effect border-light-blue-500 bg-blue-500 rounded-md hover:bg-blue-600 focus:ring focus:ring-blue-300"
            >
              <Link href="/contact">
                Contact Us
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button className="h-8 bg-none shadow-none text-black px-4 text-base flex items-center">
              <Link className="leading-none h-auto" href="/brands">
                Explore Our Brands
              </Link>
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
