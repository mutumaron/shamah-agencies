import DestinationCards from "@/components/customUI/DestinationCards";
import { Destination } from "@/lib/types";
import React from "react";

interface DestinationProps {
  destinations: Destination[];
}

const Destinations = ({ destinations }: DestinationProps) => {
  return (
    <section className="px-10 flex flex-col gap-10">
      <div className="flex flex-col gap-4 items-center">
        <p className="bg-purple-100 text-purple-900 text-sm font-bold py-1 px-3 rounded-lg w-fit ">
          Best Places Near You
        </p>
        <h1 className="font-bold text-4xl">Explore Top Destinations</h1>
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-5">
        {destinations.map((destination) => (
          <DestinationCards
            img={destination.imgurl}
            tours={destination.tours ?? 0}
            title={destination.title}
            key={destination.id}
            param={destination.param}
          />
        ))}
      </div>
    </section>
  );
};

export default Destinations;
