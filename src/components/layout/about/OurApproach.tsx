import Image from "next/image";
import React from "react";

function OurApproach() {
  return (
    <div className="container mt-32">
      <div className="w-full grid lg:grid-cols-2 lg:gap-10 gap-5">
        <div className="">
          <div className="flex lg:justify-start justify-center lg:text-left text-center items-center  gap-3 font-semibold">
            <Image src="/star-primary.svg" width={15} height={15} alt="arrow" />
            <h1 className="text-white uppercase">Our Approach</h1>
          </div>
          <p className="md:text-5xl text-3xl text-white mt-5 lg:text-left text-center">
            Crafting
            <span className="text-primary font-semibold"> impactful </span>
            digital experiences
          </p>
        </div>
        <div className="mt-8">
          <p className="font-light lg:text-left text-center text-white text-lg">
            We blend creativity, strategy, and technology to design digital
            experiences that connect, engage, and inspire. From concept to
            completion, we deliver tailored solutions that elevate brands and
            drive results.
          </p>
        </div>
      </div>
      <div className="mt-16 grid lg:grid-cols-3 gap-5">
        <OurApproachItem />
        <OurApproachItem />
        <OurApproachItem />
      </div>
    </div>
  );
}

export default OurApproach;

export const OurApproachItem = () => {
  return (
    <div className="w-full p-7 bg-[#14170e]/30 backdrop-blur-xl border-primary/5 border rounded-3xl ">
      <div className="text-white flex-col flex gap-3">
        <Image
          alt=""
          src="/hero-bg.jpg"
          width={1145}
          height={1149}
          className="rounded-3xl mb-3"
        />
        <h1 className="text-xl font-bold">Our Approach</h1>
        <p className="text-white/90">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt eum
          iusto aperiam
        </p>
      </div>
    </div>
  );
};
