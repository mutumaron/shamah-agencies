import Feedback from "@/components/custom/Press/Feedback";
import Filter from "@/components/custom/Press/Filter";
import Hero from "@/components/custom/Press/Hero";
import NewsGrid from "@/components/custom/Press/NewsGrid";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <Filter />
      <NewsGrid />
      <Feedback />
    </div>
  );
};

export default page;
