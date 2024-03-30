import React from "react";

export default function Formdetails() {
  return (
    <div className="md:p-8  ">
    <form action="">
      <div className="flex flex-col gap-4 md:gap-8 lg:gap-12 xl:gap-16">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-12 xl:gap-16">
          <input
            className=" px-4 w-full md:w-[45%] h-12 md:h-[56px] border border-[#E7E7E7]  rounded-lg"
            type="text"
            placeholder="First Name*"
          />
          <input
            className="px-4 w-full md:w-[45%] h-12 md:h-[56px] border  rounded-lg"
            type="text"
            placeholder="Last Name*"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-12 xl:gap-16">
          <input
            className="px-4  w-full md:w-[45%] h-12 md:h-[56px] border  rounded-lg"
            type="email"
            placeholder="Email*"
          />
          <input
            className="px-4 w-full md:w-[45%] h-12 md:h-[56px] border  rounded-lg"
            type="text"
            placeholder="Phone Number*"
          />
        </div>
        <input
          className="px-4 w-full h-32 md:h-[182px] border  rounded-lg"
          type="text"
          placeholder="Message*"
        />
        <div className="flex justify-end">
          <button className="w-full md:w-[300px] h-12 md:h-[56px] rounded-lg bg-gradient-to-r from-[#13375D] to-[#ADBAC8] text-center">
            Submit
          </button>
        </div>
      </div>
    </form>
  </div>
  );
}
