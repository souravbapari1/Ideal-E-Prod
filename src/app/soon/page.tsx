import React from "react";
import NavBar from "@/components/layout/NavBar";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import Footer from "@/components/layout/Footer";

const ComingSoon = () => {
  return (
    <div className="relative">
      <NavBar />
      <div className="max-h-[90vh] min-h-[900px]  text-white flex items-center justify-center px-4 pt-20">
        <div className="text-center max-w-xl">
          <div className="flex lg:justify-center justify-center lg:text-left text-center items-center mb-4  gap-3 font-semibold">
            <Image src="/star-primary.svg" width={15} height={15} alt="arrow" />
            <h1 className="text-white">COMING SOON</h1>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
            Something <span className="text-lime-400">unique</span> is coming
            your way
          </h1>
          <p className="text-gray-300 mb-6">
            We’re working hard to build amazing digital experiences. Stay tuned!
          </p>
          <Link
            href="/contact"
            className="flex lg:justify-center justify-center items-center group mt-8 mb-8"
          >
            <Button
              variant="secondary"
              className="text-white font-semibold hover:bg-white/20  hover:text-white bg-white/20 backdrop-blur-xl rounded-full text-sm py-6 px-9"
              size="sm"
            >
              Notify Me
            </Button>
            <div className="w-12 h-12 group-hover:rotate-0  -rotate-45 group-hover:bg-white transition-all cursor-pointer text-secondary  bg-primary rounded-full flex justify-center items-center ">
              <GoArrowRight size={18} />
            </div>
          </Link>
          <Link href="/contact" className="text-sm text-gray-500 mt-6">
            Let’s make something great together.{" "}
            <span className="text-lime-400 cursor-pointer hover:underline">
              Get Free Quote
            </span>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ComingSoon;
