import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { CourseTab } from "@widgets/CourseTab";

import "swiper/css";
import "./styles.scss";

interface CourseSwiperData {
  courses?: [];
}

export const CourseSwiper = () => {
  return (
    <Swiper
      className="course-swiper"
      slidesPerView={1}
      centeredSlides
      spaceBetween={60}
    >
      <SwiperSlide className="course-swiper__slide">
        <CourseTab buttonText="Записать" />
      </SwiperSlide>
      <SwiperSlide className="course-swiper__slide">
        <CourseTab buttonText="Записать" />
      </SwiperSlide>
      <SwiperSlide className="course-swiper__slide">
        <CourseTab buttonText="Записать" />
      </SwiperSlide>
      <SwiperSlide className="course-swiper__slide">
        <CourseTab buttonText="Записать" />
      </SwiperSlide>
    </Swiper>
  );
};
