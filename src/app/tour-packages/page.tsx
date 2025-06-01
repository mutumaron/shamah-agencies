"use client";

import PackageSuspensePage from "@/components/custom/Packages/PackageSuspensePage";
import { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PackageSuspensePage />
    </Suspense>
  );
};

export default page;
