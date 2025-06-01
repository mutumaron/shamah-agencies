import Destinations from "@/components/custom/Home/Destinations";
import Hero from "@/components/custom/Home/Hero";
import PromoBanner from "@/components/custom/Home/PromoBanner";
import Properties from "@/components/custom/Home/Properties";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Hero />
      <div
        style={{ backgroundImage: "url('/images/bg-hero-2.png')" }}
        className="inset-0 bg-cover bg-center"
      >
        <Destinations />
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center mb-5">
          <p className="text-center bg-purple-100 mb-2 text-purple-600 font-semibold text-sm w-fit rounded-lg py-1 px-2">
            Explore The World
          </p>
          <h1 className="text-center font-bold text-3xl">
            Our Amazing Featured Tour Packages
          </h1>
        </div>
        <Properties />
      </div>
      <PromoBanner />
    </div>
  );
}
