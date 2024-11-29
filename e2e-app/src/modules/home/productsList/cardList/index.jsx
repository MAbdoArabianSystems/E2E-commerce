"use client";

import React from "react";
import Card from "@/components/Card";
import { useSearchParams } from "next/navigation";

const Index = ({ products}) => {
  const searchParams = useSearchParams();
  const gridColsCount = searchParams.get("grid");

  const gridClass =
    gridColsCount === "2"
      ? "grid-cols-1 md:grid-cols-2 gap-2 max-w-[1200px]"
      : gridColsCount === "3"
      ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg: gap-6"
      : gridColsCount === "4"
      ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-6 xl:gap-2"
      : "grid-cols-1 md:grid-cols-2 gap-2 max-w-[1200px]";


      return (
    <div
      className={`grid ${gridClass} grid-flow-row justify-items-center m-auto`}
    >
      {products?.map((product) => (
        <Card product={product} key={product?.id}/>
      ))}
    </div>
  );
};

export default Index;
