import React from 'react'
import './Portfolio.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import sidebar from '../../Image/sidebar.png';
import ecommerce from '../../Image/ecommerce.png';
import hoc from '../../Image/hoc.png';
import musicapp from '../../Image/musicapp.png';
import 'swiper/css';


function Portfolio() {
  return (
    <div className="portfolio">

      {/* heading */}
      <span>Recent Project </span> 
      <span>Portfolio</span>

       {/* slider */}

       <Swiper
       spaceBetween={1}
       slidesPerView={3}
       grabCursor={true}
       className='portfolio-slider'

       >
          <SwiperSlide>
            <img src={sidebar} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={ecommerce} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={hoc} alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={musicapp} alt="" />
          </SwiperSlide>
          
       </Swiper>

    </div>
  )
}

export default Portfolio;