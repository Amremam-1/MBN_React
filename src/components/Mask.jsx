"use client"
import React, { useContext } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/autoplay"
import { mask } from "../constants"
import Image from "./Image"
import { register } from "swiper/element/bundle"
import ThemeContext from "./ThemeContext"
import clsx from "clsx"

// Register the modules
register()

const Mask = () => {
  const { darkMode } = useContext(ThemeContext)
  return (
    <section className={clsx("bg-[#3e2d20] py-6", darkMode && "bg-grayText/80")}>
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
              className="relative w-[160px] h-[160px]
             border border-gray-400 rounded-full flex
              justify-center items-center dark:bg-white dark:border-orangeText"
            >
              <Image
                src={item.imageUrl}
                alt={item.id}
                className="w-full h-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Mask
