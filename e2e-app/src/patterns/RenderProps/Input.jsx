import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Input = ({ render }) => {
  const searchParams = useSearchParams();
  const [searchWords, setSearchWords] = useState("");
  useEffect(()=>{
    setSearchWords("")
  },[searchParams])

  return (
    <>
      <div className="mx-auto md:w-2/4">
        <input
          type="text"
          id="voice-search"
          value={searchWords}
          onChange={(e) => setSearchWords(e.target.value)}
          className="w-full focus:outline-none shadow-xl h-[60px] placeholder-gray-400 font-semibold bg-gray-50 text-gray-900 text-[24px] rounded-sm focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search In Products..."
          required
        />
      </div>

      {render(searchWords)}
    </>
  );
};

export default Input;
