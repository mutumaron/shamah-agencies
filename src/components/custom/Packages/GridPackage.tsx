"use client";

import { Card } from "@/components/ui/card";
import { properties } from "@/data/data";
import React, { useState } from "react";
import PropertyCard from "../Home/PropertyCard";
import { PaginationDemo } from "@/components/customUI/PaginationDemo";
import { Package } from "@/lib/types";

interface GridProps {
  packages: Package[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const GridPackage = ({
  packages,
  currentPage,
  totalPages,
  onPageChange,
}: GridProps) => {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-5">
        <h1 className="font-semibold text-xl">Show the results of Packages</h1>
      </div>
      <div className="mt-5  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 items-center">
        {packages.map((pack) => {
          return (
            <div key={pack.id}>
              <PropertyCard pack={pack} />
            </div>
          );
        })}
      </div>
      <div className="right-0 px-10">
        <PaginationDemo
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default GridPackage;
