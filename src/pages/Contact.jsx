import React from "react";
import Contactinfo from "../components/Contactinfo";
import Form from "../components/form";

export default function Contact() {
  return (
    <>
      <div className="md:p-[100px] p-[30px]">
        <Contactinfo />
        <Form />
      </div>
    </>
  );
}
