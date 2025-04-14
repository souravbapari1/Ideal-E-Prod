import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { MdArrowOutward } from "react-icons/md";
function HomeBlogs() {
  return (
    <div className="container mt-32">
      <div className="w-full grid lg:grid-cols-2 gap-5">
        <div className="">
          <div className="flex lg:justify-start justify-center lg:text-left text-center items-center  gap-3 font-semibold">
            <Image src="/star-primary.svg" width={15} height={15} alt="arrow" />
            <h1 className="text-white uppercase">LATEST BLOGS</h1>
          </div>
          <p className="md:text-5xl text-3xl text-white mt-5 lg:text-left text-center">
            Insights on digital
            <span className="text-primary font-semibold"> innovation </span>
            and growth
          </p>
        </div>
        <div className="">
          <p className="font-light lg:text-left text-center text-white text-lg">
            Explore the latest trends, strategies, and tools driving digital
            innovation and helping businesses thrive in a rapidly evolving
            digital landscape.
          </p>
          <Link
            href="/blog"
            className="flex md:justify-start justify-center items-center group mt-8 mb-8"
          >
            <Button
              variant="secondary"
              className="text-white font-semibold hover:bg-white/20  hover:text-white bg-white/20 backdrop-blur-xl rounded-full text-sm py-6 px-9"
              size="sm"
            >
              Explore More
            </Button>
            <div className="w-12 h-12 group-hover:rotate-0  -rotate-45 group-hover:bg-white transition-all cursor-pointer text-secondary  bg-primary rounded-full flex justify-center items-center ">
              <GoArrowRight size={18} />
            </div>
          </Link>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-10 mt-10">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
}

export default HomeBlogs;

export function BlogCard() {
  return (
    <div className="w-full ">
      <div className="w-full h-52 group overflow-hidden rounded-3xl shadow-md">
        <Image
          alt="arrow"
          src="/hero-bg.jpg"
          width={1500}
          height={1500}
          className="w-full h-full object-cover group-hover:scale-125 group-hover:rotate-6 transition-all duration-500"
        />
      </div>
      <h1 className="text-2xl font-bold mt-3 text-white">
        Lorem ipsum dolor sit amet consectetu.
      </h1>
      <Link
        href="/soon"
        className="text-primary mt-3 flex justify-start items-center font-bold gap-2 text-sm"
      >
        Read More <MdArrowOutward className="mt-1" size={16} />
      </Link>
    </div>
  );
}
