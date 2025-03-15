import { Separator } from "@/components/ui/separator";
import { Dot } from "lucide-react";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col px-5 lg:px-10 pt-12">
      <div className="flex flex-col flex-1">
        <div className="flex flex-col gap-2">
          <div className="flex gap-5">
            <Link
              href={"/about"}
              className="font-bold cursor-pointer text-gray-500 hover:text-black active:text-black"
            >
              About Us
            </Link>
            <Link
              href={"/life-at-onyx"}
              className="font-semibold text-gray-500 cursor-pointer hover:text-black"
            >
              Life at OyxHomes
            </Link>
            <div className="flex items-center relative">
              <Link
                href={"/press"}
                className="font-semibold text-gray-500 cursor-pointer hover:text-black"
              >
                Press
              </Link>
              <Dot className="text-rose-600" size={25} />
            </div>
          </div>
          <Separator className="h-1 lg:w-2/3 w-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
