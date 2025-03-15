"use client";
import React from "react";
import PackageDetails from "./PackageDetails";
import { Separator } from "@/components/ui/separator";
import AboutPackage from "./AboutPackage";
import { BookingForm } from "./BookingForm";
import { Package } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface SinglePackageProps {
  packageData: Package;
}

const SinglePackage = ({ packageData }: SinglePackageProps) => {
  return (
    <section className="flex flex-col gap-10 py-10 px-10">
      <PackageDetails details={packageData} />

      <div className="flex gap-10 mt-10 flex-col lg:flex-row">
        <div className="lg:w-3/4">
          <AboutPackage about={packageData} />
        </div>
        <div className="lg:w-1/4">
          <BookingForm packageId={packageData.id} />
        </div>
      </div>
    </section>
  );
};

export default SinglePackage;
