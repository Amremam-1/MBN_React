"use client"
import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/autoplay"
import { mask } from "../constants"
import Image from "./Image"
import { register } from "swiper/element/bundle"

// Register the modules
register()

const Mask = () => {
  return (
    <section className="bg-[#3e2d20] py-6">
      <Swiper
        spaceBetween={30}
        slidesPerView={5}
        autoplay={{
          delay: 3000,
        }}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 3, // Show 1 slide
          },

          768: {
            slidesPerView: 3, // Show 3 slides
          },
          991: {
            slidesPerView: 5, // Show 3 slides
          },
        }}
      >
        {mask.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative w-full  max-w-[160px] border border-gray-400 rounded-full flex justify-center items-center">
              <Image
                src={item.imageUrl}
                alt={item.id}
                className="w-full h-full object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Mask
