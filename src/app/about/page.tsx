"use client";

import PromoCard from "@/components/custom/About/PromoCard";
import Values from "@/components/custom/About/Values";
import CardGrid from "@/components/custom/LifeAtOnyx/CardGrid";
import Hero from "@/components/custom/LifeAtOnyx/Hero";
import OurStory from "@/components/custom/LifeAtOnyx/OurStory";
import Team from "@/components/custom/LifeAtOnyx/Team";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <Hero />
      <CardGrid />
      <div>
        <OurStory />
      </div>
      <Values />
      <Team />
      <PromoCard />
    </div>
  );
};

export default AboutPage;
