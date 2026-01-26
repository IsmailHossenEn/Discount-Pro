import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const BannerSlider = () => {
  return (
    <div className="w-full h-75 md:h-112.5 lg:h-137.5 relative">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="w-full h-full"
      >
        <SwiperSlide>
          <img src="/banner.webp" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/banner2.webp" className="w-full  h-full  object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/banner3.webp" className="w-full  h-full  object-cover" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSlider;
