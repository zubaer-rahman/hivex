"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import Image from "next/image";

const slides = [
  {
    image: "/slide1.png",
    description:
      "Sydney Festival: An annual arts and cultural festival featuring theater, music, dance, and visual arts held throughout January in Sydney.",
  },
  {
    image: "/slide2.png",
    description:
      "Blue Mountains National Park: Explore this UNESCO World Heritage-listed wilderness area, known for its dramatic cliffs, waterfalls, and eucalyptus forests.",
  },
  {
    image: "/slide3.png",
    description:
      "Quay (Sydney): Overlooking Sydney Harbour, Quay is known for its contemporary Australian cuisine and stunning views.",
  },
  {
    image: "/slide4.png",
    description:
      "Australia is known for its strong cricket culture. The Australian cricket team competes in various international tournaments and series.",
  },
];

export const SpotCarousel = () => {
  return (
    <>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="rounded-lg max-h-[308px]  "
      >
        {slides.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div>
                <Image
                  src={slide.image}
                  height={308}
                  width={728}
                  alt="slide image"
                  className="w-full h-[150px] md:h-[308px]"
                />
                <div
                  className=" h-full w-full absolute top-0 left-0 z-40 "
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 43.87%, rgba(0, 0, 0, 0.65) 83.14%)",
                  }}
                />
                <p className="absolute text-xs md:text-lg leading-[128%] z-50 text-white left-[30px] right-[28px] bottom-[20px]">
                  {slide.description}
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
