"use client";
import Image from "next/image";
import uniSvg from "../../public/university.svg";
import { poppins } from "@/fonts";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

export default function LandingBody() {
  return (
    <main>
      <section className="flex flex-wrap items-center justify-around bg-[#F2FAFE] px-4 pt-20">
        <div>
          <h1 className="font-inter font-500 mb-8 font-sans text-[40px] leading-[48px]">
            UniCourseWhisper
          </h1>
          <p className="mb-8 text-[18px] text-[#4B5563]">
            An Application that helps students to post <br /> about courses &
            course leaders <span className="font-[700]">ANONYMOUSLY</span>
          </p>
          <motion.button
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.2 }}
            className="w-28 rounded-full bg-black p-[10px] text-[18px] font-[700px] text-white"
          >
            Explore
          </motion.button>
        </div>
        <Image priority src={uniSvg} alt="Uni" />
      </section>

      <section className="mb-12">
        <h2 className="font-inter mb-8 mt-12 text-center font-sans text-[48px] font-[700] leading-[48px]">
          Why this app ?
        </h2>
        <p
          className={`${poppins.className} px-16 text-center text-[18px] font-[400px] text-[#4B5563]`}
        >
          One big problem for undergrad and postgrad students is to knowing
          about the optional courses to select while course registration. Each
          student has their own preference's. Some need easy going, Some need
          depth courses, Some need great professors. This website go to solution
          to know to about courses to know what almuni has told about courses.
        </p>
      </section>

      <section className="mt-32">
        <h2 className="font-inter mb-8 mt-12 text-center font-sans text-[48px] font-[700] leading-[48px]">
          Features
        </h2>
        <section className="flex flex-col items-center sm:flex-row sm:justify-evenly">
          <motion.div
            whileHover={{ scale: [null, 1.1, 1.1] }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-4 w-80 rounded-lg bg-[#F2FAFE] p-8 shadow-lg sm:mb-0">
              <h3 className="text-[18px] font-[600] leading-[22px] text-[#060463]">
                Drop Reviews
              </h3>
              <p
                className={`${poppins.className} mt-2 text-[16px] text-[#4B5563]`}
              >
                You can select your university, course and drop a review.
              </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: [null, 1.1, 1.1] }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-4 w-80 rounded-lg bg-[#F2FAFE] p-8 shadow-lg sm:mb-0">
              <h3 className="text-[18px] font-[600] leading-[22px] text-[#060463]">
                Explore about courses
              </h3>
              <p
                className={`${poppins.className} mt-2 text-[16px] font-[300] text-[#4B5563]`}
              >
                You can filter out the reviews based on your choice
              </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: [null, 1.1, 1.1] }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-80 rounded-lg bg-[#F2FAFE] p-8 shadow-lg">
              <h3 className="text-[18px] font-[600] leading-[22px] text-[#060463]">
                Privacy
              </h3>
              <p
                className={`${poppins.className} mt-2 text-[16px] text-[#4B5563]`}
              >
                Your identity will be kept private
              </p>
            </div>
          </motion.div>
        </section>
      </section>

      <section className="mt-32 bg-[#F2FAFE] p-8 md:p-40">
        <h2 className="mb-8 text-center text-[32px] font-[600] text-[#777b80]">
          Frequently Asked Questions
        </h2>
        <Separator className="mb-8" />
        <Accordion type="single" collapsible className="p-4 lg:px-60">
          <AccordionItem value="item-1">
            <AccordionTrigger className="border-[0.5px] border-[#D5D8DC] bg-white p-4 text-[16px] font-[600] text-[#4b55639c] lg:px-8">
              Is it accessible?
            </AccordionTrigger>
            <AccordionContent className="border-[0.5px] border-[#D5D8DC] bg-white p-4 text-[16px] font-[600] text-[#4b55639c] lg:px-8">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="border-[0.5px] border-[#D5D8DC] bg-white p-4 text-[16px] font-[600] text-[#4b55639c] lg:px-8">
              Is it accessible?
            </AccordionTrigger>
            <AccordionContent className="border-[0.5px] border-[#D5D8DC] py-4 pl-4 text-[16px] font-[400] text-[#1e1e21]">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="border-[0.5px] border-[#D5D8DC] bg-white p-4 text-[16px] font-[600] text-[#4b55639c] lg:px-8">
              Is it accessible?
            </AccordionTrigger>
            <AccordionContent className="border-[0.5px] border-[#D5D8DC] py-4 pl-4 text-[16px] font-[400] text-[#1e1e21]">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="border-[0.5px] border-[#D5D8DC] bg-white p-4 text-[16px] font-[600] text-[#4b55639c] lg:px-8">
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
