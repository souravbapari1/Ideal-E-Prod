import { FaPlay } from "react-icons/fa";
import React from "react";
import { Button } from "../ui/button";
import { GoArrowRight } from "react-icons/go";
import Typing from "./_nav/Tyaping";
import Link from "next/link";
function Header() {
  return (
    <div className="w-full h-screen min-h-[800px] bg-[url('/hero-bg.jpg')] bg-cover overflow-hidden bg-no-repeat relative">
      <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-transparent to-black"></div>
      <div className="container h-full flex justify-center md:items-start md:mt-10 text-center flex-col relative">
        <h1 className="lg:text-8xl text-3xl text-white font-light">
          Innovative solutions for
        </h1>
        <h1 className="md:h-24 h-16 md:mt-0 mt-3 lg:text-7xl text-4xl font-extrabold text-primary ">
          <Typing />
        </h1>
        <div className="grid lg:grid-cols-3 md:mt-20 md:mb-10 my-10 ">
          <div className="flex justify-center items-center relative">
            <div className="md:w-24  md:h-24 h-20 w-20 bg-primary text-gray-900 rounded-full flex justify-center items-center">
              <FaPlay size={22} />
            </div>

            <div className="-ml-8 mt-5  md:block hidden ">
              <div className="relative w-24 h-24 flex justify-center items-center">
                <svg
                  viewBox="0 0 200 200"
                  className="w-full h-full spinning-text"
                >
                  <defs>
                    <path
                      id="circlePath"
                      d="M 100, 100
           m -75, 0
           a 75,75 0 1,1 150,0
           a 75,75 0 1,1 -150,0"
                    />
                  </defs>
                  <text fill="white" fontSize="18" fontWeight="bold">
                    <textPath
                      href="#circlePath"
                      startOffset="0%"
                      textAnchor="start"
                      letterSpacing="2"
                    >
                      BUILD ● DESIGN ● MAINTENANCE ● BUILD ● DESIGN ●
                      MAINTENANCE
                    </textPath>
                  </text>
                </svg>
                {/* Center Content */}
                <div className="absolute flex justify-center items-center">
                  <span className="text-white text-xl font-semibold">i</span>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 md:mt-0 mt-10 md:text-left text-center">
            <p className="text-white md:text-xl font-light">
              At our Creative Digital Agency, we bring your ideas to life by
              crafting engaging, impactful digital experiences that captivate
              audiences and drive results. From innovative web design to
              compelling content and cutting-edge digital strategies.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center w-full md:mb-0 mb-14  mt-5">
          <Link
            href="/contact"
            className="flex justify-center items-center group"
          >
            <Button
              variant="secondary"
              className="text-white font-semibold hover:bg-white/20  hover:text-white bg-white/20 backdrop-blur-xl rounded-full text-base py-7 px-12"
              size="lg"
            >
              Get In Touch
            </Button>
            <div className="w-14 h-14 group-hover:rotate-0  -rotate-45 group-hover:bg-white transition-all cursor-pointer text-secondary  bg-primary rounded-full flex justify-center items-center ">
              <GoArrowRight size={18} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
