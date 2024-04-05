import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import kwesforms from "kwesforms";
import CustomPopup from "./Popup";

export default function MainHero() {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    kwesforms;
  }, []);

  return (
    <div>
      <div className="bg-[url('./cover.jpg')] bg-center md:bg-cover font-poppins pb-2 md:h-[100vh] w-full text-white relative">
        <div className="hidden md:flex px-20 py-10 justify-between items-center">
          <Link to={"/"}>
            <img src="./navbarlogo.png" className="w-[180px] h-[40px]" />
          </Link>
          <div className="bg-[#D9D9D9] bg-opacity-10 w-[562px] h-[56px] flex justify-evenly items-center rounded-[45px]">
            <a href="#crossplatform">Cross Platform</a>
            <a href="#tech">Tech Stack</a>
            <a href="#clients">Clients</a>
            <a href="#approach">Our Approach</a>
          </div>
          <div className="px-6 py-2 rounded border border-white">
            <button onClick={() => setIsOpen(true)}>Enquire Now</button>
            <CustomPopup isOpen={isOpen} setOpen={setIsOpen} />
          </div>
        </div>

        <div className="flex md:hidden p-4 gap-20 bg-[#D9D9D9] bg-opacity-10 ">
          <button
            onClick={() => {
              // document.body.style.overflow = "hidden";
              setOpen(!open);
            }}
          >
            <img src="./menu-02.png" />
          </button>
          <img src="./navbarlogo.png" className="w-[180px] h-[40px]" />
        </div>

        <div className="md:absolute md:bottom-20 md:w-[60vw] md:left-20 px-4  py-14">
          <p className="text-[32px] md:text-[60px] font-bold ">
            Lorem ipsum dolor sit amet consectetur. Ac.
          </p>
        </div>

        <div className="px-4">
          <div className="md:hidden bg-[#ffff] px-4  rounded-lg">
            <div className="text-center text-[#13375D]">
              <div>
                <p className="font-semibold text-[24px] pt-2 ">
                  Connect with our Experts
                </p>
              </div>
              <div className="pb-4">
                <p className="text-[8px]">
                  For further information, please fill in the form below. We
                  will contact you as soon as possible.
                </p>
              </div>
            </div>
            <form
              method="POST"
              action="https://kwesforms.com/api/f/62NBcSztB2iG3PVMlcsF"
              className="kf-form text-black"
            >
              <div className="flex flex-col gap-2 ">
                <div className="flex flex-col justify-center  gap-4 ">
                  <input
                    className=" px-4 w-full  h-12  border border-[#E7E7E7]  rounded-lg"
                    id="firstname"
                    name="firstname"
                    type="text"
                    placeholder="First Name*"
                  />
                  <input
                    className="px-4 w-full h-12  border  rounded-lg"
                    type="text"
                    id="secondname"
                    name="secondname"
                    placeholder="Last Name*"
                  />
                </div>
                <div className="flex flex-col  justify-center  gap-4">
                  <input
                    className="px-4  w-full  h-12  border  rounded-lg"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email*"
                  />
                  <input
                    className="px-4 w-full  h-12 border  rounded-lg"
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Phone Number*"
                  />
                </div>
                <div className=" flex  ">
                  <input
                    className=" w-full h-12 px-2 border flex rounded-lg"
                    type="text"
                    id="message"
                    name="message"
                    placeholder="Message*"
                  />
                </div>
                <div className="flex justify-end mb-4 order-3">
                  <button
                    type="submit"
                    name="submit"
                    className="w-[100vh]  h-12 rounded-lg bg-gradient-to-r from-[#13375D] to-[#ADBAC8] text-center"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {open && (
          <div>
            <div className="absolute top-0 left-0 w-full h-screen bg-[#13375D] z-50 p-10 ">
              <button
                onClick={() => {
                  // document.body.style.overflow = "auto";
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
