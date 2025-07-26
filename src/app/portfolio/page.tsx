import PageHeader from "@/components/layout/_nav/PageHeader";
import SliderText from "@/components/layout/_nav/SliderText";
import NavBar from "@/components/layout/NavBar";
import React from "react";
import PortfolioCard from "./PortfolioCard";
import CallAction from "@/components/layout/CallAction";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { pagesData } from "@/data/pagesdata";
import { cn } from "@/lib/utils";

function page() {
  function chunkArray<T>(arr: T[], size: number): T[][] {
    const result: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  }

  return (
    <div>
      <NavBar />
      <PageHeader url="Portfolio">
        Our <span className="text-primary font-bold">Portfolio</span>
      </PageHeader>
      <SliderText className="md:text-2xl md:py-05" />
      <div className="relative overflow-x-hidden">
        <Image
          src="/why-choose-bg-shape.png"
          width={1500}
          height={1500}
          alt="arrow"
          className="w-80 h-80 absolute top-40 -right-32 spinning-text lg:block hidden opacity-70"
        />
        <div className="container ">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 mt-32">
            {chunkArray(pagesData, 2).map((chunk, index) =>
              chunk.map((page, i) => (
                <div className="">
                  <PortfolioCard
                    key={page.slug}
                    image={`/projects/${page.slug}/1.png`}
                    title={page.name}
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatibus."
                    link={`/portfolio/${page.slug}`}
                  />
                </div>
              ))
            )}
            {/* <PortfolioCard
              image="/mob1.jpg"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatibus."
              title="Mobile App"
              link="/soon"
            />
            <div className="lg:col-span-2">
              <PortfolioCard
                image="/mob2.jpg"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatibus."
                title="Mobile App"
                link="/soon"
              />
            </div>
            <div className="lg:col-span-2">
              <PortfolioCard
                image="/mob3.jpg"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatibus."
                title="Mobile App"
                link="/soon"
              />
            </div>
            <PortfolioCard
              image="/mob4.jpg"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatibus."
              title="Mobile App"
              link="/soon"
            />
            <PortfolioCard
              image="/mob5.jpg"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatibus."
              title="Mobile App"
              link="/soon"
            />
            <div className="lg:col-span-2">
              <PortfolioCard
                image="/mob2.jpg"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, voluptatibus."
                title="Mobile App"
                link="/soon"
              />
            </div> */}
          </div>
        </div>
      </div>
      <CallAction />
      <Footer />
    </div>
  );
}

export default page;
