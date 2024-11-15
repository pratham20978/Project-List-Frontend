import React from "react";
import { useRef, useState, useEffect } from "react";

const OurProjects = () => {
  const [projectArray, setProjectarray] = useState([]);
  const projectref = useRef();

  const getProject = async () => {
    let req = await fetch(
      "https://project-list-backend.onrender.com/projectDetail"
    );
    let projects = await req.json();
    setProjectarray(projects);
    console.log(projects);
  };

  useEffect(() => {
    getProject();
  }, []);

  return (
    <div className="flex flex-col items-center gap-5 p-6 bg-blue-100">
      <h1 className="text-3xl font-bold text-blue-500">Our Projects</h1>
      <p className="w-3/4 text-center text-blue-900">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
        nam consectetur ea quia quasi voluptatibus quidem, dolorem voluptas
        architecto odio?
      </p>

      <div className="w-full cards max-w-7xl">
        <ul className="flex flex-wrap justify-center gap-6">
          {/* Card about the Project */}
          {projectArray.map((item, index) => (
            <li key={index} className="w-[250px] flex-shrink-0">
              <div className="flex flex-col h-full overflow-hidden bg-white rounded-lg shadow-lg card">
                {/* Image */}
                <img
                  src={item.url}
                  alt="Card Image"
                  className="w-full h-[150px] object-cover"
                />

                {/* Card Content */}
                <div className="flex flex-col justify-between flex-grow p-4">
                  {/* Title */}
                  <div className="mb-2 text-xl font-bold text-center text-blue-500 heading">
                    {item.Name}
                  </div>

                  {/* Description */}
                  <div className="mb-4 text-sm text-center text-gray-600 about">
                    {item.Description.length > 100
                      ? `${item.Description.substring(0, 97)}...`
                      : item.Description}
                  </div>

                  {/* Button */}
                  <div className="flex justify-center button">
                    <button className="p-2 px-6 text-sm font-bold text-white transition-colors bg-orange-600 rounded-lg shadow-md hover:bg-orange-700">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OurProjects;
