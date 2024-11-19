import React from "react";
import { useState } from "react";
import Form from "./Form";

const Mangage = () => {
  return (
    <div>
      <div className="relative first">
        <img src="/Assets/Images/first.svg" alt="" className="w-full" />

        <div className="words absolute top-10 sm:top-1/4 w-[100px] z-10 left-5 text-3xl font-bold text-white">
          Consultation Design & Marketing
        </div>

        <div className="">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Mangage;
