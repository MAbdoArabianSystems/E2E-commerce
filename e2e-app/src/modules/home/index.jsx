"use client";

import React from "react";

import SortOptions from "./hero/sortOptions";
import ProductsList from "./productsList";
import Input from "@/patterns/RenderProps/Input";
const Index = () => {
  return (
    <div className={``}>
      <Input
        render={(searchWords) => (
          <>
            <SortOptions />
            <ProductsList searchWords={searchWords}/>
          </>
        )}
      />
    </div>
  );
};

export default Index;
