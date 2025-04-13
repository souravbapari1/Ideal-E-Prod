import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowRight } from "react-icons/go";

function AboutTop() {
  return (
    <div className="container relative">
      <div className="w-full grid lg:grid-cols-2 gap-9 relative ">
        <div className="w-full">
          <div className="lg:sticky top-16  z-10">
            <div className="flex lg:justify-start justify-center lg:text-left text-center items-center  gap-3 font-semibold">
              <Image
                src="/star-primary.svg"
                width={15}
                height={15}
                alt="arrow"
              />
              <h1 className="text-white">ABOUT US</h1>
            </div>
            <p className="md:text-5xl text-3xl text-white mt-5 lg:text-left text-center">
              We help
              <span className="text-primary font-semibold"> startups </span>
              with technology and strategic planning.
            </p>
            <Link
              href="/contact"
              className="flex lg:justify-start justify-center items-center group mt-8 mb-8"
            >
              <Button
                variant="secondary"
                className="text-white font-semibold hover:bg-white/20  hover:text-white bg-white/20 backdrop-blur-xl rounded-full text-sm py-6 px-9"
                size="sm"
              >
                Contact Us
              </Button>
              <div className="w-12 h-12 group-hover:rotate-0  -rotate-45 group-hover:bg-white transition-all cursor-pointer text-secondary  bg-primary rounded-full flex justify-center items-center ">
                <GoArrowRight size={18} />
              </div>
            </Link>
          </div>
        </div>
        <div className="w-full">
          <div className="w-full relative ">
            <div className="h-full w-[1px] bg-white/15 absolute top-0  left-0 -translate-x-1/2">
              <div className="w-4 h-4 border-primary border rounded-full -ml-2 mt-12 flex justify-center items-center">
                <div className="w-1 h-1 bg-primary rounded-full"></div>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <AboutInfo
                image="/icons/shaps.svg"
                title="Your Vision, Our Mission"
                description="Your success is what drives us. At Idealedesigns, we’re not just building apps—we’re bringing your ideas to life. With a deep focus on innovation and quality, we create digital experiences that truly make an impact."
              />
              <AboutInfo
                image="/icons/shaps.svg"
                title="Bringing Ideas to Reality"
                description="Great apps start with great ideas. We blend creativity with technology to build mobile and web solutions that don’t just meet your needs—they help your brand stand out and thrive in the digital world."
              />
              <AboutInfo
                image="/icons/shaps.svg"
                title="Building for the Future"
                description="Technology is always evolving, and so are we. Whether it’s a sleek mobile app or a powerful web platform, we craft solutions that grow with your business and keep your users engaged."
              />
              <AboutInfo
                image="/icons/shaps.svg"
                title="Helping Brands Stand Out"
                description="We don’t just build apps; we build brands. Our goal is to help you succeed online with custom strategies, thoughtful design, and high-performance technology. When you grow, we grow—that’s what drives us every day."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutTop;

function AboutInfo({
  description,
  title,
  image,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col justify-start items-start gap-2 pl-8">
      <Image alt="" src={image} width={40} height={39} className="w-8 h-8" />
      <h1 className="text-xl font-bold text-white">{title}</h1>
      <p className="text-white font-light">{description}</p>
    </div>
  );
}
