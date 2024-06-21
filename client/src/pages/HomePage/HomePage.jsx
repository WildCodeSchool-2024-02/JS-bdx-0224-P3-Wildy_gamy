/* eslint-disable import/no-unresolved */

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, A11y } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../scss/index.scss";
import "./HomePage.scss";

import salle1 from "../../assets/images/arcade-picture/salle1.jpg";
import salle2 from "../../assets/images/arcade-picture/salle2.jpg";
import salle3 from "../../assets/images/arcade-picture/salle3.jpg";
import salle4 from "../../assets/images/arcade-picture/salle4.jpg";
import salle5 from "../../assets/images/arcade-picture/salle5.jpg";

import logoWildyGamyWg from "../../assets/images/logo/logo-wildy-gamy-wg.svg";

const imageFiles = [salle1, salle2, salle3, salle4, salle5];

function HomePage() {
  return (
    <>
      <h1>
        Rejoignez notre communauté de joueurs passionnés et découvrez nos bornes
        d'arcade !
      </h1>
      <Link to="/catalogue" className="logo-link">
        {" "}
        <img
          src={logoWildyGamyWg}
          alt="aller à la page catalogue"
          className="clickableLogo"
        />{" "}
      </Link>
      <h2>Cliquez pour accéder à notre catalogue de jeux</h2>
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
            <img src={file} alt={`Wildy Gamy ${file}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default HomePage;
