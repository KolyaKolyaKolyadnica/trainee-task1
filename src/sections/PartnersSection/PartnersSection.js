import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper";

// import style and img
import style from "./PartnersSection.module.css";
import PartnersList from "../../components/PartnersList/PartnersList";

function PartnersSection() {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <h2 className={style.title}>BUSINESS PARTNERS</h2>

        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>

          <div>1</div>
        </Swiper>

        {/*
         <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>

        <span>d</span>
        </Swiper> 
        */}

        {/* Partners */}
        {/* <ul className={style.list}>
  <li className={style.listItem}>
    <div className={style.imgContainer}>
      <img src={westin} alt="Westin" className={style.image} />
    </div>
  </li>
  <li className={style.listItem}>
    <div className={style.imgContainer}>
      <img src={summit} alt="Summit" className={style.image} />
    </div>
  </li>
  <li className={style.listItem}>
    <div className={style.imgContainer}>
      <img src={holcim} alt="Holcim" className={style.image} />
    </div>
  </li>
  <li className={style.listItem}>
    <div className={style.imgContainer}>
      <img src={etv} alt="ETV" className={style.image} />
    </div>
  </li>
</ul> */}

        {/* Pagination */}
        {/* <ul className={style.pagination}>
  <li className={style.curPage}></li>
  <li className={style.page}></li>
  <li className={style.page}></li>
  <li className={style.page}></li>
</ul> */}
      </div>
    </div>
  );
}

export default PartnersSection;
