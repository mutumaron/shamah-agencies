import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import { FaLinkedin } from "react-icons/fa";

const Team = () => {
  return (
    <div className="px-5 py-12 lg:px-10">
      <h1 className="py-10 font-bold text-2xl lg:text-center lg:text-3xl">
        Our Team
      </h1>
      <div className="grid gap-10 lg:grid-cols-3">
        <Card className="border-none shadow-none flex flex-col ">
          <Image
            src={"/images/ronny.png"}
            alt="Leaders"
            width={400}
            height={400}
            className="w-full rounded-lg"
          />
          <div className="flex items-center gap-10 pt-4 justify-between">
            <div>
              <h1 className="font-bold text-lg">Ronny Mutembei</h1>
              <p className="text-sm text-gray-500">
                Co-Founder and Frontend Developer
              </p>
            </div>
            <FaLinkedin size={30} />
          </div>
        </Card>
        <Card className="border-none shadow-none flex flex-col ">
          <Image
            src={"/images/bonnie.png"}
            alt="Leaders"
            width={400}
            height={400}
            className="w-full rounded-lg"
          />
          <div className="flex items-center gap-10 pt-4 justify-between">
            <div>
              <h1 className="font-bold text-lg">Boniface Mwenda</h1>
              <p className="text-sm text-gray-500">
                Co-Founder and Backend Developer
              </p>
            </div>
            <FaLinkedin size={30} />
          </div>
        </Card>
        <Card className="border-none shadow-none flex flex-col ">
          <Image
            src={"/images/ronny.png"}
            alt="Leaders"
            width={400}
            height={400}
            className="w-full rounded-lg"
          />
          <div className="flex items-center gap-10 pt-4 justify-between">
            <div>
              <h1 className="font-bold text-lg">Ronny Mutembei</h1>
              <p className="text-sm text-gray-500">
                Co-Founder and Frontend Developer
              </p>
            </div>
            <FaLinkedin size={30} />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Team;
