import { Package } from "@/lib/types";
import Image from "next/image";
import React from "react";
import { FaBox, FaClock, FaGlobe, FaStar, FaUser } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";

interface DetailsProps {
  details: Package;
}

const PackageDetails = ({ details }: DetailsProps) => {
  return (
    <section className="flex flex-col gap-5">
      <div className="flex flex-col gap-5">
        <h1 className="font-bold text-4xl">{details.title}</h1>
        <div className="flex gap-5 text-gray-700">
          <div className="flex gap-3 items-center">
            <FaLocationPin />
            <p>{details.location}</p>
          </div>
          <div className="flex gap-1 items-center">
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar color="gold" />

            <p>({details.reviews}) Reviews</p>
          </div>
        </div>
      </div>
      <div className="flex gap-10 flex-col lg:flex-row">
        <Image
          src={details.imageurl1}
          alt="title"
          width={800}
          height={800}
          className="lg:w-[650px] lg:h-[400px] rounded-lg"
        />
        <div className="flex gap-5 lg:h-[400px] lg:flex-col">
          <Image
            src={details.imageurl2}
            alt="title"
            width={700}
            height={700}
            className=" lg:h-[190px] lg:w-[300px] rounded-lg w-1/2"
          />
          <Image
            src={details.imageurl3}
            alt="title"
            width={700}
            height={700}
            className=" lg:h-[190px] lg:w-[300px] w-1/2 rounded-lg"
          />
        </div>
      </div>
      <div className="flex justify-between lg:pr-3 items-center flex-wrap">
        <div className="lg:flex justify-between lg:w-2/3 grid grid-cols-2 gap-12">
          <div className="flex gap-2 items-center">
            <div className="bg-purple-300 p-2 flex items-center rounded-md h-8 w-8">
              <FaClock className="text-purple-700" />
            </div>
            <div className="flex flex-col">
              <p className="text-gray-600">Duration</p>
              <h1 className="font-bold">{details.duration} Days</h1>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-purple-300 p-2 flex items-center rounded-md h-8 w-8">
              <FaBox className="text-purple-700" />
            </div>
            <div className="flex flex-col">
              <p className="text-gray-600">Type</p>
              <h1 className="font-bold">{details.type}</h1>
            </div>
          </div>{" "}
          <div className="flex gap-2 items-center">
            <div className="bg-purple-300 p-2 flex items-center rounded-md h-8 w-8">
              <FaUser className="text-purple-700" />
            </div>
            <div className="flex flex-col">
              <p className="text-gray-600">Group Size</p>
              <h1 className="font-bold">{details.guests} Guests</h1>
            </div>
          </div>{" "}
          <div className="flex gap-2 items-center">
            <div className="bg-purple-300 p-2 flex items-center rounded-md h-8 w-8">
              <FaGlobe className="text-purple-700" />
            </div>
            <div className="flex flex-col">
              <p className="text-gray-600">Languages</p>
              <h1 className="font-bold">{details.language}</h1>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-gray-600 mt-5 lg:mt-0">
            From{" "}
            <span className="font-bold text-purple-800 text-3xl">
              Kes {details.price}
            </span>
            <span> 7 days</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default PackageDetails;
