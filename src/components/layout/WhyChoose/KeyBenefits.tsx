import Image from "next/image";
import React from "react";
import { LuLightbulb, LuCode, LuMegaphone, LuLayoutGrid } from "react-icons/lu";

function KeyBenefits() {
  const benefitsData = [
    {
      title: "Product Strategy",
      description:
        "We streamline, eliminate, focus, and remove all the dead weight with a plan for traction and scalability.",
      icon: <LuLightbulb size={48} />,
    },
    {
      title: "Product Design UI/UX",
      description:
        "A careful balance of beauty and function turns active users into raving fans.",
      icon: <LuLayoutGrid size={48} />,
    },

    {
      title: "Product Development",
      description:
        "The magic is in our multi-code-lingual engineers that are so immersed, they dream in code.",
      icon: <LuCode size={48} />,
    },
    {
      title: "Digital Marketing & Beyond",
      description:
        "Hyper-focused on what attracts your unique audience to accelerate your startup's goals.",
      icon: <LuMegaphone size={48} />,
    },
  ];
  return (
    <div className="container mt-32">
      <div className="w-full grid lg:grid-cols-2 md:gap-10">
        <div className="">
          <div className="flex lg:justify-start justify-center lg:text-left text-center items-center  gap-3 font-semibold">
            <Image src="/star-primary.svg" width={15} height={15} alt="arrow" />
            <h1 className="text-white uppercase">KEY BENEFITS</h1>
          </div>
          <p className="md:text-5xl text-3xl text-white mt-5 lg:text-left text-center">
            Discover the
            <span className="text-primary font-semibold"> benefits </span>
            of choosing us today
          </p>
        </div>
        <div className="">
          <p className="font-light mt-12 lg:text-left text-center text-white text-lg">
            Experience unparalleled creativity, data-driven strategies, and
            dedicated support that drive real results for your brand.
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 gap-5 mt-10">
        {benefitsData.map((benefit, index) => (
          <KeyBenefitsCard
            key={index}
            index={index + 1}
            title={benefit.title}
            description={benefit.description}
            icon={benefit.icon}
          />
        ))}
      </div>
    </div>
  );
}

export default KeyBenefits;

function KeyBenefitsCard({ title, description, icon, index }: any) {
  return (
    <div className="border border-white/10 rounded-3xl p-5 bg-secondary/5 backdrop-blur-xl flex flex-col gap-2">
      <h1 className="text-3xl font-bold text-white">0{index}</h1>
      <div className="w-12 h-12 mt-3 text-primary">{icon}</div>
      <h1 className="text-2xl font-bold mt-8 text-white">{title} </h1>
      <p className="text-white/80">{description}</p>
    </div>
  );
}
