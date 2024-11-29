"use client";

import { Suspense, useContext } from "react";
import HomePage from "@/modules/home";
import ScrollToTop from "../components/scrollToTop";
import { ContextProvider } from "@/patterns/Provider/TheemProvider";

export default function Home() {
  const {theem} = useContext(ContextProvider);

  return (
    <main className={`${theem}`}>
      <Suspense fallback={<div>Loading...</div>}>
        <section className={`m-auto px-5 dark:bg-[#121212] dark:text-[#fff] bg-gray-50`}>
          <ScrollToTop />
          <HomePage />
        </section>
      </Suspense>
    </main>
  );
}
