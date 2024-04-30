import Image from "next/image";
import MemberShipForm from "./membership-form";
import Navbar from "./navbar";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import BarSvg from "@/components/bar-svg";

const Header = () => {
  return (
    <div className="relative h-[451px] xl:h-[882px] ">
      <video autoPlay muted loop className="h-full w-full  object-cover">
        <source src="./header-background.mp4" type="video/mp4" />
      </video>
      <div className="absolute h-full w-full z-10 top-0 px-10">
        <div className="custom-container ">
          <Navbar />
          <div className="h-[385px] xl:h-[816px] w-full flex items-center ">
            <div className="flex  justify-center xl:justify-between w-full">
              <div className="flex flex-col justify-center items-center xl:items-start xl:min-w-[579px]">
                <h1 className="text-[#FFF] text-center xl:text-start max-w-[301px] xl:max-w-[579px] text-[20px] xl:text-[50px] font-[800] xl:font-bold ">
                  Discover The Best of Sydney - Make Memories, Save Money & Win
                  Cash Prizes
                </h1>

                <div className="py-[16px]">
                  <div className="hidden xl:block">
                    <BarSvg />
                  </div>
                  <div className="xl:hidden block">
                    <BarSvg fill="#FC0" />
                  </div>
                </div>
                <p className="text-[#F2F5F7] text-center xl:text-start max-w-[302px] xl:max-w-[427px] text-xs xl:text-sm mb-[16px]">
                  Get ahead of the curve, reserve your spot and join our
                  waitlist today.
                </p>
                <Link href="/">
                  <Button
                    variant="ghost"
                    className="bg-white xl:bg-[#9619BF] text-[#101010] xl:text-white min-w-[350px] xl:w-[261px] text-xs xl:text-lg h-[36px] xl:h-[50px]"
                  >
                    Venue Expression of Interest
                    <ChevronRight className="ml-2 h-2 w-2 xl:h-4 xl:w-4" />
                  </Button>
                </Link>
                <Link href="/" className="block xl:hidden">
                  <Button
                    type="button"
                    className="bg-[#9619BF] font-[400] text-xs rounded-lg min-w-[350px] h-[36px] mt-[8px]"
                  >
                    Join Our Waitlist
                    <ChevronRight className="h-3 w-3 ml-2" />
                  </Button>
                </Link>
              </div>
              <MemberShipForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
