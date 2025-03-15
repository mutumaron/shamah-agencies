import { Button } from "@/components/ui/button";
import { BookText, ExternalLink } from "lucide-react";
import Image from "next/image";
import React from "react";
import Filter from "./Filter";
import FilterContent from "@/components/customUI/FilterContent";

const Hero = () => {
  return (
    <section className="relative h-[90vh]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-bg-savannah.jpg')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="lg:h-[90vh] relative z-10 items-center flex flex-col p-7 lg:flex-row lg:px-20">
        <div className="flex flex-col gap-5 items-center ">
          <h1 className="lg:text-6xl font-bold text-white text-center text-4xl px-10 justify-center py-20 lg:py-0 lg:px-0">
            Explore The <span className="text-yellow-500">World.</span> Where
            Every Journey Becomes an Adventure
          </h1>
          <p className="font-semibold text-center text-gray-100 px-12 lg:px-0 lg:w-1/2">
            Discover the best properties for sale and rent, tailored to your
            needs. Let us help you find the perfect place to call home.
          </p>
          <div className="flex pt-20">
            <FilterContent />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
