"use client";

import BannerCard from "@/components/customUI/BannerCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Package } from "@/lib/types";
import { Loader2, LocateIcon, MapPin, X } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState, useTransition } from "react";

interface PromoPackagesProps {
  promoPackages: Package[];
}

const locations = [
  "All",
  "Mombasa",
  "Nairobi",
  "Zanzibar",
  "Nakuru",
  "Dubai",
  "Singapore",
  "China",
  "South Africa",
];

const Filter = ({ promoPackages }: PromoPackagesProps) => {
  const router = useRouter();
  const [selectedLocation, setSelectedLocation] = useState("");
  const [searchText, setSearchText] = useState("");
  const [isPending, startTransition] = useTransition();
  const [isLoading, setIsLoading] = useState(false);

  const updateUrl = (location: string, search: string) => {
    const query = new URLSearchParams();
    if (location && location !== "All") {
      query.set("location", location);
    }
    if (search.trim()) {
      query.set("search", search.trim());
    }
    startTransition(() => {
      router.push(`/destinations?${query.toString()}`);
    });
  };

  const handleLocationClick = (location: string) => {
    const newSelection = selectedLocation === location ? "" : location;
    setSelectedLocation(newSelection);
    updateUrl(newSelection, searchText);

    // if (!newSelection || newSelection === "All") {
    //   router.push("destinations");
    // } else {
    //   router.push(`/destinations?location=${encodeURIComponent(newSelection)}`);
    // }
  };

  const handleSearch = () => {
    updateUrl(selectedLocation, searchText);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <h1 className="font-bold text-xl">Search Location</h1>
        <p className="text-gray-600">
          Simply write the location name and press the search button (i.e
          Nairobi or Kisumu)
        </p>
        <div className="flex items-center gap-3">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Where</Label>
            <Input
              type="search"
              id="search"
              placeholder="Search A Location"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
          <MapPin />
        </div>
      </div>
      <div>
        <h1 className="font-semibold text-lg">Filter by Location</h1>
        <div className="flex py-4 px-1 gap-2 flex-wrap ">
          {locations.map((location) => (
            <Card
              key={location}
              className={`max-w-fit px-6 py-1 rounded-full cursor-pointer hover:bg-gray-200 ${
                selectedLocation === location
                  ? "border-2 border-purple-700"
                  : ""
              }`}
              onClick={() => handleLocationClick(location)}
            >
              <h1 className="text-sm">{location}</h1>
            </Card>
          ))}
        </div>
      </div>

      {isPending ? (
        <Button disabled>
          <Loader2 className="animate-spin" />
          Searching...
        </Button>
      ) : (
        <Button onClick={handleSearch}>Search</Button>
      )}
      <div className="h-fit">
        {promoPackages[0] && <BannerCard promoDetails={promoPackages[0]} />}
      </div>
    </div>
  );
};

export default Filter;
