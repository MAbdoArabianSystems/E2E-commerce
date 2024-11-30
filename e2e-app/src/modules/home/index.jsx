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
          <div className="mt-16">
            <SortOptions />
            <ProductsList searchWords={searchWords}/>
          </div>
        )}
      />
    </div>
  );
};

export default Index;
