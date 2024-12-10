import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";


const Pagination = ({
  activeIndex,
  totalSlides,
  goToPrevSlide,
  goToNextSlide,
}) => (
  <div className="container flex justify-between max-[768px]:flex-col m-auto mt-5 relative">
    <div className="flex items-center m-auto gap-4">
      <button onClick={goToPrevSlide} className="pagination-arrow">
        <FaArrowLeft />
      </button>
      <div className="flex items-center mx-4">
        <span>{activeIndex + 1}</span>
        <div className="progress-bar-container mx-2 w-24 bg-gray-700 h-2 rounded-full">
          <div
            className="progress-bar bg-orange-500 h-full rounded-full"
            style={{
              width: `${((activeIndex + 1) / totalSlides) * 100}%`,
            }}
          />
        </div>
        <span>{totalSlides}</span>
      </div>
      <button onClick={goToNextSlide} className="pagination-arrow">
        <FaArrowRight />
      </button>
    </div>
    <button className="text-orange-500">View More</button>
  </div>
);

export default Pagination;
