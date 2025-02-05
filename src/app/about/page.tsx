import PageHeader from "@/components/layout/_nav/PageHeader";
import SliderText from "@/components/layout/_nav/SliderText";
import AboutTop from "@/components/layout/about/AboutTop";
import OurApproach from "@/components/layout/about/OurApproach";
import CallAction from "@/components/layout/CallAction";
import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/NavBar";
import Features from "@/components/layout/services/Features";
import Testimonials from "@/components/layout/Testimonials/Testimonials";
import Faq from "@/components/layout/WhyChoose/Faqs";
import WhyChoose from "@/components/layout/WhyChoose/WhyChoose";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <div className="relative">
      <NavBar />
      <PageHeader url="About">
        About <span className="text-primary font-bold">Us</span>
      </PageHeader>
      <SliderText className="md:text-2xl md:py-05" />
      <div className="pt-32 relative">
        <Image
          src="/about-agency-bg.png"
          width={1500}
          height={1500}
          className="w-96 h-96 absolute lg:block hidden mt-72 top-0 -left-52 -translate-x-1/2 -translate-y-1/2 spinning-text opacity-70"
          alt="arrow"
        />
        <AboutTop />
      </div>
      <OurApproach />
      <Features />
      <WhyChoose />
      <Testimonials />
      <Faq />
      <CallAction />
      <Footer />
    </div>
  );
}

export default page;
