"use client";

import React, { useEffect, useState } from "react";
import CardList from "./cardList";
import { useSearchParams } from "next/navigation";
import CardListSkeleton from "./cardList/CardListSkeleton";
import { useDispatch, useSelector } from "react-redux";
import { fetchingProducts } from "@/store/slices/productsSlice";

const Index = ({ searchWords }) => {
  const searchParams = useSearchParams();

  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();
  const { data, error, loading } = useSelector(
    (state) => state?.Products?.products
  );

  useEffect(() => {
    dispatch(fetchingProducts(searchParams));
  }, [searchParams]);

  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data]);

  const handleSearhing = (searchWords, arrayOfData) => {
    if (searchWords === "") {
      setProducts(data);
      return;
    }

    let productsFilter = arrayOfData?.filter((product) => {
      return product.title
        ?.toLocaleUpperCase()
        ?.includes(searchWords?.toLocaleUpperCase());
    });
    setProducts(productsFilter);
  };

  useEffect(() => {
    handleSearhing(searchWords, data);
  }, [searchWords]);

  return (
    <div className="py-10">
      {loading ? (
        <CardListSkeleton />
      ) : products?.length !== 0 ? (
        <CardList products={products} />
      ) : (
        <div className="m-auto h-[50vh] w-2/4 border border-t-[#22222238] rounded-md shadow-xl flex flex-col justify-center items-center align-middle">
          <p className="text-[#db2c2c] text-[24px]"> No Search Results .!</p>
        </div>
      )}
    </div>
  );
};

export default Index;
