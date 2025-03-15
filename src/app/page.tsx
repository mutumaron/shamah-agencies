"use client";

import useSWR from "swr";
import Destinations from "@/components/custom/Home/Destinations";
import Hero from "@/components/custom/Home/Hero";
import PromoBanner from "@/components/custom/Home/PromoBanner";
import Properties from "@/components/custom/Home/Properties";
import { Destination, Package } from "@/lib/types";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data: destinationData, error: destinationError } = useSWR<{
    data: Destination[];
  }>("/api/destinations", fetcher);
  const { data: packageData, error: packageError } = useSWR<{
    data: Package[];
  }>("/api/packages", fetcher);

  if (destinationError || packageError) return <div>Error loading data</div>;
  if (!destinationData || !packageData) return null;

  const destinations = destinationData.data.slice(0, 3);
  const packages = packageData.data.slice(0, 4);

  const packageCounts = packages.reduce((acc, pkg) => {
    const key = pkg.param.toLowerCase();
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const destinationsWithCounts = destinations
    .map((destination) => ({
      ...destination,
      tours: packageCounts[destination.param.toLowerCase()] || 0,
    }))
    .filter((destination) => destination.tours > 0);

  const promoPackages = packageData.data.filter((pkg) => pkg.promo === true);
  return (
    <div className="flex flex-col gap-10">
      <Hero />
      <div
        style={{ backgroundImage: "url('/images/bg-hero-2.png')" }}
        className="inset-0 bg-cover bg-center"
      >
        <Destinations destinations={destinationsWithCounts} />
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center mb-5">
          <p className="text-center bg-purple-100 mb-2 text-purple-600 font-semibold text-sm w-fit rounded-lg py-1 px-2">
            Explore The World
          </p>
          <h1 className="text-center font-bold text-3xl">
            Our Amazing Featured Tour Packages
          </h1>
        </div>
        <Properties packages={packages} />
      </div>
      <PromoBanner promoPackages={promoPackages} />
    </div>
  );
}
