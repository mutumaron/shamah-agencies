import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const PromoCard = () => {
  return (
    <div className="relative">
      <Image
        alt="icon"
        src={"/images/tool_right_grid.svg"}
        width={100}
        height={100}
        className="absolute right-12 hidden lg:block"
      />
      <div className="px-5 py-10 flex flex-col gap-5 bg-gray-950 rounded-lg lg:mx-10 lg:my-12 lg:flex-row lg:p-20 lg:gap-20">
        <div className="text-white flex flex-col gap-10">
          <h1 className="font-bold text-5xl">Become an agent today .</h1>
          <p className="text-xl font-extralight text-gray-300">
            Use Onyx platform to reach a wide market of .Join our vast network
            of Landlords.
          </p>
          <div className="flex flex-col gap-4">
            <Button
              variant={"outline"}
              className="flex gap-2 text-black lg:w-1/2"
            >
              Sign up Free <ArrowRight size={18} />
            </Button>
            <div className="flex gap-4 items-center">
              <FaGoogle size={23} />
              <p>Sign up with Google</p>
            </div>
            <div className="flex gap-4 items-center">
              <FaFacebook size={23} />
              <p>Sign up with Facebook</p>
            </div>
            <h1>Talk to experts</h1>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-white">
          <h1 className="text-lg">Features</h1>
          <ul className="flex flex-col gap-2 text-gray-300 list-disc pl-5">
            <li>24 x 7 Support</li>
            <li>120+ Integrations</li>
            <li>3000+ real devices & browsers</li>
            <li>Detailed analytic reporting</li>
            <li>Testing locally hosted pages</li>
            <li>Geo-location testing</li>
          </ul>
        </div>
      </div>
      <Image
        alt="icon"
        src={"/images/tool_left_grid.svg"}
        width={100}
        height={100}
        className="absolute bottom-0 left-12 hidden lg:block"
      />
    </div>
  );
};

export default PromoCard;
