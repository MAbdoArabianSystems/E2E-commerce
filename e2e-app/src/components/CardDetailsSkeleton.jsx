import React from "react";

const Index = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between align-top gap-5 items-center max-w-[1100px] m-auto animate-pulse">
      <div className="hidden md:flex flex-col justify-center items-center gap-4 w-[11%] lg:w-[24%]">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="w-[80px] h-[120px] bg-gray-300 rounded-lg"
          ></div>
        ))}
      </div>

      <div className="flex justify-center w-full md:w-[50%]">
        <div className="w-[500px] h-[500px] bg-gray-300 rounded-lg"></div>
      </div>

      <div className="flex flex-col items-center gap-6 w-full md:w-[35%] lg:w-[24%]">
        <div className="w-full lg:w-2/4 h-[60px] bg-gray-300 rounded-md"></div>

        <div className="w-5/6 h-[20px] bg-gray-300 rounded mb-2"></div>
        <div className="w-5/6 h-[20px] bg-gray-300 rounded mb-2"></div>

        <div className="w-full">
          <div className="h-[20px] w-1/2 bg-gray-300 rounded mb-2 mx-auto"></div>
          <div className="h-[40px] bg-gray-300 rounded-lg"></div>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <div className="w-full h-[50px] bg-gray-300 rounded-lg"></div>
          <div className="w-full h-[50px] bg-gray-300 rounded-lg"></div>

          <div className="mt-4 flex flex-wrap justify-center gap-4">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="w-[40px] h-[40px] bg-gray-300 rounded-sm"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
