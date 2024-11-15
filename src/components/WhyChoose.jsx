import React from "react";

const WhyChoose = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="mb-10 text-4xl font-extrabold text-blue-600">
        Why Choose Us
      </h1>
      <div className="cards">
        <ul className="flex flex-col gap-8 sm:gap-0 sm:flex-row">
          <li className="flex flex-col items-center max-w-xs gap-4 p-6 mx-auto transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl">
            {/* Icon Container */}
            <div className="box w-[60px] h-[60px] rounded-full bg-blue-100 flex justify-center items-center">
              <img className="w-8" src="/Assets/Icons/home.svg" alt="Icon" />
            </div>

            {/* Heading */}
            <div className="text-center heading">
              <h2 className="text-2xl font-bold text-blue-600">
                Potential ROI
              </h2>
            </div>

            {/* Paragraph */}
            <div className="para">
              <p className="text-sm leading-relaxed text-center text-gray-600">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
                quam alias aut atque architecto tenetur neque ducimus libero
                doloremque veniam!
              </p>
            </div>
          </li>

          <li className="flex flex-col items-center max-w-xs gap-4 p-6 mx-auto transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl">
            {/* Icon Container */}
            <div className="box w-[60px] h-[60px] rounded-full bg-blue-100 flex justify-center items-center">
              <img className="w-8" src="/Assets/Icons/paint.svg" alt="Icon" />
            </div>

            {/* Heading */}
            <div className="text-center heading">
              <h2 className="text-2xl font-bold text-blue-600">Design</h2>
            </div>

            {/* Paragraph */}
            <div className="para">
              <p className="text-sm leading-relaxed text-center text-gray-600">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
                quam alias aut atque architecto tenetur neque ducimus libero
                doloremque veniam!
              </p>
            </div>
          </li>

          <li className="flex flex-col items-center max-w-xs gap-4 p-6 mx-auto transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl">
            {/* Icon Container */}
            <div className="box w-[60px] h-[60px] rounded-full bg-blue-100 flex justify-center items-center">
              <img className="w-8" src="/Assets/Icons/doller.svg" alt="Icon" />
            </div>

            {/* Heading */}
            <div className="text-center heading">
              <h2 className="text-2xl font-bold text-blue-600">Marketing</h2>
            </div>

            {/* Paragraph */}
            <div className="para">
              <p className="text-sm leading-relaxed text-center text-gray-600">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
                quam alias aut atque architecto tenetur neque ducimus libero
                doloremque veniam!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WhyChoose;
