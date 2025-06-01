"use client";

import { Destination, Package } from "@/lib/types";
import { createContext, useContext, useEffect, useState } from "react";

type DataContextType = {
  destinations: Destination[];
  packages: Package[];
  loading: boolean;
  error: string | null;
};

const DataContext = createContext<DataContextType>({
  destinations: [],
  packages: [],
  loading: true,
  error: null,
});

export const useDataContext = () => useContext(DataContext);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [destRes, packRes] = await Promise.all([
          fetch("/api/destinations"),
          fetch("/api/packages"),
        ]);

        if (!destRes.ok || !packRes.ok) {
          throw new Error("Failed to fetch data");
        }

        const destData = await destRes.json();
        const packData = await packRes.json();

        setDestinations(destData.data);
        setPackages(packData.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ destinations, packages, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};
