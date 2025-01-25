import React, { useEffect } from "react";
// import kwesforms from 'kwesforms';
// const kwesforms = require('kwesforms');

export default function Formdetails() {
  // useEffect(()=>{
  //   kwesforms;
  // },[]);
  return (
    <div className="md:p-8  ">
    <form method="POST" action="https://kwesforms.com/api/f/62NBcSztB2iG3PVMlcsF" className="kf-form">
      <div className="flex flex-col gap-4 md:gap-8 lg:gap-12 xl:gap-16">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-12 xl:gap-16">
          <input
            className=" px-4 w-full md:w-[45%] h-12 md:h-[56px] border border-[#E7E7E7]  rounded-lg"
            type="text"
            id="firstname"
            name="firstname"
            placeholder="First Name*"
          />
          <input
            className="px-4 w-full md:w-[45%] h-12 md:h-[56px] border  rounded-lg"
            id="secondname"
            name="secondname"
            type="text"
            placeholder="Last Name*"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-12 xl:gap-16">
          <input
            className="px-4  w-full md:w-[45%] h-12 md:h-[56px] border  rounded-lg"
            id="email"
            name="email"
            type="email"
            placeholder="Email*"
          />
          <input
            className="px-4 w-full md:w-[45%] h-12 md:h-[56px] border  rounded-lg"
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            placeholder="Phone Number*"
          />
        </div>
        <input
          className="px-4 w-full h-32 md:h-[182px] border  rounded-lg"
          id="message"
          name="message"
          type="text"
          placeholder="Message*"
        />
        <div className="flex justify-end">
          <button type="submit" name="submit" className="w-full md:w-[300px] h-12 md:h-[56px] rounded-lg bg-gradient-to-r from-[#13375D] to-[#ADBAC8] text-center">
            Submit
          </button>
        </div>
      </div>
    </form>
  </div>
  );
}
