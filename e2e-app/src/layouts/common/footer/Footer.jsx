'use client'

import Link from "next/link";
import React from "react";

const Index = () => {

  return (
      <div className={`max-w-[1600px] m-auto dark:bg-[#000] dark:text-[#fff]`}>
        <div className="w-full p-4 text-center">
          © 2024 Copyright : {" "}
          <Link href="/">E2E County</Link>
        </div>
      </div>
  );
};

export default Index;
