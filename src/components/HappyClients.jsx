import React from "react";
import { useRef, useState, useEffect } from "react";

const HappyClients = () => {
  const [ClientArray, setClientarray] = useState([]);
  const Clientectref = useRef();

  const getClient = async () => {
    let req = await fetch(
      "https://project-list-backend.onrender.com/ClientDetail"
    );
    let Clients = await req.json();
    setClientarray(Clients);
    console.log(Clients);
  };

  useEffect(() => {
    getClient();
  }, []);

  return (
    <div className="flex flex-col items-center gap-5 p-3 bg-green-100">
      <h1 className="mb-6 text-3xl font-bold text-blue-500">Happy Clients</h1>

      <div className="cards">
        <ul className="flex flex-wrap justify-center gap-4">
          {/* Card about the Client */}
          {ClientArray.map((item, index) => {
            return (
              <li
                key={index}
                className="w-full p-2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
              >
                <div className="overflow-hidden transition-transform transform bg-white rounded-lg shadow-lg card hover:scale-105 hover:shadow-xl">
                  {/* Client Image */}
                  <div className="flex items-center justify-center mb-4">
                    <img
                      src={item.image}
                      alt="Client Image"
                      className="w-[80px] h-[80px] rounded-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col gap-4 p-6">
                    {/* Client Description */}
                    <div className="mb-4 text-sm text-gray-600 description">
                      {item.Description}
                    </div>

                    {/* Client's Name and Designation */}
                    <div>
                      <div className="mb-2 text-xl font-semibold text-blue-500 client-name">
                        {item.Name}
                      </div>
                      <div className="font-semibold text-gray-500 client-designation">
                        {item.Designation}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default HappyClients;
