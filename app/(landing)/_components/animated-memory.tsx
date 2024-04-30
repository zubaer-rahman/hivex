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
      className=" bg-[#111] bg-no-repeat  bg-right "
    >
      <div className="mb-[128px] overflow-y-hidden  flex justify-between gap-[35px] xl:gap-[178px] h-[265px]  xl:h-[543px] max-w-[390px] xl:max-w-[1922px] mx-auto pr-[15px] xl:pr-[139px] 2xl:pr-[239px]">
        <div
           className="flex rotate-[-15deg] xl:rotate-[-20deg] w-full gap-[50px] justify-end pr-[30px] "
        >
          <div
            className={` min-w-[383px] hidden 2xl:block ${
              reverseBg ? "bg-bottom" : "bg-top"
            }   bg-no-repeat bg-cover h-full translate-y-[35px]  rounded-xl `}
            style={{
              backgroundImage: `url("/animated_g1.svg")`,
              transition: "ease-in-out 5s",
            }}
          />
          <div
            className={`min-w-[135px] xl:min-w-[383px] ${
              reverseBg ? "bg-top" : "bg-bottom"
            } bg-no-repeat bg-cover h-full  xl:translate-y-[-40px] rounded-xl `}
            style={{
              backgroundImage: `url("/animated_g2.svg")`,
              transition: "ease-in-out 5s",
            }}
          />
        </div>
        <div className="flex flex-col justify-center max-w-[142px]  xl:max-w-[529px] ">
          <h1 className="text-[#FFF] leading-[128%] w-[123px] xl:w-[529px] text-sm font-bold xl:text-[48px] xl:font-normal ">
            Spend your time with the greatest activities, food festivals, venues
            and nature
          </h1>

          <div className="py-[16px]">
            <BarSvg fill="#9619BF" />
          </div>
          <p className="text-[#F2F5F7] text-[10px] xl:text-[20px] mb-[16px] ">
            HiveX provides the best support for their members, to know more
            explore HiveX
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnimatedMemory;
