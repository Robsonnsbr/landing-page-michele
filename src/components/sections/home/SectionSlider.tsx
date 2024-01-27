'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { image4, image5, image6 } from 'public/assets/images-slider';
import { useState, useEffect } from 'react';
import './style/slider.css';

import { SwiperOptions } from 'swiper/types';

import Image from 'next/image';

const useViewportSize = () => {
  const [viewportSize, setViewportSize] = useState({ width: 0 });

  useEffect(() => {
    if (document && document.body) {
      setViewportSize({
        width: document.body.clientWidth
      });

      const handleResize = () => {
        setViewportSize({
          width: document.body.clientWidth
        });
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return viewportSize;
};

const SwiperCarousel = () => {
  const viewPortSize = useViewportSize().width;
  const [isMouseOver, setIsMouseOver] = useState(false);

  const swiperParams: SwiperOptions = {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    speed: 2300
  };
  return (
    <div
      className={`class-container-swiper`}
      style={{
        maxWidth: viewPortSize
      }}
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
      onClick={() => setIsMouseOver(true)}
    >
      <Swiper {...swiperParams} modules={[Navigation, Autoplay]}>
        <div
          className={`transition-transform ease-in-out duration-300 ${
            isMouseOver ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <button className="swiper-button-next" />
          <button className="swiper-button-prev" />
        </div>
        <SwiperSlide>
          <div className="class-container-slider-image">
            <Image
              src={image4}
              width={1920}
              height={1080}
              alt="image1"
              placeholder="blur"
              priority
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="class-container-slider-image">
            <Image
              src={image5}
              width={1920}
              height={1080}
              placeholder="blur"
              priority
              alt="image4"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="class-container-slider-image">
            <Image
              src={image6}
              width={1920}
              height={1080}
              placeholder="blur"
              priority
              alt="image4"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperCarousel;
