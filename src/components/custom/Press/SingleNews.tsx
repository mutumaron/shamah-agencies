import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  blog: {
    id: number;
    image: string;
    title: string;
    date: string;
  };
};

const SingleNews = ({ blog }: Props) => {
  return (
    <Card className="flex gap-5 border-0 shadow-none lg:flex-col">
      <Image
        src={blog.image}
        alt="News"
        width={200}
        height={200}
        className="rounded-md lg:w-full"
      />
      <div>
        <Link
          href={"/press"}
          className="text-sm font-semibold hover:underline lg:text-lg"
        >
          {blog.title}
        </Link>
        <p className="pt-3 text-gray-500 text-xs lg:text-md">{blog.date}</p>
      </div>
    </Card>
  );
};

export default SingleNews;
