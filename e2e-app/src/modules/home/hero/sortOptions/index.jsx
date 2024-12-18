"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React, { memo, useEffect, useState } from "react";
import { initialImages } from "./initialImages";

const Page = () => {
  const [activeImage, setActiveImageState] = useState(initialImages);
  const [priceMenu, setPriceMenu] = useState(false);
 
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const itemsCount = searchParams.get("limit");
  const grid = searchParams.get("grid");
  const price = searchParams.get("price");

  const router = useRouter();

  //set new query params
  const updateSearchParams = (key, value) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value);
    router.push(`?${params.toString()}`);
  };

  //handle active image
  const setActiveImage = (imageId) => {
    setActiveImageState((prevImages) =>
      prevImages.map((img) => ({
        ...img,
        isActive: img.id === imageId,
      }))
    );
  };

  useEffect(() => {
    setActiveImage(JSON.parse(grid || 2));
  }, [grid]);

  return (
    <div className="mt-5 flex flex-wrap justify-center align-middle items-center gap-x-5 md:gap-x-10 lg:gap-x-20 gap-y-6">
      <div className="search-category flex gap-x-4 align-middle justify-center items-center md:w-[470px] lg:w-[510px] text-[12px] md:text-[16px] lg:text-[20px]">
        <p>PRODUCT CATEGORIES</p>
        <Image
          src="/assets/images/home/sm-arrow-bottom.png"
          alt="sm-arrow"
          width={16}
          height={16}
          className="w-4 h-4 cursor-pointer"
        />

        <p className=" cursor-pointer">
          <span className=" font-medium text-[#00000071]">Home</span> /{" "}
          <span className=" font-semibold">
            {category?.toLocaleUpperCase() || "All Categories"}
          </span>
        </p>
      </div>
      <div className="products-view">
        <div className="flex justify-center items-center align-middle gap-x-2">
          <span>Show : </span>
          <span
            className={`cursor-pointer ${
              itemsCount === "5"
                ? "text-[#000] font-semibold"
                : "text-[#0000007a]"
            }`}
            onClick={() => updateSearchParams("limit", "5")}
          >
            5{" "}
          </span>
          {" / "}{" "}
          <span
            className={`cursor-pointer ${
              itemsCount === "10"
                ? "text-[#000] font-semibold"
                : "text-[#0000007a]"
            }`}
            onClick={() => updateSearchParams("limit", "10")}
          >
            10
          </span>
          {" / "}{" "}
          <span
            className={`cursor-pointer ${
              itemsCount === "15"
                ? "text-[#000] font-semibold"
                : "text-[#0000007a]"
            }`}
            onClick={() => updateSearchParams("limit", "15")}
          >
            15
          </span>
          <div className="flex gap-x-2 ms-4 justify-center items-center align-middle cursor-pointer">
            {activeImage.map((img) => (
              <Image
                key={img.id}
                src={img.isActive ? img.imageActive : img.image}
                alt={`grid-${img.id}`}
                width={img?.id === 4 ? 36 : 32}
                height={img?.id === 4 ? 36 : 32}
                className="cursor-pointer"
                onClick={() => {
                  setActiveImage(img.id);
                  updateSearchParams("grid", `${img?.id}`);
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <div
        className="sort-by flex flex-row gap-x-2 cursor-pointer justify-center align-middle items-center border-b  bottom-[#0000005e] max-w-[150px]"
        onClick={() => updateSearchParams("sort", "desc")}
      >
        <p className=" font-semibold">Sort by latest</p>
        <Image
          src="/assets/images/home/sm-arrow-bottom.png"
          alt="sm-arrow"
          width={16}
          height={16}
          className="w-4 h-4 cursor-pointer"
        />
      </div>
      <div className="filter-by-price relative">
        <div
          className="cursor-pointer flex flex-row gap-x-2 justify-center align-middle items-center"
          onClick={() => setPriceMenu(!priceMenu)}
          onMouseEnter={() => setPriceMenu(!priceMenu)}
          //   onMouseLeave={() => setPriceMenu(!priceMenu)}
        >
          <p>FILTER BY PRICE</p>
          <Image
            src="/assets/images/home/sm-arrow-bottom.png"
            alt="sm-arrow"
            width={16}
            height={16}
            className="w-4 h-4 cursor-pointer"
          />
        </div>

        <div
          className={`absolute  z-[10] ${
            priceMenu ? "block" : " hidden"
          } top-[30px] w-full h-auto px-1 bg-white py-5 shadow-md rounded-sm drop-shadow-xl flex flex-col justify-center items-center gap-3`}
        >
          <p className="text-[#000] font-semibold text-[22px]">${price||0}</p>
          <input
            type="range"
            className="p-1 bg-[#000] transparent h-[4px] w-full cursor-pointer appearance-none border-transparent dark:bg-neutral-600"
            id="customRange1"
            min="0"
            max="1000"
            value={JSON.parse(price || 0)}
            onChange={(e) => updateSearchParams("price", `${e.target.value}`)}
          />
        </div>
      </div>
    </div>
  );
};

export default memo(Page);
