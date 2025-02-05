import Image from "next/image";

function Faq() {
  return (
    <div className="relative max-w-screen ">
      <div className="container mt-32 relative">
        <div className="grid lg:grid-cols-2 gap-10 mt-20 relative">
          <div className="">
            <div className="w-full flex flex-col lg:sticky top-16">
              <div className="">
                <div className="flex lg:justify-start justify-center lg:text-left text-center items-center  gap-3 font-semibold">
                  <Image
                    src="/star-primary.svg"
                    width={15}
                    height={15}
                    alt="arrow"
                  />
                  <h1 className="text-white uppercase">HAVE ANY QUESTIONS?</h1>
                </div>
                <p className=" text-4xl text-white mt-3 lg:text-left text-center">
                  Let us address your
                  <span className="text-primary font-semibold">
                    {" "}
                    questions{" "}
                  </span>
                  today!
                </p>
              </div>
              <div className="">
                <p className="font-light mt-5 lg:text-left text-center text-white ">
                  Our dedicated team is committed to understanding your unique
                  needs, ensuring that we provide innovative strategies that
                  drive results. With a focus on quality and integrity.
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col gap-2 mt-5">
              <FaqCard />
              <FaqCard />
              <FaqCard />
              <FaqCard />
              <FaqCard />
              <FaqCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqCard({
  description,
  title,
}: {
  title?: string;
  description?: string;
}) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem
        value="item-1"
        className=" px-5 py-0 rounded-xl bg-primary/5 backdrop-blur-xl"
      >
        <AccordionTrigger className="text-lg font-semibold">
          What services does your agency offer?
        </AccordionTrigger>
        <AccordionContent className="bg-primary/5 rounded-2xl p-4 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          nisi dolores ex quisquam obcaecati placeat sint cumque. Corporis illo
          nam labore animi eveniet ea, et rem veritatis quis exercitationem
          praesentium.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
