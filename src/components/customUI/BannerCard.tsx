import React from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Package } from "@/lib/types";
import Link from "next/link";

interface PromoDetailsProps {
  promoDetails: Package;
}

const BannerCard = ({ promoDetails }: PromoDetailsProps) => {
  return (
    <section className="relative h-full rounded-lg">
      <div
        className="absolute inset-0 bg-cover bg-center rounded-xl"
        style={{ backgroundImage: `url(${promoDetails.imageurl2})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 rounded-xl bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 items p-5 flex flex-col justify-between gap-10 w-1/2">
        <h2 className="font-bold text-2xl underline text-white">
          {promoDetails.location}
        </h2>
        <h1 className="text-5xl text-white font-bold">25% Extra Discount</h1>
        <Link
          href={`/tour-packages/${promoDetails.id}`}
          className="bg-transparent border text-center p-2 rounded-lg text-white border-white font-bold hover:bg-white hover:text-black"
        >
          Book Now
        </Link>
      </div>
    </section>
  );
};

export default BannerCard;
