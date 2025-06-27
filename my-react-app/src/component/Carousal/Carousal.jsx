import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Carousal.module.css";
import LeftNavButton from "../Navbutton/Leftbutton";
import RightNavButton from "../Navbutton/Rightbutton";

function Carousel({ items, renderItem }) {
  return (
    <div className={styles.carouselWrapper}>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        spaceBetween={16}
        breakpoints={{
          320: { slidesPerView: 1.5 },
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>{renderItem(item)}</SwiperSlide>
        ))}
      </Swiper>

      {/* Custom navigation buttons */}
      <LeftNavButton className="swiper-button-prev" />
      <RightNavButton className="swiper-button-next" />
    </div>
  );
}

export default Carousel;
