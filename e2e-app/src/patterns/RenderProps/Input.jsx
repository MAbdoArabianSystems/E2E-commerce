import React, { useState } from "react";

const Input = ({ render }) => {
  const [searchWords, setSearchWords] = useState("");
  return (
    <>
      <input
          type="text"
          id="voice-search"
          value={searchWords}
          onChange={(e) => setSearchWords(e.target.value)}
          className="w-full shadow-xl h-[60px] bg-gray-50 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search In Products..."
          required
        />

      {render(searchWords)}
    </>
  );
};

export default Input;
