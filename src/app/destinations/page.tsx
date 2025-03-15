"use client";

import Filter from "@/components/custom/Destinations/Filter";
import Grid from "@/components/custom/Destinations/Grid";
import { Destination, Package } from "@/lib/types";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const page = () => {
  const searchParams = useSearchParams();
  const locationFilter = searchParams.get("location") || "";
  const searchQuery = searchParams.get("search") || "";
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  let apiUrl = `/api/destinations?page=${currentPage}&limit=${itemsPerPage}`;
  if (locationFilter && locationFilter !== "All") {
    apiUrl += `&location=${encodeURIComponent(locationFilter)}`;
  }
  if (searchQuery) {
    apiUrl += `&search=${encodeURIComponent(searchQuery)}`;
  }
  const { data, error } = useSWR<{ data: Destination[]; count: number }>(
    apiUrl,
    fetcher
  );
  const { data: packagesData, error: packagesError } = useSWR<{
    data: Package[];
  }>("/api/packages", fetcher);

  if (error || packagesError) return <div>Error loading data</div>;
  if (!data || !packagesData) return null;

  if (error) return <div>Error loading destinations</div>;
  if (!data) return null;

  const packageCounts = packagesData.data.reduce((acc, pkg) => {
    const key = pkg.param.toLowerCase();
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const destinations = data.data;

  const destinationsWithCounts = destinations
    .map((destination) => ({
      ...destination,
      tours: packageCounts[destination.param.toLowerCase()] || 0,
    }))
    .filter((destination) => destination.tours > 0);

  const totalPages = Math.ceil(data.count / itemsPerPage);

  const promoPackages = packagesData.data.filter((pkg) => pkg.promo === true);

  return (
    <div className="px-10 py-5 flex flex-col gap-12 md:flex-row">
      <div className="md:flex md:w-1/4">
        <Filter promoPackages={promoPackages} />
      </div>
      <div className="md:flex md:">
        <Grid
          destinations={destinationsWithCounts}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default page;
