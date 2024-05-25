"use client";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
export default function Footer() {
  return (
    <div className="bg-white h-40 flex justify-center pt-12">
      <div>
        <div className="w-80 text-center mb-4 text-[16px] text-[#777b80] font-[600]">
          Contact Us
        </div>
        <div className="flex justify-evenly w-80">
          <GitHubLogoIcon
            onClick={() =>
              window.open("https://github.com/JOSHIK27/ref-helper")
            }
            className="cursor-pointer"
            width={28}
            height={28}
            color="#0278b3"
          />
          <LinkedInLogoIcon
            onClick={() => window.open("https://www.linkedin.com/in/joshik27/")}
            className="cursor-pointer"
            width={28}
            height={28}
            color="#0278b3"
          />
          <TwitterLogoIcon
            onClick={() => window.open("https://twitter.com/aspirant_4021")}
            className="cursor-pointer"
            width={28}
            height={28}
            color="#0278b3"
          />
        </div>
      </div>
    </div>
  );
}
