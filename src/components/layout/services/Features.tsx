import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { GoArrowRight } from "react-icons/go";
import TechSlide from "./TechSlide";
import Link from "next/link";

function Features() {
  return (
    <div className="container lg:mt-52 mt-32 relative">
      <div className="w-full grid lg:grid-cols-2 gap-5">
        <div className="">
          <div className="flex lg:justify-start justify-center lg:text-left text-center items-center  gap-3 font-semibold">
            <Image src="/star-primary.svg" width={15} height={15} alt="arrow" />
            <h1 className="text-white uppercase">FEATURES</h1>
          </div>
          <p className="md:text-5xl text-3xl text-white mt-5 lg:text-left text-center">
            Innovative
            <span className="text-primary font-semibold"> features </span>
            for your digital success
          </p>
        </div>
        <div className="">
          <p className="font-light lg:text-left text-center text-white text-lg">
            Our digital services empower brands with innovative strategies and
            solutions for sustainable growth and engagement.
          </p>
          <Link
            href="/about"
            className="flex md:justify-start justify-center items-center group mt-8 mb-8"
          >
            <Button
              variant="secondary"
              className="text-white font-semibold hover:bg-white/20  hover:text-white bg-white/20 backdrop-blur-xl rounded-full text-sm py-6 px-9"
              size="sm"
            >
              Learn More
            </Button>
            <div className="w-12 h-12 group-hover:rotate-0  -rotate-45 group-hover:bg-white transition-all cursor-pointer text-secondary  bg-primary rounded-full flex justify-center items-center ">
              <GoArrowRight size={18} />
            </div>
          </Link>
        </div>
      </div>
      <div className="grid lg:grid-cols-7 gap-5 mt-10">
        <div className="lg:col-span-4">
          <FeaturesCard />
        </div>
        <div className="lg:col-span-3">
          <FeaturesCard />
        </div>
        <div className="lg:col-span-7">
          <FeaturesTechCard />
        </div>
      </div>
    </div>
  );
}

export default Features;

function FeaturesCard() {
  return (
    <div className="w-full p-10 bg-[#14170e]/30 backdrop-blur-3xl border-primary/5 border rounded-3xl ">
      <div className="text-white flex-col flex gap-3 ">
        <h1 className="text-xl font-bold">Morden Tech Solutions</h1>
        <p className="text-white/90">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt eum
          iusto aperiam
        </p>
      </div>
    </div>
  );
}

function FeaturesTechCard() {
  return (
    <div className="w-full p-10 bg-[#14170e]/30 backdrop-blur-3xl border-primary/5 border rounded-3xl ">
      <div className="text-white flex-col flex gap-3 mb-7">
        <h1 className="text-xl font-bold">Latest Tech Solutions</h1>
        <p className="text-white/90">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt eum
          iusto aperiam
        </p>
      </div>
      <TechSlide />
    </div>
  );
}
