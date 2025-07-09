"use client";
import Carousel from "react-multi-carousel";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import "react-multi-carousel/lib/styles.css";
import Marquee from "react-fast-marquee";
import { TechImages } from "@/lib/images";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 8,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 9,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 5,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};



function TechSlide() {
  return (
    <div className="relative">
      <div className="lg:block hidden">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          infinite={true}
          arrows={false}
        >
          {TechImages.map((e, index) => (
            <div className="px-1" key={e.src}>
              <div
                key={index}
                className="w-full h-20   rounded-xl  flex justify-center items-center bg-white/5  gap-4"
              >
                <Image
                  src={e.src}
                  width={400}
                  height={400}
                  alt="arrow"
                  className={cn("w-14 h-10 object-contain", e.className)}
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="block lg:hidden max-w-[80vw] overflow-hidden">
        <Marquee>
          {TechImages.map((e, index) => (
            <div className="md:px-2" key={e.src + index}>
              <div
                key={index}
                className="w-full h-20   rounded-xl  flex justify-center items-center bg-white/0  gap-4"
              >
                <Image
                  src={e.src}
                  width={400}
                  height={400}
                  alt="arrow"
                  className={cn("w-full h-10 object-contain", e.className)}
                />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default TechSlide;
