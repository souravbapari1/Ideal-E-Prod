import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/NavBar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <div className="relative">
      <NavBar />

      <Image
        src="/about-agency-bg.png"
        width={1500}
        height={1500}
        className="w-96 h-96 absolute  lg:block hidden mt-72 top-0 -left-52 -translate-x-1/2 -translate-y-1/2 spinning-text opacity-70"
        alt="arrow"
      />
      <div className="container md:py-48 min-h-[100vh] py-20 relative">
        <div className="w-full flex flex-col text-center gap-5">
          <div className="max-w-[600px] mx-auto">
            <div className="">
              <Image
                src="/404.svg"
                width={400}
                height={400}
                alt="arrow"
                className=" w-72 h-72 object-contain mx-auto"
              />
              <div className="flex  justify-center  text-center items-center  gap-3 font-semibold">
                <h1 className="text-primary uppercase">PAGE NOT FOUND</h1>
              </div>
              <p className="md:text-5xl text-3xl text-white mt-5  text-center">
                We're sorry, the page you're looking for doesn't exist.
              </p>
            </div>
            <div className="mt-10">
              <p className="font-light  text-center text-white text-lg">
                Please <span className="text-primary">check the URL</span> or
                try again later.
              </p>
            </div>
            <Link href="/">
              <button className=" text-white font-semibold   hover:text-secondary bg-white/20 backdrop-blur-xl rounded-full text-sm py-4 mt-10 hover:bg-primary transition-all px-9">
                Go Back Home
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NotFound;
