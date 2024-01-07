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
    <div className="max-w-7xl mx-auto flex justify-between items-center h-[60px] my-[50px]">
      <div className={`${ubuntu.className} text-5xl font-bold`}>pti.</div>
      <div className="flex items-center gap-5">
        <form
          action=""
          className="flex items-center space-x-5 bg-white flex-1 md:flex-initial rounded-md px-5"
        >
          <FaMagnifyingGlass className="w-5 h-5 text-[#fe9d8b] m-2" />
          <input
            type="text"
            placeholder="Search Audiobooks"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 outline-none w-[600px] h-[60px] rounded-md"
          />
          <button hidden type="submit">
            Search
          </button>
        </form>
        <div
          className="relative h-[60px] w-[220px] flex items-center px-4 font-bold text-xl justify-between bg-white rounded-md cursor-pointer"
          onClick={() => setOPen(!open)}
        >
          <div>MENU</div>
          {open ? (
            <>
              <BsChevronUp className="text-[#fd8d56] font-extrabold text-2xl" />
              <div className="w-[220px] bg-white absolute top-[70px] left-0 rounded-md shadow-md">
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
      <div className="text-3xl border rounded-full p-2 border-[#fd6011] bg-[#fd6011] text-white">
        <RiUserLine />
      </div>
    </div>
  );
};

export default Navbar;
