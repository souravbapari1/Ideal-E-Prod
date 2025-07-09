import Image from "next/image";
import Link from "next/link";
import React from "react";

function PageHeader({
  children,
  url,
  paths,
}: {
  url: string;
  children: React.ReactNode;
  paths?: string[];
}) {
  return (
    <div className="bg-[url('/hero-bg.jpg')] bg-cover overflow-hidden bg-no-repeat bg-center relative md:h-[500px] h-72 ">
      <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-black/50 to-black"></div>
      <div className="relative flex justify-center items-center flex-col h-full pt-20">
        <h1 className="text-center md:text-6xl text-4xl font-light">
          {children}
        </h1>
        <div className="flex justify-center items-center gap-3 md:text-lg mt-8 font-medium">
          <Link
            href="/"
            className="text-white  hover:text-primary transition-all duration-500"
          >
            Home
          </Link>
          {paths?.map((e, i) => {
            return (
              <div
                className="hidden justify-center items-center gap-3 lg:flex"
                key={i + e}
              >
                <Image
                  src="/star-primary.svg"
                  width={1500}
                  height={1500}
                  className="w-2 h-2"
                  alt="arrow"
                />
                <p className="text-white">{e}</p>
              </div>
            );
          })}
          <div className="flex justify-center items-center gap-3">
            <Image
              src="/star-primary.svg"
              width={1500}
              height={1500}
              className="w-2 h-2"
              alt="arrow"
            />
            <p className="text-primary">{url}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
