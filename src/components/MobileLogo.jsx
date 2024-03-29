import React from "react";
import "./MobileLogo.css"; // Import CSS file for marquee animation

const MobileLogo = () => {
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
    <div className="marquee-container">
      <div className="marquee">
        <div className="flex gap-2">
          {/* Repeat your card divs here */}
          {Logo.map((value) => (
            <div className="border border-[#969696] flex-grow h-[60px] w-[75px] flex justify-center items-center">
              <img className="h-[55px] w-[70px]" src={value.img} alt="" />
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileLogo;
