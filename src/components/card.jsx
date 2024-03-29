import React from "react";
import "./Card.css";
import SimpleCarousel from "./CardCarousel";

const Card = () => {
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

  return (
    <div>
      <div className="hidden  lg:flex flex-wrap card space-x-2 justify-around p-20 ">
        {language.map((value, index) => (
          <div key={index} className="flip-card relative content ">
            <div className="flip-card-inner  relative rounded-2xl ">
              <div
                className="flip-card-front front absolute rounded-2xl overflow-hidden "
                style={{ backgroundImage: `url(${value.imageSrc})` }}
              >
                <div className=" inner absolute text inset-0 text-white text-lg top-52 font-bold ">
                  <h2 className="font-semibold text-[48px]">{value.name}</h2>
                </div>
              </div>
              <div
                className="flip-card-back back absolute inset-0 flex flex-col justify-center items-center  text-white rounded-2xl"
                style={{ backgroundImage: `url(${value.imageSrc})` }}
              >
                <h1 className="text-2xl font-bold skew-text mb-4">
                  {value.name}
                </h1>
                <p className="text-lg info skew-text">Description here</p>
                <span className="text-lg skew-text">More info here</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="lg:hidden">
        <SimpleCarousel />
      </div>
    </div>
  );
};

export default Card;
