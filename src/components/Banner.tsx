import Image from 'next/image';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Banner() {
  return (
    <Swiper loop spaceBetween={10} modules={[Autoplay]} autoplay={{ delay: 1800, disableOnInteraction: false }}>
      <SwiperSlide>
        <Image width="680px" height="380px" src="/tmp/banner2.png" alt="banner" />
      </SwiperSlide>
      <SwiperSlide>
        <Image width="680px" height="380px" src="/tmp/banner2.png" alt="banner" />
      </SwiperSlide>
      <SwiperSlide>
        <Image width="680px" height="380px" src="/tmp/banner2.png" alt="banner" />
      </SwiperSlide>
    </Swiper>
  );
}

export default Banner;
