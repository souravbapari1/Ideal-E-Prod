import { Code, Code2, Laptop2, Server } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiGrid41 } from "react-icons/ci";
import { FaFolderPlus } from "react-icons/fa6";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { PiDatabase } from "react-icons/pi";
import { SlArrowRightCircle } from "react-icons/sl";
function HowItsWorks() {
  return (
    <div className="container mt-32 ">
      <div className="w-full grid lg:grid-cols-2 md:gap-10">
        <div className="">
          <div className="flex lg:justify-start justify-center lg:text-left text-center items-center  gap-3 font-semibold">
            <Image src="/star-primary.svg" width={15} height={15} alt="arrow" />
            <h1 className="text-white uppercase">HOW IT WORK</h1>
          </div>
          <p className="md:text-5xl text-3xl text-white mt-5 lg:text-left text-center">
            Our proven
            <span className="text-primary font-semibold"> process </span>
            for achieving success
          </p>
        </div>
        <div className="">
          <p className="font-light mt-12 lg:text-left text-center text-white text-lg">
            Our proven process combines research, strategy, and creativity to
            deliver tailored solutions that drive measurable results.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mt-14">
        <HowItsWorksCard
          icon={<CiGrid41 size={50} />}
          title="Discover"
          step="01"
          description="First, we listen and simplify your idea to uncover the core value of your app."
        />
        <HowItsWorksCard
          icon={<HiOutlineSquare3Stack3D size={50} />}
          title="Design"
          step="02"
          description="We craft a streamlined go-to-market strategy that enhances the user experience and maximizes impact."
        />
        <HowItsWorksCard
          icon={<Code size={50} />}
          title="Develop"
          step="03"
          description="Our expert development team collaborates with our creative minds to deliver precise, high-quality code."
        />
        <HowItsWorksCard
          icon={<Server size={50} />}
          title="Deploy"
          step="04"
          description="We collaborate with you to launch, refine, and achieve true product-market fit."
        />
        <HowItsWorksCard
          icon={<Laptop2 size={50} />}
          title="Defend"
          step="05"
          description="We fortify your app with robust security, ensuring stability, scalability, and long-term success."
        />
      </div>
    </div>
  );
}

export default HowItsWorks;

function HowItsWorksCard({
  description,
  icon,
  step,
  title,
}: {
  title: string;
  description: string;
  step: string;
  icon: React.ReactNode;
}) {
  return (
    <Link
      href="/soon"
      className="bg-[#14170e]/30 backdrop-blur-3xl group overflow-hidden border-primary/5 border rounded-3xl w-full h-96 flex flex-col justify-between gap-4 "
    >
      <div className="w-full flex flex-col">
        <div className="p-8 flex justify-between items-center text-white">
          <h1 className="font-bold text-xl ">{title}</h1>
          <div className="-rotate-45 group-hover:rotate-0 transition-all duration-500">
            <SlArrowRightCircle size={30} />
          </div>
        </div>
        <p className="px-8 text-white/90">{description}</p>
      </div>
      <div className="flex justify-between items-end">
        <div className="px-8 py-6 flex flex-col gap-2 text-white text-2xl font-bold">
          <h3>STEP</h3>
          <h1 className="text-5xl text-primary">{step}</h1>
        </div>
        <div className="w-32 h-32 bg-primary group-hover:bg-white transition-all duration-500 rounded-tl-3xl flex justify-center text-secondary items-center">
          {icon}
        </div>
      </div>
    </Link>
  );
}
