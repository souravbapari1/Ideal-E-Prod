import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
function SliderText({ className }: { className?: string }) {
  return (
    <Marquee
      className={cn(
        "bg-primary text-secondary md:text-4xl text-2xl md:py-6 py-4 font-bold",
        className
      )}
    >
      {[
        "Digital Marketing",
        "Seo Optimixaion",
        "Social Media Marketing",
        "Content Marketing",
        "Search Engine Optimisation",
        "Web Design",
        "Website Development",
        "SEO",
        "Social Media",
        "Content",
        "Marketing",
        "Digital",
        "Digital Marketing",
        "Seo Optimixaion",
        "Social Media Marketing",
        "Content Marketing",
        "Search Engine Optimisation",
        "Web Design",
        "Website Development",
        "SEO",
        "Social Media",
        "Content",
        "Marketing",
        "Digital",
        "Digital Marketing",
        "Seo Optimixaion",
        "Social Media Marketing",
        "Content Marketing",
        "Search Engine Optimisation",
        "Web Design",
        "Website Development",
        "SEO",
        "Social Media",
        "Content",
        "Marketing",
      ].map((e, i) => {
        return (
          <div
            className="flex justify-center items-center gap-6 pr-6"
            key={i + e}
          >
            <span>{e}</span>
            <Image
              src={"/star.svg"}
              width={20}
              height={20}
              alt="arrow"
              className="w-7 h-7"
            />
          </div>
        );
      })}
    </Marquee>
  );
}

export default SliderText;
