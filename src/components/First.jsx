import React from "react";

const First = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-8 p-10 bg-gray-100 md:flex-row md:gap-16">
      {/* Left Section: Heading and Paragraph */}
      <div className="max-w-lg text-left">
        <h1 className="mb-4 text-3xl font-bold text-blue-600">
          Not Your Average Realtor
        </h1>
        <p className="text-sm leading-relaxed text-gray-700 w-96">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          itaque harum nemo laboriosam voluptatem dicta. Dolorem nulla debitis
          eos quas.
        </p>
      </div>

      {/* Right Section: Circular Images */}
      <div className="relative w-64 h-64">
        {/* Top Circle */}
        <div className="absolute top-0 overflow-hidden transform -translate-x-1/2 rounded-full shadow-md left-1/2 w-28 h-28">
          <img
            src="/Assets/Images/one.svg"
            alt="Image 1"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Bottom Left Circle */}
        <div className="absolute bottom-0 left-0 w-32 h-32 overflow-hidden rounded-full shadow-md">
          <img
            src="/Assets/Images/two.svg"
            alt="Image 2"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Bottom Right Circle */}
        <div className="absolute bottom-0 right-0 w-24 h-24 overflow-hidden rounded-full shadow-md">
          <img
            src="/Assets/Images/three.svg"
            alt="Image 3"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default First;
