import React, { useState } from "react";
import CustomPopup from "./Popup";

const Talk = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <div className="relative">
        <img src="building.jpg" className="md:w-full md:h-screen w-[100vw] h-[70vh]" alt="" />

        <div className="absolute left-[10%] top-[10%]  md:top-[50%] md:left-[10%] w-[80%]">
          <span className="font-semibold text-[32px] md:text-[50px] lg:text-[84px] text-[#ffff]">
            We are ready to <br />
            listen
          </span>
        </div>

        <div className="absolute md:bottom-[25%] md:right-[10%] right-[7%] bottom-[12%]">
          <button onClick={() => setOpen(true)} className="rounded-tl-xl rounded-br-xl bg-[#FFFFFF] md:w-[20vw] w-[70vw] text-[#000000] md:px-2 py-3 shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Let's Talk
          </button>
      <CustomPopup isOpen={isOpen} setOpen={setOpen} />
        </div>
      </div>
    </div>
  );
};

export default Talk;
