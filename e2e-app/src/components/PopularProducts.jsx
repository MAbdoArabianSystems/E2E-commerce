import Cookies from "js-cookie";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";
import Button from "./Button";
import { addNewCart } from "@/store/thunkFunction/cartsFunctions";

const Index = ({ image, title, description, price, id, product }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const token = Cookies.get("token");

  const handleAddToCart = (product) => {
    const products = { productId: product?.id, quantity: 1 };
    if (!token) {
      window.location = "/login";
    } else {
      dispatch(addNewCart(products));
    }
  };

  return (
    <div
      key={id}
      className="flex flex-col justify-between space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
    >
      <Image
        className="mx-auto h-44 w-44 cursor-pointer"
        src={image}
        alt={`cart-${title}`}
        width={176}
        height={176}
        priority
      />
      <div onClick={() => router.push(`/products/${id}`)}>
        <p className="text-lg font-semibold leading-tight text-gray-900 hover:underline cursor-pointer">
          {title}
        </p>
        <p className="mt-2 text-base font-normal text-gray-500 dark:text-gray-400 line-clamp-3">
          {description}
        </p>
      </div>
      <div className="flex flex-col justify-center">
        <div>
          <p className="text-lg font-bold text-gray-900 dark:text-white">
            <span className="line-through"> ${price * 2}</span>
          </p>
          <p className="text-lg font-bold leading-tight text-red-600 dark:text-red-500">
            ${price}
          </p>
        </div>
        <div className="mt-6 flex items-center gap-2.5">
          <button
            data-tooltip-target="favourites-tooltip-3"
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white p-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
          >
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
              ></path>
            </svg>
          </button>
          <div
            id="favourites-tooltip-3"
            role="tooltip"
            className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
          >
            Add to favourites
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>

          <Button onclick={() => handleAddToCart(product)} type="button">
            <svg
              className="-ms-2 me-2 h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4"
              />
            </svg>
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
