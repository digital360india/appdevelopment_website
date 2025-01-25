import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SimpleCarousel = () => {
  const language = [
    {
      name: "Flutter",
      imageSrc: "flutter.jpg",
    },
    {
      name: "React-Native",
      imageSrc: "reactnative.jpg",
    },
    {
      name: "Firebase",
      imageSrc: "firebase.jpg",
    },
    {
      name: "Supabase",
      imageSrc: "supabase.jpg",
    },
    {
      name: "MongoDB",
      imageSrc: "mongodb.jpg",
    },
    {
      name: "UI/UX",
      imageSrc: "uxui.jpg",
    },
  ];

  const sliderRef = useRef();

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <div className="w-full px-8 py-6 relative ">
        <Slider ref={sliderRef} {...settings}>
          {language.map((value, index) => (
            <div key={index} className="relative">
              <img
                className="w-[100%] h-[324px] rounded-xl"
                src={value.imageSrc}
                alt={"Slide " + (index + 1)}
              />
              <div className="absolute top-64  text-center w-full h-full">
                <p className="text-white font-semibold text-[32px]">
                  {value.name}
                </p>
              </div>
            </div>
          ))}
        </Slider>
        <div>
          <button
            className="absolute h-[45px] w-[45px] flex items-center justify-center transform border  border-[#3E3E3E] rounded-3xl translate-y-1/2"
            onClick={prevSlide}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
              />
            </svg>
          </button>
          <button
            className="absolute left-[100px] flex items-center justify-center h-[45px] w-[45px] transform border border-[#3E3E3E] rounded-3xl translate-y-1/2"
            onClick={nextSlide}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <g fill="none">
                <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                <path
                  fill="currentColor"
                  d="m14.707 5.636l5.657 5.657a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1-1.414-1.414l3.95-3.95H4a1 1 0 1 1 0-2h13.243l-3.95-3.95a1 1 0 1 1 1.414-1.414"
                />
              </g>
            </svg>
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default SimpleCarousel;
