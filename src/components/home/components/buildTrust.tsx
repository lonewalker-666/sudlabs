import Image from "next/image";

const BuildTrust = () => {
  return (
    <section className="bg-[#536028] py-20">
      <div className="w-full max-w-300 mx-auto px-6 md:px-8 flex flex-col lg:flex-row justify-around gap-12">
        <div className="text-white max-w-95">
          <h3 className="mb-4">How we build trust</h3>
          <h2>Amplifying The Key Metrics That Matter</h2>
        </div>
        <div className="lg:mt-16 grid grid-cols-3 flex-1 gap-6">
          <span className="flex flex-col items-center md:justify-center gap-2">
            <Image
              src="/home/matrics-1.png"
              alt="Uptime"
              width={80}
              height={80}
            />
            <p className="text-white/80 text-center">Small Business Family</p>
          </span>
          <span className="flex flex-col items-center md:justify-center gap-2">
            <Image
              src="/home/matrics-2.png"
              alt="Uptime"
              width={80}
              height={80}
            />
            <p className="text-white/80 text-center">Assurity </p>
          </span>
          <span className="flex flex-col items-center md:justify-center gap-2">
            <Image
              src="/home/matrics-3.png"
              alt="Uptime"
              width={80}
              height={80}
            />
            <p className="text-white/80 text-center">Time saving</p>
          </span>
          
        </div>
      </div>
    </section>
  );
};

export default BuildTrust;
