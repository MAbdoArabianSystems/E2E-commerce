"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const Index = ({ product }) => {
  const searchParams = useSearchParams();
  const gridColsCount = searchParams.get("grid");
  const router = useRouter();

  const cardMinWidth =
    gridColsCount === "2"
      ? "min-w-[330px] lg:min-w-[440px] xl:min-w-[570px]"
      : gridColsCount === "3"
      ? "min-w-[330px] xl:min-w-[440px]"
      : gridColsCount === "4"
      ? "min-w-[330px]"
      : "min-w-[330px] xl:min-w-[440px] 2xl:min-w-[570px]";

  return (
    <div
      className={`block rounded-lg bg-gray-50 shadow-secondary-1 ${cardMinWidth} text-center`}
      key={product?.id}
      onClick={() => router.push(`/products/${product?.id}`)}
    >
      <div
        className="relative overflow-hidden bg-cover bg-no-repeat cursor-pointer"
        data-twe-ripple-init
        data-twe-ripple-color="light"
        style={{ width: "100%", height: "300px" }}
      >
        <Image
          fill
          className="rounded-t-lg object-contain"
          src={`${
            product?.image ||
            "https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
          }`}
          alt={`product-${product?.title}`}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (min-width: 375px) 22vw"
          unoptimized
        />
      </div>

      <div className="p-6 text-surface dark:text-white">
        <p className="mb-4 text-base text-[#000000a5]">
          {product?.description}
        </p>

        <h5 className="mb-2 text-xl font-medium leading-tight">
          {product?.title}
        </h5>

        <h6 className="text-[#000000a5]">${product?.price}</h6>
      </div>
    </div>
  );
};

export default Index;
