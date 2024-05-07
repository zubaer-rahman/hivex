import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import BarSvg from "@/components/bar-svg";
import MembershipFormModal from "./membership-form-modal";
import MembershipForm from "./membership-form";

const Header = () => {
  return (
    <div
      style={{
        backgroundImage: `url("/header-bg.png")`,
      }}
      className="h-[451px] xl:h-[735px] bg-cover bg-no-repeat px-10 flex items-center"
    >
      {/* <video autoPlay muted loop className="h-full w-full  object-cover">
        <source src="./header-background.mp4" type="video/mp4" />
      </video> */}
      <div className="custom-container">
        <div className="w-full flex items-center ">
          <div className="flex  justify-center xl:justify-between w-full">
            <div className="flex flex-col justify-center items-center xl:items-start xl:min-w-[543px]">
              <h1 className="text-[#FFF] leading-[117%] text-center xl:text-start max-w-[543px] text-[20px] xl:text-[50px] font-[800] xl:font-semibold ">
                Discover The Best of Sydney - Make Memories, Save Money & Win
                Cash Prizes
              </h1>

              <div className="py-[16px]">
                <div className="hidden xl:block">
                  <BarSvg fill="#9619BF" />
                </div>
                <div className="xl:hidden block">
                  <BarSvg fill="#9619BF" width={34} height={10} />
                </div>
              </div>
              <p className="text-white leading-[150%] font-semibold text-center xl:text-start max-w-[543px] text-xs xl:text-[20px] mb-[16px]">
                Get ahead of the curve, reserve your spot and join our waitlist
                today.
              </p>

              <div className="block w-full xl:hidden text-center">
                <MembershipFormModal />
              </div>
            </div>
            <div className="hidden xl:block">
              <MembershipForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
