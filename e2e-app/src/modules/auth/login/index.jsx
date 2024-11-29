"use client";

import Link from "next/link";
import Form from "./Form";
import Image from "next/image";

const Index = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link
          href="/"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 "
        >
          <div className={`w-8 h-8 mr-2`}>
            <Image
              width={32}
              height={32}
              className={`mr-2`}
              src={`/assets/images/login/logo.png`}
              alt={`logo`}
            />
          </div>
          <p>STORE</p>
        </Link>
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Sign in to your account
            </h1>
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
