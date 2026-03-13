import Image from "next/image";
import { FlaskGlassIcon } from "../../common/icon";

export default function WhatWeDo() {
  return (
    <section className="w-full flex flex-col py-20 px-6 bg-[#FFFAF4] rounded-4xl">
      <div className="max-w-300 mx-auto w-full">
        <div className="flex flex-col items-center text-center">
          <div className="bg-[linear-gradient(350deg,#718727_0%,#536028_100%)] text-white px-6 py-2 rounded-full font-medium inline-flex items-center gap-2">
            <FlaskGlassIcon className="w-5 h-8" />
            <span className="mt-3 ml-3 text-xl">What we do</span>
          </div>

          <h2 className="mt-10 text-[#536028]">
            Simplicity meets excellence
            <br />
            our products excel in every aspect
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-12 gap-6 w-full">
          <div className="relative rounded-2xl bg-[#28602F] text-white px-6 pt-8 md:px-8 md-pt-10 overflow-hidden min-h-60 flex flex-col col-span-12 lg:col-span-7">
            <h3 >
              Continuous Innovation
            </h3>
            <div className="flex flex-col md:flex-row justify-between gap-4 flex-1">
              <p className="mt-4 text-white/80 md:max-w-60">
                We continuously research and develop our solutions and provide
                regular updates with new features to improve performance.
              </p>
              <span className="h-full flex justify-end items-end">
                <Image
                  src="/home/who-we-are-1.png"
                  alt="innovation"
                  width={660}
                  height={480}
                  className="w-full md:w-80 h-auto mt-4"
                />
              </span>
            </div>
          </div>

          <div className="rounded-2xl bg-[#FFF4D8] text-white px-6 py-8 md:px-8 md-py-10 overflow-hidden min-h-60 flex flex-col col-span-12 lg:col-span-5">
            <h3 className="text-[#2C445B]">
              All In one – Easy to small Business
            </h3>

            <Image
              src="/home/who-we-are-2.png"
              alt="all in one"
              width={780}
              height={540}
              className="w-full"
            />
          </div>
          <div className="rounded-2xl bg-[#C9BB27] text-white overflow-hidden min-h-60 flex flex-col col-span-12 lg:col-span-5">
            <div className="px-6 pt-8 md:px-8 md-pt-10">
              <h3 className="mb-2">
                Simplicity
              </h3>
              <p className="mb-6 text-white/80">
                User-centric design with creative interfaces to help you quickly
                learn and leverage the full potential of our solutions.
              </p>
            </div>

            <Image
              src="/home/who-we-are-3.png"
              alt="simplicity"
              width={780}
              height={540}
              className="w-full"
            />
          </div>
          <div className="rounded-2xl bg-[#9BAD5D] overflow-hidden min-h-60 flex flex-col justify-between col-span-12 lg:col-span-7">
            <h3 className="px-6 pt-8 md:px-8 md-pt-10 mb-6 text-[#2C445B]">
              Easy Access
            </h3>

            <div className="flex justify-end">
              <Image
                src="/home/who-we-are-4.png"
                alt="easy access"
                width={780}
                height={540}
                className="w-full max-w-120"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
