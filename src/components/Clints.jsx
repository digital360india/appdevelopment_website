import React from "react";
import MobileLogo from "./MobileLogo";

const Clints = () => {
  const Logo = [
    {
      img: "adidas.png",
    },
    {
      img: "starbucks.webp",
    },
    {
      img: "pepsi.webp",
    },
    {
      img: "toyota.jpg",
    },
    {
      img: "lego.jpg",
    },
    {
      img: "ibm.jpg",
    },
    {
      img: "hp.jpg",
    },
    {
      img: "hm.avif",
    },
    {
      img: "gucci.png",
    },
    {
      img: "coca.webp",
    },
    {
      img: "chin.avif",
    },
    {
      img: "apple.png",
    },
    {
      img: "amazon.png",
    },
  ];
  return (
    <div className="p-4 md:p-20 ">
      <div>
        <p className="text-[#13375D] text-[32px] md:text-[60px] font-semibold mb-2">
          CLIENTS WE HAVE <br />
          WORKED WITH
        </p>
      </div>
      <div>
        <p className="font-normal text-[16px] md:text-[24px] w-[100%] md:w-[60%] flex flex-wrap pb-8 ">
          Lorem ipsum dolor sit amet consectetur. Amet dolor nisi aliquam
          tincidunt mauris in. Pretium nulla sapien facilisis tempor. Nisl id
          vitae amet vitae turpis semper consequat semper.
        </p>
      </div>

      <div className="hidden md:grid grid-cols-6 gap-y-8 ">
      {Logo.map((value) => (
        <div className="border border-[#969696] w-[11.6vw] h-[18.2vh] flex justify-center items-center">
          <img  className="h-[55px] w-[70px]" src={value.img} alt="" />
        </div>       
        ))}
      </div>
      <div className="md:hidden">
        <MobileLogo />
      </div>
    </div>
  );
};

export default Clints;