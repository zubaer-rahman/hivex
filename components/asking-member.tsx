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
      className="h-[295px] lg:h-[480px] my-[75px] lg:my-[175px] px-10  bg-cover bg-center"
    >
      <div className="custom-container h-full">
        <div className="flex flex-col justify-center h-full ">
          <h1 className="text-[#FFF] text-lg leading-[130%] lg:text-[40px]  font-[800] w-[120px] lg:w-[300px]">
            Early <br /> Access is Limited
          </h1>

          <div className="py-[16px]">
            <BarSvg fill="#FC0" />
          </div>
          <p className="text-white text-xs leading-[128%] lg:text-[20px] mb-[16px] max-w-[844px]">
            <span className="font-bold">Only 90 founder members</span> ,As a
            thankyou we are giving founder members free lifetime membership,
            saving $6.99 per month ($69.99 per year)
          </p>
          <Link href="/">
            <Button
              variant="ghost"
              className="bg-[#9619BF] text-white text-[14px] text-sm h-[36px] lg:h-[50px]"
            >
              Become a Member
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AskingMember;
