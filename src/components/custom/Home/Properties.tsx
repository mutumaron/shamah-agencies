"use client";

import React from "react";
import PropertyCard from "./PropertyCard";
import { Button } from "@/components/ui/button";
import { Package } from "@/lib/types";
import Link from "next/link";
import { useDataContext } from "@/store/DataContext";
import { PackageSkeletonGrid } from "@/components/customUI/Skeletons/PackageSkeletonGrid";

const Properties = () => {
  const { packages, loading, error } = useDataContext();

  if (error) {
    return <p className="text-red-600">Failed to load Packages.</p>;
  }
  if (loading || !packages) return <PackageSkeletonGrid />;

  const featuredPackages = packages.slice(0, 4);

  return (
    <section className="mt-10 flex flex-col items-center gap-10">
      <div className="md:px-10 flex flex-col justify-center items-center gap-10">
        <div className="mt-10  md:mt-5 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-10 items-center">
          {featuredPackages.map((pack) => {
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
