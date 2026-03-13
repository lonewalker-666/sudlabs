import Image from "next/image";
import Link from "next/link";

export default function OurInnovations() {
  return (
    <section className="max-w-300 mx-auto w-full flex flex-col gap-8 py-20 px-6">
      <div className="flex flex-col items-center text-center">
        <div className="bg-[#FFECBC] border border-[#FFB700] px-8 py-2 rounded-full text-xl font-medium inline-flex items-center gap-2">
          Our Innovations
        </div>

        <h2 className="mt-8 text-[#536028]">
          Our ecosystem - empowering Business
          <br />
          through integrated solutions
        </h2>
        <p className="mt-5 text-[#536028]/80 max-w-120">
          We combine deep industry expertise with creative problem-solving to
          craft products that drive efficiency & unlock new possibilities.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-12 gap-6 w-full">
        <div className="col-span-12 lg:col-span-6 bg-[#F3FBFF] rounded-2xl p-6 md:p-8 flex flex-col gap-4">
          <span>
            <h3 className=" text-black">SUDHEALTH</h3>
            <p className="mt-2 text-black/80">
              Patients, appointments, billing, compliance
            </p>
          </span>
          <span className="flex-1 flex w-full items-center justify-center">
            <Image
              src="/home/payroll.png"
              alt="innovation"
              width={1000}
              height={600}
              className="w-full"
            />
          </span>
        </div>
        <div className="col-span-12 lg:col-span-6">
          <div className="bg-[#EAFFF0] rounded-2xl p-6 md:p-8 flex flex-col gap-4">
            <span className="inline-flex flex-col w-full items-end">
              <h3 className=" text-black">SUDHEALTH</h3>
              <p className="mt-2 text-black/80">
                Patients, appointments, billing, compliance
              </p>
            </span>
            <Image
              src="/home/newTask.png"
              alt="innovation"
              width={1000}
              height={600}
              className="w-full  mx-auto mt-4"
            />
          </div>
        </div>
      </div>
      <div className="col-span-12 bg-[#FFF2F5] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between gap-4">
        <div className="flex h-full flex-col justify-center items-center w-full max-w-100">
          <span className="md:mt-10">
            <h3 className=" text-black">YardIQ</h3>
            <p className="mt-2 text-black/80">
              Jobs, routes, recurring services, invoicing
            </p>
            <Link href="/yardiq" className="mt-4 inline-block text-[#FF0000] underline font-semibold">
              Explore YardIQ
            </Link>
          </span>
        </div>
        <Image
          src="/home/newPurchase.png"
          alt="innovation"
          width={1000}
          height={600}
          className="w-full max-w-120"
        />
      </div>
    </section>
  );
}
