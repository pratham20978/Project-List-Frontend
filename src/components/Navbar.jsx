// import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between p-5 sm:mx-20 bg-pink-df">
      <div className="flex items-center justify-center gap-1 cursor-pointer first">
        <div className="logo">
          <img className="hidden w-7 sm:block" src="/local/home.svg" alt="" />
        </div>
        <div className="mt-1 cursor-pointer name">
          <span className="mx-1 font-bold sm:text-xl text-slate-800">Real</span>
          <span className="mx-1 sm:text-xl text-slate-800">Trust</span>
        </div>
      </div>
      <div className=" second">
        <div className="flex items-center gap-10 items">
          <ul className="hidden sm:flex sm:gap-10">
            <li className="font-bold cursor-pointer text-slate-700">Home</li>
            <li className="font-bold cursor-pointer text-slate-700">About</li>
            <li className="font-bold cursor-pointer text-slate-700">
              About Project
            </li>
            <li className="font-bold cursor-pointer text-slate-700">Contact</li>
          </ul>
          <Link to="/admin">
            <div className="px-2 py-1 bg-orange-600 rounded-lg cursor-pointer sm:p-3 button sm:px-7">
              <button className="font-bold text-white sm:text-xl">
                CONNECT
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
