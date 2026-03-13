"use client";

import { useState } from "react";
import Image from "next/image";
import { solutions } from "@/src/lib/constant";

const MeetingDiverse = () => {
  const [active, setActive] = useState(0);
  return (
    <section className="max-w-300 mx-auto w-full flex flex-col gap-8 py-20 px-6 pb-60">
      <div className="flex flex-col items-center text-center">
        <div className="bg-[#FFECBC] border border-[#FFB700] px-8 py-2 rounded-full text-xl font-medium inline-flex items-center gap-2">
          Meeting Diverse Needs
        </div>

        <h2 className="mt-8 text-[#536028]">
          What our solutions can
          <br />
          do for you
        </h2>
        <p className="mt-5 text-[#536028]/80 max-w-140">
          Tailored products for every industry. Our solution adapts to meet
          awide range of needs, helping you achieve your goals.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-12 mt-12">
        <div className="w-full lg:w-1/2 order-2 lg:order-1">
          {solutions.map((item, index) => (
            <div
              key={index}
              onClick={() => setActive(index)}
              className="cursor-pointer border-b border-gray-300 py-6"
            >
              <h3
                className={`text-2xl font-medium transition ${
                  active === index ? "text-black" : "text-gray-700"
                }`}
              >
                {item.title}
              </h3>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  active === index
                    ? "mt-3 max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {item.description && (
                  <>
                    <p className="text-gray-600">{item.description}</p>
                    {item.link && (
                      <span className="mt-2 inline-block font-semibold text-red-500">
                        {item.link}
                      </span>
                    )}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="w-full lg:w-1/2 order-1 lg:order-2">
          <div className="flex items-center justify-center rounded-2xl bg-rose-50 p-8">
            <Image
              src="/home/solutions.png"
              alt="Illustration"
              width={500}
              height={500}
              className="h-auto w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetingDiverse;
