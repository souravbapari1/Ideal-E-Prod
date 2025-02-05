import SliderText from "@/components/layout/_nav/SliderText";
import AboutTop from "@/components/layout/about/AboutTop";
import HowItsWorks from "@/components/layout/about/HowItsWorks";
import JoinLinks from "@/components/layout/about/JoinLinks";
import HomeBlogs from "@/components/layout/Blogs/HomeBlogs";
import CallAction from "@/components/layout/CallAction";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import NavBar from "@/components/layout/NavBar";
import Features from "@/components/layout/services/Features";
import Services from "@/components/layout/services/Services";
import Testimonials from "@/components/layout/Testimonials/Testimonials";
import KeyBenefits from "@/components/layout/WhyChoose/KeyBenefits";
import WhyChoose from "@/components/layout/WhyChoose/WhyChoose";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <div className="">
      <NavBar />
      <Header />
      <SliderText />

      <div className="mt-32 relative">
        <Image
          src="/about-agency-bg.png"
          width={1500}
          height={1500}
          className="w-96 h-96 absolute lg:block hidden mt-72 top-0 -left-52 -translate-x-1/2 -translate-y-1/2 spinning-text opacity-70"
          alt="arrow"
        />
        <AboutTop />
      </div>
      <Services />
      <WhyChoose />
      <JoinLinks />
      <HowItsWorks />
      <Features />
      <Testimonials />
      <KeyBenefits />
      <HomeBlogs />
      <CallAction />
      <Footer />
    </div>
  );
}

export default page;
