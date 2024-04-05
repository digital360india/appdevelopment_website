import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomPopup from "./Popup";

export default function AboutHero() {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="bg-[url('./abouthero.jpeg')]  bg-center md:bg-cover font-poppins pb-2 h-[60vh] md:h-[100vh] w-full text-white relative">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
        <div className="hidden md:flex px-20 py-10 justify-between items-center relative">
          <Link to={"/"}>
            <img src="./navbarlogo.png" className="w-[180px] h-[40px]" />
          </Link>
          <div className="bg-[#D9D9D9] bg-opacity-30 w-[562px] h-[56px] flex justify-evenly items-center rounded-[45px]">
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About us</Link>
            <Link to={"/Contact"}>Contact us</Link>
          </div>
          <div className="px-6 py-2 rounded border border-white">
            <button onClick={() => setIsOpen(true)}>Enquire Now</button>
            <CustomPopup isOpen={isOpen} setOpen={setIsOpen} />
          </div>
        </div>

        <div className="flex md:hidden p-4 gap-20 bg-[#D9D9D9] bg-opacity-10 relative ">
          <button
            onClick={() => {
            //   document.body.style.overflow = "hidden";
              setOpen(!open);
            }}
          >
            <img src="./menu-02.png" />
          </button>
          <img src="./navbarlogo.png" className="w-[180px] h-[40px]" />
        </div>

        <div className="absolute bottom-0 md:bottom-20 md:w-[60vw] md:left-20 px-4  py-14">
          <p className="text-[32px] md:text-[60px] font-bold ">About Us</p>
          <p className="text-[24px]">
            Lorem ipsum dolor sit amet consectetur. Imperdiet arcu netus gravida
            congue amet facilisi neque blandit. At nibh.
          </p>
        </div>

        {open && (
          <div>
            <div className="absolute top-0 left-0 w-full h-screen bg-[#13375D] z-50 p-10 ">
              <button
                onClick={() => {
                //   document.body.style.overflow = "auto";
                  setOpen(!open);
                }}
                className="float-end "
              >
                <img src="./Cross_icon.png" className="w-6 h-6" />
              </button>
              <div className=" bg-[url('./digi.png')] bg-no-repeat bg-contain bg-center">
                <div className="flex flex-col justify justify-between text-center gap-6 text-[24px] mt-28 h-[30vh]">
                  <Link to={"/"}>HOME</Link>
                  <Link to={"/about"}>ABOUT US</Link>
                  <Link to={"/Contact"}>CONTACT US</Link>
                </div>
                <div className="text-center mt-20 ">
                  <button
                    className="border border-white py-2 px-10 rounded"
                    onClick={() => setIsOpen(true)}
                  >
                    Enquire Now
                  </button>
                  <CustomPopup isOpen={isOpen} setOpen={setIsOpen} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
