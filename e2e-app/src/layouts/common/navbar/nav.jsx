"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React from "react";

const Index = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category")?.toLocaleUpperCase();

  //this function for controlling to back history
  const backToCategory = () => {
    history.back();
  };

  return (
    <div className="relative flex w-full flex-wrap items-center justify-between py-2 shadow-dark-mild text-white">
      <div className="max-w-[1600px] m-auto flex w-full flex-wrap align-middle items-center justify-between px-3">
        <div className="m-auto">
          <div
            onClick={backToCategory}
            className="text-[14px] md:text-[20px] flex flex-row gap-x-2 cursor-pointer"
          >
            <Image
            width={32}
            height={32}
              src={`/assets/images/nav/arrow.png`}
              className={`transform scale-x-[-1]`}
              alt="arrow"
            />
            <p> {category ? category : "No Category Selected"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
