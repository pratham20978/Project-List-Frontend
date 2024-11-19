import React from "react";
import { useForm } from "react-hook-form";

const NewsLatter = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    let r = await fetch("https://project-list-backend.onrender.com/email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    // let res = await r.json()
    // console.log(data, res);
    // tostify
  };

  return (
    <div className="flex items-center justify-center max-w-md p-6 mx-auto bg-blue-500 rounded-lg shadow-md getmail">
      <form
        className="flex items-center w-full gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="flex-grow p-2 text-white placeholder-opacity-100 bg-blue-400 border-2 border-transparent rounded-md sm:px-4 sm:p-3 focus:border-white placeholder:text-lg placeholder:text-white placeholder:font-semibold focus:outline-none focus:ring-2 focus:ring-white"
          type="email"
          {...register("Email", { required: true })}
          placeholder="Enter your email"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="p-2 text-lg font-bold text-blue-500 transition duration-200 ease-in-out bg-white rounded-md shadow-md sm:p-3 sm:px-6 hover:bg-gray-100 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLatter;
