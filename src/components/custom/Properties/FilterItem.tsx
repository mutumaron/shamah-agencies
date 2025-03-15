import { Card, CardContent } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import { GiOfficeChair } from "react-icons/gi";
import React from "react";
import { IconType } from "react-icons/lib";

type Props = {
  filter: {
    id: number;
    icon: IconType;
    title: string;
  };
};

const FilterItem = ({ filter }: Props) => {
  const Icon = filter.icon;

  return (
    <CarouselItem className="pl-3 md:basis-1/2 lg:basis-1/12">
      <div className="p-1">
        <Card className="border-0">
          <CardContent className="flex flex-col items-center justify-center p-2 cursor-pointer hover:text-black hover:bg-gray-100">
            <Icon size={20} color="gray" />
            <p className="text-gray-500 text-sm">{filter.title}</p>
            <hr className="w-1/2 text-black" />
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  );
};

export default FilterItem;
