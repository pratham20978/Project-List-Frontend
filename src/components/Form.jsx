import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    let r = await fetch("https://project-list-backend.onrender.com/form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    let res = await r.text();
    console.log(data, res);
  };
  return (
    <div className="sm:absolute relative top-[190px] sm:top-1/2 sm:right-5 transform -translate-y-1/2 sm:w-[30vw]">
      <div className="flex flex-col items-center justify-center px-4 py-6 bg-blue-600 rounded-lg sm:bg-opacity-70">
        <div className="mb-4 text-xl font-bold text-center text-white">
          Get a Free Consultation
        </div>

        <div className="container flex flex-col w-full max-w-lg gap-6 p-6 mx-auto bg-gray-800 rounded-lg shadow-md">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <input
              className="p-3 px-4 text-white placeholder-gray-400 bg-gray-900 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              type="text"
              {...register("Name")}
              placeholder="Full Name"
            />
            <input
              className="p-3 px-4 text-white placeholder-gray-400 bg-gray-900 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              type="email"
              {...register("Email")}
              placeholder="Email Address"
            />
            <input
              className="p-3 px-4 text-white placeholder-gray-400 bg-gray-900 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              type="tel"
              {...register("Contact")}
              placeholder="Mobile Number"
            />
            <input
              className="p-3 px-4 text-white placeholder-gray-400 bg-gray-900 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              type="text"
              {...register("City")}
              placeholder="Area, City"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="p-3 text-lg font-bold text-white transition duration-200 ease-in-out bg-orange-600 rounded-md hover:bg-orange-500 disabled:bg-orange-400 px-7"
            >
              Get Quick Quote
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
