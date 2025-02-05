import PageHeader from "@/components/layout/_nav/PageHeader";
import SliderText from "@/components/layout/_nav/SliderText";
import CallAction from "@/components/layout/CallAction";
import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/NavBar";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

function page() {
  return (
    <div>
      <NavBar />
      <PageHeader url="Testimonials">
        Our <span className="text-primary font-bold">Testimonials</span>
      </PageHeader>
      <SliderText className="md:text-2xl md:py-5" />
      <div className="container flex flex-col gap-10 mt-32">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
      <CallAction />
      <Footer />
    </div>
  );
}

export default page;

function TestimonialCard() {
  return (
    <div className="w-full h-full flex lg:flex-row flex-col  justify-center items-center gap-10 border border-white/10 bg-white/5 rounded-[60px] backdrop-blur-2xl p-10">
      <Image
        src="/user.png"
        width={1500}
        height={1500}
        alt="arrow"
        className="w-52 h-52 rounded-full object-cover"
      />
      <div className="w-full flex flex-col gap-5">
        <div className="flex md:justify-start justify-center  text-primary items-center gap-1 text-xl mt-3">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <p className="md:text-lg font-semibold md:text-left text-center">
          The team transformed our brand’s online presence with creativity and
          precision. The results exceeded our expectations! Their digital
          marketing strategies helped us reach a broader audience and
          significantly boosted our sales.
        </p>
        <div className="flex md:flex-row flex-col md:justify-between justify-center items-center gap-5">
          <div className="">
            <h1 className="font-bold text-xl">John Doe</h1>
            <p className=" text-white/50">CEO,Founder</p>
          </div>
          <div className="flex justify-start items-center gap-4">
            <div className="w-6 h-6 rounded-full bg-primary flex justify-center items-center"></div>
            <p className="text-xl  font-semibold text-white">Gray To Green</p>
          </div>
        </div>
      </div>
    </div>
  );
}
