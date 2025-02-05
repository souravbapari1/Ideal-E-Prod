import React from "react";
import PrivacyPolicy from "./PrivacyPolicy.mdx";
import NavBar from "@/components/layout/NavBar";
import CallAction from "@/components/layout/CallAction";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/_nav/PageHeader";
import SliderText from "@/components/layout/_nav/SliderText";
function page() {
  return (
    <div className="">
      <NavBar />
      <PageHeader url="Privacy Policy">
        Privacy <span className="text-primary font-bold"> Policy</span>
      </PageHeader>
      <SliderText className="md:text-2xl md:py-5" />
      <div className="container text-white pt-32">
        <PrivacyPolicy />
      </div>
      <CallAction />
      <Footer />
    </div>
  );
}

export default page;
