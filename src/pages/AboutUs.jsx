import React from "react";
import Abouthead from "../components/abouthead";
import Aboutdata from "../components/aboutdata";
import Aboutdetails from "../components/aboutdetails";
import Aboutfooter from "../components/aboutfooter";
import Aboutteam from "../components/aboutteam";

export default function AboutUs() {
  return (
    <>
      <div className=" w-full px-[24px] py-[40px] md:px-[60px] lg:px-[80px] xl:px-[100px] border border-black">
        <Abouthead />
        <Aboutdata />
        <Aboutdetails />
        <Aboutteam/>
        <Aboutfooter />
      </div>
    </>
  );
}
