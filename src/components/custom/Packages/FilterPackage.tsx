"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, LocateIcon, Search } from "lucide-react";
import React, { useState, useTransition } from "react";
import PackageBanner from "./PackageBanner";
import { useRouter } from "next/navigation";
import { Package } from "@/lib/types";
import BannerCard from "@/components/customUI/BannerCard";

interface PromoPackagesProps {
  promoPackages: Package[];
}

const types = [
  "All",
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

const FilterPackage = ({ promoPackages }: PromoPackagesProps) => {
  const router = useRouter();
  const [selectedType, setSelectedType] = useState("");
  const [searchText, setSearchText] = useState("");
  const [isPending, startTransition] = useTransition();

  const updateUrl = (type: string, search: string) => {
    const query = new URLSearchParams();
    if (type && type !== "All") {
      query.set("type", type);
    }
    if (search.trim()) {
      query.set("search", search.trim());
    }
    startTransition(() => {
      router.push(`/tour-packages?${query.toString()}`);
    });
  };

  const handleLocationClick = (type: string) => {
    const newSelection = selectedType === type ? "" : type;
    setSelectedType(newSelection);
    updateUrl(newSelection, searchText);

    // if (!newSelection || newSelection === "All") {
    //   router.push("destinations");
    // } else {
    //   router.push(`/destinations?location=${encodeURIComponent(newSelection)}`);
    // }
  };

  const handleSearch = () => {
    updateUrl(selectedType, searchText);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <h1 className="font-bold text-xl">Search A Package</h1>
        <p className="text-gray-600">
          Simply write the package name and press the search button (i.e Beach
          or Safari)
        </p>
        <div className="flex items-center gap-3">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Package</Label>
            <Input
              type="search"
              id="search"
              placeholder="Search A Package"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
          <Search />
        </div>
      </div>
      <div>
        <h1 className="font-semibold text-lg">Filter by Package</h1>
        <div className="flex py-4 px-1 gap-2 flex-wrap ">
          {types.map((type) => (
            <Card
              key={type}
              className={`max-w-fit px-6 py-1 rounded-full cursor-pointer hover:bg-gray-200 ${
                selectedType === type ? "border-2 border-purple-700" : ""
              }`}
              onClick={() => handleLocationClick(type)}
            >
              <h1 className="text-sm">{type}</h1>
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
        {promoPackages[1] && <BannerCard promoDetails={promoPackages[1]} />}
      </div>
    </div>
  );
};

export default FilterPackage;
