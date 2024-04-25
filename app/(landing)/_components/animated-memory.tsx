"use client";
import BarSvg from "@/components/bar-svg";
import { useEffect, useState } from "react";

const AnimatedMemory = () => {
  const [reverseBg, setReverseBg] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setReverseBg((prev) => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div
      style={{ backgroundImage: `url("/bg_animated_memory.png")` }}
      className="mb-[128px]  pr-[239px] overflow-y-hidden  bg-no-repeat bg-right flex gap-[178px] h-[543px] bg-[#111]"
    >
      <div
        style={{ rotate: "-20deg" }}
        className="flex w-full gap-[50px] justify-end pr-[30px] "
      >
        <div
          className={`min-w-[383px] ${
            reverseBg ? "bg-bottom" : "bg-top"
          }   bg-no-repeat bg-cover h-full translate-y-[35px]  rounded-xl `}
          style={{
            backgroundImage: `url("/animated_g1.svg")`,
            transition: "ease-in-out 5s",
          }}
        />
        <div
          className={`min-w-[383px] ${
            reverseBg ? "bg-top" : "bg-bottom"
          } bg-no-repeat bg-cover h-full translate-y-[-40px] rounded-xl `}
          style={{
            backgroundImage: `url("/animated_g2.svg")`,
            transition: "ease-in-out 5s",
          }}
        />
      </div>
      <div className="flex flex-col justify-center max-w-[529px] min-w-[529px] ">
        <h1 className="text-[#FFF] text-[48px] ">
          Spend your time with the greatest activities, food festivals, venues
          and nature
        </h1>

        <div className="py-[16px]">
          <BarSvg fill="#9619BF" />
        </div>
        <p className="text-[#F2F5F7] text-[20px] mb-[16px] ">
          HiveX provides the best support for their members, to know more
          explore HiveX
        </p>
      </div>
    </div>
  );
};

export default AnimatedMemory;
