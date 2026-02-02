import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import img1 from "../assets/restro_img/the-restro-1.jpg";
import img2 from "../assets/restro_img/the-restro-2.jpg";
import img3 from "../assets/restro_img/the-restro-3.jpg";
import img4 from "../assets/restro_img/the-restro-4.jpg";
import img5 from "../assets/restro_img/the-restro-5.jpg";
import img6 from "../assets/restro_img/the-restro-6.jpg";
import img7 from "../assets/restro_img/the-restro-7.jpg";

function ImageSlider() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 2500 }}
      pagination={{ clickable: true }}
      loop={true}
      slidesPerView={1}
      className="image-slider"
    >
      <SwiperSlide><img src={img1} alt="Dish 1" /></SwiperSlide>
      <SwiperSlide><img src={img2} alt="Dish 2" /></SwiperSlide>
      <SwiperSlide><img src={img3} alt="Dish 3" /></SwiperSlide>
      <SwiperSlide><img src={img4} alt="Dish 4" /></SwiperSlide>
      <SwiperSlide><img src={img5} alt="Dish 5" /></SwiperSlide>
      <SwiperSlide><img src={img6} alt="Dish 6" /></SwiperSlide>
      <SwiperSlide><img src={img7} alt="Dish 7" /></SwiperSlide>
    </Swiper>
  );
}

export default ImageSlider;
