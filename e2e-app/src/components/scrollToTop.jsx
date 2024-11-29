'use client'

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Index() {
  const [visible, setVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleTogglingVisibility = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 200) {
        setVisible(true);
      } else if (scrolled <= 200) {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleTogglingVisibility);
    return () => window.removeEventListener("scroll", handleTogglingVisibility);
  }, []);

  return (
    <div
      className={`fixed bottom-[74px] end-2 z-[100] md:bottom-16 md:end-10 ${visible ? "block" : "hidden"}`}
    >
      <div
        id="scroll-top"
        title="Back to top"
        onClick={() => scrollToTop()}
        className="z-40 flex h-[56px] w-[56px] cursor-pointer items-center justify-center rounded-lg bg-[#000] transition-all ease-out hover:bg-[#232323e1]"
      >
        <Image
          src="/assets/images/nav/arrow.png"
          alt="Go to top"
          height={32}
          width={24}
          className="[transform:rotate(-90deg)]"
        />
      </div>
    </div>
  );
}
