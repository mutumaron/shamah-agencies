"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/data";

const page = () => {
  return (
    <div className="px-10 py-10 flex flex-col gap-5">
      <h1 className="text-4xl font-semibold">Frequently Asked Questions</h1>
      <div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((item) => (
            <AccordionItem value={item.question} key={item.question}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default page;
