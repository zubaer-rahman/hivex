"use client";
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
      <div className="mb-[80px] lg:mb-[180px] overflow-y-hidden  flex justify-between gap-[35px] xl:gap-[178px] h-[265px]  xl:h-[543px] max-w-[390px] xl:max-w-[1920px] mx-auto pr-[15px] xl:pr-[139px] 2xl:pr-[239px]">
        <div className="flex min-h-[350px] translate-y-[-40px]  xl:min-h-[900px] xl:translate-y-[-150px] rotate-[-15deg] xl:rotate-[-20deg] w-full gap-[50px] justify-end pr-[30px] ">
          <div
            className={`min-w-[383px] hidden 2xl:block ${
              reverseBg ? "bg-bottom" : "bg-top"
            }   bg-no-repeat bg-cover h-full   rounded-xl `}
            style={{
              backgroundImage: `url("/animated_g1.svg")`,
              transition: "ease-in-out 5s",
            }}
          />
          <div
            className={`min-w-[135px] xl:min-w-[383px] ${
              reverseBg ? "bg-top" : "bg-bottom"
            } bg-no-repeat bg-cover h-full    rounded-xl `}
            style={{
              backgroundImage: `url("/animated_g2.svg")`,
              transition: "ease-in-out 5s",
            }}
          />
        </div>
        <div className="flex flex-col justify-center max-w-[342px] xl:max-w-[469px]  2xl:max-w-[669px] ">
          <p className="text-[#F2F5F7] text-sm xl:text-[32px] mb-[16px] font-semibold  leading-[128%]">
            <b className="font-extrabold">Hive<span className="text-[#FC0F]">X</span></b> finds the best experiences in Sydney. We negotiate discounts
            for our members and send you curated ideas for new, better and
            different ways to spend your free time and explore the city.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnimatedMemory;
