import React from "react";

const Index = () => {
  return (
    <div className="flex flex-col justify-between space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800 animate-pulse">
      <div className="mx-auto h-44 w-44 bg-gray-300 rounded-md dark:bg-gray-600" />

      <div className="h-6 w-3/4 bg-gray-300 rounded dark:bg-gray-600 mx-auto" />

      <div className="space-y-2">
        <div className="h-4 w-full bg-gray-300 rounded dark:bg-gray-600"></div>
        <div className="h-4 w-5/6 bg-gray-300 rounded dark:bg-gray-600"></div>
        <div className="h-4 w-2/3 bg-gray-300 rounded dark:bg-gray-600"></div>
      </div>

      <div className="flex flex-col items-center">
        <div className="h-5 w-1/2 bg-gray-300 rounded dark:bg-gray-600"></div>
        <div className="h-5 w-1/3 bg-gray-300 rounded dark:bg-gray-600 mt-2"></div>
      </div>

      <div className="flex gap-2.5">
        <div className="h-10 w-10 bg-gray-300 rounded dark:bg-gray-600"></div>
        <div className="h-10 flex-1 bg-gray-300 rounded dark:bg-gray-600"></div>
      </div>
    </div>
  );
};

export default Index;
