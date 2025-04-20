import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function BrandsHome() {
  return (
    <section id="brands" className="w-full mb-12 md:py-6 lg:py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-xl font-bold tracking-tighter sm:text-4xl md:text-2xl">
              OUR BRANDS
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-800 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our portfolio of brands are designed to enhance the human
              experience, making it more enriching, more fulfilling, and more
              purposeful.
            </p>
            <Button className="h-8 mx-auto bg-none w-[70%] shadow-none text-black px-4 text-base flex items-center">
              <Link
                className="leading-none md:text-xl flex justify-center items-center w-full h-auto"
                href="/brands"
              >
                Explore Our Brands
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
        {/* <div className="mx-auto grid py-12 md:grid-cols-2 lg:grid-cols-3 gap-x-8">
          {brands.map((brand, index) => (
            <div key={index} className="max-w-3xl mx-auto text-center mb-6">
              <h2 className="text-2xl font-bold tracking-tighter md:text-4xl mb-2">
                {brand.name}
              </h2>
              <p className="text-gray-800 md:text-lg">{brand.description}</p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
