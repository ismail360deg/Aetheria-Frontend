import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
        subHeading={"From 11.00 am - 10.00 pm"}
        heading={"Order Online"}
      ></SectionTitle>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} />
          <h1 className="text-3xl uppercase text-center -mt-20 text-white drop-shadow-md  pb-12">
            SALAD
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} />
          <h1 className="text-3xl uppercase text-center -mt-20 text-white drop-shadow-mdpb-12">
            PIZZA
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} />
          <h1 className="text-3xl uppercase text-center -mt-20 text-white drop-shadow-md pb-12">
            SOUP
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} />
          <h1 className="text-3xl uppercase text-center -mt-20 text-white drop-shadow-md pb-12">
            desert
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} />
          <h1 className="text-3xl uppercase text-center -mt-20 text-white drop-shadow-md pb-12">
            burger
          </h1>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
