import React, { useEffect, useState } from "react";

export default function SomeThing() {
  const [index, setIndex] = useState(0);
  const [animation, setAnimation] = useState(false);
 
  let viewPort = window.innerWidth;

 let diff=0;
 let changeIn=0;
 let translateValue=0;

if(viewPort>=768)
{
  diff=1800-viewPort;
changeIn=diff*0.078;
translateValue=((0.42)*viewPort)-changeIn;
}

  const array = [
    {
      title: "the ndpqwow",
      description: ",e2o,wq[,p[q,wp,qw",
      src: "avater1.jpeg",
    },

    {
      title: "qwertyu",
      description: "asdfghjkl",
      src: "avater2.jpeg",
    },
    {
      title: "zxcvbnm,",
      description: "sdfghjkl",
      src: "avater3.jpeg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimation(true);
    }, 200);
    return () => {
      clearInterval(interval);
    };
  }, [index]);

  function handlePrevIndex() {
    setAnimation(false);
    if (index > 0) {
      setIndex((prev) => prev - 1);
    } else {
      setIndex(array.length - 1);
    }
  }

  function handleNextIndex() {
    setAnimation(false);
    if (index < array.length - 1) {
      setIndex((prev) => prev + 1);
    } else {
      setIndex(0);
    }
  }

  return (
    <>
      <div className="w-full h-screen md:p-10 p-2 bg-slate-200">
        <div className=" w-full h-full text-center md:p-4 p-1  ">
          <div className="flex flex-col gap-5 w-full h-[20%]">
            <p className="text-black text-lg md:text-xl">TESTIMONIALS</p>
            <p className="text-slate-600  font-semibold md:font-bold text-4xl md:text-6xl">
              
              Loremx
            </p>
          </div>
          <div className="h-[80%] w-full">
            <div className=" h-[80%] w-full flex justify-center  gap-5 md:gap-20 items-center">
              <button
                onClick={() => {
                  handlePrevIndex();
                }}
                className=" text-slate-800 font-semibold  h-[20%] "
              >
                <svg
                 className="w-[30px] h-[30px] md:h-[70px] md:w-[70px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 1024 1024"
                >
                  <path
                    fill="currentColor"
                    d="M752.145 0c8.685 0 17.572 3.434 24.237 10.099c13.33 13.33 13.33 35.143 0 48.473L320.126 515.03l449.591 449.591c13.33 13.33 13.33 35.144 0 48.474c-13.33 13.33-35.142 13.33-48.472 0L247.418 539.268c-13.33-13.33-13.33-35.144 0-48.474L727.91 10.1C734.575 3.435 743.46.002 752.146.002z"
                  />
                </svg>
              </button>
              <div className="md:w-[50%] w-[90%] h-[90%] ">
                <div className=" bg-white border-slate-400 border-[4px] rounded-2xl w-[100%] h-[90%] flex flex-col justify-center gap-5 ">
                  <p
                    className={`duration-300 text-slate-700 ease-in-out ${
                      animation
                        ? `opacity-100 translate-x-0`
                        : `opacity-0 translate-x-10`
                    } md:text-4xl text-base font-medium  md:font-semibold`}
                  >
                    {array[index].title}
                  </p>
                  <p
                    className={`duration-300 text-slate-600 ease-in-out ${
                      animation
                        ? `opacity-100 translate-x-0`
                        : `opacity-0 translate-x-10`
                    } text-sm font-normal md:text-3xl`}
                  >
                    {array[index].description}
                  </p>
                </div>
                <div className="h-[10%] w-full flex justify-center    text-black animate-bounce pt-4 relative top-[-7px]">
                  <svg
                    className=""
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5rem"
                    height="1.5rem"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M20.118 3H3.893A2.914 2.914 0 0 0 1.39 7.371L9.506 20.92a2.917 2.917 0 0 0 4.987.005l8.11-13.539A2.914 2.914 0 0 0 20.117 3z"
                    />
                  </svg>
                </div>{" "}
              </div>
              <button
                onClick={() => {
                  handleNextIndex();
                }}
                className=" text-slate-800 font-semibold   h-[20%]"
              >
                <svg
                className="w-[30px] h-[30px] md:h-[70px] md:w-[70px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 1024 1024"
                >
                  <path
                    fill="currentColor"
                    d="M271.653 1023.192c-8.685 0-17.573-3.432-24.238-10.097c-13.33-13.33-13.33-35.144 0-48.474L703.67 508.163L254.08 58.573c-13.33-13.331-13.33-35.145 0-48.475c13.33-13.33 35.143-13.33 48.473 0L776.38 483.925c13.33 13.33 13.33 35.143 0 48.473l-480.492 480.694c-6.665 6.665-15.551 10.099-24.236 10.099z"
                  />
                </svg>
              </button>
            </div>
            <div className=" h-[10%]  md:h-[20%] w-full flex justify-center md:justify-normal ">
           
           <div className="duration-300 flex gap-14 md:hidden  items-center justify-center h-[90%] w-[40%]">
            <img src={array[index].src} alt=""  className={`duration-500 h-[70px] translate-x-[] w-[70px] rounded-[50%]`}
                    ></img>

            
          </div>
          
          <div style={{transform:`translateX(${translateValue - index*155}px)`}}
                className="duration-300 hidden md:flex gap-14   items-center justify-center overflow-hidden h-[90%] w-[484px]"
              >
                {array.map((items, i) => {
                  return (
                    <img
                      key={i}
                      src={items.src}
                      className={`duration-500 h-[100px] ${
                        i === index ? `scale-100  ` : `scale-50`
                      } w-[100px] rounded-[50%]`}
                    ></img>
                  );
                })}
              
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
