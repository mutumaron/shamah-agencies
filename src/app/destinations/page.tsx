"use client";

import DestinationPageSuspense from "@/components/custom/Destinations/DestinationPageSuspense";

export const dynamic = "force-dynamic";

const page = () => {
  return <DestinationPageSuspense />;
};

export default page;
