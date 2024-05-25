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
    <>
      <div className="bg-[#F2FAFE] flex justify-around flex-wrap items-center">
        <div>
          <div className="font-inter font-sans font-500 text-[40px] mb-8 leading-[48px]">
            UniCourseWhisper
          </div>
          <div className="text-[#4B5563] text-[18px] mb-8">
            An Application that helps students to post <br /> about courses &
            course leaders <span className="font-[700]">ANONYMOUSLY</span>
          </div>
          <Button className="rounded-full w-28 p-[2px] text-[18px] font-[700px]">
            Explore
          </Button>
        </div>
        <Image priority src={uniSvg} alt="Uni" />
      </div>
      <div className="mb-12">
        <div className="font-inter font-sans font-[700] text-[48px] text-center leading-[48px] mb-8 mt-12">
          Why this app ?
        </div>
        <div className="text-center font-[400px] text-[18px] text-[#4B5563]">
          aclnadncla adncadn;ad ancadd;a;c aoncpadcanpandanvdadvnn aclnadncla
          ancadd;a;c aoncpadcanpandanvdadvnn
        </div>
      </div>
      <div className="mt-32">
        <div className="font-inter font-sans font-[700] text-[48px] text-center leading-[48px] mb-8 mt-12">
          Features
        </div>
        <div className="flex flex-col items-center sm:flex-row sm:justify-evenly">
          <div className="bg-[#F2FAFE] w-80 p-8 rounded-lg shadow-lg mb-4 sm:mb-0">
            <div className="text-[#060463] text-[18px] font-[600] leading-[22px]">
              Post About
            </div>
            <div className="text-[16px] text-[#4B5563] font-[500px]">
              Random Text Random Text Random Text Random Text Random Text
            </div>
          </div>
          <div className="bg-[#F2FAFE] w-80 p-8 rounded-lg shadow-lg mb-4 sm:mb-0">
            <div className="text-[#060463] text-[18px] font-[600] leading-[22px]">
              Post About
            </div>
            <div className="text-[16px] text-[#4B5563] font-[500px]">
              Random Text Random Text Random Text Random Text Random Text
            </div>
          </div>
          <div className="bg-[#F2FAFE] w-80 p-8 rounded-lg shadow-lg">
            <div className="text-[#060463] text-[18px] font-[600] leading-[22px]">
              Post About
            </div>
            <div className="text-[16px] text-[#4B5563] font-[500px]">
              Random Text Random Text Random Text Random Text Random Text
            </div>
          </div>
        </div>
      </div>
      <div className="mt-32 bg-[#F2FAFE] p-40">
        <div className="text-center text-[32px] font-[600] text-[#777b80] mb-8">
          Frequently Asked Questions
        </div>
        <Separator className="mb-8" />
        <Accordion type="single" collapsible className="px-60">
          <AccordionItem value="item-1">
            <AccordionTrigger className="bg-white text-[#4b55639c] text-[16px] font-[600] px-8 border-[0.5px] border-[#D5D8DC]">
              Is it accessible?
            </AccordionTrigger>
            <AccordionContent className="text-[#1e1e21] text-[16px] font-[400] border-[0.5px] border-[#D5D8DC] py-4 pl-4">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="bg-white text-[#4b55639c] text-[16px] font-[600] px-8 border-[0.5px] border-[#D5D8DC]">
              Is it accessible?
            </AccordionTrigger>
            <AccordionContent className="text-[#1e1e21] text-[16px] font-[400] border-[0.5px] border-[#D5D8DC] py-4 pl-4">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="bg-white text-[#4b55639c] text-[16px] font-[600] px-8 border-[0.5px] border-[#D5D8DC]">
              Is it accessible?
            </AccordionTrigger>
            <AccordionContent className="text-[#1e1e21] text-[16px] font-[400] border-[0.5px] border-[#D5D8DC] py-4 pl-4">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="bg-white text-[#4b55639c] text-[16px] font-[600] px-8 border-[0.5px] border-[#D5D8DC]">
              Is it accessible?
            </AccordionTrigger>
            <AccordionContent className="text-[#1e1e21] text-[16px] font-[400] border-[0.5px] border-[#D5D8DC] py-4 pl-4">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}
