"use client";

import BannerCard from "@/components/customUI/BannerCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useDebounce } from "@/hooks/Debounce";
import { Destination, Package } from "@/lib/types";
import { useDataContext } from "@/store/DataContext";
import { Loader2, LocateIcon, MapPin, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState, useTransition } from "react";

interface PromoPackagesProps {
  promoPackages: Package[];
}

const locations = [
  "All",
  "Kenya",
  "Tanzania",
  "Zanzibar",
  "Nakuru",
  "Dubai",
  "Singapore",
  "China",
  "South Africa",
];

const Filter = ({ promoPackages }: PromoPackagesProps) => {
  const { destinations } = useDataContext();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedLocation, setSelectedLocation] = useState("");
  const [searchText, setSearchText] = useState("");
  const [isPending, startTransition] = useTransition();
  const [isLoading, setIsLoading] = useState(false);
  const { theme } = useTheme();

  const [suggestions, setSuggestions] = useState<Destination[]>([]);
  const debouncedSearch = useDebounce(searchText, 300);

  useEffect(() => {
    const initialLocation = searchParams.get("location") || "";
    const initialSearch = searchParams.get("search") || "";
    setSelectedLocation(initialLocation);
    setSearchText(initialSearch);
  }, []);

  useEffect(() => {
    const query = new URLSearchParams();
    if (selectedLocation && selectedLocation !== "All") {
      query.set("location", selectedLocation);
    } else {
      query.delete("location");
    }
    if (debouncedSearch.trim()) {
      query.set("search", debouncedSearch.trim());
    } else {
      query.delete("search");
    }

    startTransition(() => {
      router.replace(`/destinations?${query.toString()}`);
    });
  }, [debouncedSearch, selectedLocation]);

  useEffect(() => {
    if (!debouncedSearch) {
      setSuggestions([]);
      return;
    }
    const lowerQuery = debouncedSearch.toLowerCase();
    const filtered = destinations.filter((dest) =>
      dest.title.toLowerCase().includes(lowerQuery)
    );
    setSuggestions(filtered.slice(0, 6));
  }, [debouncedSearch, destinations]);

  const handleLocationClick = (location: string) => {
    const newSelection = selectedLocation === location ? "" : location;
    setSelectedLocation(newSelection);
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
          <div className="relative grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Where</Label>
            <Input
              type="search"
              id="search"
              placeholder="Search A Location"
              value={searchText}
              autoComplete="off"
              onChange={(e) => setSearchText(e.target.value)}
            />
            {debouncedSearch && suggestions.length > 0 && (
              <div
                className={`absolute z-10 ${
                  theme === "light" ? "bg-white" : "bg-[#09090b]"
                }  top-16 border shadow rounded mt-1 w-full max-h-48 overflow-auto`}
              >
                {suggestions.map((dest) => (
                  <div
                    key={dest.id}
                    className={`px-4 py-2 ${
                      theme === "light" ? "hover:bg-gray-100" : "hover:bg-black"
                    }  cursor-pointer text-sm`}
                    onClick={() => {
                      setSearchText(dest.title);
                      setSuggestions([]);
                    }}
                  >
                    {dest.title}
                  </div>
                ))}
              </div>
            )}
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

      {isPending && (
        <Button disabled>
          <Loader2 className="animate-spin" />
          updating...
        </Button>
      )}
      <div className="h-fit">
        {promoPackages[0] && <BannerCard promoDetails={promoPackages[0]} />}
      </div>
    </div>
  );
};

export default Filter;
