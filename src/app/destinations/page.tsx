"use client";

import DestinationPageSuspense from "@/components/custom/Destinations/DestinationPageSuspense";
import { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DestinationPageSuspense />
    </Suspense>
  );
};

export default page;
