// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "../../index.css";
import "./PartnersSection.module.css";

// import required modules
import { Pagination } from "swiper";

// import style and img
import style from "./PartnersSection.module.css";
import PartnersList from "../../components/PartnersList/PartnersList";

function PartnersSection() {
  return (
    <div className={style.container}>
      <h2 className={style.title}>BUSINESS PARTNERS</h2>

      <Swiper
        pagination={{
          el: "",
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <PartnersList />
        </SwiperSlide>
        <SwiperSlide>
          <PartnersList />
        </SwiperSlide>
        <SwiperSlide>
          <PartnersList />
        </SwiperSlide>
        <SwiperSlide>
          <PartnersList />
        </SwiperSlide>
      </Swiper>

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

      <ul className={style.pagination}>
        <li className={style.curPage}></li>
        <li className={style.page}></li>
        <li className={style.page}></li>
        <li className={style.page}></li>
      </ul>
    </div>
  );
}

export default PartnersSection;
