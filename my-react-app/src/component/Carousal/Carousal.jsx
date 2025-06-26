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
      {/* Custom Navigation Buttons */}
      <LeftNavButton className="swiper-button-prev" />
      <RightNavButton className="swiper-button-next" />

      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        spaceBetween={24}
        initialSlide={0}
        allowTouchMove
        breakpoints={{
          320: { slidesPerView: 2 },
          480: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
          1280: { slidesPerView: 7 },
        }}
        className={styles.swiper}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            {renderItem(item)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
