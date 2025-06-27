import React, { useState, useEffect } from 'react';
import { useSwiper } from 'swiper/react';
import RightArrow from '../../../assets/leftArrow.svg';
import styles from './carousalright.module.css';

const CarouselLeftNavigation = () => {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

  useEffect(() => {
    const handleSlideChange = () => {
      setIsBeginning(swiper.isBeginning);
    };

    swiper.on("slideChange", handleSlideChange);

    // Clean up the listener when the component unmounts
    return () => {
      swiper.off("slideChange", handleSlideChange);
    };
  }, [swiper]);

  return (
    <div className={styles.leftNavigation}>
      {!isBeginning && (
        <img
          src={RightArrow}
          alt="Left arrow"
          className={styles.arrow}
          onClick={() => swiper.slidePrev()}
        />
      )}
    </div>
  );
};

export default CarouselLeftNavigation;
