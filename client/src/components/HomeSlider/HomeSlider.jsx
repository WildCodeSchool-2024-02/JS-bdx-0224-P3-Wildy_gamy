/* eslint-disable import/no-unresolved */

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Homeslider.scss";

import { Autoplay, Pagination, Navigation, A11y } from "swiper/modules";

const BASE_URL = import.meta.env.VITE_API_URL;
const arcadeUrl = `${BASE_URL}/arcade-picture/`;

const imageFiles = ["salle1", "salle2", "salle3", "salle4", "salle5"];

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
            <img src={`${arcadeUrl}${file}`} alt={`Wildy Gamy ${file}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default HomeSlider;
