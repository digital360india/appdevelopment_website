import React from "react";

export default function Aboutteam() {
  return (
    <div className="xl:flex xl:gap-16    py-6 ">
      <div className=" xl:h-[640px] xl:space-y-80 ">
        <div>
          <p className="xl:text-[18px] xl:w-[590px] text-[14px] font-medium text-[#3E3E3E]">
            A management team with recognised expertise linking high finance
            with insurance.
          </p>
        </div>
        <div className="xl:space-y-6 space-y-4 mt-2">
          <h1 className="xl:text-[56px] xl:w-[560px] text-[32px]  font-semibold text-[#13375D] ">
            The management team
          </h1>
          <p className="xl:text-[18px] xl:w-[570px] text-[14px] text-[#555555]">
            Proven experience in Private Equity and Asset Management thanks to a
            strong team of managers.
          </p>
        </div>
      </div>

      <div className="xl:flex xl:gap-10 xl:h-[640px] py-4 text-center xl:text-start  ">
        <div className=" flex flex-col  space-y-4  w-full  ">
          <div className="flex flex-col justify-center items-center w-full space-y-4 ">
            <p className="xl:text-[40px] text-[24px] text-[#13375D]   font-medium w-[250px]">
              Lorem IpsumDior
            </p>
            <p className="text-[#555555] font-medium w-[250px] h-[37px] text-[12px]">
              Founder & CEO - dIGITAL 360 INDIA
            </p>
          </div>
          <div className="flex flex-col justify-center space-y-4 items-center">
          <img
            className="xl:w-[267px] md:w-[267px] shadow-lg shadow-slate-600 shadow-blur-md xl:h-[420px]"

            src="baggrd.png"
            alt=""
          />
            <svg className=""
            xmlns="http://www.w3.org/2000/svg"
            width="15.7"
            height="15"
            viewBox="0 0 1046.16 1000"
          >
            <path
              fill="#1B5682"
              d="M237.485 1000V325.301H13.229V1000zM125.386 233.127c78.202 0 126.879-51.809 126.879-116.553C250.808 50.37 203.591-.001 126.87-.001C50.161-.001-.002 50.371-.002 116.574c0 64.747 48.665 116.553 123.924 116.553h1.457zM361.61 1000h224.256V623.215c0-20.165 1.457-40.309 7.379-54.724c16.212-40.289 53.111-82.017 115.06-82.017c81.149 0 113.613 61.872 113.613 152.572v360.949h224.242V613.129c0-207.241-110.636-303.668-258.183-303.668c-120.977 0-174.094 67.622-203.603 113.679h1.497v-97.853H361.615c2.943 63.31 0 674.699 0 674.699z"
            />
          </svg>
          </div>
        
        </div>

        <div className=" space-y-4  flex flex-col  w-full">
          <div className="flex flex-col justify-center items-center w-full space-y-4 ">
            <h1 className="xl:text-[40px] text-[24px] text-[#13375D]   font-medium w-[250px]">
              Lorem IpsumDior
            </h1>
            <p className="text-[#555555] font-medium text-[12px]">
              Co-founder & Managing partner - dIGITAL 360 INDIA
            </p>
          </div>
          <div className="flex flex-col justify-center space-y-4 items-center">
          <img
            className="xl:w-[267px] md:w-[267px]  shadow-lg shadow-slate-600 shadow-blur-md  h-[320px] xl:h-[420px]"
            src="baggrd.png"
            alt=""
          />
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15.7"
            height="15"
            viewBox="0 0 1046.16 1000"
          >
            <path
              fill="#1B5682"
              d="M237.485 1000V325.301H13.229V1000zM125.386 233.127c78.202 0 126.879-51.809 126.879-116.553C250.808 50.37 203.591-.001 126.87-.001C50.161-.001-.002 50.371-.002 116.574c0 64.747 48.665 116.553 123.924 116.553h1.457zM361.61 1000h224.256V623.215c0-20.165 1.457-40.309 7.379-54.724c16.212-40.289 53.111-82.017 115.06-82.017c81.149 0 113.613 61.872 113.613 152.572v360.949h224.242V613.129c0-207.241-110.636-303.668-258.183-303.668c-120.977 0-174.094 67.622-203.603 113.679h1.497v-97.853H361.615c2.943 63.31 0 674.699 0 674.699z"
            />
          </svg>
          </div>
        
        </div>
      </div>
    </div>
  );
}
