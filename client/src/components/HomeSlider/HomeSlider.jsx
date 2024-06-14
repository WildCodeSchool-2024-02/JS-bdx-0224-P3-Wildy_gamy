/* eslint-disable import/no-unresolved */

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Homeslider.scss";

import { Autoplay, Pagination, Navigation, A11y } from "swiper/modules";

const baseUrl = "http://localhost:3310/arcade-picture/";

const imageFiles = [
  "arcade-room1.jpg",
  "arcade-room2.jpg",
  "arcade-room3.jpg",
  "arcade-room4.jpg",
  "arcade-room5.jpg",
];

function HomeSlider() {
  return (
    <>
      <h2>🕹️ Soyez borné, venez jouer ! 🕹️</h2>
      <Swiper
        spaceBetween={0}
        centeredSlides
        speed={1500}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          draggable: true,
        }}
        navigation
        modules={[Autoplay, Pagination, Navigation, A11y]}
        className="mySwiper"
      >
        {imageFiles.map((file) => (
          <SwiperSlide key={file}>
            <img src={`${baseUrl}${file}`} alt={`salle d'arcade ${file}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default HomeSlider;
