"use client";

import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { BookingForm } from "@/components/custom/Packages/BookingForm";

const SinglePackageSkeleton = () => {
  return (
    <section className="flex flex-col gap-10 py-10 px-10 animate-pulse">
      {/* Title + Location */}
      <div className="flex flex-col gap-3">
        <Skeleton className="h-10 w-3/4" />
        <div className="flex gap-5">
          <Skeleton className="h-5 w-32" />
          <Skeleton className="h-5 w-40" />
        </div>
      </div>

      {/* Images */}
      <div className="flex flex-col lg:flex-row gap-5">
        <Skeleton className="lg:w-[650px] lg:h-[400px] w-full h-[300px] rounded-lg" />
        <div className="flex lg:flex-col gap-5 w-full">
          <Skeleton className="lg:h-[190px] lg:w-[300px] w-1/2 h-[150px] rounded-lg" />
          <Skeleton className="lg:h-[190px] lg:w-[300px] w-1/2 h-[150px] rounded-lg" />
        </div>
      </div>

      {/* Info blocks */}
      <div className="flex justify-between flex-wrap gap-5">
        <div className="grid grid-cols-2 gap-10 w-full lg:w-2/3">
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="flex gap-3 items-center">
                <Skeleton className="h-8 w-8 rounded-md" />
                <div className="flex flex-col gap-1">
                  <Skeleton className="h-3 w-24" />
                  <Skeleton className="h-4 w-32" />
                </div>
              </div>
            ))}
        </div>
        <div>
          <Skeleton className="h-6 w-40 mt-5 lg:mt-0" />
        </div>
      </div>

      {/* About, Highlights, Includes/Excludes, Plan, Map */}
      <div className="flex flex-col gap-10 mt-10 lg:flex-row">
        {/* Left side */}
        <div className="lg:w-3/4 flex flex-col gap-6">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="flex flex-col gap-3">
                <Skeleton className="h-6 w-40" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
              </div>
            ))}
          <div>
            <Skeleton className="h-[400px] w-full rounded-lg" />
          </div>
        </div>

        {/* Booking Form */}
        <div className="lg:w-1/4">
          {/* <div className="flex flex-col gap-4">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-12 w-full" />
          </div> */}
          <BookingForm packageId={1} />
        </div>
      </div>
    </section>
  );
};

export default SinglePackageSkeleton;
