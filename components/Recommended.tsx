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
const Recommended = (props: Props) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [recommendedItems, setRecommendedItems] = useState<Item[]>([]);
  useEffect(() => {
    const recommended = props.data.filter((item: { IsRecommended: Boolean; }) => item.IsRecommended);
    setRecommendedItems(recommended);
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
  const displayedItems = recommendedItems.slice(
    currentImageIndex,
    currentImageIndex + 5
  );
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">Recommended</div>
        <div className="text-3xl font-semibold text-[#fd5906] flex">
          <GrFormPrevious onClick={prevSlide} />
          <GrFormNext onClick={nextSlide} />
        </div>
      </div>
      <div className="grid grid-cols-5 gap-5">
        {displayedItems.map((item: Item) => (
          <React.Fragment key={item.Id}>
            {item.IsRecommended && (
              <div className="flex flex-col gap-5">
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
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Recommended;
