import React from "react";
import NewsLatter from "./NewsLatter";

const Footer = () => {
  return (
    <div>
      {/* Main Banner Section */}
      <div className="relative py-10 sm:py-0 picture">
        <img
          src="/Assets/Images/Rectangle.svg"
          alt=""
          className="w-full opacity-0 sm:opacity-100"
        />
        <div className="absolute inset-0 bg-black sm:bg-opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center">
          <div className="font-bold text-base md:text-2xl text-white md:w-[70vw] mb-4">
            Learn more about our listing process, as well as our additional
            staging and design work.
          </div>
          <button className="px-6 py-2 text-sm text-blue-400 bg-white rounded-lg md:px-20 md:text-base">
            Learn More
          </button>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="flex flex-col items-center p-4 space-y-4 bg-blue-400 Newslatter md:p-10 md:flex-row md:justify-between md:space-y-0 md:px-20">
        <div className="mb-4 list md:mb-0">
          <ul className="flex flex-wrap justify-center gap-3 text-sm md:gap-10 md:text-base">
            <li className="font-bold text-white cursor-pointer">Home</li>
            <li className="font-bold text-white cursor-pointer">About</li>
            <li className="font-bold text-white cursor-pointer">
              About Project
            </li>
            <li className="font-bold text-white cursor-pointer">Contact</li>
          </ul>
        </div>
        <div className="flex flex-col items-center gap-4 email md:flex-row">
          <span className="text-lg font-bold text-center text-white md:text-left md:text-xl">
            Subscribe Us
          </span>
          <NewsLatter />
        </div>
      </div>

      {/* Footer Section */}
      <div className="flex flex-col flex-wrap items-center justify-center gap-4 p-4 foot bg-slate-800 md:flex-row md:justify-between md:p-10 md:gap-10">
        <div className="text-sm font-bold text-center text-white words md:text-left md:text-base">
          Lorem ipsum dolor sit amet.
        </div>
        <div className="flex items-center justify-center gap-1 cursor-pointer name md:justify-start">
          <div className="logo">
            <img className="w-6 md:w-7" src="Assets/Icons/home2.svg" alt="" />
          </div>
          <div className="flex flex-col items-center mt-1 name md:flex-row">
            <span className="mx-1 text-base font-bold text-white md:text-xl">
              Real
            </span>
            <span className="mx-1 text-base text-white md:text-xl">Trust</span>
          </div>
        </div>
        <div className="flex justify-center gap-2 links md:justify-start">
          <ul className="flex gap-2">
            <li>
              <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full md:w-10 md:h-10">
                <img
                  className="w-4 md:w-5"
                  src="/Assets/Icons/Group-1.svg"
                  alt=""
                />
              </div>
            </li>
            <li>
              <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full md:w-10 md:h-10">
                <img
                  className="w-4 md:w-5"
                  src="/Assets/Icons/Group.svg"
                  alt=""
                />
              </div>
            </li>
            <li>
              <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full md:w-10 md:h-10">
                <img
                  className="w-4 md:w-5"
                  src="/Assets/Icons/Frame.svg"
                  alt=""
                />
              </div>
            </li>
            <li>
              <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full md:w-10 md:h-10">
                <img
                  className="w-4 md:w-5"
                  src="/Assets/Icons/Linkedin.svg"
                  alt=""
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
