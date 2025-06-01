"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, LocateIcon, Search } from "lucide-react";
import React, { useEffect, useMemo, useState, useTransition } from "react";
import PackageBanner from "./PackageBanner";
import { useRouter, useSearchParams } from "next/navigation";
import { Package } from "@/lib/types";
import BannerCard from "@/components/customUI/BannerCard";
import { useDebounce } from "@/hooks/Debounce";
import { useDataContext } from "@/store/DataContext";
import { useTheme } from "next-themes";

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
  const { packages } = useDataContext();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedType, setSelectedType] = useState("");
  const [searchText, setSearchText] = useState("");
  const [isPending, startTransition] = useTransition();
  const [suggestions, setSuggestions] = useState<Package[]>([]);
  const { theme } = useTheme();

  const debouncedSearch = useDebounce(searchText, 300);
  const destination = searchParams.get("destination") || "";

  useEffect(() => {
    const initialType = searchParams.get("type") || "";
    const initialSearch = searchParams.get("search") || "";
    setSelectedType(initialType);
    setSearchText(initialSearch);
  }, []);

  // 🔄 Update URL when search or type changes (live)
  useEffect(() => {
    const query = new URLSearchParams();
    if (selectedType && selectedType !== "All") {
      query.set("type", selectedType);
    } else {
      query.delete("type");
    }
    if (debouncedSearch.trim()) {
      query.set("search", debouncedSearch.trim());
    } else {
      query.delete("search");
    }
    if (destination) {
      query.set("destination", destination);
    }

    startTransition(() => {
      router.replace(`/tour-packages?${query.toString()}`);
    });
  }, [debouncedSearch, selectedType]);

  // 🔎 Filter suggestions on the fly
  useEffect(() => {
    if (!debouncedSearch) {
      setSuggestions([]);
      return;
    }

    const lowerQuery = debouncedSearch.toLowerCase();
    const filtered = packages.filter((pkg) =>
      pkg.title.toLowerCase().includes(lowerQuery)
    );
    setSuggestions(filtered.slice(0, 6)); // optional: limit results
  }, [debouncedSearch, packages]);

  const handleTypeClick = (type: string) => {
    const newType = selectedType === type ? "" : type;
    setSelectedType(newType);
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
          <div className=" relative grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Package</Label>
            <Input
              type="search"
              id="search"
              placeholder="Search A Package"
              value={searchText}
              autoComplete="off"
              onChange={(e) => setSearchText(e.target.value)}
            />
            {debouncedSearch && suggestions.length > 0 && (
              <div
                className={`absolute z-10 ${
                  theme === "light" ? "bg-white" : "bg-[#09090b]"
                } top-16 border shadow rounded mt-1 w-full max-h-48 overflow-auto`}
              >
                {suggestions.map((pkg) => (
                  <div
                    key={pkg.id}
                    className={`px-4 py-2 ${
                      theme === "light" ? "hover:bg-gray-100" : "hover:bg-black"
                    } cursor-pointer text-sm`}
                    onClick={() => {
                      setSearchText(pkg.title);
                      setSuggestions([]);
                    }}
                  >
                    {pkg.title}
                  </div>
                ))}
              </div>
            )}
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
              onClick={() => handleTypeClick(type)}
            >
              <h1 className="text-sm">{type}</h1>
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
        {promoPackages[1] && <BannerCard promoDetails={promoPackages[1]} />}
      </div>
    </div>
  );
};

export default FilterPackage;
