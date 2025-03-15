import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";
import { ArrowUpRight, Link } from "lucide-react";
import { useRouter } from "next/navigation";

type Props = {
  img: string;
  title: string;
  tours: number;
  param: string;
};

const DestinationCards = ({ img, title, tours, param }: Props) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/tour-packages?destination=${encodeURIComponent(param)}`);
  };
  return (
    <Card className="relative flex">
      <Image
        src={img}
        alt="title"
        width={700}
        height={700}
        className="h-[450px] rounded-lg w-full"
      />
      <Card className="absolute bottom-10 right-1/4 flex justify-between w-1/2 p-2">
        <div>
          <h1
            onClick={handleClick}
            className="font-bold text-xl hover:underline cursor-pointer   "
          >
            {title}
          </h1>
          <p className="text-gray-600">{tours} tours</p>
        </div>
        <ArrowUpRight className="cursor-pointer" />
      </Card>
    </Card>
  );
};

export default DestinationCards;
