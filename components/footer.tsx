import Link from "next/link";
import Logo from "./logo";
import BarSvg from "./bar-svg";
import { Input } from "./ui/input";
import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0C0C0C] px-10">
      <div className="custom-container">
        <div className=" py-[65px]  ">
          <div className="lg:flex  lg:justify-between">
            <div>
              <Link href="/">
                <Logo />
              </Link>
              <div className="my-[16px]">
                <BarSvg />
              </div>
              <p className="text-[#93849A] text-xs lg:text-[16px] mb-[8px]">
                Join our HiveX for regular updates. No spam ever.
              </p>
              <div className="flex gap-[8px] items-center">
                <Input
                  type="text"
                  placeholder="Email"
                  className="w-[326px] h-[36px] lg:h-[50px] rounded-lg text-[#93849A] text-[14px] font-medium"
                />
                <Button className="bg-[#9619BF] h-[36px] lg:h-[50px] text-[14px]">
                  Subscribe
                  <ChevronRight className="ml-2 h-4 w-4 text-white" />
                </Button>
              </div>
            </div>
            <div className="flex gap-[16px] my-4 lg:my-0 h-fit">
              <a
                target="_blank"
                href="/"
                className="border hover:border-[#9619BF] rounded-full "
              >
                <Image
                  src="/facebook.svg"
                  alt="facebook"
                  width={31}
                  height={31}
                />
              </a>
              <a
                target="_blank"
                href="/"
                className="border hover:border-[#9619BF] rounded-full "
              >
                <Image
                  src="/instagram.svg"
                  alt="facebook"
                  width={31}
                  height={31}
                />
              </a>
              <a
                target="_blank"
                href="/"
                className="border hover:border-[#9619BF] rounded-full "
              >
                <Image
                  src="/youtube.svg"
                  alt="facebook"
                  width={31}
                  height={31}
                />
              </a>
              <a
                target="_blank"
                href="/"
                className="border hover:border-[#9619BF] rounded-full "
              >
                <Image
                  src="/twitterx.svg"
                  alt="facebook"
                  width={31}
                  height={31}
                />
              </a>
            </div>
          </div>

          <hr className="my-[32px] h-[2px] bg-[#93849A] " />
          <div className="flex justify-between text-xs text-white">
            <span className=" ">
              Copyright © {new Date().getFullYear()}{" "}
              <a target="_blank" href="/" className="hover:underline">
                HiveX
              </a>
              UI SAS.
            </span>
            <span className="">
              <a target="_blank" href="/" className="hover:underline ">
                Privacy
              </a>
              <a
                target="_blank"
                href="/"
                className="hover:underline  ml-[32px]"
              >
                Terms
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
