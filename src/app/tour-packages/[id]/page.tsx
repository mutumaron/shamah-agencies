"use client";

import SinglePackage from "@/components/custom/Packages/SinglePackage";
import useSWR from "swr";
import React from "react";
import { useParams } from "next/navigation";
import { Package } from "@/lib/types";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const page = () => {
  const { id } = useParams();
  const { data, error } = useSWR<{ data: Package }>(
    id ? `/api/packages/${id}` : null,
    fetcher
  );

  if (error) return null;
  if (!data) return null;

  const packageData = data.data;
  return (
    <div className="">
      <SinglePackage packageData={packageData} />
    </div>
  );
};

export default page;
