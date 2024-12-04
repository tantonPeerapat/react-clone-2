import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import image from "../assets/Image1.png";

const SliderImage = () => {
  const slides = [
    { id: 1, img: image },
    { id: 2, img: image },
    { id: 3, img: image },
    { id: 4, img: image },
    { id: 5, img: image },
    { id: 6, img: image },
    { id: 7, img: image },
    { id: 8, img: image },
  ];

  return (
    <div className="bg-black overflow-hidden">
      <div className="swiper-wrapper">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          breakpoints={{
            768: {
              slidesPerView: 4, // 4 slides for medium screens
            },
            1024: {
              slidesPerView: 6, // 6 slides for larger screens
            },
          }}
        >
          {slides.map((item) => (
            <SwiperSlide key={item.id}>
              <img
                className="w-[156px] sm:w-[187px] h-[156px] sm:h-[187px] rounded-md"
                src={item.img}
                alt={`Slide ${item.id}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SliderImage;
