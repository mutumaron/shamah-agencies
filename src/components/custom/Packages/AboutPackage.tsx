import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { faqs } from "@/data/data";
import { Package } from "@/lib/types";
import React from "react";
import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";

interface AboutPageProps {
  about: Package;
}

const AboutPackage = ({ about }: AboutPageProps) => {
  return (
    <section className="flex flex-col gap-5">
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-xl">About This Tour</h1>
        <p className="text-gray-700">{about.about}</p>
      </div>
      <Separator />
      <div className="flex flex-col gap-4 ">
        <h1 className="font-bold text-xl">Trip Highlights</h1>
        <ul className="flex flex-col gap-1">
          {about.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-2 items-center">
              <FaCircleCheck className="text-purple-700" />
              <p>{highlight}</p>
            </li>
          ))}
        </ul>
      </div>
      <Separator />
      <div className="flex flex-col gap-4 ">
        <h1 className="font-bold text-xl">Iclude/Exclude</h1>
        <ul className="flex gap-32">
          <div>
            {about.include.map((item, index) => (
              <li key={index} className="flex gap-2 items-center">
                <FaCircleCheck className="text-purple-700" />
                <p>{item}</p>
              </li>
            ))}
          </div>
          <div>
            {about.exclude.map((item, index) => (
              <li key={index} className="flex gap-2 items-center">
                <FaCircleXmark />
                <p>{item}</p>
              </li>
            ))}
          </div>
        </ul>
      </div>
      <Separator />
      <div className="flex flex-col gap-4 ">
        <h1 className="font-bold text-xl">Tour Plan</h1>
        <p className="text-gray-700">
          Castle in one day is next to impossible. Designed specifically for
          trave arelimited time in London ws you to check off a range of
          southern England‘s are historical{" "}
        </p>
        <div className="px-10">
          <Accordion type="single" collapsible className="w-full">
            {about.plan.days.map((item, index) => {
              const colonIndex = item.indexOf(":");
              if (colonIndex !== -1) {
                const dayLabel = item.substring(0, colonIndex + 1); // e.g., "Day 1:"
                const dayContent = item.substring(colonIndex + 1); // e.g., " Arrival"
                return (
                  <div key={index} className="flex items-center py-2">
                    <span className="bg-purple-600 text-xs text-white px-2 py-1 rounded-lg">
                      {dayLabel}
                    </span>
                    <span className="ml-2 text-gray-700">{dayContent}</span>
                  </div>
                );
              } else {
                return (
                  <p key={index} className="py-2">
                    {item}
                  </p>
                );
              }
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default AboutPackage;
