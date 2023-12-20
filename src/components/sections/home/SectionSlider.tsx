'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { image4, image5, image6 } from 'src/assets/images-slider';
import { useState, useEffect } from 'react';

import { SwiperOptions } from 'swiper/types';

import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';

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
  const viewportSize = useViewportSize();

  const swiperParams: SwiperOptions = {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    navigation: true
  };

  return (
    <div
      className="flex mx-auto overflow-hidden"
      style={{
        maxWidth: viewportSize.width,
        minHeight: 'auto',
        maxHeight: 280
      }}
    >
      <Swiper {...swiperParams} modules={[Navigation, Autoplay]}>
        <SwiperSlide>
          <div className="w-full h-full overflow-hidden">
            <Image
              src={image4}
              width={1920}
              height={1080}
              alt="image1"
              placeholder="blur"
              loading="lazy"
              style={{
                width: '100%',
                minHeight: 'auto',
                maxHeight: 280,
                objectFit: 'cover'
              }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full overflow-hidden">
            <Image
              src={image5}
              width={1920}
              height={1080}
              placeholder="blur"
              loading="lazy"
              alt="image4"
              style={{
                width: '100%',
                minHeight: 'auto',
                maxHeight: 280,
                objectFit: 'cover'
              }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full overflow-hidden">
            <Image
              src={image6}
              width={1920}
              height={1080}
              placeholder="blur"
              loading="lazy"
              alt="image4"
              style={{
                width: '100%',
                minHeight: 'auto',
                maxHeight: 280,
                objectFit: 'cover'
              }}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperCarousel;
