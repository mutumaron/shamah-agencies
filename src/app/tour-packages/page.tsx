"use client";

import FilterPackage from "@/components/custom/Packages/FilterPackage";
import GridPackage from "@/components/custom/Packages/GridPackage";
import { Package } from "@/lib/types";
import { useSearchParams } from "next/navigation";
import React, { Suspense, useState } from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const page = () => {
  const searchParams = useSearchParams();
  const typeFilter = searchParams.get("type") || "";
  const searchQuery = searchParams.get("search") || "";
  const destinationParam = searchParams.get("destination") || "";
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  let apiUrl = `/api/packages?page=${currentPage}&limit=${itemsPerPage}`;

  if (typeFilter && typeFilter !== "All") {
    apiUrl += `&type=${encodeURIComponent(typeFilter)}`;
  }
  if (destinationParam) {
    // Assumes your API endpoint for packages supports a "destination" query parameter
    // that filters packages by comparing package.param.
    apiUrl += `&destination=${encodeURIComponent(destinationParam)}`;
  }
  if (searchQuery) {
    apiUrl += `&search=${encodeURIComponent(searchQuery)}`;
  }

  const { data, error } = useSWR<{ data: Package[]; count: number }>(
    apiUrl,
    fetcher
  );
  if (error) return null;
  if (!data) return null;
  const packages = data.data;
  const totalPages = Math.ceil(data.count / itemsPerPage);
  const promoPackages = packages.filter((pkg) => pkg.promo === true);

  return (
    <Suspense fallback={<div>Loading destinations...</div>}>
      <div className="px-10 py-5 flex flex-col gap-12 md:flex-row">
        <div className="md:flex md:w-1/4">
          <FilterPackage promoPackages={promoPackages} />
        </div>
        <div className="md:flex md:">
          <GridPackage
            packages={packages}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </Suspense>
  );
};

export default page;
