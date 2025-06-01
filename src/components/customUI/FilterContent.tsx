"use client";

import { Label } from "@radix-ui/react-label";
import {
  Calendar,
  LocateIcon,
  MapPin,
  Package,
  Pin,
  School,
  Search,
  SearchIcon,
  User,
} from "lucide-react";
import React, { useState, useTransition } from "react";
import { FaRegBuilding, FaHouseChimney } from "react-icons/fa6";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import { useRouter } from "next/navigation";

const types = [
  "Safari",
  "Beach",
  "Hiking",
  "Corporate",
  "Christmass",
  "Honey Moon",
  "Valentines",
  "Cruise",
  "Camping",
];

const locations = [
  "kenya",
  "nairobi",
  "zanzibar",
  "tanzania",
  "Dubai",
  "Singapore",
  "China",
  "South Africa",
];

const FilterContent = () => {
  const router = useRouter();
  const [selectedLocation, setSelectedLocation] = useState("");
  const [searchText, setSearchText] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleSearchClick = (
    location: string,
    search: string,
    type: string
  ) => {
    const query = new URLSearchParams();
    if (location) {
      query.set("destination", location);
    }
    if (search.trim()) {
      query.set("search", search.trim());
    }
    if (type) {
      query.set("type", type);
    }
    startTransition(() => {
      router.push(`/tour-packages?${query.toString()}`);
    });
  };

  return (
    <Card className=" items-end justify-center gap-4 p-4 hidden lg:flex">
      <div className="flex flex-col gap-2">
        <Label htmlFor="location">Where</Label>
        <div className="flex items-center gap-2">
          <Select
            value={selectedLocation}
            onValueChange={(value) => setSelectedLocation(value)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Tour Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Tour Location</SelectLabel>
                {locations.map((item, index) => (
                  <SelectItem key={index} value={item}>
                    <div className="flex items-center gap-5">
                      <h1>{item}</h1>
                    </div>
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <MapPin />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="location">Type</Label>
        <div className="flex items-center gap-2">
          <Select
            value={selectedType}
            onValueChange={(value) => setSelectedType(value)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Type</SelectLabel>
                {types.map((item, index) => (
                  <SelectItem key={index} value={item}>
                    <div className="flex items-center gap-5">
                      <h1>{item}</h1>
                    </div>
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Package />
        </div>
      </div>
      <Button
        className="flex gap-2 "
        onClick={() =>
          handleSearchClick(selectedLocation, searchText, selectedType)
        }
      >
        Search <Search size={15} />
      </Button>
    </Card>
  );
};

export default FilterContent;
