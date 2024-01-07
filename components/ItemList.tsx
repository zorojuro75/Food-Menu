"use client";
import Image from "next/image";
import React, { Fragment, useEffect, useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { Dialog, Transition } from "@headlessui/react";
type Props = {
  data: any;
  filterType: string;
};
interface Item {
  Id: string;
  Name: string;
  Price: number;
  ImageUrl: string;
  IsPopular: boolean;
  IsRecommended: boolean;
}
const ItemList = (props: Props) => {
  const [numItemsToShow, setNumItemsToShow] = useState<number>(5);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [itemsList, setItemsList] = useState<Item[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [item, setItem] = useState<Item>({
    Id: "",
    Name: "",
    Price: 0,
    ImageUrl: "",
    IsPopular: true,
    IsRecommended: true,
  });
  function setModal() {
    setIsModalOpen(!isModalOpen);
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setItemsList((prevItems) => [...prevItems, item]);
    setModal();
  };
  useEffect(() => {
    const filteredItems = props.data.filter((item: { [key: string]: any }) => {
      return item[props.filterType] === true;
    });
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setNumItemsToShow(3);
      } else {
        setNumItemsToShow(5);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    setItemsList(filteredItems);
  });
  const nextSlide = () => {
    if (currentImageIndex + 5 < itemsList.length) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === props.data.length - 1 ? 0 : prevIndex + 1
      );
    }
  };
  const prevSlide = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex((prevIndex) => prevIndex - 1);
    }
  };
  const displayedItems = itemsList.slice(
    currentImageIndex,
    currentImageIndex + numItemsToShow
  );
  return (
    <div className="max-w-7xl lg:mx-auto my-10 mx-5">
      <div className="flex justify-between items-center py-2 px-5 text-lg">
        <div className="lg:text-2xl font-bold">
          {props.filterType === "IsRecommended" ? "Recommended" : "Popular"}
        </div>
        <div className="lg:text-2xl font-semibold text-[#fd5906] flex items-center">
          <div onClick={() => setModal()} className="cursor-pointer">
            Add More
          </div>
          <Transition appear show={isModalOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black/25" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        Add Item
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          <form
                            action=""
                            className="border-0 border-gray-400 grid grid-cols-3 gap-2"
                          >
                            <label htmlFor="Id" className="p-2">
                              ID
                            </label>
                            <input
                              type="text"
                              name="Id"
                              value={item.Id}
                              onChange={handleChange}
                              placeholder="Item ID"
                              className="p-2 border rounded border-gray-400 col-span-2"
                            />
                            <label htmlFor="Name" className="p-2">
                              Name
                            </label>
                            <input
                              type="text"
                              name="Name"
                              value={item.Name}
                              onChange={handleChange}
                              placeholder="Item Name"
                              className="p-2 border rounded border-gray-400 col-span-2"
                            />
                            <label htmlFor="Price" className="p-2">
                              Price
                            </label>
                            <input
                              type="number"
                              name="Price"
                              value={item.Price}
                              onChange={handleChange}
                              placeholder="Price"
                              className="p-2 border rounded border-gray-400 col-span-2"
                            />
                            <label htmlFor="ImageUrl" className="p-2">
                              Image
                            </label>
                            <input
                              type="text"
                              name="ImageUrl"
                              value={item.ImageUrl}
                              onChange={handleChange}
                              placeholder="Image URL"
                              className="p-2 border rounded border-gray-400 col-span-2"
                            />
                            <div className="col-span-3 flex-1 justify-self-end">
                              <button
                                type="submit"
                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                onClick={handleSubmit}
                              >
                                Submit
                              </button>
                            </div>
                          </form>
                        </p>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
          <GrFormPrevious
            onClick={prevSlide}
            className={`cursor-pointer ${
              currentImageIndex === 0 ? "text-gray-500" : ""
            }`}
          />
          <GrFormNext
            onClick={nextSlide}
            className={`cursor-pointer ${
              currentImageIndex + 5 === itemsList.length ? "text-gray-500" : ""
            }`}
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-5 grid-cols-3 gap-5">
        {displayedItems.map((item: Item) => (
          <React.Fragment key={item.Id}>
            <div className="flex flex-col gap-5">
              <Image
                src={item.ImageUrl}
                alt={item.Name}
                width={250}
                height={300}
                key={item.Id}
                className="rounded-xl overflow-clip lg:h-[300px] h-[200px]"
              />
              <div className="text-xl text-gray-600 text-center te">
                {item.Name}
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
