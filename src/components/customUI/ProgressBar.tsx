"use client";

import { usePathname } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "@/styles/nprogress.css";
import { useEffect } from "react";

NProgress.configure({ showSpinner: false });

export default function ProgressBar() {
  const pathname = usePathname();
  useEffect(() => {
    NProgress.start();

    NProgress.done();
  }, [pathname]);
  return null;
}
