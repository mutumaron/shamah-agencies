"use client";

import FilterPackage from "@/components/custom/Packages/FilterPackage";
import GridPackage from "@/components/custom/Packages/GridPackage";
import { PackagePageSkeletonGrid } from "@/components/customUI/Skeletons/PackageSkeletonGrid";
import { Package } from "@/lib/types";
import { useDataContext } from "@/store/DataContext";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const PackageSuspensePage = () => {
  const {
    packages,
    loading: contextLoading,
    error: contextError,
  } = useDataContext();

  const searchParams = useSearchParams();
  const typeFilter = searchParams.get("type") || "";
  const searchQuery = searchParams.get("search") || "";
  const destinationParam = searchParams.get("destination") || "";

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [filteredPackages, setFilteredPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(false);

  // Only run filtering when packages are available
  useEffect(() => {
    if (!packages) return;

    const filterPackages = () => {
      setLoading(true);

      let filtered = [...packages];

      if (typeFilter && typeFilter !== "All") {
        filtered = filtered.filter(
          (pkg) => pkg.type.toLowerCase() === typeFilter.toLowerCase()
        );
      }

      if (destinationParam) {
        filtered = filtered.filter(
          (pkg) => pkg.param.toLowerCase() === destinationParam.toLowerCase()
        );
      }

      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter((pkg) =>
          pkg.title.toLowerCase().includes(query)
        );
      }

      setFilteredPackages(filtered);
      setLoading(false);
    };

    filterPackages();
  }, [packages, typeFilter, searchQuery, destinationParam]);

  if (contextError) {
    return (
      <div className="text-red-600 text-center mt-4">
        Failed to load packages: {contextError}
      </div>
    );
  }

  const totalPages = Math.ceil(filteredPackages.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const paginatedPackages = filteredPackages.slice(start, start + itemsPerPage);
  const promoPackages = packages.filter((pkg) => pkg.promo === true);

  return (
    <div className="px-10 py-5 flex flex-col gap-12 md:flex-row">
      <div className="md:flex md:w-1/4">
        <FilterPackage promoPackages={promoPackages} />
      </div>
      <div className="w-full">
        {contextLoading || loading ? (
          <PackagePageSkeletonGrid />
        ) : (
          <GridPackage
            packages={paginatedPackages}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
};

export default PackageSuspensePage;
