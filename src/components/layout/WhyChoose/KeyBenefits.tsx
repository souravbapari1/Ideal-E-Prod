import Image from "next/image";
import React from "react";

function KeyBenefits() {
  return (
    <div className="container mt-32">
      <div className="w-full grid lg:grid-cols-2 md:gap-10">
        <div className="">
          <div className="flex lg:justify-start justify-center lg:text-left text-center items-center  gap-3 font-semibold">
            <Image src="/star-primary.svg" width={15} height={15} alt="arrow" />
            <h1 className="text-white uppercase">KEY BENEFITS</h1>
          </div>
          <p className="md:text-5xl text-3xl text-white mt-5 lg:text-left text-center">
            Discover the
            <span className="text-primary font-semibold"> benefits </span>
            of choosing us today
          </p>
        </div>
        <div className="">
          <p className="font-light mt-12 lg:text-left text-center text-white text-lg">
            Experience unparalleled creativity, data-driven strategies, and
            dedicated support that drive real results for your brand.
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 gap-5 mt-10">
        <KeyBenefitsCard />
        <KeyBenefitsCard />
        <KeyBenefitsCard />
        <KeyBenefitsCard />
      </div>
    </div>
  );
}

export default KeyBenefits;

function KeyBenefitsCard() {
  return (
    <div className="border border-white/10 rounded-3xl p-5 bg-secondary/5 backdrop-blur-xl flex flex-col gap-2">
      <h1 className="text-3xl font-bold text-white">01</h1>
      <Image
        src="/icons/list.svg"
        alt="Key Benefits"
        width={400}
        height={400}
        className="w-12 h-12 mt-3"
      />
      <h1 className="text-2xl font-bold mt-8 text-white">
        Personalized Approach{" "}
      </h1>
      <p className="text-white/80">
        We customize strategies to fit your brand's specific needs, ensuring
        alignment.
      </p>
    </div>
  );
}
