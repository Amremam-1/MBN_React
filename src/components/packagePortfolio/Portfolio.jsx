// import { useState, useRef, useContext, useEffect } from "react"
// import { Swiper, SwiperSlide } from "swiper/react"
// import "swiper/css"
// import "swiper/css/grid"
// import useFetchData from "../../hooks/useFetchData"
// import Skeleton from "../Skeleton"
// import PortfolioHeader from "./PortfolioHeader"
// import Pagination from "./Pagination"
// import Image from "../Image"
// import { useTranslation } from "react-i18next"
// import ThemeContext from "../ThemeContext"
// import clsx from "clsx"

// const Portfolio = () => {
//   const { darkMode } = useContext(ThemeContext)
//   const { t, i18n } = useTranslation()
//   const [activeIndex, setActiveIndex] = useState(0)
//   const [selectedServiceId, setSelectedServiceId] = useState(null)
//   const swiperRef = useRef(null)

//   const handleSlideChange = (swiper) => {
//     setActiveIndex(swiper.activeIndex)
//   }

//   const goToNextSlide = () => {
//     if (swiperRef.current?.swiper) {
//       swiperRef.current.swiper.slideNext()
//     }
//   }

//   const goToPrevSlide = () => {
//     if (swiperRef.current?.swiper) {
//       swiperRef.current.swiper.slidePrev()
//     }
//   }

//   const { data, isLoading } = useFetchData("projects")
//   const { data: servicesData, isLoading: serviceLoading } =
//     useFetchData("services")

//   const projects = data?.status === "Success" ? data.data : []
//   const services = servicesData?.status === "Success" ? servicesData.data : []

//   const filteredProjects = selectedServiceId
//     ? projects.filter((project) => project.service_id === selectedServiceId)
//     : projects

//   useEffect(() => {
//     if (swiperRef.current?.swiper) {
//       swiperRef.current.swiper.update()
//     }
//   }, [filteredProjects])

//   return (
//     <div
//       id="gallery"
//       dir={i18n.language === "ar" ? "rtl" : "ltr"}
//       className={clsx(
//         "bg-darkBg text-white py-10 pt-20 px-5 relative",
//         darkMode && "bg-lightBg"
//       )}
//     >
//       <div
//         className={clsx(
//           "w-[150px] h-[150px] max-[573px]:w-[100px] absolute -top-10 left-10"
//         )}
//       >
//         <Image src={"../../../images/1.png"} alt="shape" />
//       </div>

//       <PortfolioHeader
//         services={services}
//         onServiceSelect={setSelectedServiceId}
//       />

//       {/* Swiper Container */}
//       <div className="container">
//         {isLoading || serviceLoading ? (
//           <div className="flex justify-between items-center gap-2 flex-col md:flex-row">
//             {Array(3)
//               .fill("")
//               .map((_, index) => (
//                 <Skeleton key={index} />
//               ))}
//           </div>
//         ) : filteredProjects.length > 0 ? (
//           <Swiper
//             key={selectedServiceId}
//             ref={swiperRef}
//             slidesPerView={3}
//             // grid={{ rows: 2, fill: "row" }}
//             breakpoints={{
//               1207: { slidesPerView: 3 },
//               1206: { slidesPerView: 2 },
//               768: { slidesPerView: 2 },
//               425: { slidesPerView: 1 },
//             }}
//             // loop={filteredProjects.length > 3}
//             loop={false}
//             // spaceBetween={10}
//             onSlideChange={handleSlideChange}
//           >
//             {filteredProjects.map((item) => (
//               <SwiperSlide key={item.id}>
//                 <div className="relative overflow-hidden  mt-8 rounded-lg w-[350px]">
//                   <a href={item.link} className="w-full h-full object-cover">
//                     <Image
//                       src={item.image}
//                       alt={item.en_name}
//                       className=" object-fit w-full h-full"
//                     />
//                     <div className="absolute inset-0 flex items-end justify-start">
//                       <h3 className="text-white text-xl font-bold p-4">
//                         {i18n.language === "en" ? item.en_name : item.ar_name}
//                       </h3>
//                     </div>
//                   </a>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         ) : (
//           <p className="text-center">{t("portfolio-no-projects")}</p>
//         )}
//       </div>

//       <Pagination
//         activeIndex={activeIndex}
//         totalSlides={projects.length}
//         goToPrevSlide={goToPrevSlide}
//         goToNextSlide={goToNextSlide}
//       />

//     </div>
//   )
// }

// export default Portfolio

import { useState, useContext } from "react"
import useFetchData from "../../hooks/useFetchData"
import Skeleton from "../Skeleton"
import PortfolioHeader from "./PortfolioHeader"
import Image from "../Image"
import Pagination from "./Pagination"
import { useTranslation } from "react-i18next"
import ThemeContext from "../ThemeContext"
import clsx from "clsx"

const Portfolio = () => {
  const { darkMode } = useContext(ThemeContext)
  const { t, i18n } = useTranslation()
  const [selectedServiceId, setSelectedServiceId] = useState(null)
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 6

  const { data, isLoading } = useFetchData("projects")
  const { data: servicesData, isLoading: serviceLoading } =
    useFetchData("services")

  const projects = data?.status === "Success" ? data.data : []
  const services = servicesData?.status === "Success" ? servicesData.data : []

  const filteredProjects = selectedServiceId
    ? projects.filter((project) => project.service_id === selectedServiceId)
    : projects

  // Pagination Logic
  const totalSlides = Math.ceil(filteredProjects.length / itemsPerPage)
  const paginatedProjects = filteredProjects.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  )

  const goToNextSlide = () => {
    if (currentPage < totalSlides - 1) setCurrentPage(currentPage + 1)
  }

  const goToPrevSlide = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1)
  }

  const scrollToTop = () => {
    const gallery = document.getElementById("gallery")
    if (gallery) {
      gallery.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }
  const handleServiceSelect = (serviceId) => {
    setSelectedServiceId(serviceId)
    setCurrentPage(0)
    scrollToTop()
  }

  return (
    <div
      id="gallery"
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
      className={clsx(
        "bg-darkBg text-white py-10 px-5 relative",
        darkMode && "bg-lightBg"
      )}
    >
      <PortfolioHeader
        services={services}
        onServiceSelect={handleServiceSelect}
      />

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 px-14 gap-5">
        {isLoading || serviceLoading ? (
          Array(6)
            .fill("")
            .map((_, index) => <Skeleton key={index} />)
        ) : paginatedProjects.length > 0 ? (
          paginatedProjects.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden mt-8 rounded-lg w-[350px] md:w-full mx-auto z-20"
            >
              <a href={item.link} className="w-full h-full block">
                <Image
                  src={item.image}
                  alt={item.en_name}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex items-end justify-start bg-gradient-to-t from-black">
                  <h3 className="text-white text-xl font-bold p-4">
                    {i18n.language === "en" ? item.en_name : item.ar_name}
                  </h3>
                </div>
              </a>
            </div>
          ))
        ) : (
          <p className="text-center">{t("portfolio-no-projects")}</p>
        )}
      </div>

      {/* Pagination */}
      {filteredProjects.length > itemsPerPage && (
        <Pagination
          activeIndex={currentPage}
          totalSlides={totalSlides}
          goToPrevSlide={goToPrevSlide}
          goToNextSlide={goToNextSlide}
        />
      )}
      <Image
        src={"../../../images/shape5.webp"}
        alt="star"
        className="absolute -left-5 -bottom-20 w-[387px] h-full -z-0"
      />
    </div>
  )
}

export default Portfolio
