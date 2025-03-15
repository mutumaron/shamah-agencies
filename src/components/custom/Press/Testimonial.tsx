import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {
  testimonial: {
    id: string;
    content: string;
    name: string;
    date: string;
    image: string;
    rating: number;
  };
};

const Testimonial = ({ testimonial }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex">
          {Array.from({ length: 5 }, (_, index) => (
            <Star
              key={index}
              className={`text-yellow-500 ${
                index < testimonial.rating ? "fill-yellow-500" : "fill-gray-300"
              }`}
            />
          ))}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>{testimonial.content}</p>
      </CardContent>
      <CardFooter>
        <div className="flex gap-3 items-center">
          <Image
            src={testimonial.image}
            alt="Author"
            width={50}
            height={50}
            className="rounded-full w-1/6 h-1/6"
          />
          <div className="flex flex-col gap-1">
            <h2 className="font-bold">{testimonial.name}</h2>
            <p className="text-sm text-gray-400">{testimonial.date}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Testimonial;
