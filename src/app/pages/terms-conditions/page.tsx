import React from "react";
import TermsAndConditions from "./TermsAndConditions.mdx";
import NavBar from "@/components/layout/NavBar";
import CallAction from "@/components/layout/CallAction";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/_nav/PageHeader";
import SliderText from "@/components/layout/_nav/SliderText";
function page() {
  return (
    <div className="">
      <NavBar />
      <PageHeader url="Terms & Conditions">
        Terms &<span className="text-primary font-bold"> Conditions</span>
      </PageHeader>
      <SliderText className="md:text-2xl md:py-5" />
      <div className="container text-white pt-32">
        <TermsAndConditions />
      </div>
      <CallAction />
      <Footer />
    </div>
  );
}

export default page;
