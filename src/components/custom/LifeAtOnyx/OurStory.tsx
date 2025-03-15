import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const OurStory = () => {
  return (
    <div className="py-12 px-5 flex flex-col gap-10 lg:flex-row items-center lg:pl-10 lg:pr-0 lg:gap-20">
      <div className="flex flex-col gap-5">
        <h1 className="font-bold text-2xl">Our Story</h1>
        <p className="text-gray-600">
          Welcome to Onyx Homes – your trusted partner for all things real
          estate. Whether you're looking to rent a place to call home, invest in
          your dream property, or embark on a rewarding career as an agent,
          we’re here to make the process simple and enjoyable. With a focus on
          curated listings, transparent guidance, and market expertise, Onyx
          Homes is dedicated to helping clients and agents alike thrive in an
          ever-evolving real estate landscape. Join us at Onyx Homes and
          experience a new level of service, integrity, and opportunity in your
          journey.
        </p>
        <Button className="mt-7 w-1/2">Find the perfect house</Button>
      </div>
      <Image
        src={"/images/hiring-grid.png"}
        alt="About Onyx"
        height={500}
        width={500}
      />
    </div>
  );
};

export default OurStory;
