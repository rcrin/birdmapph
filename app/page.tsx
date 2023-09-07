import React from "react";
import PHMap from "@/components/PHMap";
import BirdListCard from "@/components/BirdListCard";
import BirdDescCard from "@/components/BirdDescCard";
export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center mb-5">
        <span className="orange_gradient text-center">
          Bird Distribution Map
        </span>
        <br className="max-md:hidden" />
      </h1>
      <div className="grid grid-cols-3 divide-x-0 w-full">
        <BirdListCard />
        <PHMap />
        <BirdDescCard />
      </div>
    </section>
  );
}
