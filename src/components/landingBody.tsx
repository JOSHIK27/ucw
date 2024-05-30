import Image from "next/image";
import uniSvg from "../../public/university.svg";
import { Button } from "./ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

export default function LandingBody() {
  return (
    <main>
      <section className="flex flex-wrap items-center justify-around bg-[#F2FAFE] pt-20">
        <div>
          <h1 className="font-inter font-500 mb-8 font-sans text-[40px] leading-[48px]">
            UniCourseWhisper
          </h1>
          <p className="mb-8 text-[18px] text-[#4B5563]">
            An Application that helps students to post <br /> about courses &
            course leaders <span className="font-[700]">ANONYMOUSLY</span>
          </p>
          <Button className="w-28 rounded-full p-[2px] text-[18px] font-[700px]">
            Explore
          </Button>
        </div>
        <Image priority src={uniSvg} alt="Uni" />
      </section>

      <section className="mb-12">
        <h2 className="font-inter mb-8 mt-12 text-center font-sans text-[48px] font-[700] leading-[48px]">
          Why this app ?
        </h2>
        <p className="text-center text-[18px] font-[400px] text-[#4B5563]">
          aclnadncla adncadn;ad ancadd;a;c aoncpadcanpandanvdadvnn aclnadncla
          ancadd;a;c aoncpadcanpandanvdadvnn
        </p>
      </section>

      <section className="mt-32">
        <h2 className="font-inter mb-8 mt-12 text-center font-sans text-[48px] font-[700] leading-[48px]">
          Features
        </h2>
        <div className="flex flex-col items-center sm:flex-row sm:justify-evenly">
          <div className="mb-4 w-80 rounded-lg bg-[#F2FAFE] p-8 shadow-lg sm:mb-0">
            <h3 className="text-[18px] font-[600] leading-[22px] text-[#060463]">
              Post About
            </h3>
            <div className="text-[16px] font-[500px] text-[#4B5563]">
              Random Text Random Text Random Text Random Text Random Text
            </div>
          </div>
          <h3 className="mb-4 w-80 rounded-lg bg-[#F2FAFE] p-8 shadow-lg sm:mb-0">
            <div className="text-[18px] font-[600] leading-[22px] text-[#060463]">
              Post About
            </div>
            <div className="text-[16px] font-[500px] text-[#4B5563]">
              Random Text Random Text Random Text Random Text Random Text
            </div>
          </h3>
          <h3 className="w-80 rounded-lg bg-[#F2FAFE] p-8 shadow-lg">
            <div className="text-[18px] font-[600] leading-[22px] text-[#060463]">
              Post About
            </div>
            <div className="text-[16px] font-[500px] text-[#4B5563]">
              Random Text Random Text Random Text Random Text Random Text
            </div>
          </h3>
        </div>
      </section>

      <section className="mt-32 bg-[#F2FAFE] p-40">
        <h2 className="mb-8 text-center text-[32px] font-[600] text-[#777b80]">
          Frequently Asked Questions
        </h2>
        <Separator className="mb-8" />
        <Accordion type="single" collapsible className="p-0 lg:px-60">
          <AccordionItem value="item-1">
            <AccordionTrigger className="border-[0.5px] border-[#D5D8DC] bg-white text-[16px] font-[600] text-[#4b55639c] lg:px-8">
              Is it accessible?
            </AccordionTrigger>
            <AccordionContent className="border-[0.5px] border-[#D5D8DC] py-4 pl-4 text-[16px] font-[400] text-[#1e1e21]">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="border-[0.5px] border-[#D5D8DC] bg-white text-[16px] font-[600] text-[#4b55639c] lg:px-8">
              Is it accessible?
            </AccordionTrigger>
            <AccordionContent className="border-[0.5px] border-[#D5D8DC] py-4 pl-4 text-[16px] font-[400] text-[#1e1e21]">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="border-[0.5px] border-[#D5D8DC] bg-white text-[16px] font-[600] text-[#4b55639c] lg:px-8">
              Is it accessible?
            </AccordionTrigger>
            <AccordionContent className="border-[0.5px] border-[#D5D8DC] py-4 pl-4 text-[16px] font-[400] text-[#1e1e21]">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="border-[0.5px] border-[#D5D8DC] bg-white text-[16px] font-[600] text-[#4b55639c] lg:px-8">
              Is it accessible?
            </AccordionTrigger>
            <AccordionContent className="border-[0.5px] border-[#D5D8DC] py-4 pl-4 text-[16px] font-[400] text-[#1e1e21]">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}
