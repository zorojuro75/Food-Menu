"use client";
import React, { useState } from "react";
import { Ubuntu } from "next/font/google";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { RiUserLine } from "react-icons/ri";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400", "700"] });
const Navbar = () => {
  const [search, setSearch] = useState<string>("");
  const [open, setOPen] = useState<boolean>(false);
  return (
    <div className="max-w-7xl lg:mx-auto flex lg:justify-between gap-5 items-center h-[60px] my-[50px] mx-5">
      <div className={`${ubuntu.className} lg:text-5xl text-2xl font-bold`}>pti.</div>
      <div className="flex items-center lg:gap-5 gap-2">
        <form
          action=""
          className="flex items-center gap-2 lg:space-x-5 bg-white flex-1 md:flex-initial rounded-md px-5 text-sm"
        >
          <FaMagnifyingGlass className="lg:w-5 lg:h-5 text-[#fe9d8b] lg:m-2" />
          <input
            type="text"
            placeholder="Search Audiobooks"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 outline-none lg:w-[600px] w-[110px] lg:h-[60px] h-[40px] rounded-md"
          />
          <button hidden type="submit">
            Search
          </button>
        </form>
        <div
          className="relative lg:h-[60px] h-[40px] lg:w-[220px] w-[100px] flex items-center lg:px-4 px-2 font-bold lg:text-xl text-sm justify-between bg-white rounded-md cursor-pointer"
          onClick={() => setOPen(!open)}
        >
          <div>MENU</div>
          {open ? (
            <>
              <BsChevronUp className="text-[#fd8d56] font-extrabold lg:text-2xl" />
              <div className="w-[220px] bg-white absolute top-[70px] lg:left-0 left-[-120px] rounded-md shadow-md">
                <div className="dropdown-content flex flex-col w-[220px] font-normal text-gray-600 py-2 text-lg">
                  <div className="hover:text-orange-500 hover:bg-gray-100 px-5 py-1">
                    Home
                  </div>
                  <div className="hover:text-orange-500 hover:bg-gray-100 px-5 py-1">
                    Details
                  </div>
                  <div className="hover:text-orange-500 hover:bg-gray-100 px-5 py-1">
                    Category
                  </div>
                  <div className="hover:text-orange-500 hover:bg-gray-100 px-5 py-1">
                    My Favorites
                  </div>
                  <div className="hover:text-orange-500 hover:bg-gray-100 px-5 py-1">
                    Profile
                  </div>
                  <div className="hover:text-orange-500 hover:bg-gray-100 px-5 py-1">
                    Log In/Sign Up
                  </div>
                </div>
              </div>
            </>
          ) : (
            <BsChevronDown className="text-[#fd8d56] font-extrabold text-2xl" />
          )}
        </div>
      </div>
      <div className="text-3xl border rounded-full p-2 border-[#fd6011] bg-[#fd6011] text-white hidden lg:flex">
        <RiUserLine />
      </div>
    </div>
  );
};

export default Navbar;
