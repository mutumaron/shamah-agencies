import React from "react";
import { Card } from "../ui/card";
import { Dot } from "lucide-react";

type Props = {
  data: {
    color: string;
    title: string;
  };
};

const MainBar = ({ data }: Props) => {
  return (
    <Card className="flex items-center justify-center w-fit px-2">
      <Dot size={35} color={data.color} />
      <h1 className="font-semibold">{data.title}</h1>
    </Card>
  );
};

export default MainBar;
