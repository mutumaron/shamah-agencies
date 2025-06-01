"use client";

import Confirm from "@/components/custom/Confirm/Confirm";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Confirm />;
    </Suspense>
  );
};

export default page;
