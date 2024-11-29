"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "./navLinks";
import { useDispatch, useSelector } from "react-redux";
import { fetchingCarts } from "@/store/thunkFunction/cartsFunctions";
import ToggleTheem from "@/patterns/Provider/ToggleTheem";

const Index = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const containsNumber = /\d/.test(pathname);
  const category = searchParams.get("category");
  const [active, setActive] = useState("");
  const [toggleList, settoggleList] = useState(false);

  const dispatch = useDispatch();
  const { carts, loading, error } = useSelector((state) => state.Carts);

  useEffect(() => {
    dispatch(fetchingCarts(1));
  }, []);

  useEffect(() => {
    setActive(category ? `${category}` : "");
  }, [category, active]);

  useEffect(() => {
    if (error !== null) {
      alert(error);
    }
  }, [error]);

  const updateSearchParams = (navTitle) => {
    if (containsNumber) {
      const params = new URLSearchParams();
      params.set("category", `${navTitle}`);
      router.push(`/products?${params.toString()}`);
    } else {
      router.push(`products?category=${navTitle}`);
    }
  };

  //this effect have all controllers on non-scroll in side-menu open
  useEffect(() => {
    const body = document.body;

    if (toggleList) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "scroll";
    }
  }, [toggleList]);

  return (
    <div className="flex py-6 justify-between items-center navbar bg-white">
      {/* Desktop Navigation */}
      <ul className="max-w-[1600px] m-auto list-none sm:flex hidden justify-center items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[14px] xl:text-[16px] ${
              active === nav.id ? "text-[#5742f6]" : "text-[#000]"
            } ${index === navLinks.length - 1 ? "mr-0" : "lg:mr-10 md:mr-4"}`}
            onClick={() => {
              setActive(nav.title);
            }}
          >
            <p
              onClick={() => updateSearchParams(nav?.id)}
              className="font-bold"
            >
              {nav.title?.toLocaleUpperCase()}
            </p>
          </li>
        ))}
        <li
          className="relative w-8 h-8 ms-8 cursor-pointer"
          onClick={() => router.push(`/carts`)}
        >
          <p className=" absolute pb-1 z-10 end-0 top-[-5px] w-4 h-4 bg-[red] text-[12px] text-[#fff] rounded-full text-center">
            {carts?.products?.length}
          </p>
          <Image
            src="/assets/images/nav/shopping-cart.png"
            alt="shopping-cart"
            fill
            style={{ objectFit: "contain" }}
          />
        </li>
        <li className="ms-5 h-[25px] w-[30px] text-center border border-[#000] rounded-xl">
          <ToggleTheem />
        </li>
      </ul>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex flex-row justify-evenly w-full px-5">
        {/* Logo */}
        <Link href="/" className="relative w-8 h-8">
          <Image
            src="/assets/images/login/logo.png"
            alt="logo"
            fill
            style={{ objectFit: "contain" }}
          />
        </Link>
        <div className="flex flex-1 justify-end items-center">
          <Image
            src={`${
              toggleList
                ? `/assets/images/nav/icons-close.png`
                : `/assets/images/nav/icons-menu.png`
            }`}
            alt="icon-nav"
            width={28}
            height={28}
            onClick={() => settoggleList(!toggleList)}
          />

          {/* Sidebar */}
          <div
            className={`${
              !toggleList ? "hidden" : "flex"
            } bg-white w-full h-full fixed z-10 top-20 left-0 min-w-[140px] sidebar`}
          >
            <ul className="list-none flex justify-start items-start flex-1 flex-col px-5">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-[#5742f6]" : "text-[#000]"
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                  onClick={() => {
                    setActive(nav.title);
                    settoggleList(false);
                  }}
                >
                  <p onClick={() => updateSearchParams(nav?.id)}>
                    {nav.title?.toLocaleUpperCase()}
                  </p>
                </li>
              ))}
              <li
                className="relative w-10 h-10 mt-8 cursor-pointer"
                onClick={() => {
                  router.push(`/carts`);
                  settoggleList(false);
                }}
              >
                <p className=" absolute pb-1 z-10 end-0 top-[-5px] w-4 h-4 bg-[red] text-[12px] text-[#fff] rounded-full text-center">
                  {carts?.products?.length}
                </p>
                <Image
                  src="/assets/images/nav/shopping-cart.png"
                  alt="shopping-cart"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
