import { url } from "inspector";
import BarSvg from "./bar-svg";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const AskingMember = () => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(90deg, #000 0%, rgba(0, 0, 0, 0.00) 100%), url('/bg_asking_member.png')",
      }}
      className="h-[295px] lg:h-[480px] my-[80px] lg:my-[180px] px-10  bg-cover bg-center"
    >
      <div className="custom-container h-full">
        <div className="flex flex-col justify-center h-full ">
          <h1 className="text-[#FFF] text-lg leading-[130%] lg:text-[32px]  font-[800] w-[120px] lg:w-[437px]">
            Early Access is Limited to Just 90 Members !
          </h1>

          <div className="py-[16px]">
            <BarSvg fill="white" />
          </div>
          <p className="text-white leading-[130%] font-[600] text-xs lg:text-[20px] mb-[16px] max-w-[477px]">
          As a thank you we are giving our founder members  
              <span className="text-[#FC0] font-[800]"> Lifetime Membership </span> for free, worth >$70 per year.
          </p>
          
             <div className="flex gap-4">
             <Button
              variant="ghost"
              className="bg-[#9619BF] text-white text-[14px] text-sm h-[36px] lg:h-[50px]"
            >
              Become a Member
             </Button>
             <Button className="bg-white  text-black  w-[200px] font-semibold p-0 xl:w-[200px] text-xs xl:text-sm h-[36px] xl:h-[50px]">
          I’m an Interested Business
        </Button>
             </div>
         </div>
      </div>
    </div>
  );
};

export default AskingMember;
