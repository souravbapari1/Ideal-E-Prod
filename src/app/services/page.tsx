import PageHeader from "@/components/layout/_nav/PageHeader";
import SliderText from "@/components/layout/_nav/SliderText";
import CallAction from "@/components/layout/CallAction";
import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/NavBar";
import { ServicesItem } from "@/components/layout/services/Services";
import Testimonials from "@/components/layout/Testimonials/Testimonials";
import WhyChoose from "@/components/layout/WhyChoose/WhyChoose";
import React from "react";

function page() {
  return (
    <div className="relative">
      <NavBar />
      <PageHeader url="Services">
        Our <span className="text-primary font-bold">Services</span>
      </PageHeader>
      <SliderText className="md:text-2xl md:py-05" />
      <div className="container">
        <div className="grid lg:grid-cols-3 gap-8 mt-28">
          <ServicesItem />
          <ServicesItem />
          <ServicesItem />
          <ServicesItem />
          <ServicesItem />
          <ServicesItem />
        </div>
      </div>
      <WhyChoose />
      <Testimonials />
      <CallAction />
      <Footer />
    </div>
  );
}

export default page;
