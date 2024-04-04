import React, { useEffect } from "react";
import Popup from "reactjs-popup";
import kwesforms from 'kwesforms';
function CustomPopup({ isOpen, setOpen }) {
useEffect(()=>{
  kwesforms;
},[]);
  return (
    <Popup
    open={isOpen}
    closeOnDocumentClick={false}
    onClose={() => setOpen(false)}
    contentStyle={{
      height:"100%",
      width: "90%",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      textAlign: "left",
    }}
  >
      <div className="bg-[#ffff] px-4  rounded-lg">
      <div className="flex justify-end pt-2">
          <button onClick={() => setOpen(false)} className="text-gray-500 hover:text-gray-700 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="text-center text-[#13375D]">
        <div><p className="font-semibold text-[24px] pt-2 md:text-[60px]">Connect with our Experts</p></div>
       <div className="pb-4"> <p className="md:text-[24px] text-[8px]">For further information, please fill in the form below. We will contact you as soon as possible.</p> </div>
       </div>
      <form method="POST" action="https://kwesforms.com/api/f/62NBcSztB2iG3PVMlcsF" className="kf-form" >
      <div className="flex flex-col gap-2 md:gap-8 lg:gap-12 xl:gap-10">
        <div className="flex flex-col justify-center md:flex-row gap-4 md:gap-8 lg:gap-12 xl:gap-16">
          <input
            className=" px-4 w-full md:w-[45%] h-12 md:h-[56px] border border-[#E7E7E7]  rounded-lg"
            id="firstname"
            name="firstname"
            type="text"
            placeholder="First Name*"
          />
          <input
            className="px-4 w-full md:w-[45%] h-12 md:h-[56px] border  rounded-lg"
            type="text"
            id="secondname"
            name="secondname"
            placeholder="Last Name*"
          />
        </div>
        <div className="flex flex-col  justify-center md:flex-row gap-4 md:gap-8 lg:gap-12 xl:gap-16">
          <input
            className="px-4  w-full md:w-[45%] h-12 md:h-[56px] border  rounded-lg"
            type="email"
            id="email"
            name="email"
            placeholder="Email*"
          />
          <input
            className="px-4 w-full md:w-[45%] h-12 md:h-[56px] border  rounded-lg"
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Phone Number*"
          />
        </div>
        <div className=" flex justify-center">
        <input
          className="px-4 w-[80vw] h-20 md:h-[182px] border flex justify-center rounded-lg"
          type="text"
          id="message"
            name="message"
          placeholder="Message*"
        /></div>
     <div className="flex justify-end md:mr-8 md:mb-4 mb-4 order-3">
  <button type="submit" name="submit" className="w-[100vh] md:w-[40vh] h-12 md:h-[56px] rounded-lg bg-gradient-to-r from-[#13375D] to-[#ADBAC8] text-center">
    Submit
  </button>
</div>
      </div>
    </form>
    </div>
    </Popup>
  );
}
export default CustomPopup;






