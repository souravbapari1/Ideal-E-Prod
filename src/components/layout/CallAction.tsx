import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
function CallAction() {
  return (
    <div className="relative">
      <Image
        src="/work-together-bg-shape.png"
        width={1500}
        height={1500}
        className="w-60 h-60 object-contain absolute lg:block hidden mt-10  top-0 -left-32 -translate-x-1/2 -translate-y-1/2 spinning-text opacity-60"
        alt="arrow"
      />
      <div className="container mt-32 relative">
        <h1 className="text-center font-bold md:text-xl text-white">
          LET'S COLLABORATE
        </h1>
        <div className="flex justify-center items-center relative bg-[url('/work-together-bg-gradient.png')]  bg-contain bg-center bg-no-repeat ">
          <h1 className="lg:text-[170px] md:text-9xl text-5xl text-center text-white mt-10 font-extrabold lg:leading-[180px]">
            LET'S WORK TOGETHER
          </h1>
          <Link
            href="/contact"
            className="md:w-28 md:h-28 w-24 h-24 p-2 md:mt-10 mt-64 group hover:bg-secondary bg-primary cursor-pointer absolute transition-all duration-500 pb-1 rounded-full shadow-lg flex justify-center items-center text-center flex-col"
          >
            <MdArrowOutward
              className="text-secondary group-hover:text-white group-hover:rotate-45  mb-1 transition-all duration-500"
              size={20}
            />
            <h1 className="text-white text-sm font-bold">
              <span className="text-secondary group-hover:text-white md:text-base text-xs transition-all duration-500 ">
                Get In Touch
              </span>
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CallAction;
