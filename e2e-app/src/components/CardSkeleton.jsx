import React from "react";

const Index = () => {
  return (
    <div className="block rounded-lg bg-gray-200 shadow-secondary-1 animate-pulse min-w-[330px] lg:min-w-[440px] xl:min-w-[570px] h-[400px] text-center">

      <div
        className="relative overflow-hidden rounded-t-lg bg-gray-300"
        style={{ width: "100%", height: "300px" }}
      ></div>

      <div className="p-6">
        <div className="h-6 bg-gray-300 rounded mb-4 w-3/4 mx-auto"></div>
        
        <div className="h-4 bg-gray-300 rounded mb-2 w-5/6 mx-auto"></div>
        <div className="h-4 bg-gray-300 rounded mb-2 w-5/6 mx-auto"></div>

        <div className="h-5 bg-gray-300 rounded w-1/3 mx-auto"></div>
      </div>
    </div>
  );
};

export default Index;
