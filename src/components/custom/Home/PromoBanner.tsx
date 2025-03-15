import BannerCard from "@/components/customUI/BannerCard";
import { Package } from "@/lib/types";
import Image from "next/image";
import React from "react";

interface PromoPackagesProps {
  promoPackages: Package[];
}

const PromoBanner = ({ promoPackages }: PromoPackagesProps) => {
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
