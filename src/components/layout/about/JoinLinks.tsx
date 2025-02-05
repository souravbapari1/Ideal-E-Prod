import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { SlArrowRightCircle } from "react-icons/sl";

function JoinLinks() {
  return (
    <div className="relative">
      <Image
        src="/how-work-bg-shape.png"
        width={1500}
        height={1500}
        className="w-96 h-96 absolute lg:block hidden mt-72 top-48 -left-44 object-contain opacity-70 -translate-x-1/2 -translate-y-1/2 spinning-text"
        alt="arrow"
      />

      <div className="container relative mt-32">
        <div className="w-full grid lg:grid-cols-2 md:gap-6">
          <div className="">
            <div className="flex lg:justify-start justify-center lg:text-left text-center items-center  gap-3 font-semibold">
              <Image
                src="/star-primary.svg"
                width={15}
                height={15}
                alt="arrow"
              />
              <h1 className="text-white uppercase">JOIN AGENCY</h1>
            </div>
            <p className="md:text-5xl text-3xl text-white mt-5 lg:text-left text-center">
              Join our
              <span className="text-primary font-semibold"> agency </span>
              of creative innovation
            </p>
          </div>
          <div className="">
            <p className="font-light mt-12 lg:text-left text-center text-white text-lg">
              Join our creative community to collaborate, innovate, and thrive
              together We welcome passionate individuals eager to make.
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 lg:pl-0 pl-10 gap-10 mt-20">
          <JoinSocialInfoCard
            icon={<Linkedin size={25} />}
            title="Follow On Linkedin"
            description="@ideal-e-designs"
            link="https://in.linkedin.com/company/ideal-e-designs"
          />
          <JoinSocialInfoCard
            icon={<Facebook size={25} />}
            title="Follow On Facebook"
            description="@idealedesigns"
            link="https://www.facebook.com/idealedesigns"
          />
          <JoinSocialInfoCard
            icon={<Instagram size={25} />}
            title="Follow On Instagram"
            description="@idealedesigns"
            link="https://www.instagram.com/idealedesigns"
          />
        </div>
      </div>
    </div>
  );
}

export default JoinLinks;

function JoinSocialInfoCard({
  description,
  icon,
  link,
  title,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  link: string;
}) {
  return (
    <Link target="_blank" href={link} className="relative group">
      <div className="w-16 h-16 bg-primary flex justify-center items-center rounded-full text-secondary absolute -ml-5 group-hover:bg-secondary group-hover:text-white -mt-5 transition-all duration-500">
        {icon}
      </div>
      <div className="w-full px-14 py-5 pr-8 rounded-full border flex flex-row gap-1 justify-between items-center">
        <div className="flex flex-col gap-1">
          <h1 className="text-lg font-semibold text-white">{title}</h1>
          <p className="text-white/90">{description}</p>
        </div>
        <div className="text-white -rotate-45 group-hover:rotate-0 transition-all ">
          <SlArrowRightCircle size={40} />
        </div>
      </div>
    </Link>
  );
}
