import Marquee from "react-fast-marquee";
import Line_2 from "./Line_2.jsx";

import { useState } from "react";

const Cards = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const industries = [
    {
      img: "Rectangle 3.png",
      title: "Health",
    },
    {
      img: "Rectangle 5.png",
      title: "Finance",
    },
    {
      img: "Rectangle 6.png",
      title: "School",
    },
    {
      img: "Rectangle 9.png",
      title: "Software",
    },
    {
      img: "Rectangle 10.png",
      title: "Tourism",
    },
    {
      img: "Automobile.png",
      title: "Automobile",
    },
    {
      img: "Automobile.png",
      title: "E-commerce",
    },
  ];

  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-center items-center md:items-start gap-4 ">
        <Marquee pauseOnHover speed={51}>
          <div className="flex md:w-full flex-row mb-4">
            {industries.map((industry, index) => (
              <div key={index} className="md:w-1/3 flex flex-col items-center">
                <div
                  className="relative w-[120px] h-[100px] md:w-[250px] md:h-[200px] group  mx-1 md:mx-3 md:hover:w-[400px] md:hover:h-[200px]
                                 transition-transform transform duration-700  md:hover:translate-x-4"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="cards relative rounded-md overflow-hidden transition duration-300 ease-in-out ">
                    <img
                      src={industry.img}
                      className="w-[120px] h-[100px] md:w-[250px] md:h-[200px] hover:opacity-50 transition duration-300 ease-in-out"
                      alt={`${industry.title} Image`}
                    />
                    <div className="absolute inset-0 flex justify-center items-center transition duration-300 ease-in-out">
                      <h2 className="text-white  text-[16px] md:text-2xl mt ">
                        {industry.title}
                      </h2>
                    </div>
                  </div>

                  {hoveredIndex === index && (
                    <div className="hover-div absolute md:inset-0 bg-[#13375D] bg-opacity-0 mr-3 rounded-md text-white md:group-hover:bg-opacity-100 ">
                      <h2 className="font-Poppins text-center py-5 text-4xl">
                        {industry.title}
                      </h2>
                      <p className="text-center px-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
      <div className="hidden md:block">
        <Line_2 />
      </div>
    </>
  );
};

export default Cards;
