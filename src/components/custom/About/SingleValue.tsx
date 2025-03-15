import Image from "next/image";
import React from "react";

type Props = {
  value: {
    id: number;
    title: string;
    content: string;
    image: string;
  };
};

const SingleValue = ({ value }: Props) => {
  return (
    <div className="flex flex-col gap-6">
      <Image alt={value.title} src={value.image} width={50} height={50} />
      <div className="flex flex-col gap-3">
        <h1 className="text-xl font-bold">{value.title}</h1>
        <p className="text-gray-500">{value.content}</p>
      </div>
    </div>
  );
};

export default SingleValue;
