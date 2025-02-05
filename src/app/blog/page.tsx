import PageHeader from "@/components/layout/_nav/PageHeader";
import SliderText from "@/components/layout/_nav/SliderText";
import HomeBlogs, { BlogCard } from "@/components/layout/Blogs/HomeBlogs";
import CallAction from "@/components/layout/CallAction";
import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/NavBar";
import React from "react";

function page() {
  return (
    <div>
      <NavBar />
      <PageHeader url="Blog">
        Latest <span className="text-primary font-bold">Blog</span>
      </PageHeader>
      <SliderText className="md:text-2xl md:py-05" />
      <div className="container my-32">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 ">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
      <div className="mt-52"></div>
      <CallAction />
      <Footer />
    </div>
  );
}

export default page;
