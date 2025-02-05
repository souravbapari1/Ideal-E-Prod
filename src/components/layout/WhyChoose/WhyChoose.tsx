import Image from "next/image";

function WhyChoose() {
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
              Expertise for
              <span className="text-primary font-semibold"> your digital </span>
              growth journey
            </p>
          </div>
          <div className="">
            <p className="font-light mt-12 lg:text-left text-center text-white text-lg">
              Our dedicated team is committed to understanding your unique
              needs, ensuring that we provide innovative strategies that drive
              results. With a focus on quality and integrity.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mt-20">
          <div className="flex flex-col gap-4">
            <WhyChooseCard
              title="Data-Driven Approach"
              description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius atque voluptates repellendus fugit dolor."
            />
            <WhyChooseCard
              title="Data-Driven Approach"
              description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius atque voluptates repellendus fugit dolor."
            />
            <WhyChooseCard
              title="Data-Driven Approach"
              description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius atque voluptates repellendus fugit dolor."
            />
          </div>
          <div className="">
            <Image
              src="/bord.jpg"
              width={1140}
              height={1139}
              alt="arrow"
              className="w-full lg:h-96 h-60 object-cover rounded-3xl"
            />
          </div>
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
