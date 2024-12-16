import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/autoplay"
import { mask } from "../constants"

import { register } from "swiper/element/bundle" // Import register function for Swiper modules
import Image from "./Image"

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
            <div
              className="relative w-full aspect-square 
            max-w-[90px] flex justify-center items-center border rounded-full"
            >
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
