import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import img_1 from "../../../assets/images/slider-image-1.jpeg";
import img_2 from "../../../assets/images/slider-image-2.jpeg";
import img_3 from "../../../assets/images/slider-image-3.jpeg";

function MainSlider() {
  return (
    <Swiper
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      loop={true}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
      style={{
        width: "100%",
        height: "400px",
      }}
    >
      <SwiperSlide>
        <img
          src={img_1}
          alt="Slider 1"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={img_2}
          alt="Slider 2"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={img_3}
          alt="Slider 3"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default MainSlider;
