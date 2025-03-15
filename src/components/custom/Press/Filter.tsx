import { Card } from "@/components/ui/card";
import React from "react";

const Filter = () => {
  return (
    <div className="flex py-10 px-5 gap-2 flex-wrap lg:px-10">
      <Card className="max-w-fit px-6 py-1 rounded-full cursor-pointer hover:bg-gray-200">
        <h1 className="text-sm">All</h1>
      </Card>
      <Card className="max-w-fit px-6 py-1 rounded-full cursor-pointer hover:bg-gray-200">
        <h1 className="text-sm">Company</h1>
      </Card>
      <Card className="max-w-fit px-6 py-1 rounded-full cursor-pointer hover:bg-gray-200">
        <h1 className="text-sm">Product</h1>
      </Card>
      <Card className="max-w-fit px-6 py-1 rounded-full cursor-pointer hover:bg-gray-200">
        <h1 className="text-sm">Policy</h1>
      </Card>
      <Card className="max-w-fit px-6 py-1 rounded-full cursor-pointer hover:bg-gray-200">
        <h1 className="text-sm">Community</h1>
      </Card>
      <Card className="max-w-fit px-6 py-1 rounded-full cursor-pointer hover:bg-gray-200">
        <h1 className="text-sm">Rentals</h1>
      </Card>
      <Card className="max-w-fit px-6 py-1 rounded-full cursor-pointer hover:bg-gray-200">
        <h1 className="text-sm">Ownership</h1>
      </Card>
    </div>
  );
};

export default Filter;
