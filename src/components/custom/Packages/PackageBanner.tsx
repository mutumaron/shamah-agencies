import { Button } from "@/components/ui/button";
import React from "react";

const PackageBanner = () => {
  return (
    <section className="relative h-full rounded-lg">
      <div
        className="absolute inset-0 bg-cover bg-center rounded-xl"
        style={{ backgroundImage: "url('/destinations/xmass-family.jpg')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 rounded-xl bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 items p-5 flex flex-col justify-between gap-10 w-1/2">
        <h2 className="font-bold text-2xl underline text-white">
          Christmas Festive
        </h2>
        <h1 className="text-5xl text-white font-bold">25% Extra Discount</h1>
        <Button className="bg-transparent border border-white font-bold hover:bg-white hover:text-black">
          Book Now
        </Button>
      </div>
    </section>
  );
};

export default PackageBanner;
