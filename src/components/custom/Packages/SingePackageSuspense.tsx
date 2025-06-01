"use client";

import SinglePackage from "@/components/custom/Packages/SinglePackage";
import React, { Suspense } from "react";
import { useParams } from "next/navigation";
import { Package } from "@/lib/types";
import { useDataContext } from "@/store/DataContext";
import SinglePackageSkeleton from "@/components/customUI/Skeletons/SinglePackageSkeleton";

const SinglePackageSuspense = () => {
  const { id } = useParams();
  const { packages, loading, error } = useDataContext();

  if (loading) {
    return <SinglePackageSkeleton />;
  }

  if (error) {
    return <div className="text-red-600 text-center py-10">{error}</div>;
  }

  const packageData = packages?.find((pkg) => pkg.id.toString() === id);

  if (!packageData) {
    return (
      <div className="text-gray-600 text-center py-10">Package not found.</div>
    );
  }

  return (
    <>
      <SinglePackage packageData={packageData} />
    </>
  );
};

export default SinglePackageSuspense;
