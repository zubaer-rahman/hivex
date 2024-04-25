import Image from "next/image";
import MemberShipForm from "./membership-form";
import Navbar from "./navbar";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import BarSvg from "@/components/bar-svg";

const Header = () => {
  return (
    <div className="relative h-[882px] ">
      <video autoPlay muted loop className="h-full w-full  object-cover">
        <source src="./header-background.mp4" type="video/mp4" />
      </video>
      <div className="absolute h-[816px] w-full z-10 top-0  px-[320px]">
        <Navbar />
        <div className="h-full w-full  flex items-center">
          <div className="flex gap-[263px] justify-between w-full">
            <div className="flex flex-col justify-center  ">
              <h1 className="text-[#FFF] text-[50px] font-bold">
                Discover The Best of Sydney - Make Memories, Save Money & Win
                Cash Prizes
              </h1>

              <div className="py-[16px]">
                <BarSvg />
              </div>
              <p className="text-white text-sm mb-[16px]">
                Get ahead of the curve, reserve your spot and join our waitlist
                today.
              </p>
              <Link href="/">
                <Button
                  variant="ghost"
                  className="bg-[#9619BF] text-white w-[261px] text-[16px] h-[50px]"
                >
                  Venue Expression of Interest
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <MemberShipForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
