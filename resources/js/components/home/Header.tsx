import { useScroll } from "framer-motion";
import React from "react";
import RevealElement from "../RevealElement";

const Header = () => {
  useScroll();
  return (
    <header className="relative mt-6 lg:mt-20 lg:mb-10 bg-zinc-900">
      <div className="border-y border-dashed border-sky-200/10">
        <div className="flex justify-center w-full h-20">
          <div className="lg:w-6xl border-x border-dashed border-sky-200/10 h-full"></div>
        </div>
        <div className="">
          <div className="flex justify-center w-full border-y border-dashed border-sky-200/10">
            <div className="lg:max-w-6xl border-x border-dashed border-sky-200/10">
              <div className="grid grid-cols-2 gap-8">
                <RevealElement>
                  <h2 className="text-5xl/snug text-white text-shadow font-bold capitalize">
                    Senior Full‑Stack Engineer & UX/UI Designer
                  </h2>
                </RevealElement>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full border-y border-dashed border-sky-200/10">
            <div className="lg:max-w-6xl border-x border-dashed border-sky-200/10">
              <div className="grid grid-cols-2 gap-8">
                <RevealElement>
                  <h2 className="text-lg text-slate-300 text-shadow">
                    I design and engineer high‑quality digital products that
                    scale — combining strategy, design excellence, and robust
                    software architecture.
                  </h2>
                </RevealElement>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full h-[24px]">
            <div className="lg:w-6xl border-x border-dashed border-sky-200/20 h-full"></div>
          </div>
          <div className="flex justify-center w-full border-y h-full border-dashed border-sky-200/10">
            <div className="flex lg:w-6xl border-x border-dashed border-sky-200/10">
              <a
                href={"#"}
                className={
                  "px-4 h-10 flex items-center font-semibold text-white dark:text-zinc-700 duration-150 bg-sky-300 rounded-full hover:text-white active:brightness-90 transition-all hover:border hover:bg-white/10"
                }
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full h-20">
          <div className="lg:w-6xl border-x border-dashed border-sky-200/20 h-full"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
