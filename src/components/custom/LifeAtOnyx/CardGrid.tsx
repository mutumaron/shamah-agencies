import React from "react";
import { Card } from "@/components/ui/card";
import { GlobeLock, MapPin, Rocket, Users } from "lucide-react";

const CardGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-10 px-5 py-10 lg:flex lg:justify-center">
      <Card className="p-6">
        <GlobeLock size={20} />
        <h1 className="text-gray-500 pt-4">Secure Online Payment</h1>
      </Card>
      <Card className="p-6">
        <Users size={20} />
        <h1 className="text-gray-500 pt-4">30+ employees</h1>
      </Card>
      <Card className="p-6">
        <MapPin size={20} />
        <h1 className="text-gray-500 pt-4">2 Offices</h1>
      </Card>
      <Card className="p-6">
        <Rocket size={20} />
        <h1 className="text-gray-500 pt-4">2024-Founding year</h1>
      </Card>
    </div>
  );
};

export default CardGrid;
