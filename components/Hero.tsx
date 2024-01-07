import Image from "next/image";
import React from "react";

export const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto bg-[#f99f1c] rounded-xl my-[130px] flex text-white">
      <div className="w-[60%] px-16 flex flex-col gap-5 justify-center">
        <div className="text-5xl">Deliver Your Food To Your Door Step|</div>
        <div>Authentic food Quick service Fast delivery</div>
      </div>
      <div className="w-[40%]">
        <Image
          src="/image1.png"
          alt="hero"
          width={512}
          height={1}
          className="400"
        />
      </div>
    </div>
  );
};
