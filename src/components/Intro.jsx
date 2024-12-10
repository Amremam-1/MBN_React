import React from "react"
import { FaPlay } from "react-icons/fa"
import { MdArrowOutward } from "react-icons/md"
import Image from "./Image"
import GlobeCanvas from "./Globe"

const Intro = () => {
  return (
    <section id="home" className="container bg-main py-16">
      <div className="flex justify-between w-11/12">
        <div className="relative">
          <div className="relative max-w-fit">
            <Image
              src={"../../images/starbg.webp"}
              alt="starbg"
              className="absolute -right-0 -top-6 w-[40px] h-[40px]"
            />
            <h1 className="text-7xl max-xl:text-6xl max-lg:text-5xl  max-md:text-4xl max-sm:text-3xl text-orange-500 text-unlock">
              Technical & marketing <br />
              services
              <span
                className="cursor-pointer ms-8 border border-orange-500 rounded-3xl w-80 h-14 max-md:w-48 max-sm:w-40 max-md:h-11 max-[375px]:ms-0
            bg-[url('../../images/bgvideo.webp')] bg-cover bg-center inline-flex items-center mt-8"
              >
                <p className="w-9 h-9 ms-4 rounded-full bg-orange-500 flex items-center justify-center">
                  <FaPlay className="text-white text-xl" />
                </p>
              </span>
            </h1>
          </div>

          <div className="relative max-w-fit">
            <Image
              src={"../../images/starbg.webp"}
              alt="starbg"
              className="absolute left-28 w-[30px] h-[30px]"
            />
            <p className="w-2/3 pt-11 text-base font-normal gray-dark max-md:w-full">
              We offer cutting-edge technical and marketing services through our
              skilled teams across Saudi Arabia, Egypt, China, and Malaysia
              aiming to deliver the latest innovations to meet your needs.
            </p>
          </div>

          <div className="mt-8 w-fit rounded-full border border-orange-500 py-4 px-6 flex items-center justify-between gap-4 cursor-pointer">
            <button className="text-xl orange font-medium">
              Lets get Started
            </button>
            <span className="w-6 h-6 flex items-center justify-center rounded-md -rotate-12 bg-orange-500">
              <MdArrowOutward className="text-xl text-black" />
            </span>
          </div>
        </div>

        <div className="text-center m-auto relative max-sm:hidden">
          {/* <Image
            src={"../../images/shape1.webp"}
            alt="shape1"
            className="max-md:hidden"
          /> */}
          <div className="w-[200px] h-[200px] object-fit">
            <GlobeCanvas />
          </div>
          <Image
            src={"../../images/starbg.webp"}
            alt="star"
            className="absolute left-0 -bottom-11 w-[30px] h-[30px]"
          />
        </div>
      </div>
    </section>
  )
}

export default Intro
