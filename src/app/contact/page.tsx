import PageHeader from "@/components/layout/_nav/PageHeader";
import SliderText from "@/components/layout/_nav/SliderText";
import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/NavBar";
import { PhoneCall } from "lucide-react";
import { CiLocationOn } from "react-icons/ci";
import { MdMarkEmailRead } from "react-icons/md";
import ContactForm from "./ContacForm";
import CallAction from "@/components/layout/CallAction";

function page() {
  return (
    <div>
      <NavBar />
      <PageHeader url="Contact">
        Contact <span className="text-primary font-bold">Us</span>
      </PageHeader>
      <SliderText className="md:text-2xl md:py-05 " />
      <div className="container mt-32">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="">
            <p className=" text-5xl text-white mt-3 lg:text-left text-center">
              Get in
              <span className="text-primary font-semibold"> touch </span>
              with us
            </p>
            <p className="mt-4 lg:text-left text-center">
              We’d love to hear from you! Whether you have questions, need
              support, or want to discuss a project, feel free to reach out.
            </p>
            <div className=" border-white/10 bg-white/5 px-2 py-7 mt-10 rounded-3xl grid md:grid-cols-2 md:gap-0 gap-10 backdrop-blur-xl">
              <div className="text-center flex flex-col gap-4 items-center border-r border-white/10">
                <PhoneCall className="text-primary text-center" size={40} />
                <p className="text-xl font-bold">Phone Number </p>
                <p className="text-white/80">+91-9315509430</p>
              </div>
              <div className="text-center flex flex-col gap-4 items-center ">
                <MdMarkEmailRead
                  className="text-primary text-center"
                  size={40}
                />
                <p className="text-xl font-bold">Email</p>
                <p className="text-white/80">info@idealedesigns.com</p>
              </div>
            </div>
            <div className=" border-white/10 bg-white/5 px-7 py-7 mt-7 gap-8 rounded-3xl backdrop-blur-xl flex justify-start items-center relative">
              <div className="">
                <CiLocationOn size={60} className="text-primary text-center" />
              </div>
              <div className="">
                <p className="text-xl font-bold">Address</p>
                <p className="text-white/80 mt-2">Gurugram, Haryana, India</p>
              </div>
            </div>
          </div>
          <div className="">
            <ContactForm />
          </div>
        </div>
      </div>
      <div className="container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.6004479109124!2d77.1044969756962!3d28.49157709046733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f7f1bc6aff5%3A0x48a9a15190734001!2sIdeal%20e%20Designs%20%7C%20App%20Development%20%7C%20Web%20Development!5e0!3m2!1sen!2sin!4v1738245881888!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full  rounded-3xl overflow-hidden mt-28"
        ></iframe>
      </div>
      <CallAction />
      <Footer />
    </div>
  );
}

export default page;
