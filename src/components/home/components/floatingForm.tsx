"use client";

export default function FloatingForm() {
  return (
    <section className="relative bg-[#536028] pt-32 pb-10">
      <div className="max-w-275 mx-auto px-6">
        <div className="bg-[#E6E0DA] rounded-2xl shadow-xl p-8 md:p-12 grid lg:grid-cols-2 gap-8 -mt-80">
          
          <div className="flex flex-col ">
            <h3 className="text-gray-900 font-medium">
              We’d love to answer your questions
            </h3>
            <p className="text-gray-600 mt-4 max-w-md">
              Have a query? We’d be happy to answer any questions you might have
            </p>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="h-16 rounded-2xl border border-gray-400 px-4 bg-white text-black outline-none focus:border-gray-700"
            />

            <input
              type="text"
              placeholder="Mobile No"
              className="h-16 rounded-2xl border border-gray-400 px-4 bg-white text-black outline-none focus:border-gray-700"
            />

            <input
              type="email"
              placeholder="Email"
              className="h-16 rounded-2xl border border-gray-400 px-4 bg-white text-black outline-none focus:border-gray-700 md:col-span-2"
            />

            <input
              type="text"
              placeholder="City"
              className="h-16 rounded-2xl border border-gray-400 px-4 bg-white text-black outline-none focus:border-gray-700"
            />

            <input
              type="text"
              placeholder="Business Name"
              className="h-16 rounded-2xl border border-gray-400 px-4 bg-white text-black outline-none focus:border-gray-700"
            />

            <select
              className="h-16 rounded-2xl border border-gray-400 px-4 bg-white text-black outline-none focus:border-gray-700 md:col-span-2"
            >
              <option>Select the Service</option>
              <option>Sud Health</option>
              <option>Yard IQ</option>
              <option>Sud Space</option>
            </select>

            <div className="md:col-span-2 flex justify-end mt-2">
              <button
                type="submit"
                className="bg-[#536028] hover:bg-[#536028]/80 text-white px-8 py-2 rounded-full font-medium transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}