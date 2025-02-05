import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowRight } from "react-icons/go";

function Services() {
  return (
    <div className="container lg:mt-52 mt-32 relative">
      <div className="w-full grid lg:grid-cols-2 gap-5">
        <div className="">
          <div className="flex lg:justify-start justify-center lg:text-left text-center items-center  gap-3 font-semibold">
            <Image src="/star-primary.svg" width={15} height={15} alt="arrow" />
            <h1 className="text-white uppercase">Our Services</h1>
          </div>
          <p className="md:text-5xl text-3xl text-white mt-5 lg:text-left text-center">
            Our
            <span className="text-primary font-semibold">
              {" "}
              digital services{" "}
            </span>
            to grow your business
          </p>
        </div>
        <div className="">
          <p className="font-light lg:text-left text-center text-white text-lg">
            Join our creative community to collaborate, innovate, and thrive
            together We welcome passionate individuals eager to make.
          </p>
          <Link
            href="/services"
            className="flex md:justify-start justify-center items-center group mt-8 mb-8"
          >
            <Button
              variant="secondary"
              className="text-white font-semibold hover:bg-white/20  hover:text-white bg-white/20 backdrop-blur-xl rounded-full text-sm py-6 px-9"
              size="sm"
            >
              All Services
            </Button>
            <div className="w-12 h-12 group-hover:rotate-0  -rotate-45 group-hover:bg-white transition-all cursor-pointer text-secondary  bg-primary rounded-full flex justify-center items-center ">
              <GoArrowRight size={18} />
            </div>
          </Link>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-10 mt-10">
        <ServicesItem />
        <ServicesItem />
        <ServicesItem />
      </div>
      <p className="text-white text-sm text-center mt-14 mb-5">
        Let’s make something great work together.{" "}
        <Link
          href="/contact"
          className="font-semibold text-primary md:w-auto md:inline-block block w-full"
        >
          Get Free Quote
        </Link>
      </p>
    </div>
  );
}

export default Services;

export const ServicesItem = () => {
  return (
    <div className="w-full group hover:-mt-3 transition-all duration-500 h-80 bg-[#14170e]/30 backdrop-blur-3xl border-primary/5 border rounded-3xl p-10 flex flex-col justify-between gap-4">
      <div className="flex justify-between items-center">
        <Image alt="" src="/icons/dimand.svg" width={45} height={49} />
        <div className="-rotate-45 group-hover:rotate-0 transition-all group-hover:text-white duration-500">
          <GoArrowRight size={28} />
        </div>
      </div>
      <div className="text-white">
        <h1 className="text-2xl font-bold mb-3">Service Name</h1>
        <p className="text-sm text-white/90">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          dicta autem aliquam. Assumenda, accusantium nostrum! Ab et nihil
          asperiores nulla?
        </p>
      </div>
    </div>
  );
};
