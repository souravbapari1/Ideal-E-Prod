import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";
import { Button } from "../../ui/button";
import { GoArrowRight } from "react-icons/go";
import TestimonialsSlider from "./TestimonialsSlider";

function Testimonials() {
  return (
    <div className="container mt-32">
      <div className="w-full grid lg:grid-cols-2 gap-5">
        <div className="">
          <div className="flex lg:justify-start justify-center lg:text-left text-center items-center  gap-3 font-semibold">
            <Image src="/star-primary.svg" width={15} height={15} alt="arrow" />
            <h1 className="text-white uppercase">TESTIMONIALS</h1>
          </div>
          <p className="md:text-5xl text-3xl text-white mt-5 lg:text-left text-center">
            Read what they have to say about
            <span className="text-primary font-semibold">
              {" "}
              working with us{" "}
            </span>
          </p>
        </div>
        <div className="">
          <p className="font-light lg:text-left text-center text-white text-lg">
            Discover how our clients have achieved success through our
            innovative solutions and dedicated support.
          </p>
          <Link
            href="/pages/testimonials"
            className="flex md:justify-start justify-center items-center group mt-8 mb-8"
          >
            <Button
              variant="secondary"
              className="text-white font-semibold hover:bg-white/20  hover:text-white bg-white/20 backdrop-blur-xl rounded-full text-sm py-6 px-9"
              size="sm"
            >
              All Testimonials
            </Button>
            <div className="w-12 h-12 group-hover:rotate-0  -rotate-45 group-hover:bg-white transition-all cursor-pointer text-secondary  bg-primary rounded-full flex justify-center items-center ">
              <GoArrowRight size={18} />
            </div>
          </Link>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 mt-14 gap-20">
        <div className="text-center  ">
          <div className="w-full  border border-white/5  backdrop-blur-2xl rounded-2xl p-5 py-10">
            <h1 className="text-7xl font-semibold text-center text-white">
              4.9
            </h1>
            <div className="flex justify-center text-primary items-center gap-1 text-xl mt-3">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="text-white mt-10">
              <p>( 40+ Reviews )</p>
              <h1 className=" font-bold text-xl mt-2">
                Customer experiences that speak for themselves
              </h1>
              <Link
                href="/about"
                className="text-sm text-primary mt-10 block underline"
              >
                Give a review
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 lg:w-auto w-[90vw] ">
          <TestimonialsSlider />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
