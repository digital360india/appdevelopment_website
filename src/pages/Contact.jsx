import React from "react";
import Contactinfo from "../components/Contactinfo";
import Form from "../components/form";
import Hero from "../components/Hero";

export default function Contact() {
  return (
    <>
      <Hero />
      <div className="md:p-[100px] p-[30px]">
        <Contactinfo />
        <Form />
      </div>
    </>
  );
}
