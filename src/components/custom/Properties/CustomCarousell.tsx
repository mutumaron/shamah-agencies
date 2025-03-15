import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import FilterItem from "./FilterItem";
import { FilterData } from "@/data/data";

const CustomCarousell = () => {
  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-1">
        {FilterData.map((data) => (
          <FilterItem key={data.id} filter={data} />
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CustomCarousell;
