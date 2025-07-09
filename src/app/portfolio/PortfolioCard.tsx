import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";
function PortfolioCard({
  image,
  title,
  description,
  link,
  className,
}: {
  image: string;
  title: string;
  description: string;
  link: string;
  className?: string;
}) {
  return (
    <div className={cn("h-[580px] rounded-3xl shadow-lg  relative group overflow-hidden ",className)}>
      <div className="w-[70%] absolute top-5 left-5 flex justify-start items-start gap-2">
        <p className="text-white border px-4 py-1 text-xs font-bold border-white rounded-full z-10">
          Flutter
        </p>
        <p className="text-white border px-4 py-1 text-xs font-bold border-white rounded-full z-10">
          Mobile
        </p>
      </div>
      <BsArrowRightCircle className="absolute top-5 text-3xl -rotate-45 group-hover:rotate-0 group-hover:text-primary z-10  right-5 text-white transition-all duration-500" />
      <Image
        src={image}
        width={1500}
        height={1500}
        alt="arrow"
        className="w-full h-full  object-cover group-hover:scale-110 transition-all duration-500"
      />
      <div className="absolute bottom-0 transition-all duration-500 group-hover:mb-0 -mb-20 left-0 w-full h-56 bg-gradient-to-b from-primary/10 to-primary/5 backdrop-blur-3xl p-5">
        <h4 className="text-3xl font-bold mt-1">{title}</h4>
        <p className="mt-2 text-white/80 pb-1 min-h-16 line-clamp-2">
          {description}
        </p>
        <div className="border-t border-primary/10 mt-5 pt-5">
          <Link
            href={link}
            className="text-sm  text-center font-semibold text-white/80 block underline hover:text-white transition-all"
          >
            Read Full CaseStudy
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PortfolioCard;
