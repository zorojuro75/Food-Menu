import Image from "next/image";
import React from "react";

export const Hero = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto rounded-xl px-5 text-center flex flex-col gap-5 lg:hidden">
        <div className="text-xl font-bold">Deliver Your Food To Your Door Step|</div>
        <div className="text-sm">Authentic food Quick service Fast delivery</div>
      </div>
      <div className="mx-5 bg-[#f99f1c] rounded-lg h-[150px] mt-[60px] relative lg:hidden">
      <Image
            src="/Image1.png"
            alt="hero"
            width={512}
            height={1}
            className="absolute bottom-0"
          />
      </div>

      <div className="max-w-7xl mx-auto bg-[#f99f1c] rounded-xl my-[130px] lg:flex text-white hidden">
        <div className="w-[60%] px-16 flex flex-col gap-5 justify-center">
          <div className="text-5xl">Deliver Your Food To Your Door Step|</div>
          <div>Authentic food Quick service Fast delivery</div>
        </div>
        <div className="w-[40%]">
          <Image
            src="/Image1.png"
            alt="hero"
            width={512}
            height={1}
          />
        </div>
      </div>
    </>
  );
};
