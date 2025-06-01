"use client";

import DestinationCards from "@/components/customUI/DestinationCards";
import DestinationsSkeletonGrid from "@/components/customUI/Skeletons/DestinationSkeletonGrid";
import { Destination, Package } from "@/lib/types";
import { useDataContext } from "@/store/DataContext";
import React from "react";
import useSWR from "swr";

const Destinations = () => {
  const { destinations, packages, loading, error } = useDataContext();

  // if (loading) return <Skeleton type="destinations" />;

  if (error) {
    return <p className="text-red-600">Failed to load destinations.</p>;
  }
  if (loading || !destinations || !packages)
    return <DestinationsSkeletonGrid />;

  const topDestinations = destinations.slice(0, 3);
  const packageCounts = packages.reduce((acc, pkg) => {
    const key = pkg.param.toLowerCase();
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const destinationsWithCounts = topDestinations
    .map((destination) => ({
      ...destination,
      tours: packageCounts[destination.param.toLowerCase()] || 0,
    }))
    .filter((d) => d.tours > 0);

  return (
    <section className="px-10 flex flex-col gap-10">
      <div className="flex flex-col gap-4 items-center">
        <p className="bg-purple-100 text-purple-900 text-sm font-bold py-1 px-3 rounded-lg w-fit ">
          Best Places Near You
        </p>
        <h1 className="font-bold text-4xl">Explore Top Destinations</h1>
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-5">
        {destinationsWithCounts.map((destination) => (
          <DestinationCards
            img={destination.imgurl}
            tours={destination.tours ?? 0}
            title={destination.title}
            key={destination.id}
            param={destination.param}
          />
        ))}
      </div>
    </section>
  );
};

export default Destinations;
