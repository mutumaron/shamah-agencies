import DestinationPageSuspense from "@/components/custom/Destinations/DestinationPageSuspense";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<div>Loading tour packages...</div>}>
      <DestinationPageSuspense />
    </Suspense>
  );
};

export default page;
