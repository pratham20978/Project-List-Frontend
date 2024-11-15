import React from "react";

const Meddil = () => {
  return (
    <div className="flex flex-col items-center py-16 bg-gradient-to-b from-blue-100 via-white to-blue-100">
      <div className="flex flex-wrap justify-center gap-10 px-6">
        {/* Image 1 */}
        <div className="relative w-64 h-64 overflow-hidden transition duration-300 transform bg-gray-100 shadow-xl group rounded-xl hover:scale-105">
          <img
            src="/Assets/Images/new.svg"
            alt="Gallery Image 1"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex items-center justify-center transition duration-300 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
            <p className="text-lg font-bold text-white">Confidence</p>
          </div>
        </div>

        {/* Image 2 */}
        <div className="relative w-64 h-64 overflow-hidden transition duration-300 transform bg-gray-100 shadow-xl group rounded-xl hover:scale-105">
          <img
            src="/Assets/Images/hello.svg"
            alt="Gallery Image 2"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex items-center justify-center transition duration-300 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
            <p className="text-lg font-bold text-white">Inovation</p>
          </div>
        </div>

        {/* Image 3 */}
        <div className="relative w-64 h-64 overflow-hidden transition duration-300 transform bg-gray-100 shadow-xl group rounded-xl hover:scale-105">
          <img
            src="/Assets/Images/rename.svg"
            alt="Gallery Image 3"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex items-center justify-center transition duration-300 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
            <p className="text-lg font-bold text-white">Dreams</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meddil;
