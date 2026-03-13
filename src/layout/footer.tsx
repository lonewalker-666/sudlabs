import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#536028] py-10">
      <div className="max-w-300 mx-auto w-full px-6 flex flex-col gap-6">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-12 md:items-center justify-between pb-8 md:pb-12 border-b-0 border-white/40">
          <Image
            src="/logoWhite.svg"
            alt="logo"
            width={300}
            height={300}
            className="w-52 md:w-72 h-auto object-contain"
          />

          <h5 className="text-white/80 ">
            Connect With Us : +1 (479) 202-3039
          </h5>
        </div>

        {/* Bottom Section */}
        {/* <div className="flex flex-col gap-2 text-white/80">
          <p className="text-white/80">© 2026 Prayosha Food Services Pvt. Ltd., India</p>

          <div className="flex flex-wrap gap-x-2 gap-y-1 text-sm">
            <span>Privacy</span>
            <span>•</span>
            <span>Compliance</span>
            <span>•</span>
            <span>Terms</span>
            <span>•</span>
            <span>Cancellation & Refund</span>
            <span>•</span>
            <span>Corporate Information</span>
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;