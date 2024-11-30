"use client";

import React, { useEffect } from "react";
import CardDetails from "@/components/CardDetails";
import CardDetailsSkeleton from "@/components/CardDetailsSkeleton";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneProduct } from "@/store/slices/productsSlice";

const Index = ({ productId }) => {
  const dispatch = useDispatch();
  const { data, error, loadingDetails } = useSelector(
    (state) => state?.Products?.productDetails
  );

  useEffect(() => {
    dispatch(fetchOneProduct(productId));
  }, [productId]);

  return (
    <div className="m-auto max-w-[1600px]">
      {error ? (
        <div>
          <p>{error.message || "An unexpected error occurred."}</p>
        </div>
      ) : loadingDetails ? (
        <CardDetailsSkeleton />
      ) : (
        <CardDetails product={data} />
      )}
    </div>
  );
};

export default Index;
