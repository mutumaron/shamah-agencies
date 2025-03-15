import PackageSuspensePage from "@/components/custom/Packages/PackageSuspensePage";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<div>Loading tour packages...</div>}>
      <PackageSuspensePage />
    </Suspense>
  );
};

export default page;
