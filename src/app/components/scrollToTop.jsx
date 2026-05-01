"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const DEFAULT_BTN_CLS =
  "fixed bottom-24 right-6 z-50 flex items-center justify-center rounded-full bg-zinc-900 dark:bg-zinc-100 p-4 text-white dark:text-zinc-900 hover:scale-110 transition-all duration-300 ease-out shadow-md";
const SCROLL_THRESHOLD = 50;

const ScrollToTop = () => {
  const [btnCls, setBtnCls] = useState(DEFAULT_BTN_CLS);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > SCROLL_THRESHOLD) {
        setBtnCls(DEFAULT_BTN_CLS.replace(" hidden", ""));
      } else {
        setBtnCls(DEFAULT_BTN_CLS + " hidden");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll, { passive: true });
    };
  }, []);

  const onClickBtn = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button className={btnCls} onClick={onClickBtn} aria-label="Scroll to top">
      <FaArrowUp className="text-lg" />
    </button>
  );
};

export default ScrollToTop;