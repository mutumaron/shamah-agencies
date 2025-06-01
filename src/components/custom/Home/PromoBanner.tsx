"use client";

import BannerCard from "@/components/customUI/BannerCard";
import BannerCardSkeleton from "@/components/customUI/Skeletons/BannerSkeletonCard";
import { useDataContext } from "@/store/DataContext";
import React from "react";

const PromoBanner = () => {
  const { packages, loading, error } = useDataContext();
  if (error) {
    return <p className="text-red-600">Failed to load Packages.</p>;
  }
  if (loading || !packages)
    return (
      <div className="px-12 flex w-full justify-between gap-10 flex-col md:flex-row">
        <BannerCardSkeleton />
        <BannerCardSkeleton />
      </div>
    );

  const promoPackages = packages.filter((pkg) => pkg.promo === true);
  return (
    <section className="flex w-full justify-between px-12 gap-10 mt-5 flex-col md:flex-row">
      {promoPackages.map((item, index) => (
        <div className="md:w-1/2 " key={index}>
          <BannerCard promoDetails={item} />
        </div>
      ))}
    </section>
  );
};

export default PromoBanner;
