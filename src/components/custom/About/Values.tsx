import { ValuesData } from "@/data/data";
import React from "react";
import SingleValue from "./SingleValue";

const Values = () => {
  return (
    <div className="flex flex-col gap-10  px-5 py-5 lg:py-12 lg:px-10 lg:grid lg:grid-cols-3 lg:gap-12">
      <h1 className="text-4xl font-bold">Our Values</h1>
      {ValuesData.map((valData) => (
        <div key={valData.id}>
          <SingleValue value={valData} />
        </div>
      ))}
    </div>
  );
};

export default Values;
