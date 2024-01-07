"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
type Props = {
  data: any;
};
interface Item {
  Id: string;
  Name: string;
  Price: number;
  ImageUrl: string;
  IsPopular: boolean;
  IsRecommended: boolean;
}
const Popular = (props: Props) => {
  const [popularItems, setPopularItems] = useState<Item[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const popular = props.data.filter((item: { IsPopular: boolean; }) => item.IsPopular);
    setPopularItems(popular);
  }, [props.data]);
  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === props.data.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? props.data.length - 1 : prevIndex - 1
    );
  };
  const displayedItems = popularItems.slice(
    currentImageIndex,
    currentImageIndex + 5
  );
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">Popular</div>
        <div className="text-3xl font-semibold text-[#fd5906] flex">
          <GrFormPrevious onClick={prevSlide} />
          <GrFormNext onClick={nextSlide} />
        </div>
      </div>
      <div className="grid grid-cols-5 gap-5">
        {displayedItems.map((item: Item) => (
          <div className="flex flex-col gap-5" key={item.Id}>
            {item.IsPopular ? (
              <>
                <Image
                  src={item.ImageUrl}
                  alt={item.Name}
                  width={250}
                  height={300}
                  key={item.Id}
                  className="rounded-xl overflow-clip h-[300px]"
                />
                <div className="text-xl text-gray-600 text-center te">
                  {item.Name}
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
