import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const HeroBottomSlider = () => {
  const images = [
    "copmpany_1.png",
    "copmpany_2.png",
    "copmpany_3.png",
    "copmpany_5.png",
    "copmpany_6.png",
    "copmpany_7.png",
    "copmpany_8.png",
    "copmpany_9.png",
    "copmpany_10.png",
  ];
  console.log(images);
  return (
    <div className="md:w-[1152px] mx-auto">
      <Swiper
        spaceBetween={50}
        slidesPerView={5}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {images.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={`/images/${item}`} alt="brand_logo" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HeroBottomSlider;
