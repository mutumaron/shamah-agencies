import SinglePackageSuspense from "@/components/custom/Packages/SingePackageSuspense";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<div>Loading tour packages...</div>}>
      <SinglePackageSuspense />
    </Suspense>
  );
};

export default page;
