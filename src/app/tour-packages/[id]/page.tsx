import SinglePackageSuspense from "@/components/custom/Packages/SingePackageSuspense";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SinglePackageSuspense />
    </Suspense>
  );
};

export default page;
