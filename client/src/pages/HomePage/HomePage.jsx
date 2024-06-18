/* eslint-disable import/no-unresolved */

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, A11y } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../scss/index.scss";
import "./HomePage.scss";

const imageFiles = ["salle1", "salle2", "salle3", "salle4", "salle5"];

const BASE_URL = import.meta.env.VITE_API_URL;
const arcadeUrl = `${BASE_URL}/arcade-picture/`;
const logoWildyGamyWg = `${BASE_URL}/logo/logo-wildy-gamy-wg.svg`;

function HomePage() {
  return (
    <>
      <section className="firstSection">
        <h1>
          Rejoignez notre communauté de joueurs passionnés et découvrez nos
          bornes d'arcade !
        </h1>
        <Link to="/catalogue">
          {" "}
          <img
            src={logoWildyGamyWg}
            alt="aller à la page catalogue"
            className="clickableLogo"
          />{" "}
        </Link>
        <h2>Cliquez pour accéder à notre catalogue de jeux</h2>
      </section>
      <section className="section2">
        <h2 className="title-section2">🕹️ Soyez borné, venez jouer ! 🕹️</h2>
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
              <img src={`${arcadeUrl}${file}.jpg`} alt={`Wildy Gamy ${file}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}

export default HomePage;
