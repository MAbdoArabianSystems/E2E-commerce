import Cookies from "js-cookie";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import Button from "./Button";
import { addNewCart } from "@/store/thunkFunction/cartsFunctions";

const Index = ({ product }) => {
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
    <div className="dark:bg-[#c5c8cd] flex flex-col md:flex-row justify-between align-top gap-5 items-center max-w-[1100px] m-auto">
      <div
        className={`sumbnils-images hidden md:flex flex-col justify-center align-middle items-center gap-4 w-[11%] lg:w-[24%]`}
      >
        <Image
          width={80}
          height={120}
          className="rounded-t-lg object-contain cursor-pointer"
          src={`${
            product?.image ||
            "https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
          }`}
          alt={`product-image`}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (min-width: 375px) 22vw"
          unoptimized
        />
        <Image
          width={80}
          height={120}
          className="rounded-t-lg object-contain cursor-pointer"
          src={`${
            product?.image ||
            "https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
          }`}
          alt={`product-image`}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (min-width: 375px) 22vw"
          unoptimized
        />
        <Image
          width={80}
          height={120}
          className="rounded-t-lg object-contain cursor-pointer"
          src={`${
            product?.image ||
            "https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
          }`}
          alt={`product-image`}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (min-width: 375px) 22vw"
          unoptimized
        />
        <Image
          width={80}
          height={120}
          className="rounded-t-lg object-contain cursor-pointer"
          src={`${
            product?.image ||
            "https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
          }`}
          alt={`product-image`}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (min-width: 375px) 22vw"
          unoptimized
        />
      </div>
      <div className="select-sumblil-image flex flex-row justify-center cursor-pointer w-full md:w-[50%]">
        <Image
          width={500}
          height={500}
          className="rounded-t-lg object-none"
          src={`${
            product?.image ||
            "https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
          }`}
          alt={`product`}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (min-width: 375px) 22vw"
        />
      </div>
      <div className="product-operations flex flex-col items-center gap-6 w-full md:w-[35%] lg:w-[24%]">
        <p className="text-center text-[16px] text-[#fff] bg-black p-4 lg:py-8 w-full lg:w-2/4">
          {product?.title}
        </p>
        <p className="text-[14px] text-[#000000a4] dark:text-[#fff] text-center">
          {product?.description}
        </p>
        <div className="size w-full">
          <label
            htmlFor="countries"
            className="text-center block mb-2 text-sm font-medium dark:text-[#fff] text-gray-900"
          >
            Size Guide
          </label>
          <select
            id="countries"
            defaultValue="Choose an option"
            className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          >
            <option disabled value="Choose an option">
              Choose an option
            </option>
            <option value="34S">34S</option>
            <option value="45CA">45CA</option>
            <option value="41FR">41FR</option>
            <option value="67DE">67DE</option>
          </select>
        </div>
        <div className="bottons flex flex-col gap-4 w-full">
          <Button onclick={() => handleAddToCart(product)} type="button">
            Add to Cart
          </Button>
          <button className="w-full p-3 text-[#fff] bg-[#353434ac] hover:bg-[#3534347a] rounded-lg">
            Pay With Google PaY
          </button>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <Image
              src="https://readymadeui.com/images/american-express.webp"
              width={40}
              height={40}
              alt="card1"
              className="object-contain"
              unoptimized
            />
            <Image
              src="https://readymadeui.com/images/master.webp"
              width={40}
              height={40}
              alt="card4"
              className="object-contain"
              unoptimized
            />
            <Image
              src="https://readymadeui.com/images/visa.webp"
              width={40}
              height={40}
              alt="card2"
              className="object-contain"
              unoptimized
            />
            <Image
              src="https://readymadeui.com/images/american-express.webp"
              alt="card3"
              width={40}
              height={40}
              className="object-contain"
              unoptimized
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
