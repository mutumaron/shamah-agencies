import MainBar from "@/components/customUI/MainBar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Dot } from "lucide-react";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col px-5 lg:px-10 ">
      <div className="flex flex-col flex-1">
        <div className="flex flex-col gap-2">
          <div className="flex w-full justify-center">
            <div className="flex flex-col gap-10 items-center py-10 lg:w-2/3">
              <MainBar
                data={{ color: "green", title: "About Shamah Agencies." }}
              />
              <h1 className="text-3xl text-center font-bold lg:text-5xl">
                GET <span className="text-purple-600">YOUR DREAM</span> VACATION{" "}
                <span className="text-orange-600">WITH US </span>
                TODAY.
              </h1>
              <p className="text-center text-gray-500">
                Need a custom made website or mobile application for your
                bussines? At Onyx Developers we will make this possible with our
                fast and mordern Applications.At affordable prices you can get
                your bussines online to reach more and more customers.
              </p>
              <Button>Find Your Dream Vacation</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
