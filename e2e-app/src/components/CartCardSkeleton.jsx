import React from "react";

const Index = () => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6 animate-pulse">
      <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
        <div className="h-20 w-20 bg-gray-200 dark:bg-gray-600 rounded-md" />
        
        <div className="flex items-center justify-between md:order-3 md:justify-end">
          <div className="flex items-center">
            <div className="h-5 w-5 bg-gray-200 dark:bg-gray-600 rounded-md" />
            <div className="w-10 h-5 bg-gray-200 dark:bg-gray-600 mx-2 rounded-md" />
            <div className="h-5 w-5 bg-gray-200 dark:bg-gray-600 rounded-md" />
          </div>
          <div className="text-end md:order-4 md:w-32">
            <div className="h-5 w-16 bg-gray-200 dark:bg-gray-600 rounded-md" />
          </div>
        </div>

        <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
          <div className="space-y-2">
            <div className="h-5 w-3/4 bg-gray-200 dark:bg-gray-600 rounded-md" />
            <div className="h-4 w-full bg-gray-200 dark:bg-gray-600 rounded-md" />
            <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-600 rounded-md" />
            <div className="h-4 w-1/3 bg-gray-200 dark:bg-gray-600 rounded-md" />
          </div>

          <div className="flex items-center gap-4">
            <div className="h-5 w-24 bg-gray-200 dark:bg-gray-600 rounded-md" />
            <div className="h-5 w-24 bg-gray-200 dark:bg-gray-600 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
