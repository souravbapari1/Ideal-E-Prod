import PageHeader from "@/components/layout/_nav/PageHeader";
import SliderText from "@/components/layout/_nav/SliderText";
import NavBar from "@/components/layout/NavBar";
import Faq, { FaqCard } from "@/components/layout/WhyChoose/Faqs";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { VscInfo } from "react-icons/vsc";
import { FaPhoneVolume } from "react-icons/fa6";
import CallAction from "@/components/layout/CallAction";
import Footer from "@/components/layout/Footer";

function page() {
  return (
    <div>
      <NavBar />
      <PageHeader url="FAQs">
        Frequently <span className="font-bold text-primary ">Asked</span>{" "}
        Questions
      </PageHeader>
      <SliderText className="md:text-2xl md:py-05" />
      <div className="container mt-32">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
          <div className="flex flex-col gap-2 mt-5 lg:col-span-2">
            <div className="flex flex-col gap-10">
              <FaqListCard
                title={
                  <>
                    General
                    <span className="text-primary font-semibold">
                      {" "}
                      Information{" "}
                    </span>
                  </>
                }
              >
                <FaqCard />
                <FaqCard />
                <FaqCard />
                <FaqCard />
              </FaqListCard>

              <FaqListCard
                title={
                  <>
                    Project
                    <span className="text-primary font-semibold">
                      {" "}
                      Management{" "}
                    </span>
                  </>
                }
              >
                <FaqCard />
                <FaqCard />
                <FaqCard />
                <FaqCard />
              </FaqListCard>

              <FaqListCard
                title={
                  <>
                    Pricing &
                    <span className="text-primary font-semibold"> Payment</span>
                  </>
                }
              >
                <FaqCard />
                <FaqCard />
                <FaqCard />
                <FaqCard />
              </FaqListCard>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col gap-2 mt-28 sticky top-20">
              <div className="w-full bg-white/5 rounded-3xl backdrop-blur-xl p-6 ">
                <FaqList />
                <FaqList />
                <FaqList />
                <FaqList className="border-none pb-3" />
              </div>
              <div className="mt-6">
                <div className="w-full bg-white/5 rounded-3xl backdrop-blur-xl p-8 flex justify-center items-center text-center flex-col gap-5">
                  <VscInfo size={70} className="text-primary text-center" />
                  <h2 className="text-primary text-2xl font-semibold">
                    You have different questions?
                  </h2>
                  <p>
                    Our team will answer all your questions. we ensure a quick
                    response.
                  </p>
                  <Button
                    className="text-secondary rounded-full font-bold mt-4"
                    size="lg"
                  >
                    <FaPhoneVolume className="mr-4" />
                    +91 9876543210
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CallAction />
      <Footer />
    </div>
  );
}

export default page;

function FaqList({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex justify-between items-center gap-5 border-b transition-all duration-500 border-white/10 py-5 group hover:text-primary",
        className
      )}
    >
      <p className="text-lg">General Questions</p>
      <GoArrowUpRight
        className="text-primary group-hover:rotate-45  transition-all duration-500"
        size={22}
      />
    </div>
  );
}

function FaqListCard({
  title,
  children,
}: {
  title: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <div className="">
      <p className="md:text-5xl text-3xl text-white mt-5 lg:text-left text-center">
        {title}
      </p>
      <div className="flex flex-col gap-3 mt-8">{children}</div>
    </div>
  );
}
