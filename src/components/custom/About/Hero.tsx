import { Separator } from "@/components/ui/separator";
import { Dot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col px-5 lg:px-10 pt-12 lg:flex-row">
      <div className="flex flex-col flex-1">
        <div className="flex flex-col gap-2">
          <div className="flex gap-5">
            <Link
              href={"/about"}
              className="font-bold cursor-pointer text-gray-500 hover:text-black"
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
          <div className="pt-12 flex flex-col gap-5">
            <h1 className="text-7xl font-bold">About</h1>
            <h2 className="text-gray-500 font-bold text-5xl">Onyx Homes</h2>
            <h3 className="text-2xl font-bold">Your dream house is here.</h3>
            <p className="text-gray-500">
              LambdaTest is on a mission to be the go-to cloud test
              orchestration and execution platform for millions of testers and
              developers, enterprises, SMBs, small teams, and open source
              projects to enable them to go-to-market faster.
            </p>
          </div>
        </div>
      </div>
      <div className="flex">
        <Image
          src={"/images/about-main.svg"}
          alt="About main svg"
          height={500}
          width={500}
        />
      </div>
    </div>
  );
};

export default Hero;
