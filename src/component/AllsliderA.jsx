
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "../style/Alltest.css"

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

import "./styles.css";


// import Swiper core and required modules
import SwiperCore, {
  Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination]);


export default function AllsliderA({img1,img2,img3,img4,img5,img6,img7,img8,img9}) {
  
  
  
  return (
    <div className="slider__all">
    <Swiper slidesPerView={4} spaceBetween={30} centeredSlides={true} pagination={{
  "clickable": true
}} className="mySwiper">
              <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
              <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
              <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
              <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
              <SwiperSlide><img src={img5} alt="" /></SwiperSlide>
              <SwiperSlide><img src={img6} alt="" /></SwiperSlide>
              <SwiperSlide><img src={img7} alt="" /></SwiperSlide>
              <SwiperSlide><img src={img8} alt="" /></SwiperSlide>
              <SwiperSlide><img src={img9} alt="" /></SwiperSlide>
  </Swiper>
    </div>
  )
}