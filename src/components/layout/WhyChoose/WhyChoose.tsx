import Image from "next/image";

function WhyChoose() {
  const whyChooseData = [
    {
      title: "Startup-Focused IT Solutions",
      description:
        "Tailored services designed to support and scale your startup.",
    },
    {
      title: "Innovative & Cutting-Edge Technology",
      description:
        "Stay ahead with the latest digital solutions and IT strategies.",
    },
    {
      title: "Custom & Scalable Solutions",
      description: "We adapt to your business needs, ensuring seamless growth.",
    },
    {
      title: "Experienced & Dedicated Team",
      description:
        "A team of skilled professionals committed to delivering excellence.",
    },
    {
      title: "End-to-End IT Support",
      description: "From development to deployment, we handle it all.",
    },
    {
      title: "Commitment to Quality & Integrity",
      description:
        "We prioritize transparency, reliability, and top-tier service.",
    },
    {
      title: "Customer-Centric Approach",
      description:
        "Your vision is our priority; we align our solutions with your goals.",
    },
  ];
  return (
    <div className="relative max-w-screen overflow-x-hidden">
      <Image
        src="/why-choose-bg-shape.png"
        width={1500}
        height={1500}
        alt="arrow"
        className="w-80 h-80 absolute top-40 -right-32 spinning-text lg:block hidden opacity-70"
      />
      <div className="container mt-32 relative">
        <div className="w-full grid lg:grid-cols-2 md:gap-14">
          <div className="">
            <div className="flex lg:justify-start justify-center lg:text-left text-center items-center  gap-3 font-semibold">
              <Image
                src="/star-primary.svg"
                width={15}
                height={15}
                alt="arrow"
              />
              <h1 className="text-white uppercase">WHY CHOOSE</h1>
            </div>
            <p className="md:text-5xl text-3xl text-white mt-5 lg:text-left text-center">
              Innovation, Reliability, and Scalable
              <span className="text-primary font-semibold"> IT Solutions </span>
              for Your Success.
            </p>
          </div>
          <div className="">
            <p className="font-light mt-12 lg:text-left text-center text-white text-lg">
              Our dedicated team takes the time to understand your unique needs,
              delivering innovative strategies that drive real results—all with
              a commitment to quality and integrity.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mt-20 relative">
          {/* <div className="flex flex-col gap-4"> */}
          {whyChooseData.map((item, index) => (
            <WhyChooseCard
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default WhyChoose;

function WhyChooseCard({
  description,
  title,
}: {
  title: string;
  description: string;
}) {
  return (
    <div
      className="w-full px-8 py-5  text-white bg-white/5 backdrop-blur-sm hover:bg-white/5 flex flex-col gap-2.5
           border-white/5 rounded-3xl"
    >
      <h1 className="text-lg font-semibold text-white">{title}</h1>
      <p className="text-sm text-white/90">{description}</p>
    </div>
  );
}
