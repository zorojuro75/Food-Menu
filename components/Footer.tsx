import { Ubuntu } from "next/font/google";
import React from "react";
import { RiGoogleLine } from "react-icons/ri";
import { IoLogoTwitter } from "react-icons/io5";
import { BsInstagram } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400", "700"] });
const Footer = () => {
  return (
    <div className=" bg-[rgb(249,159,28)] mt-[100px]">
      <div className="lg:flex max-w-7xl mx-auto py-16 hidden">
        <div className="w-[70%]">
          <div className="relative w-[70%]">
            <input
              type="text"
              className="w-full py-3 px-5 rounded-full"
              placeholder="Enter your Email"
            />
            <button className="absolute right-5 rounded-2xl text-white font-bold py-2 bg-[#fc6011] my-1 ps-10 ">
              <span>Subscribe</span>
              <FaArrowRightLong className="text-white inline text-lg mx-5" />
            </button>
          </div>
          <div className={`${ubuntu.className} text-5xl font-bold my-[80px]`}>
            pti.
          </div>
          <div className="flex justify-between items-center">
            <div>CopyrightTripp. All Right Reserved</div>
            <div className="flex gap-5">
              <RiGoogleLine className="text-[#fd5906] rounded-full p-1 bg-white bg-opacity-75 h-8 w-8" />
              <IoLogoTwitter className="text-[#fd5906] rounded-full p-1 bg-white bg-opacity-75 h-8 w-8" />
              <BsInstagram className="text-[#fd5906] rounded-full p-1 bg-white bg-opacity-75 h-8 w-8" />
            </div>
          </div>
        </div>
        <div className="w-[30%]">
          <img src="/Image2.png" alt="" className="w-full" />
        </div>
      </div>
      <div className="lg:hidden max-w-7xl flex flex-col items-center py-16 gap-5">
        <div className="relative w-[90%]">
          <input
            type="text"
            className="w-full py-3 px-5 rounded"
            placeholder="Enter your Email"
          />
          <button className="absolute right-5 rounded text-[#fd5906] font-bold my-3 ps-10 ">
            <span>Subscribe</span>
            <FaArrowRightLong className="text-[#fd5906] inline text-lg mx-5" />
          </button>
        </div>
        <div className="flex gap-5">
          <RiGoogleLine className="text-white rounded-full p-2 bg-[#fd5906] h-10 w-10" />
          <IoLogoTwitter className="text-white rounded-full p-2 bg-[#fd5906] h-10 w-10" />
          <BsInstagram className="text-white rounded-full p-2 bg-[#fd5906] h-10 w-10" />
        </div>
        <div className={`${ubuntu.className} text-3xl font-bold my-5`}>
          pti<span className="text-[#fd5906]">.</span>
        </div>
        <div>CopyrightTripp. All Right Reserved</div>
      </div>
    </div>
  );
};

export default Footer;
