"use client";

import Filter from "@/components/custom/Destinations/Filter";
import Grid from "@/components/custom/Destinations/Grid";
import DestinationCardSkeleton from "@/components/customUI/Skeletons/DestinationCardSkeleton";
import DestinationsSkeletonGrid from "@/components/customUI/Skeletons/DestinationSkeletonGrid";
import { Destination, Package } from "@/lib/types";
import { useDataContext } from "@/store/DataContext";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const DestinationPageSuspense = () => {
  const {
    packages,
    loading: contextLoading,
    error: contextError,
  } = useDataContext();
  const searchParams = useSearchParams();
  const locationFilter = searchParams.get("location") || "";
  const searchQuery = searchParams.get("search") || "";
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const [filteredDestinations, setFilteredDestinations] = useState<
    Destination[]
  >([]);
  const [totalFiltered, setTotalFiltered] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch filtered destinations from the API (since pagination, location & search are dynamic)
  useEffect(() => {
    const fetchFiltered = async () => {
      setLoading(true);
      setError(null);
      try {
        let url = `/api/destinations?page=${currentPage}&limit=${itemsPerPage}`;
        if (locationFilter && locationFilter !== "All") {
          url += `&location=${encodeURIComponent(locationFilter)}`;
        }
        if (searchQuery) {
          url += `&search=${encodeURIComponent(searchQuery)}`;
        }

        const res = await fetch(url);
        if (!res.ok) throw new Error("Failed to fetch filtered destinations");
        const { data, count } = await res.json();
        setFilteredDestinations(data);
        setTotalFiltered(count);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchFiltered();
  }, [currentPage, locationFilter, searchQuery]);

  // Derive packageCounts from context
  const packageCounts = packages?.reduce((acc, pkg) => {
    const key = pkg.param.toLowerCase();
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const destinationsWithCounts = filteredDestinations
    .map((destination) => ({
      ...destination,
      tours: packageCounts?.[destination.param.toLowerCase()] || 0,
    }))
    .filter((d) => d.tours > 0);

  const totalPages = Math.ceil(totalFiltered / itemsPerPage);
  const promoPackages = packages?.filter((pkg) => pkg.promo) || [];

  // if (contextLoading || loading) return <Skeleton type="grid" />;

  if (contextError || error) {
    return (
      <div className="text-red-600 text-center mt-4">
        {error || contextError}
      </div>
    );
  }

  return (
    <div className="px-10 py-5 flex flex-col gap-12 md:flex-row">
      <div className="md:flex md:w-1/4">
        <Filter promoPackages={promoPackages} />
      </div>
      <div className="w-full">
        {contextLoading || loading ? (
          <DestinationsSkeletonGrid />
        ) : (
          <Grid
            destinations={destinationsWithCounts}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
};

export default DestinationPageSuspense;
