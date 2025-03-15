import React from "react";
import PropertyCard from "./PropertyCard";
import { Button } from "@/components/ui/button";
import { Package } from "@/lib/types";
import Link from "next/link";

interface GridProps {
  packages: Package[];
}

const Properties = ({ packages }: GridProps) => {
  return (
    <section className="mt-10 flex flex-col items-center gap-10">
      <div className="md:px-10 flex flex-col justify-center items-center gap-10">
        <div className="mt-10  md:mt-5 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-10 items-center">
          {packages.map((pack) => {
            return (
              <div key={pack.id}>
                <PropertyCard pack={pack} />
              </div>
            );
          })}
        </div>
      </div>
      <Link
        href={"/tour-packages"}
        className="bg-purple-200 p-1 rounded-lg text-purple-800 font-bold hover:bg-purple-800 hover:text-white"
      >
        See More Tours
      </Link>
    </section>
  );
};

export default Properties;
