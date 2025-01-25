import React, { useState } from "react";
import { motion } from "framer-motion";


export default function NewAnimation() {
  const [current, SetCurrent] = useState(0);
  const initial = {
    some1: true,
    some2: false,
    some3: false,
  };
  const [some, setSome] = useState(initial);

  const object = [
    {
      src: "avater1.jpeg",
      title: "IOS",
      text: "Lorem qnnqspanopca nqnpnqpnc nqwnpnqwp nqnoqpnxwpo",
    },
    {
      src: "avater2.jpeg",
      title: "ANDORIDS",
      text: "the usb uis qo u9jq wsu jqwwi xq u9 qqs",
    },
    {
      src: "avater3.jpeg",
      title: "DESKTOP APPS",
      text: "qgdgqiwu hwhqox ihxq q qxwhiqxhoixqwx qxhwoi",
    },
  ];

  function handleEnter1() {
    SetCurrent(0);
    setSome({ some1: true, some2: false, some3: false });
  }
  function handleEnter2() {
    SetCurrent(1);
    setSome({ some2: true, some1: false, some3: false });
  }

  function handleEnter3() {
    SetCurrent(2);
    setSome({ some3: true, some1: false, some2: false });
  }

 
  return (
    <>
      <div id="crossplatform" className="w-full h-full font-poppins md:h-screen bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-slate-300 via-white to-slate-300 p-8  md:p-15 lg:p-20">
        <div className=" h-full w-full md:py-3">
          <div className="   text-3xl lg:text-6xl  text-[#13375D] md:h-[20%] mb-5   font-semibold" >
            Cross Platform
          </div>
          <div className=" hidden md:flex gap-32 h-[80%] ">
            <div
              className={`duration-500 w-[30%] pl-10 h-full overflow-hidden `}
            >
              <div
                className={` duration-500 ease-in-out  ${
                  some.some1
                    ? `scale-110 mt-5 z-50 opacity-100 `
                    : `scale-90 mt-48 opacity-0 z-0 `
                } h-[70%] w-[90%]`}
              >
                <div className=" p-2 h-[55%] w-full">
                  <div
                    style={{
                      backgroundImage: `url('${object[0].src}')`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                    }}
                    className={` h-full w-full rounded-lg shadow-lg `}
                  ></div>
                </div>
                <div className="h-[45%] ">
                  <p className="text-[#13375D] h-[25%] py-1 md:text-xl lg:text-xl xl:text-2xl font-semibold ">
                    {object[0].title}
                  </p>
                  <p className=" text-[#111111] text-xs lg:mt-2 lg:text-xm xl:text-base ">{object[0].text}</p>
                </div>
              </div>
              <div
                className={` duration-700 relative ease-in-out  ${
                  some.some2
                    ? `scale-110 top-[-400px] lg:top-[-330px] xl:top-[-450px] z-50 opacity-100 `
                    : `scale-90 top-[-170px] opacity-0  z-0 `
                }   h-[70%] w-[90%]`}
              >
                <div className=" p-2 h-[55%] w-full">
                  <div
                    style={{
                      backgroundImage: `url('${object[1].src}')`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                    }}
                    className={` h-full w-full rounded-lg  shadow-lg `}
                  ></div>
                </div>
                <div className="h-[45%]">
                  <p className="text-[#13375D] h-[25%] py-1 text-xl lg:text-xl xl:text-2xl font-semibold ">
                    {object[1].title}
                  </p>
                  <p className="text-[#111111] text-xs lg:mt-2 lg:text-xm xl:text-base ">{object[1].text}</p>
                </div>
              </div>
              <div
                className={` duration-500 relative ease-in-out  ${
                  some.some3
                    ? `scale-110 top-[-580px] lg:top-[-525px] xl:top-[-740px] z-50 opacity-100 `
                    : `scale-90 top-[-400px] opacity-0 z-0 `
                }  h-[70%] w-[90%]`}
              >
                <div className=" p-2 h-[55%] w-full">
                  <div
                    style={{
                      backgroundImage: `url('${object[2].src}')`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                    }}
                    className={` h-full w-full rounded-lg shadow-lg `}
                  ></div>
                </div>
                <div className="h-[45%]">
                  <p className="text-[#13375D] h-[25%] py-1 text-base lg:text-xl xl:text-2xl font-semibold ">
                    {object[2].title}
                  </p>
                  <p className="text-[#111111] lg:mt-2 text-xs lg:text-xm xl:text-base ">{object[2].text}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between   w-[70%] h-full">
              <motion.span
                onMouseEnter={() => {
                  handleEnter1();
                }}
                className={`duration-300  h-[25%]  ${current===0?`text-[#13375D]`:`text-slate-300`} text-base  md:text-5xl lg:text-5xl xl:text-8xl inline  font-bold`}
              >
                IOS
              </motion.span>
              <motion.span
                onMouseEnter={() => {
                  handleEnter2();
                }}
                className={`duration-300  h-[25%]  ${current===1?`text-[#13375D]`:`text-slate-300`} text-base md:text-5xl lg:text-5xl xl:text-8xl inline  font-bold `}
              >
                ANDORID
              </motion.span>
              <motion.span
                onMouseEnter={() => {
                  handleEnter3();
                }}
                className={`duration-300  h-[25%]   ${current===2?`text-[#13375D]`:`text-slate-300`} text-base md:text-5xl lg:text-5xl xl:text-8xl inline  font-bold`}
              >
                DESKTOP APPS
              </motion.span>
            </div>
          </div>

          <div className="flex flex-col w-full h-[90%]  md:hidden">
            <div className="h-[364px]  w-full">
              <p className="text-4xl  lg:text-5xl text-[#13375D] font-semibold mb-5">IOS</p>
              <div className="h-[284px] w-full">
                <img
                  className="h-[200px] rounded-lg shadow-lg mb-5 w-full object-contain"
                  src={object[0].src}
                  alt=""
                />
                <p className="h-[72px] text-sm w-full text-[#555555]">
                  {object[0].text}
                </p>
                <hr></hr>
              </div>
            </div>
            <div className="h-[364px] mt-5  w-full">
              <p className="text-4xl lg:text-5xl text-[#13375D] font-semibold mb-5">Android</p>
              <div className="h-[284px] w-full">
                <img
                  className="h-[200px] rounded-lg shadow-lg w-full mb-5 object-contain"
                  src={object[1].src}
                  alt=""
                />
                <p className="h-[72px] text-sm w-full text-[#555555]">
                  {object[1].text}
                </p>
                <hr></hr>
              </div>
            </div>
            <div className="h-[364px] mt-5 w-full">
              <p className=" text-4xl lg:text-5xl text-[#13375D]  font-semibold mb-5">Desktop Apps</p>
              <div className="h-[284px] w-full">
                <img
                  className="h-[200px] rounded-lg shadow-lg w-full mb-5 object-contain"
                  src={object[2].src}
                  alt=""
                />
                <p className="h-[72px] text-sm w-full text-[#555555]">
                  {object[2].text}
                </p>
                <hr></hr>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
