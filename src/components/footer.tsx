"use client";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
export default function Footer() {
  return (
    <footer className="flex h-40 justify-center bg-white pt-12 ">
      <div>
        <div className="mb-4 w-80 text-center text-[16px] font-[600] text-[#777b80]">
          Contact Us
        </div>
        <div className="flex w-80 justify-evenly">
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
    </footer>
  );
}
