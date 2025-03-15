import { ContactForm } from "@/components/custom/Contact/ContactForm";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="px-5 py-10 flex flex-col gap-10 md:flex-row md:items-center md:py-0">
      <div className="flex flex-col gap-7 flex-1">
        <h1 className="text-5xl font-bold">
          Schedule a time with the Shamah Agencies team to:{" "}
        </h1>
        <div className="flex flex-col gap-5">
          <div className="flex gap-2">
            <div className="bg-purple-300 rounded-full p-1">
              <Check size={15} color="gray" />
            </div>
            <p className="text-sm text-gray-600">
              Get a live walkthrough of the Shamah Agencies Operation
            </p>
          </div>
          <div className="flex gap-2">
            <div className="bg-purple-300 rounded-full p-1">
              <Check size={15} color="gray" />
            </div>
            <p className="text-sm text-gray-600">
              Get a live walkthrough of the Onyx-Homes platform
            </p>
          </div>
          <div className="flex gap-2">
            <div className="bg-purple-300 rounded-full p-1">
              <Check size={15} color="gray" />
            </div>
            <p className="text-sm text-gray-600">
              Get a live walkthrough of the Onyx-Homes platform
            </p>
          </div>
        </div>

        <h1 className="text-gray-700">
          Looking for support? Connect with our{" "}
          <span className="text-purple-800 hover:underline cursor-pointer">
            Support team
          </span>
        </h1>
      </div>
      <Card className="p-5 md:my-7">
        <ContactForm />
      </Card>
    </div>
  );
};

export default page;
