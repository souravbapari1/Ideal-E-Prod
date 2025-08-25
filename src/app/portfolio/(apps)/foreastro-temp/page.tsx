"use client";

import PageHeader from "@/components/layout/_nav/PageHeader";
import SliderText from "@/components/layout/_nav/SliderText";
import NavBar from "@/components/layout/NavBar";
import { pagesData } from "@/data/pagesdata";

import CallAction from "@/components/layout/CallAction";
import Footer from "@/components/layout/Footer";
import { FaqCard } from "@/components/layout/WhyChoose/Faqs";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaPhoneVolume } from "react-icons/fa";
import Content from "./content.mdx";
import { galleryImages, TechImages } from "@/lib/images";
import Marquee from "react-fast-marquee";
import PortfolioCard from "../../PortfolioCard";

function page() {
  return (
    <div>
      <NavBar />
      <PageHeader paths={["Portfolio"]} url="Dynamic E-Commerce Platform">
        Dynamic E-Commerce{" "}
        <span className="text-primary font-semibold">Platform</span>
      </PageHeader>
      <SliderText className="md:text-xl md:py-05" />
      <div className="relative">
        <div className="container py-16">
          <div className="grid lg:grid-cols-6 gap-10 relative">
            <div className="lg:col-span-4 order-2">
              <Image
                src="/projects/15.png"
                alt=""
                width={1200}
                height={800}
                className="w-full rounded-3xl"
              />
              <Content />
              <p className="text-4xl py-5 mt-6">
                Tech <span className="text-primary">Stack</span>
              </p>
              <div className="grid grid-cols-6 gap-5">
                {TechImages.map((e, i) => {
                  return (
                    <Image
                      src={e.src}
                      key={i}
                      width={65}
                      height={65}
                      alt="arrow"
                    />
                  );
                })}
              </div>

              <p className="text-4xl py-5 mt-6">
                Project <span className="text-primary">Images</span>
              </p>
              <div className="columns-1 lg:columns-2 gap-y-10  space-y-4">
                {["/projects/foreastro/1.png", "/projects/foreastro/2.png", "/projects/foreastro/3.png"].map((e, index) => (
                  <div key={index} className="break-inside-avoid">
                    <Image
                      src={e}
                      alt=""
                      width={1200}
                      height={900}
               className="w-full rounded-2xl h-auto min-h-[296px]"
                    />
                  </div>
                ))}
              </div>

              <p className="text-5xl mt-16 mb-8">
                Lets address your <span className="text-primary">question</span>{" "}
                today!
              </p>
              <div className="flex flex-col gap-3">
                                <FaqCard title="How long does it typically take to develop a mobile app?" description="Development timelines vary based on the complexity of the app, but typically, a basic app can take 8-12 weeks, while more complex apps may take 4-6 months or longer. We provide detailed timelines after understanding your specific requirements." />
                <FaqCard title="Do you provide design services, or do I need to provide the app design?" description="We offer comprehensive UI/UX design services to create user-friendly and visually appealing apps. If you already have designs, we can work with those as well." />
                <FaqCard title="Will you assist with publishing the app on app stores?" description="Yes, we handle the entire app store submission process, including meeting platform guidelines and managing approvals to ensure a smooth launch." />
                       <FaqCard
                  title="Can the app handle growth if my user base increases rapidly?"
                  description="Definitely. We design apps with scalability in mind, ensuring your app’s infrastructure can support growth without compromising performance."
                />
                <FaqCard />     
              </div>
            </div>
            <div className="lg:col-span-2 order-1">
              <div className="sticky top-10">
                <div className="bg-[#14170e]/30 backdrop-blur-3xl border-primary/5 border rounded-3xl">
                  <div className="p-8">
                    <div className="border-b border-white/5 pb-5">
                      <p className="text-xl mb-2 font-semibold text-white/90">
                        Project Name
                      </p>
                      <p className="font-light text-white/80">
                        Dynamic E-Commerce Platform
                      </p>
                    </div>
                    <div className="border-b border-white/5 py-5">
                      <p className="text-xl mb-2 font-semibold text-white/90">
                        Category
                      </p>
                      <p className="font-light text-white/80">Web Design</p>
                    </div>
          
                    {/* <div className="border-b border-white/5 py-5">
                      <p className="text-xl mb-2 font-semibold text-white/90">
                        Date
                      </p>
                      <p className="font-light text-white/80">
                        25 January, 2023
                      </p>
                    </div> */}
                    <div className="pt-5">
                      <p className="text-xl mb-2 font-semibold text-white/90">
                        Duration
                      </p>
                      <p className="font-light text-white/80">6 Months</p>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:flex hidden group mt-8 transition-all text-center duration-500 h-80 bg-[#14170e]/30 backdrop-blur-3xl border-primary/5 border rounded-3xl p-10  flex-col justify-between align-items-center gap-4">
                  <FaPhoneVolume
                    size={50}
                    className="text-primary text-center -rotate-45 mx-auto"
                  />
                  <p className="font-light text-white/80">
                    Our team will answer all your questions. we ensure a quick
                    response.
                  </p>
                  <Link href="/contact">
                    <Button
                      className="text-secondary rounded-full font-semibold mt-4"
                      size="lg"
                    >
                      <FaPhoneAlt className="mr-4" size={16} />
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:block hidden">
         <Marquee pauseOnHover>
            <div className="flex flex-row gap-5 w-full pr-5">
              {pagesData.map((e, i) => {
                return (
                  <div className="shrink-0" key={i}>
                    <PortfolioCard
                      image={`/projects/${e.slug}/1.png`}
                      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatibus."
                      title={e.name}
                      link={`/portfolio/${e.slug}`}
                      className="w-96 h-[560px]"
                    />
                  </div>
                );
              })}
            </div>
          </Marquee>
        </div>
      </div>
      <CallAction />
      <Footer />
    </div>
  );
}

export default page;