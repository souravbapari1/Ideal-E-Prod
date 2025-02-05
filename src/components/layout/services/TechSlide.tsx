"use client";
import Carousel from "react-multi-carousel";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import "react-multi-carousel/lib/styles.css";
import Marquee from "react-fast-marquee";
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

const images = [
  {
    src: "/tech/android/Dark.svg",
    className: "h-16",
  },
  {
    src: "/tech/aws/Dark.svg",
    className: "h-16",
  },
  {
    src: "/tech/digitalOcean/Dark.svg",
    className: "h-16",
  },
  {
    src: "/tech/docker/Dark.svg",
    className: "h-16",
  },
  {
    src: "/tech/figma/Dark.svg",
    className: "h-16",
  },
  {
    src: "/tech/firebase/Dark.svg",
    className: "h-16",
  },
  {
    src: "/tech/flutter/Dark.svg",
    className: "h-16",
  },
  {
    src: "/tech/github/Dark.svg",
    className: "h-16",
  },
  {
    src: "/tech/google-cloud/Dark.svg",
    className: "h-16",
  },
  {
    src: "/tech/graphql/Dark.svg",
    className: "h-16",
  },
  {
    src: "/tech/js/Dark.svg",
    className: " h-16",
  },
  {
    src: "/tech/mongodb/Dark.svg",
    className: " h-16",
  },
  {
    src: "/tech/nextjs/Dark.svg",
    className: " h-16",
  },
  {
    src: "/tech/nodejs/Dark.svg",
    className: " h-16",
  },
  {
    src: "/tech/postfresql/Dark.svg",
    className: " h-16",
  },
  {
    src: "/tech/python/Dark.svg",
    className: " h-16",
  },
  {
    src: "/tech/reactjs/Dark.svg",
    className: " h-16",
  },
  {
    src: "/tech/redis/Dark.svg",
    className: " h-16",
  },
  {
    src: "/tech/tailwind/Dark.svg",
    className: " h-16",
  },
  {
    src: "/tech/typescript/Dark.svg",
    className: " h-16",
  },
];

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
          {images.map((e, index) => (
            <div className="px-2" key={e.src}>
              <div
                key={index}
                className="w-full h-20   rounded-xl  flex justify-center items-center bg-white/5  gap-4"
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
        </Carousel>
      </div>
      <div className="block lg:hidden max-w-[80vw] overflow-hidden">
        <Marquee>
          {images.map((e, index) => (
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
