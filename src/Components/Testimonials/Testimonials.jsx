import React from 'react'
import './Testimonials.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import profilePic1 from '../../Image/profile1.jpg';
import profilePic2 from '../../Image/profile2.jpg';
import profilePic3 from '../../Image/profile3.jpg';
import profilePic4 from '../../Image/profile4.jpg';
import { Autoplay , Pagination } from 'swiper';
import 'swiper/css/pagination';
// import 'swiper/css/Navigation';
import 'swiper/css/autoplay';
import 'swiper/css';
function Testimonials() {
       const clients =[
                        {
                            img: profilePic1,
                            review: "Lkokok. If needed, you can add the text together with a tag: just add a tag name and > before lorem. If you want to generate a specific number of words, add a number after lorem, e.g. lorem5, then press Tab ",
                    },

                    {
                        img: profilePic2,
                        review: "Type lorem and press Tab. If needed, you can add the text together with a tag: just add a tag name and > before lorem. If you want to generate a specific number of words, add a number after lorem, e.g. lorem5, then press Tab ",
                },

                {
                    img: profilePic3,
                    review: "Type lorem and press Tab. If needed, you can add the text together with a tag: just add a tag name and > before lorem. If you want to generate a specific number of words, add a number after lorem, e.g. lorem5, then press Tab ",
            },

            {
                img: profilePic4,
                review: "Type lorem and press Tab. If needed, you can add the text together with a tag: just add a tag name and > before lorem. If you want to generate a specific number of words, add a number after lorem, e.g. lorem5, then press Tab ",
            },

        ]
   

  return (
    <div className="t-wrapper">
    <div className="t-heading">
        <span>Client Aways Get &nbsp;</span>
        <span>Exceptional Work</span>
        <span> From me...</span>
        <div className="blur t-blur1" style={{background: "var(--purple)"}}></div>
        <div className="blur t-blur2" style={{background: "skyblue"}}></div>
    </div>
    {/* slider */}
    
    <Swiper
    
    modules={[Pagination,Autoplay]}
    slidesPerView={1}
    // Navigation
    pagination={{clickable: true}}
    autoplay={{
      delay: 2000 ,
      disableOnInteraction: false
      
    }}
    
    >
      
      {clients.map((clients, index)=>{
        return(
          <SwiperSlide key={index}>
             <div className="testimonial">
                 
         <img src={clients.img} alt="" />
         <span>{clients.review}</span>
            </div>
        </SwiperSlide>
        )
        })}
  

    </Swiper>
    
    </div>
  )
}

export default Testimonials