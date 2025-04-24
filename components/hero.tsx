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
      className="relative w-full pt-16 h-[40vh] md:h-[50vh] lg:h-[70vh] flex items-center 
    overflow-hidden"
    >
      <div className="container relative px-5 sm:px-8 lg:px-[92px] z-10 ">
        <div className="flex flex-col items-center space-y-8">
          <div>
            {/*<div>
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">
                Venture Studio & Social Entrepreneurship
              </span>
            </div>*/}
            <h1 className="text-[2.1rem] main-text text-center mb-1 font-rude font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl leading-none">
              PROTAP & PARTNERS
            </h1>
            <p className="max-w-[700px] mt-none text-center md:text-center text-lg text-gray-800 md:text-xl leading-snug">
              Building the Future...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
