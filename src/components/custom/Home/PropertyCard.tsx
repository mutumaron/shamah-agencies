"use client";

import Image from "next/image";
import React from "react";
import { MdElectricBolt } from "react-icons/md";
import { FaBath, FaBed, FaClock, FaSquare, FaStar } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import { BsHeart, BsPlusSquare } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";
import { Package } from "@/lib/types";
import Link from "next/link";
import { useTheme } from "next-themes";

interface GridCardProps {
  pack: Package;
}

const PropertyCard = ({ pack }: GridCardProps) => {
  const { theme } = useTheme();
  return (
    <Link
      href={`/tour-packages/${pack.id}`}
      className=" overflow-hidden group rounded-lg cursor-pointer"
    >
      <div className="relative">
        <Image
          src={pack.imageurl1}
          alt={pack.title}
          width={300}
          height={300}
          className="w-full object-cover group-hover:scale-110 transition-all duration-300 rounded-lg"
        />
        <h1
          className={`px-6 absolute bottom-4 left-4 py-1.5 text-sm ${
            theme == "dark" ? "bg-black" : "bg-gray-900"
          }  w-fit text-white rounded-lg`}
        >
          <span className="text-base font-bold">${pack.price}</span>
        </h1>
        <div
          className={`flex items-center space-x-1 px-6 absolute top-4 left-4 py-2 text-sm ${
            theme == "dark" ? "bg-black" : "bg-gray-100 "
          } w-fit  rounded-md font-bold`}
        >
          <MdElectricBolt />
          <span>{pack.tag}</span>
        </div>
      </div>
      <div className="py-5">
        <h1
          className={`mt-4 group-hover:underline  ${
            theme == "dark" ? "text-white" : "text-gray-900"
          } font-bold text-lg`}
        >
          {pack.title}
        </h1>
        <p className="text-sm text-gray-500 mt-3">{pack.location}</p>
        <div className="flex items-center mt-6 justify-between w-full lg:w-[80%]">
          <div className="flex items-center space-x-2">
            <FaUser className="text-gray-500" />
            <p className="text-xs text-gray-600">{pack.guests} Guests</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaClock className="text-gray-500" />
            <p className="text-xs text-gray-600">{pack.duration} Days</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaStar className="text-gray-500" />
            <p className="text-xs text-gray-600">{pack.reviews} Rev</p>
          </div>
        </div>
        <div className="w-full h-[1.2px] mt-4 mb-4 bg-gray-500 opacity-15"></div>
        <div className="flex items-center justify-between">
          <h1 className="text-xs text-gray-600">Limited</h1>
          <div className="flex items-center space-x-4 text-gray-500">
            <BiLinkExternal />
            <BsPlusSquare />
            <BsHeart />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
