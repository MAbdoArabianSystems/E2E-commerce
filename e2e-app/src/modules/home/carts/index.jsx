"use client";

import React, { useContext, useEffect } from "react";
import CartCard from "@/components/CartCard";
import PopularProducts from "@/components/PopularProducts";
import PopularProductsSkeleton from "@/components/PopularProductsSkeleton";
import CartCardSkeleton from "@/components/CartCardSkeleton";
import { useDispatch, useSelector } from "react-redux";
import { fetchingProducts } from "@/store/slices/productsSlice";
import { fetchingCarts } from "@/store/thunkFunction/cartsFunctions";
import { ContextProvider } from "@/patterns/Provider/TheemProvider";

const Index = () => {
  const {theem} = useContext(ContextProvider);

  const { data, loading, error } = useSelector(
    (state) => state.Products.products
  );
  const { carts } = useSelector((state) => state.Carts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchingCarts(1));
    dispatch(fetchingProducts());
  }, []);

  /*******************this code for theck cart products id's and filter all products in one time */
  const productIdsInCart = new Set(
    carts?.products?.map((product) => product?.productId)
  );
  const filteredProducts = data?.filter((product) =>
    productIdsInCart?.has(product.id)
  );
  /********************************************************************************************/

  // Make a shallow copy to avoid mutating original
  const topRatedProducts = [...data]
    .sort((a, b) => b.rating.rate - a.rating.rate) // Sort by rating
    .slice(0, 3); // Take the top 3

  return (
    <section className={`${theem} bg-white py-8 antialiased dark:bg-gray-900 md:py-16`}>
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
          Shopping Cart
        </h2>

        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
            <div className="space-y-6">
              {loading
                ? [...Array(3)].map((_, index) => (
                    <CartCardSkeleton key={index} />
                  ))
                : filteredProducts &&
                  filteredProducts?.map((product) => (
                    <CartCard
                      key={product?.id}
                      addedDate={carts?.date}
                      image={product?.image}
                      title={product?.title}
                      description={product?.description}
                      price={product?.price}
                      id={product?.id}
                    />
                  ))}
            </div>
            <div className="hidden xl:mt-8 xl:block">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                People also bought
              </h3>
              <div className="mt-6 grid grid-cols-3 gap-4 sm:mt-8">
                {loading
                  ? [...Array(3)].map((_, index) => (
                      <PopularProductsSkeleton key={index} />
                    ))
                  : topRatedProducts?.map((product) => (
                      <PopularProducts
                        key={product?.id}
                        addedDate={carts?.date}
                        image={product?.image}
                        title={product?.title}
                        description={product?.description}
                        price={product?.price}
                        id={product?.id}
                        product={product}
                      />
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
