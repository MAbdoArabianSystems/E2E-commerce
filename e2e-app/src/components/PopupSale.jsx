'use client'

import React, { useState } from "react";

const Index = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className={`${toggle ? 'hidden' : 'fixed bottom-5 flex flex-col w-[150px] h-[200px] py-5'}`}>
      <div className="w-6 h-6 rounded-full bg-black text-[#fff] ms-auto text-center pt-[1px] cursor-pointer"
      onClick={()=>setToggle(!toggle)}
      >
        <p>X</p>
      </div>

      <div className="w-[100px] h-[100px] rounded-full bg-black text-[#fff] m-auto text-center pt-[35px]">
        <p className="font-semibold text-[16px]">sale 50%</p>
      </div>
    </div>
  );
};

export default Index;
