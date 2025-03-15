import { Card } from "@/components/ui/card";
import { properties } from "@/data/data";
import React from "react";
import PropertyCard from "../Home/PropertyCard";
import { PaginationDemo } from "@/components/customUI/PaginationDemo";
import DestinationCards from "@/components/customUI/DestinationCards";
import { Destination } from "@/lib/types";

interface GridProps {
  destinations: Destination[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Grid = ({
  destinations,
  currentPage,
  totalPages,
  onPageChange,
}: GridProps) => {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-5">
        <h1 className="font-semibold text-xl">
          Show the results of Destinations
        </h1>
      </div>
      <div className="mt-5  md:mt-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 items-center">
        {destinations.map((destination) => (
          <DestinationCards
            img={destination.imgurl}
            tours={destination.tours ?? 0}
            title={destination.title}
            param={destination.param}
          />
        ))}
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

export default Grid;
