import { useState, useRef, useContext } from "react"
import { linksPortfolio } from "../../constants"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/grid"
import useFetchData from "../../hooks/useFetchData"
import Skeleton from "../Skeleton"
import PortfolioHeader from "./PortfolioHeader"
import Pagination from "./Pagination"
import Image from "../Image"
import { useTranslation } from "react-i18next"
import ThemeContext from "../ThemeContext"
import clsx from "clsx"

const Portfolio = () => {
  const { darkMode } = useContext(ThemeContext)
  const { t, i18n } = useTranslation()
  const [activeIndex, setActiveIndex] = useState(0)
  const swiperRef = useRef(null)

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex)
  }

  const goToNextSlide = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slideNext()
    }
  }

  const goToPrevSlide = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slidePrev()
    }
  }

  const { data, isLoading } = useFetchData("projects")
  const projects = data?.status === "Success" ? data.data : []

  return (
    <div
      id="gallery"
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
      className={clsx(
        "bg-darkBg text-white py-10 pt-20 px-5 relative",
        darkMode && "bg-lightBg"
      )}
    >
      <div className="w-[150px] h-[150px] max-[573px]:w-[100px] absolute -top-10 left-10">
        <Image src={"../../../images/shape4.webp"} alt="shape" />
      </div>

      <PortfolioHeader linksPortfolio={linksPortfolio} />

      {/* Swiper Container */}
      <div className="container">
        {isLoading ? (
          <div className="flex justify-between items-center gap-2 flex-col md:flex-row">
            {Array(3)
              .fill("")
              .map((_, index) => (
                <Skeleton key={index} />
              ))}
          </div>
        ) : projects.length > 0 ? (
          <Swiper
            ref={swiperRef}
            slidesPerView={3}
            grid={{ rows: 2, fill: "row" }}
            breakpoints={{
              0: { slidesPerView: 1 },
              1206: { slidesPerView: 2 },
              1207: { slidesPerView: 3 },
            }}
            loop={projects.length > 3}
            spaceBetween={30}
            onSlideChange={handleSlideChange}
          >
            {projects.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="relative overflow-hidden border border-[#A0A0A0] mb-8 mt-8 rounded-lg w-[320px] h-[320px] m-auto max-w-full">
                  <a href={item.link}>
                    <Image
                      src={`https://filterr.net/admin/informatinal/${item.image}`}
                      alt={item.en_name}
                      className="opacity-50 w-[315px] h-[315px]"
                    />
                    <div className="absolute inset-0 flex items-end justify-start">
                      <h3 className="text-white text-xl font-bold p-4">
                        {i18n.language === "en" ? item.en_name : item.ar_name}
                      </h3>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p className="text-center">{t("portfolio-no-projects")}</p>
        )}
      </div>

      <Pagination
        activeIndex={activeIndex}
        totalSlides={projects.length}
        goToPrevSlide={goToPrevSlide}
        goToNextSlide={goToNextSlide}
      />

      <Image
        src={"../../../images/shape5.webp"}
        alt="star"
        className="absolute -left-5 -bottom-20 w-[387px] h-full"
      />
    </div>
  )
}

export default Portfolio
