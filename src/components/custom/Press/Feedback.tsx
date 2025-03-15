import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { TestimonialData } from "@/data/data";
import React from "react";
import Testimonial from "./Testimonial";

const Feedback = () => {
  return (
    <div className="py-10 px-5 flex flex-col lg:mx-16 md:items-center">
      <h1 className="pb-10 text-xl font-semibold">
        What our Users say about our platform
      </h1>
      <Carousel>
        <CarouselContent className="md:w-3/4">
          {TestimonialData.map((test) => (
            <CarouselItem key={test.id}>
              <Testimonial testimonial={test} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Feedback;
