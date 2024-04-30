import BarSvg from "@/components/bar-svg";
import { SpotCarousel } from "./spot-carousel";

const SecureSpot = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/bg_secure-spot.svg')",
      }}
      className=" bg-no-repeat "
    >
      <div className="custom-container px-[320px]">
        <div className="flex flex-col items-center mb-[64px]">
          <h1 className="text-[#9619BF] text-[64px] font-bold ">Sneak Peak!</h1>

          <div className="py-[16px]">
            <BarSvg fill="#9619BF" />
          </div>
          <p className="text-[#93849A] text-[20px]">
            Securing Your Spot: You&apos;re Next on Our Waitlist! with offering
            -
          </p>
        </div>
        <div className="grid grid-cols-10 gap-4 h-[580px]">
          <div className=" col-span-6 grid gap-4 bg-white   rounded-md ">
            <div
              style={{
                backgroundImage: "url('/kings_park.png')",
              }}
              className="relative col-span-3 bg-white p-3 rounded-lg h-[255px]   bg-no-repeat bg-cover"
            >
              <p className="absolute text-white text-lg bottom-[20px] left-[29px]">
                The best new ideas for free time.
              </p>
            </div>
            <div
              style={{
                backgroundImage: "url('/marathon.png')",
              }}
              className="relative  col-span-3  bg-white p-3  h-[255px] rounded-lg bg-no-repeat bg-cover"
            >
              <p className="absolute text-white text-lg bottom-[20px] left-[29px]">
                Inspiration to share.{" "}
              </p>
            </div>

            <div className="col-span-6  bg-white rounded-lg">
              <SpotCarousel />
            </div>
          </div>
          <div
            style={{
              backgroundImage: "url('/friends.png')",
            }}
            className="col-span-4 bg-[#9619BF] p-6 bg-bottom bg-no-repeat  rounded-lg "
          >
            <h1 className="text-[#FFF] text-[32px] font-bold w-[443px] ">
              Unmatched discounts exclusive to{" "}
              <span className="text-[#FC0]">HiveX</span> members
            </h1>

            <div className="py-[16px]">
              <BarSvg fill="#FC0" />
            </div>
            <p className="text-white text-[16px] ">
              HiveX provides the best support for their members, to know more
              explore HiveX
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecureSpot;
