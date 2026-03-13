"use client";

import Image from "next/image";
import { useState } from "react";
import { DNAIcon, MoleculeIcon } from "../../common/icon";
import { tabs } from "@/src/lib/constant";



export default function HeroSection() {
  const [active, setActive] = useState("yardiq");
  const current = tabs.find((t) => t.id === active);

  return (
    <section className="w-full relative overflow-hidden flex flex-col justify-center items-center md:min-h-[calc(100vh-68px)] pt-30 pb-20">
      <div className="relative mx-auto z-10 max-w-300 w-full px-6 text-center flex flex-col items-center">
        <h1 className="text-[#4A5A2A]">
          All-in-one software
          <br />
          Powering Small Business
          <br />
          Growth at Every Step
        </h1>

        <p className="my-6 max-w-180 text-[#4A5A2ACC]">
          Stay ahead of the curve with solutions that are designed for
          tomorrow&apos;s challenges, flexible tools that adapt to your unique
          needs.
        </p>
        <Image
          src="/home/heroYard.png"
          alt="Hero"
          width={1000}
          height={600}
          className="object-contain object-center mt-8"
        />
        <div className="mt-6 flex gap-2">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`h-1.5 rounded-full transition-all ${
                active === tab.id ? "w-6 bg-[#4A5A2A]" : "w-1.5 bg-[#4A5A2A66]"
              }`}
            />
          ))}
        </div>

        <div className="mt-10 flex items-center gap-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`px-4 py-1.5 rounded-full cursor-pointer text-sm transition ${
                active === tab.id
                  ? "bg-[#E7D6A3]"
                  : ""
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <p className="mt-6 max-w-160 ">
          {current?.description}
        </p>
      </div>
      <MoleculeIcon className="hidden xl:block absolute right-0 top-50" />
      <DNAIcon className="hidden xl:block absolute left-6" />
    </section>
  );
}
