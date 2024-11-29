import React from "react";
import CardSkeleton from "@/components/CardSkeleton";
import { useSearchParams } from "next/navigation";

const Index = () => {
  const searchParams = useSearchParams();
  const gridColsCount = searchParams.get("grid");

  const gridClass =
    gridColsCount === "2"
      ? "grid-cols-1 md:grid-cols-2 gap-2 max-w-[1200px]"
      : gridColsCount === "3"
      ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      : gridColsCount === "4"
      ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2"
      : "grid-cols-1 md:grid-cols-2 gap-2 max-w-[1200px]";

  return (
    <div className={`grid ${gridClass} grid-flow-row justify-items-center m-auto`}>
      {[...Array(8)].map((_, index) => (
        <CardSkeleton key={index} />
      ))}
    </div>
  );
};

export default Index;
