/* eslint-disable import/no-unresolved */

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Homeslider.scss";

import { Autoplay, Pagination, Navigation, A11y } from "swiper/modules";

import arcade1 from "../../assets/images/arcade-picture/arcade-room1.jpg";
import arcade2 from "../../assets/images/arcade-picture/arcade-room2.jpg";
import arcade3 from "../../assets/images/arcade-picture/arcade-room3.jpg";
import arcade4 from "../../assets/images/arcade-picture/arcade-room4.jpg";
import arcade5 from "../../assets/images/arcade-picture/arcade-room5.jpg";

function HomeSlider() {
  //   const [images, setImages] = useState([]);

  //   useEffect(() => {
  //     fetch("http://localhost:3310/api/images")
  //       .then((response) => response.json())
  //       .then((data) => setImages(data))
  //       .catch((error) => console.error("Error fetching images:", error));
  //   }, []);

  return (
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
      {" "}
      {/* {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt={`slide ${index}`} />
        </SwiperSlide>
      ))} */}
      <SwiperSlide>
        <img src={arcade1} alt="salle d'arcade 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={arcade2} alt="salle d'arcade 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={arcade3} alt="salle d'arcade 3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={arcade4} alt="salle d'arcade 4" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={arcade5} alt="salle d'arcade 5" />
      </SwiperSlide>
    </Swiper>
  );
}

export default HomeSlider;
